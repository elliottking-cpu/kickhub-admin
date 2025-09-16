/**
 * Stripe Admin Configuration
 * 
 * This file configures Stripe for admin operations including
 * payment management, subscription oversight, and financial reporting.
 */

import Stripe from 'stripe'

// Initialize Stripe with secret key (admin operations)
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('Missing STRIPE_SECRET_KEY environment variable')
}

export const stripeAdmin = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-06-20',
  typescript: true,
})

// Admin-specific Stripe operations

/**
 * Get payment overview for admin dashboard
 */
export async function getPaymentOverview(options?: {
  startDate?: string
  endDate?: string
  limit?: number
}) {
  try {
    const params: Stripe.PaymentIntentListParams = {
      limit: options?.limit || 100,
      created: {
        ...(options?.startDate && { gte: Math.floor(new Date(options.startDate).getTime() / 1000) }),
        ...(options?.endDate && { lte: Math.floor(new Date(options.endDate).getTime() / 1000) }),
      },
    }

    const paymentIntents = await stripeAdmin.paymentIntents.list(params)
    
    const successful = paymentIntents.data.filter(pi => pi.status === 'succeeded')
    const totalRevenue = successful.reduce((sum, pi) => sum + pi.amount, 0) / 100 // Convert from cents
    const totalTransactions = successful.length
    
    return {
      totalRevenue,
      totalTransactions,
      currency: 'gbp',
      recentPayments: paymentIntents.data.slice(0, 10).map(pi => ({
        id: pi.id,
        amount: pi.amount / 100,
        currency: pi.currency,
        status: pi.status,
        created: new Date(pi.created * 1000).toISOString(),
        customerEmail: pi.receipt_email,
        description: pi.description,
      }))
    }
  } catch (error) {
    console.error('Error fetching payment overview:', error)
    throw error
  }
}

/**
 * Get subscription overview for admin dashboard
 */
export async function getSubscriptionOverview() {
  try {
    const subscriptions = await stripeAdmin.subscriptions.list({
      limit: 100,
      status: 'all',
      expand: ['data.customer']
    })
    
    const active = subscriptions.data.filter(sub => sub.status === 'active')
    const pastDue = subscriptions.data.filter(sub => sub.status === 'past_due')
    const cancelled = subscriptions.data.filter(sub => sub.status === 'canceled')
    
    const monthlyRevenue = active.reduce((sum, sub) => {
      const priceAmount = sub.items.data[0]?.price?.unit_amount || 0
      return sum + (priceAmount / 100) // Convert from cents
    }, 0)
    
    return {
      totalActive: active.length,
      totalPastDue: pastDue.length,
      totalCancelled: cancelled.length,
      monthlyRevenue,
      currency: 'gbp',
      recentSubscriptions: subscriptions.data.slice(0, 10).map(sub => ({
        id: sub.id,
        status: sub.status,
        customerEmail: typeof sub.customer === 'object' ? sub.customer?.email : null,
        currentPeriodEnd: new Date(sub.current_period_end * 1000).toISOString(),
        amount: (sub.items.data[0]?.price?.unit_amount || 0) / 100,
        currency: sub.currency,
      }))
    }
  } catch (error) {
    console.error('Error fetching subscription overview:', error)
    throw error
  }
}

/**
 * Get customer details for admin view
 */
export async function getCustomerDetails(customerId: string) {
  try {
    const customer = await stripeAdmin.customers.retrieve(customerId, {
      expand: ['subscriptions', 'sources']
    })
    
    const paymentIntents = await stripeAdmin.paymentIntents.list({
      customer: customerId,
      limit: 20
    })
    
    return {
      customer,
      recentPayments: paymentIntents.data.map(pi => ({
        id: pi.id,
        amount: pi.amount / 100,
        currency: pi.currency,
        status: pi.status,
        created: new Date(pi.created * 1000).toISOString(),
        description: pi.description,
      }))
    }
  } catch (error) {
    console.error('Error fetching customer details:', error)
    throw error
  }
}

/**
 * Process refund for admin
 */
export async function processRefund(paymentIntentId: string, amount?: number, reason?: string) {
  try {
    const refund = await stripeAdmin.refunds.create({
      payment_intent: paymentIntentId,
      amount: amount ? Math.round(amount * 100) : undefined, // Convert to cents
      reason: reason as Stripe.RefundCreateParams.Reason || 'requested_by_customer',
      metadata: {
        processed_by: 'admin_panel',
        processed_at: new Date().toISOString()
      }
    })
    
    return {
      id: refund.id,
      amount: refund.amount / 100,
      currency: refund.currency,
      status: refund.status,
      reason: refund.reason,
      created: new Date(refund.created * 1000).toISOString()
    }
  } catch (error) {
    console.error('Error processing refund:', error)
    throw error
  }
}

/**
 * Cancel subscription for admin
 */
export async function cancelSubscription(subscriptionId: string, cancelAtPeriodEnd: boolean = true) {
  try {
    const subscription = await stripeAdmin.subscriptions.update(subscriptionId, {
      cancel_at_period_end: cancelAtPeriodEnd,
      metadata: {
        cancelled_by: 'admin_panel',
        cancelled_at: new Date().toISOString()
      }
    })
    
    return {
      id: subscription.id,
      status: subscription.status,
      cancelAtPeriodEnd: subscription.cancel_at_period_end,
      currentPeriodEnd: new Date(subscription.current_period_end * 1000).toISOString()
    }
  } catch (error) {
    console.error('Error cancelling subscription:', error)
    throw error
  }
}

/**
 * Get financial report data
 */
export async function getFinancialReport(period: '7d' | '30d' | '90d' | '1y') {
  try {
    const now = new Date()
    const startDate = new Date()
    
    switch (period) {
      case '7d':
        startDate.setDate(now.getDate() - 7)
        break
      case '30d':
        startDate.setDate(now.getDate() - 30)
        break
      case '90d':
        startDate.setDate(now.getDate() - 90)
        break
      case '1y':
        startDate.setFullYear(now.getFullYear() - 1)
        break
    }
    
    const [paymentIntents, subscriptions, refunds] = await Promise.all([
      stripeAdmin.paymentIntents.list({
        created: {
          gte: Math.floor(startDate.getTime() / 1000),
          lte: Math.floor(now.getTime() / 1000)
        },
        limit: 1000
      }),
      stripeAdmin.subscriptions.list({
        created: {
          gte: Math.floor(startDate.getTime() / 1000),
          lte: Math.floor(now.getTime() / 1000)
        },
        limit: 1000
      }),
      stripeAdmin.refunds.list({
        created: {
          gte: Math.floor(startDate.getTime() / 1000),
          lte: Math.floor(now.getTime() / 1000)
        },
        limit: 1000
      })
    ])
    
    const successfulPayments = paymentIntents.data.filter(pi => pi.status === 'succeeded')
    const totalRevenue = successfulPayments.reduce((sum, pi) => sum + pi.amount, 0) / 100
    const totalRefunds = refunds.data.reduce((sum, refund) => sum + refund.amount, 0) / 100
    const netRevenue = totalRevenue - totalRefunds
    
    const activeSubscriptions = subscriptions.data.filter(sub => sub.status === 'active')
    const monthlyRecurringRevenue = activeSubscriptions.reduce((sum, sub) => {
      const amount = sub.items.data[0]?.price?.unit_amount || 0
      return sum + (amount / 100)
    }, 0)
    
    return {
      period,
      totalRevenue,
      totalRefunds,
      netRevenue,
      monthlyRecurringRevenue,
      totalTransactions: successfulPayments.length,
      newSubscriptions: subscriptions.data.length,
      activeSubscriptions: activeSubscriptions.length,
      currency: 'gbp'
    }
  } catch (error) {
    console.error('Error generating financial report:', error)
    throw error
  }
}

/**
 * Check Stripe webhook endpoint health
 */
export async function checkWebhookHealth() {
  try {
    const webhookEndpoints = await stripeAdmin.webhookEndpoints.list({
      limit: 10
    })
    
    return webhookEndpoints.data.map(endpoint => ({
      id: endpoint.id,
      url: endpoint.url,
      status: endpoint.status,
      enabledEvents: endpoint.enabled_events,
      created: new Date(endpoint.created * 1000).toISOString()
    }))
  } catch (error) {
    console.error('Error checking webhook health:', error)
    throw error
  }
}
