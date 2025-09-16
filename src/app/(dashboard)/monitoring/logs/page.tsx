import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Logs - KickHub Admin",
  description: "View and analyze system logs and error reports",
};

export default function SystemLogs() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">System Logs</h1>
        <p className="text-gray-600 mt-2">
          View, search, and analyze system logs, errors, and debug information
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">System logs interface will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
