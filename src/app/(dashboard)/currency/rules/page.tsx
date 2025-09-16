import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Earning Rules - KickHub Admin",
  description: "Configure currency earning rates and rules",
};

export default function CurrencyRules() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Currency Earning Rules</h1>
        <p className="text-gray-600 mt-2">
          Configure earning rates for match performance, training, and achievements
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Currency rules configuration will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
