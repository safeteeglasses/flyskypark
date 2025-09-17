// app/fuel/page.tsx
export default function FuelPage() {
    return (
      <section className="py-12 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-sky-800 mb-8 text-center">
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
              100LL Aviation Fuel
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
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4">Transient</td>
                    <td className="py-2 px-4">$6.80</td>
                    <td className="py-2 px-4">$7.26</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 px-4">Member</td>
                    <td className="py-2 px-4">$5.64</td>
                    <td className="py-2 px-4">$6.02</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }
  