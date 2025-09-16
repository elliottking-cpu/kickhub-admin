import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Content Generation - KickHub Admin",
  description: "AI-powered content generation dashboard and controls",
};

export default function AIGenerationDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">AI Content Generation Dashboard</h1>
        <p className="text-gray-600 mt-2">
          AI-powered content generation for characters, themes, assets, and seasonal content
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">AI content generation dashboard will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
