import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create New Season - KickHub Admin",
  description: "Create a new football season with themes and configurations",
};

export default function CreateSeason() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create New Season</h1>
        <p className="text-gray-600 mt-2">
          Set up a new football season with themes, currency rates, and configurations
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Season creation functionality will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
