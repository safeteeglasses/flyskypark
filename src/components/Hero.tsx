"use client";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-[60vh] flex flex-col items-center justify-center bg-white">
    {/* Centered Icon */}
    <img
      src="/images/WelzienSkypark.png"
      alt="Skypark Logo"
      className="w-[320px] h-[320px] object-contain mb-6"
    />
      
      <div className="container mx-auto text-center text-sky-900 px-4">
        <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
          Experience Flying at Skypark
        </h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-sm">
          Professional flight instruction, aircraft rental, and a friendly aviation community
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="/learn-to-fly"
            className="inline-block px-6 py-3 border border-sky-900 rounded-full hover:bg-sky-900 hover:text-white transition"
          >
            Book Your First Flight
          </a>
          <Link
            href="/rentals"
            className="inline-block px-6 py-3 border border-sky-900 rounded-full hover:bg-sky-900 hover:text-white transition"
          >
            View Rates
          </Link>
          <a
            href="https://www.schedulemaster.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 border border-sky-900 rounded-full hover:bg-sky-900 hover:text-white transition"
          >
            Schedule Master
          </a>
        </div>
      </div>
    </section>
  );
}