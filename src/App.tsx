import About from './component/About';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Skills from './component/Skills';
import Hero from './component/Hero';

function App() {

  return (
    <main className="h-screen bg-gray-950 text-gray-100 relative overflow-hidden overflow-y-scroll md:snap-y md:snap-mandatory">
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      < Skills />

      {/* Projects */}
      <Projects />

      <Contact />
      <footer className="text-center py-6 text-gray-500 text-sm">
        © 2025 Maugan Le Rhun
      </footer>
    </main>
  );
}

export default App
