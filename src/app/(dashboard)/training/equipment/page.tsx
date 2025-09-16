import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equipment Catalog - KickHub Admin",
  description: "Manage training equipment catalog and requirements",
};

export default function TrainingEquipment() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Equipment Catalog</h1>
        <p className="text-gray-600 mt-2">
          Manage training equipment catalog, pricing, and drill requirements
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Equipment catalog management will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
