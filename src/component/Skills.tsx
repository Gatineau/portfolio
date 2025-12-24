
import { useEffect } from 'react'
import { skills } from '../data'


const Skills = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-slide");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    document.querySelectorAll(".skill-card").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="h-screen container mx-auto px-6 py-24 snap-start flex items-center">
      <div className="w-full">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100 relative">
          Tech skills
          <span className="block w-24 h-1 bg-cyan-500 mx-auto mt-2 rounded-full"></span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, items], catIndex) => (
            <div
              key={category}
              className="skill-card p-8 rounded-2xl bg-gray-900 border border-gray-800 shadow-md transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)] hover:border-gray-700 opacity-0"
              style={{ animationDelay: `${catIndex * 150}ms` }}
            >
              <h4 className="text-xl font-semibold mb-8 text-center">{category}</h4>

              <ul className="space-y-3">
                {items.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <li
                      key={index}
                      className="group flex items-center gap-4 text-sm font-medium bg-gray-800/70 px-4 py-2.5 rounded-lg transition hover:bg-gray-700/70"
                    >
                      {Icon && <Icon className="w-8 h-8 transition group-hover:scale-110" />}
                      <span className="text-gray-200">{skill.name}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;