import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Season Details - KickHub Admin",
  description: "Manage individual season details and configurations",
};

export default function SeasonDetails() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Season Details</h1>
        <p className="text-gray-600 mt-2">
          Manage individual season settings, themes, and player progression
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Season details functionality will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
