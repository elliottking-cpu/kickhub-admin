import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sales Configuration - KickHub Admin",
  description: "Configure sales settings, pricing, and revenue parameters",
};

export default function SalesConfiguration() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Sales Configuration Interface</h1>
        <p className="text-gray-600 mt-2">
          Configure sales settings, pricing strategies, markup rates, and revenue parameters
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Sales configuration interface will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
