"use client";

export default function Hero() {
  return (
    <section className="relative bg-[url('/images/Runway.jpg')] bg-cover bg-center h-[60vh] flex items-center">
      <div className="container mx-auto text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
          Experience Flying with Skypark
        </h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-sm">
          Professional flight instruction, aircraft rental, and a friendly aviation community
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/learn-to-fly"
            className="inline-block px-6 py-3 bg-orange-500 rounded-full font-semibold hover:bg-orange-600 transition"
          >
            Book Your First Flight
          </a>
          <a
            href="/rentals"
            className="inline-block px-6 py-3 border border-white rounded-full hover:bg-white hover:text-sky-900 transition"
          >
            View Rates
          </a>
        </div>
      </div>
    </section>
  );
}
