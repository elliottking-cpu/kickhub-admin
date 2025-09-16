import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "System Monitoring - KickHub Admin",
  description: "Real-time system monitoring and health dashboard",
};

export default function SystemMonitoring() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">System Monitoring Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Real-time system health, server status, and infrastructure monitoring
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">System monitoring dashboard will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
