// kickhub-admin/app/(dashboard)/layout.tsx - Admin dashboard layout
export default function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar />
      <main className="flex-1 overflow-y-auto">
        <AdminHeader />
        <div className="p-6">{children}</div>
      </main>
    </div>
  )
}