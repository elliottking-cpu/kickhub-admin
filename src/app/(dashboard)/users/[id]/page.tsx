import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Details - KickHub Admin",
  description: "Detailed view and management of individual user accounts",
};

export default function UserDetails() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">User Account Details</h1>
        <p className="text-gray-600 mt-2">
          Detailed view and management of individual user account, activity, and settings
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Individual user details interface will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
