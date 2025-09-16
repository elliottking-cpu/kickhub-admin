import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Account Management - KickHub Admin",
  description: "Comprehensive user account management and oversight",
};

export default function UserAccountManagement() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">User Account Management</h1>
        <p className="text-gray-600 mt-2">
          Manage user accounts, permissions, subscriptions, and account health across all roles
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">User account management interface will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
