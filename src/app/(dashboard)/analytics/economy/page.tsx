import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Economy Analytics - KickHub Admin",
  description: "Currency economy health and spending analytics",
};

export default function EconomyAnalytics() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Currency Economy Health</h1>
        <p className="text-gray-600 mt-2">
          Monitor currency flow, inflation, player spending patterns, and economy balance
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Economy analytics will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
