"use client";

import React, { useEffect, useState } from "react";

// Aircraft data
const aircraftList = [
  {
    tailNumber: "N16127",
    name: "Cessna 152",
    type: "Cessna 150",
    comms: "TKM Comm/Nav radio, 4096 encoding altimeter, 2 place panel mounted intercom.",
    emptyWeight: "1096.42 lbs",
    maxWeight: "1670 lbs",
    image: "/images/aircraft/127150.jpg",
  },
  {
    tailNumber: "N5961G",
    name: "Cessna 152",
    type: "Cessna 150",
    comms: "TKM Comm/Nav radio, 4096 encoding altimeter, 2 place panel mounted intercom.",
    emptyWeight: "1105.40 lbs",
    maxWeight: "1670 lbs",
    image: "/images/aircraft/961G152.jpg",
  },
  {
    tailNumber: "N94400",
    name: "Cessna 152",
    type: "Cessna 150",
    comms: "TKM Comm/Nav radio, 4096 encoding altimeter, 2 place panel mounted intercom.",
    emptyWeight: "1171.26 lbs",
    maxWeight: "1670 lbs",
    image: "/images/aircraft/N94400.jpg",
  },
  {
    tailNumber: "N739BX",
    name: "Cessna 172",
    type: "Cessna 172",
    comms: "Dual King KX155 Comm/Nav radios, 4096 encoding altimeter, 4 place panel mounted intercom.",
    emptyWeight: "1446.70 lbs",
    maxWeight: "2330 lbs",
    image: "/images/aircraft/BX172.jpg",
  },
  {
    tailNumber: "N7644G",
    name: "Cessna 172",
    type: "Cessna 172",
    comms: "Dual King KX155 Comm/Nav radios, 4096 encoding altimeter, 4 place panel mounted intercom.",
    emptyWeight: "1420.27 lbs",
    maxWeight: "2330 lbs",
    image: "/images/aircraft/644G.jpg",
  },
  {
    tailNumber: "N1845V",
    name: "Cessna 172",
    type: "Cessna 172",
    comms: "Dual King KX155 Comm/Nav radios, 4096 encoding altimeter, 4 place panel mounted intercom.",
    emptyWeight: "1448.86 lbs",
    maxWeight: "2330 lbs",
    image: "/images/aircraft/N1845V.jpg",
  },

];

export default function RentalRates() {
  const [pricing, setPricing] = useState<Record<string, { memberPrice: string; transientPrice: string }> | null>(null);

  useEffect(() => {
    // Fetch the rental prices dynamically
    const fetchRentalPrices = async () => {
      try {
        const res = await fetch("/api/rental-prices");
        const data = await res.json();
        setPricing(data);
      } catch (error) {
        console.error("Error fetching rental prices:", error);
      }
    };

    fetchRentalPrices();
  }, []);

  if (!pricing) {
    return <div>Loading rental prices...</div>;
  }

  // Group aircraft by type
  const groupedAircraft = aircraftList.reduce((groups, plane) => {
    if (!groups[plane.type]) {
      groups[plane.type] = [];
    }
    groups[plane.type].push(plane);
    return groups;
  }, {} as Record<string, typeof aircraftList>);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-900 mb-10">
          Skypark Rental and Training Aircraft
        </h2>

        {/* Render sections for each aircraft type */}
        {Object.entries(groupedAircraft).map(([type, planes]) => (
          <div key={type} className="mb-12">
            {/* Centered Section Title */}
            <h3 className="text-2xl font-bold text-sky-900 text-center mb-6">
              {type}
            </h3>

            {/* Aircraft Cards */}
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {planes.map((plane) => (
                <div
                  key={plane.tailNumber}
                  className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white"
                >
                  <img
                    src={plane.image}
                    alt={plane.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-4">{plane.tailNumber}</h3>
                    <p className="text-lg font-bold text-gray-800">Name:</p>
                    <p className="text-lg text-gray-700 mb-4">{plane.name}</p>

                    <p className="text-lg text-gray-700 mb-4">{plane.comms}</p>

                    <p className="text-lg font-bold text-gray-800">Empty Weight:</p>
                    <p className="text-lg text-gray-700 mb-4">{plane.emptyWeight}</p>

                    <p className="text-lg font-bold text-gray-800">Max Weight:</p>
                    <p className="text-lg text-gray-700">{plane.maxWeight}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing for this type */}
            <div className="mt-6 flex flex-wrap justify-center gap-6">
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white p-4 w-48 text-center">
                <h4 className="text-lg font-bold text-sky-900 mb-2">Member Price</h4>
                <p className="text-lg text-gray-700">{pricing[type]?.memberPrice}</p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-md hover:shadow-lg transition bg-white p-4 w-48 text-center">
                <h4 className="text-lg font-bold text-sky-900 mb-2">Transient Price</h4>
                <p className="text-lg text-gray-700">{pricing[type]?.transientPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}