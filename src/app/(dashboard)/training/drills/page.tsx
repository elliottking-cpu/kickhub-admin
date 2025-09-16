import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Training Drills Library - KickHub Admin",
  description: "Manage training drill library and equipment requirements",
};

export default function TrainingDrills() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Training Drills Library</h1>
        <p className="text-gray-600 mt-2">
          Manage drill library, difficulty levels, and equipment requirements
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Training drills management will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
