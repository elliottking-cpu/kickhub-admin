import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Achievement Management - KickHub Admin",
  description: "Manage achievement templates and badge system",
};

export default function AchievementManagement() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Achievement Management</h1>
        <p className="text-gray-600 mt-2">
          Manage achievement templates, badges, rewards, and progression milestones
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Achievement management functionality will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
