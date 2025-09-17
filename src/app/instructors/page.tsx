import Image from "next/image";

const instructors = [
  {
    name: "Jane Doe",
    certs: "CFI, CFII",
    bio: "10 years of flight instruction specializing in tailwheel and cross-country training.",
    image: "/images/instructors/instructor1.jpg",
    email: "JaneDoe@skypark.com"
  },
  {
    name: "John Smith",
    certs: "CFI",
    bio: "Background in corporate aviation and loves introducing students to IFR flying.",
    image: "/images/instructors/instructor2.jpg",
    email: "JohnSmith@skypark.com"
  },
  {
    name: "John Doe",
    certs: "CFI",
    bio: "brings extensive back-country experience, having flown remote bush operations with advanced short-field and mountain-flying skills.",
    image: "/images/instructors/instructor3.jpg",
    email: "JohnDoe@skypark.com"
  }
];

export default function InstructorsPage() {
  return (
    <section className="py-12 bg-gradient-to-b from-white to-sky-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-sky-800 mb-10">
          Meet Our Flight Instructors
        </h1>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {instructors.map(inst => (
            <div
              key={inst.name}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center text-center border border-sky-100"
            >
              <Image
                src={inst.image}
                alt={inst.name}
                width={200}
                height={200}
                className="rounded-full mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-sky-700">{inst.name}</h2>
              <p className="text-sm text-gray-500 mb-2">{inst.certs}</p>
              <p className="text-gray-600">{inst.bio}</p>
              <a
                href={`mailto:${inst.email}`}
                className="inline-block mt-4 px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
                >
                Contact {inst.name.split(" ")[0]}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
