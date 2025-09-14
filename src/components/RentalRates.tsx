"use client";

type Aircraft = {
  tailNumber: string;
  name: string;
  wetRate: string;
  dryRate: string;
  image: string; // path relative to /public
};

const aircraftList: Aircraft[] = [
  {
    tailNumber: "N5961G",
    name: "Cessna 150",
    wetRate: "$151.81 / hour (wet)",
    dryRate: "$110.75 / hour (dry)",
    image: "/images/aircraft/961G152.jpg",
  },
  {
    tailNumber: "N16127",
    name: "Cessna 150",
    wetRate: "$151.81 / hour (wet)",
    dryRate: "$110.75 / hour (dry)",
    image: "/images/aircraft/127150.jpg",
  },
  {
    tailNumber: "N7644G",
    name: "Cessna 172",
    wetRate: "$177.00 / hour (wet)",
    dryRate: "$134.60 / hour (dry)",
    image: "/images/aircraft/644G.jpg",
  },
  {
    tailNumber: "N739BX",
    name: "Cessna 172",
    wetRate: "$177.00 / hour (wet)",
    dryRate: "$134.60 / hour (dry)",
    image: "/images/aircraft/BX172.jpg",
  },
  // Add more aircraft as needed
];

export default function RentalRates() {
    return (
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-900 mb-10">
            Skypark Rental and Training Aircraft
          </h2>
  
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {aircraftList.map((plane) => (
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
        <h3 className="text-xl font-semibold mb-2">{plane.tailNumber}</h3>
        <p className="text-lg text-gray-700">{plane.name}</p>
        <p className="text-lg text-gray-700">Wet Rate: {plane.wetRate}</p>
        <p className="text-lg text-gray-700">Dry Rate: {plane.dryRate}</p>
        <a
          href="https://www.schedulemaster.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-6 py-2 text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition"
        >
          Schedule Now
        </a>
      </div>
    </div>
  ))}
</div>
<div className="mt-12"> {/* Added margin-top here */}
  <p className="text-center text-gray-600">
    Wet rates include fuel and do not include require daily minimum charges.<br />
    Dry rates do not include fuel and require that the plane leave topped and return should be topped. <br />
    Dry renting should always be arranged with the Skypark office. <br />
    Airplanes with a strike through <del>N00000</del> are temporarily out of service.
  </p>
</div>
        </div>
      </section>
    );
  }
