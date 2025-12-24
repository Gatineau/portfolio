import AnimatedName from "./AnimatedName";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center snap-start overflow-hidden">

      <div className="text-center max-w-3xl px-6">

        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          <AnimatedName text="Maugan Le Rhun" />
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-400 leading-relaxed">
          Software Engineer · Fullstack Development · Distributed Systems
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="mailto:mauganlerhun@gmail.com"
            className="
              px-8 py-3 rounded-xl
              bg-cyan-600 text-white font-medium
              hover:bg-cyan-500
              transition-all
              shadow-lg shadow-cyan-600/20
            "
          >
            Get in touch
          </a>

          <a
            href="/cv.pdf"
            className="
              px-8 py-3 rounded-xl
              border border-gray-600
              text-gray-300 font-medium
              hover:border-cyan-500 hover:text-cyan-400
              transition-all
            "
          >
            Resume
          </a>
        </div>

      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-400">
        <span className="text-sm tracking-widest uppercase mb-2">
          Scroll to explore
        </span>
        <div className="animate-bounce">
          ↓
        </div>
      </div>

    </section>
  );
}