/**
 * Supabase Admin Configuration
 * 
 * This file configures the Supabase client specifically for admin operations
 * with elevated permissions for system administration.
 */

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!

if (!supabaseUrl || !supabaseServiceRoleKey) {
  throw new Error(
    'Missing Supabase environment variables for admin client. Please check your .env.local file.'
  )
}

/**
 * Supabase admin client with service role key
 * 
 * This client has elevated permissions and can:
 * - Bypass Row Level Security (RLS) policies
 * - Perform administrative operations
 * - Access all data across tenants
 * - Manage user accounts and permissions
 * 
 * ⚠️ WARNING: This client should only be used server-side in the admin panel
 * Never expose the service role key to client-side code!
 */
export const supabaseAdmin = createClient(
  supabaseUrl,
  supabaseServiceRoleKey,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)

// Admin-specific database operations

/**
 * Get all users with admin privileges
 */
export async function getAllUsers(filters?: {
  limit?: number
  offset?: number
  searchTerm?: string
  role?: string
  status?: 'active' | 'inactive'
}) {
  try {
    let query = supabaseAdmin
      .from('users')
      .select('*')
    
    if (filters?.searchTerm) {
      query = query.or(`first_name.ilike.%${filters.searchTerm}%,last_name.ilike.%${filters.searchTerm}%,email.ilike.%${filters.searchTerm}%`)
    }
    
    if (filters?.role) {
      query = query.contains('roles', [filters.role])
    }
    
    if (filters?.status) {
      query = query.eq('is_active', filters.status === 'active')
    }
    
    if (filters?.limit) {
      query = query.limit(filters.limit)
    }
    
    if (filters?.offset) {
      query = query.range(filters.offset, filters.offset + (filters.limit || 50) - 1)
    }
    
    const { data, error, count } = await query.order('created_at', { ascending: false })
    
    if (error) throw error
    
    return { users: data, totalCount: count }
  } catch (error) {
    console.error('Error fetching users:', error)
    throw error
  }
}

/**
 * Get system-wide statistics
 */
export async function getSystemStats() {
  try {
    const [usersResult, teamsResult, matchesResult, paymentsResult] = await Promise.all([
      supabaseAdmin.from('users').select('*', { count: 'exact', head: true }),
      supabaseAdmin.from('teams').select('*', { count: 'exact', head: true }),
      supabaseAdmin.from('matches').select('*', { count: 'exact', head: true }),
      supabaseAdmin.from('payments').select('amount').eq('status', 'completed')
    ])
    
    const totalRevenue = paymentsResult.data?.reduce((sum, payment) => sum + payment.amount, 0) || 0
    
    return {
      totalUsers: usersResult.count || 0,
      totalTeams: teamsResult.count || 0,
      totalMatches: matchesResult.count || 0,
      totalRevenue,
      currency: 'GBP'
    }
  } catch (error) {
    console.error('Error fetching system stats:', error)
    throw error
  }
}

/**
 * Create or update user with admin privileges
 */
export async function adminCreateOrUpdateUser(userData: {
  id?: string
  email: string
  firstName: string
  lastName: string
  roles: string[]
  isActive?: boolean
  metadata?: Record<string, any>
}) {
  try {
    if (userData.id) {
      // Update existing user
      const { data, error } = await supabaseAdmin
        .from('users')
        .update({
          first_name: userData.firstName,
          last_name: userData.lastName,
          roles: userData.roles,
          is_active: userData.isActive ?? true,
          metadata: userData.metadata,
          updated_at: new Date().toISOString()
        })
        .eq('id', userData.id)
        .select()
        .single()
      
      if (error) throw error
      return data
    } else {
      // Create new user
      const { data, error } = await supabaseAdmin.auth.admin.createUser({
        email: userData.email,
        email_confirm: true,
        user_metadata: {
          first_name: userData.firstName,
          last_name: userData.lastName,
          roles: userData.roles,
          created_by_admin: true
        }
      })
      
      if (error) throw error
      return data.user
    }
  } catch (error) {
    console.error('Error creating/updating user:', error)
    throw error
  }
}

/**
 * Delete user with admin privileges
 */
export async function adminDeleteUser(userId: string) {
  try {
    // First, anonymize user data instead of hard delete (GDPR compliance)
    const { error: updateError } = await supabaseAdmin
      .from('users')
      .update({
        email: `deleted-${userId}@kickhub.local`,
        first_name: 'Deleted',
        last_name: 'User',
        is_active: false,
        deleted_at: new Date().toISOString(),
        metadata: { deleted: true }
      })
      .eq('id', userId)
    
    if (updateError) throw updateError
    
    // Then delete from auth (this will cascade to user table if properly configured)
    const { error: authError } = await supabaseAdmin.auth.admin.deleteUser(userId)
    
    if (authError) {
      console.error('Error deleting from auth (user data preserved):', authError)
    }
    
    return { success: true }
  } catch (error) {
    console.error('Error deleting user:', error)
    throw error
  }
}

/**
 * Get recent system activity
 */
export async function getRecentActivity(limit: number = 50) {
  try {
    // This would query an audit log table when implemented
    // For now, return a placeholder
    const activities = [
      {
        id: '1',
        type: 'user_registered',
        description: 'New user registered',
        userId: 'user-123',
        metadata: { email: 'coach@example.com' },
        createdAt: new Date(Date.now() - 2 * 60 * 60 * 1000).toISOString() // 2 hours ago
      },
      {
        id: '2',
        type: 'team_created',
        description: 'New team created',
        userId: 'user-456',
        metadata: { teamName: 'Brighton Juniors U12' },
        createdAt: new Date(Date.now() - 4 * 60 * 60 * 1000).toISOString() // 4 hours ago
      },
      {
        id: '3',
        type: 'payment_processed',
        description: 'Payment processed successfully',
        userId: 'user-789',
        metadata: { amount: 29.99, currency: 'GBP' },
        createdAt: new Date(Date.now() - 6 * 60 * 60 * 1000).toISOString() // 6 hours ago
      }
    ]
    
    return activities.slice(0, limit)
  } catch (error) {
    console.error('Error fetching recent activity:', error)
    throw error
  }
}

/**
 * Check admin panel health
 */
export async function checkSystemHealth() {
  try {
    const startTime = Date.now()
    
    // Test database connection
    const { error: dbError } = await supabaseAdmin
      .from('users')
      .select('count', { count: 'exact', head: true })
      .limit(1)
    
    const dbLatency = Date.now() - startTime
    
    return {
      database: {
        status: dbError ? 'error' : 'healthy',
        latency: dbLatency,
        error: dbError?.message
      },
      timestamp: new Date().toISOString()
    }
  } catch (error) {
    console.error('Error checking system health:', error)
    return {
      database: {
        status: 'error',
        latency: 0,
        error: 'Unable to connect'
      },
      timestamp: new Date().toISOString()
    }
  }
}
