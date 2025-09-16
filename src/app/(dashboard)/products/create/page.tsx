import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Create Product - KickHub Admin",
  description: "Create new marketplace products and set pricing",
};

export default function CreateProduct() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Create New Product</h1>
        <p className="text-gray-600 mt-2">
          Add new products to the marketplace with pricing, descriptions, and categories
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Product creation functionality will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
