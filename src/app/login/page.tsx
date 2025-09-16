import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KickHub Admin - Authentication",
  description: "Admin authentication system for KickHub",
};

export default function AdminAuthPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">Admin Authentication</h1>
          <p className="text-gray-600 mt-2">Secure admin login system</p>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">Admin authentication functionality will be implemented in authentication phase.</p>
        </div>
      </div>
    </div>
  );
}
