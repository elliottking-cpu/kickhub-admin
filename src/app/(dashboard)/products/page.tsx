import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Catalog Management - KickHub Admin",
  description: "Manage marketplace products, kits, and equipment",
};

export default function ProductManagement() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Product Catalog Management</h1>
        <p className="text-gray-600 mt-2">
          Manage marketplace products, kit designs, equipment, and merchandise
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Product catalog management will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
