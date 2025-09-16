import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Theme Generation - KickHub Admin",
  description: "AI-powered seasonal theme creation and management",
};

export default function AIThemeGeneration() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Seasonal Theme Generator</h1>
        <p className="text-gray-600 mt-2">
          Generate seasonal themes, visual assets, and content using AI for quarterly updates
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">AI theme generation interface will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
