"use client";

export default function FirstFlight() {
  return (
    <section className="bg-gray-50">
      {/* Background Image Section */}
      <div
        className="h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: "url('/images/first-flight/firstflight.avif')" }}
      ></div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h1 className="text-4xl font-bold text-sky-900 mb-6">
            Your First Flight - $100
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            If you’d like to learn to fly—or have questions about what’s involved,
            you can take a one-time, 30-minute flight for $100 to see if flying is
            for you. A Certified Flight Instructor will be your pilot.
          </p>

          {/* What to Expect */}
          <h2 className="text-2xl font-bold text-sky-900 mb-4">What to Expect</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            During your first flight, you&#39;ll sit in the cockpit of one of our
            training aircraft alongside a Certified Flight Instructor. You&#39;ll get a
            chance to take the controls and experience the thrill of flying under
            the guidance of an expert. The 30-minute flight will give you a taste of
            what it&#39;s like to be a pilot, including basic maneuvers and stunning
            views of the surrounding area.
          </p>

          {/* Why Take Your First Flight */}
          <h2 className="text-2xl font-bold text-sky-900 mb-4">
            Why Take Your First Flight?
          </h2>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li>Experience the thrill of flying with a Certified Flight Instructor.</li>
            <li>Get hands-on experience and see if flying is right for you.</li>
            <li>Learn about the steps to becoming a licensed pilot.</li>
            <li>Enjoy breathtaking views of the local area from the sky.</li>
          </ul>

          {/* Call-to-Action Section */}
          <h2 className="text-2xl font-bold text-sky-900 mt-8 mb-4">
            Ready to Book Your First Flight?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Give us a call today to schedule your first flight! Our friendly staff
            will help you find a time that works for you.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Call us at{" "}
            <a
              href="tel:3303349921"
              className="text-sky-900 font-bold hover:underline"
            >
              330-334-9921
            </a>{" "}
            to book your flight today!
          </p>
        </div>
      </div>
    </section>
  );
}