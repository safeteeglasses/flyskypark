"use client";

export default function Careers() {
  return (
    <section className="py-16 bg-sky-50">
      <div className="container mx-auto text-center max-w-3xl px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-sky-900 mb-4">
          We’re Hiring: Aviation Mechanic
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Fly Sky Park is looking for a certified Aviation Mechanic to join our
          growing team. Help maintain our fleet of aircraft and keep our pilots
          flying safely.
        </p>
        <ul className="text-left inline-block mb-8 space-y-2 text-gray-700">
          <li>• FAA A&P certification preferred</li>
          <li>• Full-time or part-time available</li>
          <li>• Competitive pay and flight benefits</li>
        </ul>

        {/* Apply button on its own line, centered */}
        <div className="flex justify-center">
          <a
            href="mailto:careers@flyskypark.com?subject=Aviation%20Mechanic%20Application"
            className="inline-block px-8 py-3 bg-sky-700 text-white rounded-full font-semibold hover:bg-sky-800 transition"
          >
            Apply Now
          </a>
        </div>
      </div>
    </section>
  );
}
