// app/events/page.tsx
export default function EventsPage() {
    return (
      <section className="py-12 bg-gradient-to-b from-white to-sky-50">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl font-bold text-sky-800 mb-8 text-center">
            Upcoming Events
          </h1>
  
          {/* Clambake Event */}
          <article className="bg-white rounded-xl shadow-lg p-6 border border-sky-100 mb-8">
  <h2 className="text-2xl font-semibold text-sky-700 mb-2">
    Skypark Clambake – October 4
  </h2>

  <p className="text-gray-700 mb-2">
    Join us for a Clambake at <strong>Skypark</strong> on <strong>October 4</strong>! We’ll have cornhole and the football game on. The clambake is <strong>$35 per person</strong> and includes:
  </p>

  <ul className="list-disc list-inside text-gray-700 mb-4">
    <li>1 dozen freshwater middleneck clams</li>
    <li>1/2 chicken</li>
    <li>Corn on the cob</li>
    <li>Sweet potatoes</li>
    <li>Coleslaw</li>
    <li>Clam chowder</li>
    <li>Dinner roll</li>
    <li>Dessert</li>
  </ul>

  <p className="text-gray-700 mb-2">
    Add an extra dozen clams for <strong>$13</strong>.
  </p>
  <p className="text-gray-700 mb-4">
    Prepared and served by <strong>Trevi Catering</strong>.
  </p>

  {/* Address */}
  <p className="text-gray-700 mb-4">
    <strong>Location:</strong> 123 Main Street, Anytown, USA
  </p>

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

  {/* Purchase Button */}
  <a
    href="mailto:jessicamaslach@gmail.com?subject=Clambake%20Tickets"
    className="inline-block px-5 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
  >
    Purchase Tickets
  </a>
</article>
        </div>
      </section>
    );
  }
  