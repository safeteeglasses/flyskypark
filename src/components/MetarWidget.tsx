import React from "react";

type MetarData = {
  icaoId: string;
  reportTime: string;
  temp: number;
  dewp: number;
  wdir: number;
  wspd: number;
  visib: string;
  altim: number;
  slp: number;      // ✅ sea-level pressure
  rawOb: string;
  name: string;
  cover: string;
  fltCat: string;
};

async function fetchMetar(): Promise<MetarData | null> {
  try {
    const res = await fetch(
      "https://aviationweather.gov/api/data/metar?ids=KBJJ&format=json",
      { next: { revalidate: 300 } }
    );
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const json = await res.json();
    if (Array.isArray(json) && json.length > 0) return json[0] as MetarData;
    return null;
  } catch (err) {
    console.error("METAR fetch failed:", err);
    return null;
  }
}

export default async function MetarWidget() {
  const metar = await fetchMetar();

  if (!metar) {
    return (
      <section className="py-10 bg-gradient-to-b from-sky-50 to-white">
        <div className="container mx-auto text-center text-gray-500">
          Weather data unavailable
        </div>
      </section>
    );
  }

  const altimInHg = (metar.altim / 33.8639).toFixed(2);

  return (
    <section className="py-10 bg-gradient-to-b from-sky-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-6 border border-sky-100">
          <h3 className="text-2xl font-bold text-sky-800 text-center mb-1">
            KBJJ – {metar.name}
          </h3>
          <p className="text-sm text-gray-500 text-center mb-6">
            Observed {new Date(metar.reportTime).toUTCString()}
          </p>

          <div className="grid grid-cols-2 gap-y-4 text-center">
            <div>
              <p className="text-3xl font-semibold text-sky-700">
                {metar.temp.toFixed(1)}°C
              </p>
              <p className="text-xs uppercase text-gray-500">Temperature</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-sky-700">
                {metar.dewp.toFixed(1)}°C
              </p>
              <p className="text-xs uppercase text-gray-500">Dew Point</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-sky-700">
                {metar.wdir}° / {metar.wspd} kt
              </p>
              <p className="text-xs uppercase text-gray-500">Wind</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-sky-700">
                {metar.visib} sm
              </p>
              <p className="text-xs uppercase text-gray-500">Visibility</p>
            </div>
            <div>
              <p className="text-xl font-semibold text-sky-700">{metar.cover}</p>
              <p className="text-xs uppercase text-gray-500">Cloud Cover</p>
            </div>
            <div>
              <p
                className={`text-xl font-semibold ${
                  metar.fltCat === "VFR"
                    ? "text-green-600"
                    : metar.fltCat === "MVFR"
                    ? "text-blue-600"
                    : metar.fltCat === "IFR"
                    ? "text-red-600"
                    : "text-gray-700"
                }`}
              >
                {metar.fltCat}
              </p>
              <p className="text-xs uppercase text-gray-500">Flight Category</p>
            </div>

            {/* ✅ New two-column row for pressures */}
            <div>
              <p className="text-lg font-semibold text-sky-700">
                {altimInHg} inHg
              </p>
              <p className="text-xs uppercase text-gray-500">Altimeter</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-sky-700">
                {metar.slp.toFixed(1)} hPa
              </p>
              <p className="text-xs uppercase text-gray-500">Sea-Level Pressure</p>
            </div>
          </div>

          <p className="mt-6 text-xs text-gray-500 text-center break-words">
            <strong>Raw METAR:</strong> {metar.rawOb}
          </p>
        </div>
      </div>
    </section>
  );
}
