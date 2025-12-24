import me from "/pp.png";

export default function About() {
  return (
    <section
      id="about"
      className="container mx-auto px-6 py-24 min-h-screen snap-start"
    >
      <div className="mb-12 text-center">
        <h3 className="text-3xl md:text-4xl font-bold text-gray-100">
          About
        </h3>
        <span className="block w-20 h-1 bg-cyan-500 mx-auto mt-3 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">

        <div className="
            bg-gray-900
            border border-gray-800
            rounded-2xl
            p-8
            shadow-lg
            flex flex-col items-center justify-center gap-4
          ">
          <h1 className="text-3xl md:text-3xl font-bold text-white">
            Maugan Le Rhun
          </h1>
          <img
            src={me}
            alt="Maugan Le Rhun"
            className="
                w-48 md:w-56
                rounded-full
                mb-6
              "
          />
          <p className="text-gray-400 leading-relaxed">
            Based in France. Fluent in French, English and Spanish.
          </p>
        </div>

        <div className="grid grid-rows-2 gap-6">
          <div className="
          bg-gray-900
          border border-gray-800
          rounded-2xl
          p-8
          shadow-lg
        ">
            <p className="text-gray-400 mb-10 leading-relaxed">
              Software engineer with international experience in France and Spain,
              specializing in large-scale data processing, web applications, and
              distributed systems.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-3">
              {["Java", "Spring", "Python", "Kafka", "AWS"].map((skill) => (
                <span
                  key={skill}
                  className="
                  px-3 py-1
                  bg-cyan-800
                  text-gray-200
                  rounded-lg
                  text-sm
                  hover:bg-gray-700
                  transition
                "
                >
                  {skill}
                </span>

              ))}
              <a
                href="#skills"
                className="
                px-3 py-1
                border border-cyan-600
                text-cyan-400
                rounded-lg
                text-sm
                hover:bg-cyan-600
                hover:text-white
                transition
              "
              >
                + more
              </a>
            </div>


          </div>
          <div className="bg-gray-900 rounded-xl p-6">
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-300 mb-3 uppercase tracking-wide">
                End-to-end delivery
              </h4>

              <div className="flex flex-col gap-3">
                {[
                  "Understanding business needs & technical constraints",
                  "Designing and developing scalable solutions",
                  "Deploying, monitoring and maintaining systems in production",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 text-gray-400 text-sm"
                  >
                    <span className="mt-1 w-2 h-2 rounded-full bg-cyan-500"></span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}