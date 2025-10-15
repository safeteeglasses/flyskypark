import React from "react";

// Aircraft data
const aircraftList = [
  {
    tailNumber: "N12345",
    name: "Cessna 150",
    type: "Cessna 150",
    image: "/images/aircraft/127150.jpg",
  },
  {
    tailNumber: "N5961G",
    name: "Cessna 150",
    type: "Cessna 150",
    image: "/images/aircraft/961G152.jpg",
  },
  {
    tailNumber: "N739BX",
    name: "Cessna 172",
    type: "Cessna 172",
    image: "/images/aircraft/BX172.jpg",
  },
  {
    tailNumber: "N79664G",
    name: "Cessna 172",
    type: "Cessna 172",
    image: "/images/aircraft/644G.jpg",
  },
];

// Define the type for pricing
const pricing: Record<string, { wetRate: string; dryRate: string }> = {
  "Cessna 150": {
    wetRate: "$120/hr",
    dryRate: "$100/hr",
  },
  "Cessna 172": {
    wetRate: "$150/hr",
    dryRate: "$130/hr",
  },
};

export default function RentalRates() {
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
                  className="rounded-xl overflow-hidden shadow hover:shadow-lg transition"
                >
                  <img
                    src={plane.image}
                    alt={plane.name}
                    className="w-full h-56 object-cover"
                  />
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold mb-2">
                      {plane.tailNumber}
                    </h3>
                    <p className="text-lg text-gray-700">{plane.name}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Pricing for this type */}
            <div className="mt-6 text-center">
              <h4 className="text-xl font-bold text-sky-900 mb-2">
                {type} Pricing
              </h4>
              <p className="text-lg text-gray-700">
                Wet Rate: {pricing[type]?.wetRate}
              </p>
              <p className="text-lg text-gray-700">
                Dry Rate: {pricing[type]?.dryRate}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}