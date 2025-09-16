import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Season Management - KickHub Admin",
  description: "Manage football seasons and seasonal configurations",
};

export default function SeasonsManagement() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Season Management</h1>
        <p className="text-gray-600 mt-2">
          Manage football seasons, quarterly themes, and seasonal configurations
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Season management functionality will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
