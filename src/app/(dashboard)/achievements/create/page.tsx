import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Achievement - KickHub Admin",
  description: "Create new achievement templates and badge rewards",
};

export default function CreateAchievement() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create Achievement Template</h1>
        <p className="text-gray-600 mt-2">
          Design new achievements, set requirements, and configure reward systems
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Achievement creation functionality will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
