import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Currency Events - KickHub Admin",
  description: "Manage special currency events and bonus periods",
};

export default function CurrencyEvents() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Currency Events</h1>
        <p className="text-gray-600 mt-2">
          Create and manage special currency events, bonuses, and promotional periods
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border p-6">
        <p className="text-gray-600">Currency events management will be implemented in Phase 7.</p>
      </div>
    </div>
  );
}
