import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Management - KickHub Admin",
  description: "Manage platform content, announcements, and educational materials",
};

export default function ContentManagement() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Content Management System</h1>
        <p className="text-gray-600 mt-2">
          Manage platform content, training materials, announcements, and educational resources
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Content management system will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
