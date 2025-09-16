import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "User Reports & Moderation - KickHub Admin",
  description: "User reports management and content moderation system",
};

export default function UserReportsModeration() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">User Reports & Moderation</h1>
        <p className="text-gray-600 mt-2">
          Manage user reports, content moderation, and community safety measures
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">User reports and moderation system will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
