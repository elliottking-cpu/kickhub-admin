import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details - KickHub Admin",
  description: "Manage individual product details and configurations",
};

export default function ProductDetails() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Product Details</h1>
        <p className="text-gray-600 mt-2">
          Manage individual product settings, pricing, inventory, and availability
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Product details management will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
