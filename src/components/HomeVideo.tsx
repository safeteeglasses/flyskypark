export default function HomeVideo() {
    return (
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-sky-900 mb-8">
            Come and Visit Us at Skypark!
          </h2>
          <p className="text-lg text-gray-700 text-center leading-relaxed mb-8">
            Weltzien Skypark is a privately owned airport that is open to the public. We&#39;re located 35 driving miles south of Cleveland, Ohio at 3071 Greenwich Road, Wadsworth, Ohio 44281. We offer individual flight instruction, classes, certification testing, plane rentals, and much more. If you have any questions about our services, please email us or call <a href="tel:3303349921" className="text-sky-900 font-bold">330-334-9921</a>. If you phone, please leave a message, we&#39;re out flying!
          </p>
          <div className="flex justify-center">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dq4ELunXn0o?si=wSFNy5JMRv6l76rN"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full max-w-3xl aspect-video rounded-lg shadow-lg"
            ></iframe>
          </div>
        </div>
      </section>
    );
  }