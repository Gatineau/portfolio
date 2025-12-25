//import { CodeIcon } from "@heroicons/react/solid";
import { useEffect } from "react";
import { projects } from "../data";

export default function Projects() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-slide");
            observer.unobserve(entry.target); // une seule fois
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".project-card").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <section
      id="projects"
      className="container min-h-screen mx-auto px-4 sm:px-6 py-16 sm:py-24 md:snap-start"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100 relative">
        Projects
        <span className="block w-24 h-1 bg-cyan-500 mx-auto mt-2 rounded-full"></span>
      </h3>

      <div className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-6 sm:gap-8
        max-w-6xl mx-auto
      ">
      {projects.map((project, index) => (
        <a
          key={index}
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="
            project-card
            group bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-6
            transition-all duration-500 ease-out
            transform
            opacity-0 translate-y-10
            hover:scale-102 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10
          "
          style={{ animationDelay: `${index * 200}ms` }}
        >
          <h4 className="font-semibold text-lg mb-2">{project.title}</h4>
          <p className="text-gray-400 text-sm mb-4">{project.description}</p>
          <span className="text-xs text-cyan-400">{project.tech}</span>
        </a>
      ))}
      </div>
    </section>
  );
}


