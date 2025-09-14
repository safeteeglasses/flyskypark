"use client";

type Service = {
  title: string;
  description: string;
  icon: string; // could be a Tailwind/emoji placeholder for now
};

const services: Service[] = [
  {
    title: "Flight Instruction",
    description: "Professional training for beginners to advanced pilots.",
    icon: "✈️",
  },
  {
    title: "Aircraft Rentals",
    description: "Modern, well-maintained aircraft available for licensed pilots.",
    icon: "🛩️",
  },
  {
    title: "Community Events",
    description: "Fly-ins, airshows, and social gatherings year-round.",
    icon: "🎉",
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-sky-900">
          Our Services
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((svc) => (
            <div
              key={svc.title}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{svc.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
              <p className="text-gray-600">{svc.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
