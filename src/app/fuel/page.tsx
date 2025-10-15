"use client";

import { useState, useEffect } from "react";

// Define the type for fuelData
interface FuelPrice {
  type: string;
  rate: number;
  withTax: number;
}

interface FuelData {
  fuelType: string;
  prices: FuelPrice[];
}

export default function FuelService() {
  const [fuelData, setFuelData] = useState<FuelData | null>(null);

  useEffect(() => {
    // Fetch the fuel prices dynamically
    const fetchFuelPrices = async () => {
      try {
        const res = await fetch("/api/fuel-prices");
        const data: FuelData = await res.json();
        setFuelData(data);
      } catch (error) {
        console.error("Error fetching fuel prices:", error);
      }
    };

    fetchFuelPrices();
  }, []);

  if (!fuelData) {
    return <div>Loading fuel prices...</div>;
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-sky-900 mb-8">
          Fuel Service
        </h1>

        {/* Phillips 66 Image */}
        <div className="mb-8 flex justify-center">
          <img
            src="/images/Phillips66~mv2.avif"
            alt="Phillips 66"
            className="w-48 h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Fuel Pricing */}
        <div className="bg-white rounded-xl shadow-lg p-6 border border-sky-100">
          <h2 className="text-2xl font-semibold text-sky-700 mb-4">
            {fuelData.fuelType}
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-700 border-collapse">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="py-2 px-4">Type</th>
                  <th className="py-2 px-4">Rate</th>
                  <th className="py-2 px-4">With Tax</th>
                </tr>
              </thead>
              <tbody>
                {fuelData.prices.map((price, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-2 px-4">{price.type}</td>
                    <td className="py-2 px-4">${price.rate.toFixed(2)}</td>
                    <td className="py-2 px-4">${price.withTax.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}