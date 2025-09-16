// kickhub-admin/middleware.ts - Admin-specific middleware
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  // Admin authentication check
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!, // Service role for admin access
    { /* admin-specific config */ }
  )

  const { data: { user } } = await supabase.auth.getUser()
  
  // Check admin role - MUST be 'admin' or 'super_admin'
  if (!user || !['admin', 'super_admin'].includes(user.user_metadata?.role)) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  // Log admin access for audit trail
  await logAdminAccess(user.id, request.nextUrl.pathname)
  
  return NextResponse.next()
}

async function logAdminAccess(userId: string, pathname: string) {
  // Log admin access for audit trail
  console.log(`Admin access: User ${userId} accessed ${pathname} at ${new Date().toISOString()}`)
  // TODO: Implement proper audit logging in Phase 7
}

export const config = {
  matcher: ['/((?!login|api/auth).*)']
}
