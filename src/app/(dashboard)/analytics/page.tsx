import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics Dashboard - KickHub Admin",
  description: "System-wide analytics and performance metrics",
};

export default function AnalyticsDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
        <p className="text-gray-600 mt-2">
          System-wide analytics, usage metrics, and performance monitoring
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Analytics dashboard will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
