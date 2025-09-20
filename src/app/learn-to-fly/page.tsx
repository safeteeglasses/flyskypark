"use client";

export default function LearnToFly() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-sky-900 mb-8">
          Learn to Fly at Skypark
        </h1>

        {/* Section: What Does It Take to Learn to Fly? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-sky-900 mb-4">
            What Does It Take to Learn to Fly?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            People 16 to 60 have learned to fly here at Skypark. Men or women,
            young or old, it does not matter. If you want to learn to fly,
            Skypark is the place for you. Your training will be divided into
            flying the aircraft and ground training to learn the basics behind
            how airplanes fly. Over the years our instructors have found that
            starting with the flying and then adding in the ground training when
            appropriate is the quickest and easiest way to learn to fly. Let’s
            take a quick look at how your training will proceed starting with
            the ground training.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            There are certain fundamentals that you will learn in your ground
            training such as how an airplane flies and the basics of flying. As
            your ground training progresses you will study the “rules of the
            road” that define the safe operating procedures of all aircraft,
            weather basics, and navigation. Don’t worry if it’s been a while
            since you’ve been in school, your instructor will be there to assist
            you every step of the way.
          </p>
        </div>

        {/* Section: How Much Time Does It Take? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-sky-900 mb-4">
            How Much Time Does It Take?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            The minimum time required for a private pilot license is 40 hours.
            Most students will need a little bit more time to hone their flying
            skills. Here at Skypark, we find that 40-60 hours is a more
            realistic time frame in which to complete the training for a private
            pilot’s license. Our instructors don’t just train you to the minimum
            levels of ability. It’s the goal of our flight school to train you
            to a higher level of ability, ensuring that you are a safe, capable,
            and confident pilot.
          </p>
        </div>

        {/* Section: How Often Should I Fly? */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-sky-900 mb-4">
            How Often Should I Fly?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            As a student, you’ll find that the more times per week you can fly,
            the quicker you’ll receive your license. We find that flying 2-3
            times per week is optimal. This allows you to rapidly build your
            piloting skills and lets you complete your license in around 6
            months.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            “But, what if I can only fly on weekends?” Don’t worry, our flight
            instructors will work around your schedule. We have an instructor to
            fit your particular schedule and learning needs.
          </p>
        </div>

        {/* Section: Flight Training Phases */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-sky-900 mb-4">
            Flight Training Phases
          </h2>
          <h3 className="text-xl font-semibold text-sky-900 mt-4">
            Pre-Solo:
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li>Preparing the aircraft for flight</li>
            <li>Maneuvering the aircraft on the ground</li>
            <li>Takeoffs</li>
            <li>Turning the aircraft</li>
            <li>Climbs and descents</li>
            <li>Landing the aircraft</li>
          </ul>

          <h3 className="text-xl font-semibold text-sky-900 mt-6">Solo:</h3>
          <p className="text-lg text-gray-700 leading-relaxed">
            The first time you take to the air by yourself is an experience
            you’ll remember for the rest of your life. Throughout the solo phase
            of your training you’ll be flying the aircraft by yourself.
            Initially you will practice solo take off and landings at our
            airport under the watchful eyes of your instructor. Later you’ll
            solo to nearby airports and practice on your own. The goal is to
            build your confidence and continue to hone your flying skills.
          </p>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mt-4">
            <li>Supervised solo flights at Skypark</li>
            <li>Flying solo in our practice area</li>
            <li>Flying to nearby airports and returning to Skypark</li>
          </ul>

          <h3 className="text-xl font-semibold text-sky-900 mt-6">
            Cross Country:
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li>Dual cross countries that develop your navigational skills</li>
            <li>
              Solo cross countries that hone these skills and build your
              confidence
            </li>
          </ul>

          <h3 className="text-xl font-semibold text-sky-900 mt-6">
            Night Flying:
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li>Night takeoffs and landings</li>
            <li>Night cross country</li>
          </ul>

          <h3 className="text-xl font-semibold text-sky-900 mt-6">
            Check Ride Prep:
          </h3>
          <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed">
            <li>Reviewing and polishing all of the skills that you’ve learned</li>
          </ul>
        </div>

        {/* Section: How Do I Get Started? */}
        <div>
          <h2 className="text-2xl font-bold text-sky-900 mb-4">
            How Do I Get Started?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Give us a call or come on out to the airport. We’ll be happy to show
            you around our school, let you meet with our instructors, and you
            can even take an introductory lesson where you’ll get to take the
            controls under the watchful eyes of an instructor and see how easy
            and fun it is piloting an aircraft!
          </p>

          {/* Button for More Info */}
          <div className="mt-6 text-center">
            <a
              href="/first-flight"
              className="inline-block px-6 py-3 bg-sky-900 text-white text-lg font-bold rounded-full hover:bg-sky-700 transition"
            >
              Click Here for More Info on Booking Your First Flight
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}