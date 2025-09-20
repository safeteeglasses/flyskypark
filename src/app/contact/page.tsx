"use client";

import React from "react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    const formData = new FormData(e.target as HTMLFormElement); // Collect form data
    const data = Object.fromEntries(formData.entries()); // Convert to an object

    // Log the data (replace this with your API call or logic)
    console.log("Form Data:", data);

    // Example: Show an alert to the user
    alert("Your message has been sent! Thank you for contacting us.");
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-sky-900 mb-8">
          Contact Us Today!
        </h1>

        {/* Contact Form */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-sky-900 mb-6 text-center">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-lg font-medium text-gray-700"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-lg font-medium text-gray-700"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block text-lg font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-sky-500 focus:border-sky-500"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                className="px-6 py-3 bg-sky-900 text-white text-lg font-bold rounded-full hover:bg-sky-700 transition"
              >
                Send
              </button>
            </div>
          </form>
        </div>
        {/* Embedded Map */}
  <div className="mb-6 rounded-lg overflow-hidden">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5110.672486568655!2d-81.80137852255734!3d41.02598627134796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8830cb74be35da1d%3A0x1531cf6a8ac195a3!2sSkypark%20Inc!5e1!3m2!1sen!2sus!4v1758076863364!5m2!1sen!2sus"
      width="100%"
      height="250"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
      </div>
    </section>
  );
}