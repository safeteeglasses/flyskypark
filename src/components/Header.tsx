"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-sky-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl font-bold">
          Fly Sky Park
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/learn-to-fly" className="hover:underline">
            Learn
          </Link>
          <Link href="/rentals" className="hover:underline">
            Rentals
          </Link>
          <Link href="/events" className="hover:underline">
            Events
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <nav className="md:hidden bg-sky-800">
          <Link href="/learn-to-fly" className="block p-2 border-b border-sky-700">
            Learn
          </Link>
          <Link href="/rentals" className="block p-2 border-b border-sky-700">
            Rentals
          </Link>
          <Link href="/events" className="block p-2 border-b border-sky-700">
            Events
          </Link>
          <Link href="/contact" className="block p-2 border-b border-sky-700">
            Contact
          </Link>
        </nav>
      )}
    </header>
  );
}
