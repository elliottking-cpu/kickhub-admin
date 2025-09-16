/**
 * Admin Panel Type Definitions
 * 
 * This file contains TypeScript interfaces and types specific
 * to the KickHub admin panel and system administration.
 */

// ===== SYSTEM OVERVIEW TYPES =====

/**
 * System statistics for admin dashboard
 */
export interface SystemStats {
  totalUsers: number
  totalTeams: number
  totalMatches: number
  totalRevenue: number
  currency: string
  activeSubscriptions: number
  pendingSupport: number
  systemHealth: 'healthy' | 'warning' | 'error'
  lastUpdated: string
}

/**
 * System health check results
 */
export interface SystemHealth {
  database: {
    status: 'healthy' | 'warning' | 'error'
    latency: number
    error?: string
  }
  storage: {
    status: 'healthy' | 'warning' | 'error'
    usage: number
    limit: number
    error?: string
  }
  apis: {
    stripe: {
      status: 'healthy' | 'warning' | 'error'
      latency: number
      error?: string
    }
    email: {
      status: 'healthy' | 'warning' | 'error'
      error?: string
    }
  }
  timestamp: string
}

// ===== USER MANAGEMENT TYPES =====

/**
 * Admin view of user with extended information
 */
export interface AdminUser {
  id: string
  email: string
  firstName: string
  lastName: string
  roles: string[]
  isActive: boolean
  emailVerified: boolean
  phoneVerified: boolean
  lastLogin?: string
  createdAt: string
  updatedAt: string
  metadata?: Record<string, any>
  
  // Statistics
  teamsCreated: number
  playersManaged: number
  totalSpent: number
  
  // Flags
  isSuspended: boolean
  suspensionReason?: string
  requiresAttention: boolean
}

/**
 * User creation/update form data for admin
 */
export interface AdminUserForm {
  email: string
  firstName: string
  lastName: string
  phone?: string
  roles: string[]
  isActive: boolean
  sendWelcomeEmail: boolean
  temporaryPassword?: string
  metadata?: Record<string, any>
}

/**
 * User search and filter options
 */
export interface UserFilters {
  searchTerm?: string
  role?: string
  status?: 'active' | 'inactive' | 'suspended'
  emailVerified?: boolean
  dateRegisteredFrom?: string
  dateRegisteredTo?: string
  lastLoginFrom?: string
  lastLoginTo?: string
  sortBy?: 'created_at' | 'last_login' | 'email' | 'name'
  sortOrder?: 'asc' | 'desc'
  page: number
  limit: number
}

// ===== TEAM OVERSIGHT TYPES =====

/**
 * Admin view of team with extended information
 */
export interface AdminTeam {
  id: string
  name: string
  ageGroup: string
  league: string
  season: string
  coachId: string
  coachName: string
  coachEmail: string
  playerCount: number
  parentCount: number
  isActive: boolean
  createdAt: string
  updatedAt: string
  
  // Financial information
  subscriptionStatus: 'active' | 'inactive' | 'past_due' | 'cancelled'
  totalRevenue: number
  outstandingBalance: number
  
  // Activity metrics
  matchesPlayed: number
  trainingSessionsHeld: number
  lastActivity: string
  
  // Flags
  requiresAttention: boolean
  moderationFlags: string[]
}

// ===== CONTENT MANAGEMENT TYPES =====

/**
 * Season configuration for admin
 */
export interface SeasonConfig {
  id: string
  name: string
  startDate: string
  endDate: string
  isActive: boolean
  
  // Age group configurations
  ageGroups: {
    name: string
    minAge: number
    maxAge: number
    matchDuration: number
    playerCount: number
    formations: string[]
  }[]
  
  // Gamification settings
  gamification: {
    theme: string
    seasonalItems: string[]
    achievements: string[]
    currencyMultiplier: number
  }
  
  // Training content
  trainingLibrary: {
    sessionCount: number
    categories: string[]
    equipmentTypes: string[]
  }
}

/**
 * Training session template for admin
 */
export interface TrainingTemplate {
  id: string
  title: string
  description: string
  ageGroups: string[]
  duration: number
  category: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  
  activities: {
    id: string
    name: string
    duration: number
    description: string
    equipmentRequired: string[]
    category: 'warm_up' | 'technical' | 'tactical' | 'physical' | 'cool_down'
  }[]
  
  equipmentRequired: string[]
  learningObjectives: string[]
  isPublic: boolean
  createdBy: string
  createdAt: string
  updatedAt: string
}

// ===== FINANCIAL MANAGEMENT TYPES =====

/**
 * Financial overview for admin dashboard
 */
export interface FinancialOverview {
  totalRevenue: number
  monthlyRecurringRevenue: number
  totalRefunds: number
  netRevenue: number
  currency: string
  
  // Subscription metrics
  activeSubscriptions: number
  newSubscriptions: number
  churnedSubscriptions: number
  pastDueSubscriptions: number
  
  // Payment metrics
  successfulPayments: number
  failedPayments: number
  averageTransactionValue: number
  
  // Time period
  period: string
  startDate: string
  endDate: string
}

/**
 * Payment details for admin view
 */
export interface AdminPayment {
  id: string
  amount: number
  currency: string
  status: 'pending' | 'processing' | 'succeeded' | 'failed' | 'cancelled' | 'refunded'
  type: 'subscription' | 'one_time' | 'equipment' | 'tournament' | 'other'
  
  // Customer information
  customerId: string
  customerEmail: string
  customerName: string
  
  // Transaction details
  stripePaymentIntentId?: string
  description: string
  receiptUrl?: string
  
  // Timestamps
  createdAt: string
  paidAt?: string
  refundedAt?: string
  
  // Metadata
  teamId?: string
  teamName?: string
  metadata?: Record<string, any>
}

// ===== ANALYTICS TYPES =====

/**
 * Usage analytics for admin dashboard
 */
export interface UsageAnalytics {
  // User engagement
  dailyActiveUsers: number
  weeklyActiveUsers: number
  monthlyActiveUsers: number
  averageSessionDuration: number
  
  // Feature usage
  matchesRecorded: number
  trainingsPlanned: number
  messagesExchanged: number
  paymentsProcessed: number
  
  // Growth metrics
  newRegistrations: number
  teamCreations: number
  playerInvitations: number
  
  // Time period
  period: string
  startDate: string
  endDate: string
}

/**
 * Performance metrics for monitoring
 */
export interface PerformanceMetrics {
  // Response times
  averageApiResponseTime: number
  averagePageLoadTime: number
  databaseQueryTime: number
  
  // Error rates
  errorRate: number
  criticalErrors: number
  warnings: number
  
  // System resources
  cpuUsage: number
  memoryUsage: number
  storageUsage: number
  
  // Availability
  uptime: number
  downtimeEvents: number
  
  timestamp: string
}

// ===== SUPPORT TYPES =====

/**
 * Support ticket for admin view
 */
export interface AdminSupportTicket {
  id: string
  ticketNumber: string
  subject: string
  description: string
  status: 'open' | 'in_progress' | 'waiting_for_customer' | 'resolved' | 'closed'
  priority: 'low' | 'normal' | 'high' | 'urgent'
  category: 'technical' | 'billing' | 'feature_request' | 'bug_report' | 'other'
  
  // Customer information
  customerId: string
  customerEmail: string
  customerName: string
  
  // Assignment
  assignedTo?: string
  assignedAt?: string
  
  // Timestamps
  createdAt: string
  updatedAt: string
  resolvedAt?: string
  
  // Additional data
  attachments: string[]
  tags: string[]
  internalNotes?: string
  customerSatisfactionRating?: number
}

// ===== AI CONTENT GENERATION TYPES =====

/**
 * AI content generation request
 */
export interface AIContentRequest {
  type: 'training_session' | 'seasonal_content' | 'achievement' | 'report'
  parameters: {
    ageGroup?: string
    duration?: number
    theme?: string
    difficulty?: string
    equipment?: string[]
    [key: string]: any
  }
  generatedBy: string
  createdAt: string
}

/**
 * AI content generation result
 */
export interface AIContentResult {
  id: string
  requestId: string
  type: string
  content: Record<string, any>
  status: 'generating' | 'completed' | 'failed'
  error?: string
  generatedAt?: string
  approvedBy?: string
  approvedAt?: string
}

// ===== SYSTEM CONFIGURATION TYPES =====

/**
 * System settings for admin panel
 */
export interface SystemSettings {
  // General settings
  siteName: string
  siteDescription: string
  supportEmail: string
  maintenanceMode: boolean
  maintenanceMessage?: string
  
  // Feature flags
  features: {
    videoStreaming: boolean
    aiContentGeneration: boolean
    advancedAnalytics: boolean
    customReports: boolean
    multiLanguage: boolean
  }
  
  // Security settings
  security: {
    passwordMinLength: number
    requireEmailVerification: boolean
    sessionTimeout: number
    maxLoginAttempts: number
    twoFactorRequired: boolean
  }
  
  // Payment settings
  payments: {
    currency: string
    taxRate: number
    processingFee: number
    refundPolicy: string
  }
  
  // Email settings
  email: {
    fromAddress: string
    fromName: string
    replyToAddress: string
  }
  
  updatedBy: string
  updatedAt: string
}

// ===== ACTIVITY LOG TYPES =====

/**
 * System activity log entry
 */
export interface ActivityLogEntry {
  id: string
  type: 'user_action' | 'system_event' | 'admin_action' | 'error' | 'security'
  action: string
  description: string
  
  // Actor information
  userId?: string
  userEmail?: string
  ipAddress: string
  userAgent: string
  
  // Context
  resourceType?: string
  resourceId?: string
  metadata?: Record<string, any>
  
  // Result
  success: boolean
  error?: string
  
  timestamp: string
}

// ===== EXPORT UTILITY TYPES =====

export type AdminRole = 'super_admin' | 'admin' | 'moderator' | 'support'

export type SystemStatus = 'healthy' | 'warning' | 'error' | 'maintenance'

export type AdminPermission = 
  | 'users:read'
  | 'users:write'
  | 'users:delete'
  | 'teams:read'
  | 'teams:write'
  | 'teams:delete'
  | 'finances:read'
  | 'finances:write'
  | 'content:read'
  | 'content:write'
  | 'content:delete'
  | 'system:read'
  | 'system:write'
  | 'support:read'
  | 'support:write'

export interface AdminSession {
  id: string
  email: string
  role: AdminRole
  permissions: AdminPermission[]
  lastActivity: string
  expiresAt: string
}
