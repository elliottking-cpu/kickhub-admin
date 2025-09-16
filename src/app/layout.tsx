// kickhub-admin/app/layout.tsx - Admin root layout
export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AdminProvider>
          <div className="min-h-screen">
            {children}
          </div>
        </AdminProvider>
      </body>
    </html>
  )
}