import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Analytics - KickHub Admin",
  description: "Monitor currency economy health and player spending patterns",
};

export default function CurrencyAnalytics() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Currency Analytics</h1>
        <p className="text-gray-600 mt-2">
          Monitor economy health, inflation, and player spending patterns
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Currency analytics will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
