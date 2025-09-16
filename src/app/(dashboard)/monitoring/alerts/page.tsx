import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alert Management - KickHub Admin",
  description: "Manage system alerts and notification rules",
};

export default function AlertManagement() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Alert Management</h1>
        <p className="text-gray-600 mt-2">
          Configure system alerts, notification thresholds, and escalation procedures
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Alert management system will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
