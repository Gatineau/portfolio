import LinkedInIcon from '../assets/linkedin.svg?react';
import GitHubIcon from '../assets/github.svg?react';

export default function Contact() {
    return (
        <section id="contact" className="container mx-auto px-6 py-20 text-center snap-start">
            <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-100 relative">
                Contact
                <span className="block w-24 h-1 bg-cyan-500 mx-auto mt-2 rounded-full"></span>
            </h3>

            <p className="text-gray-400 mb-8">Let’s build reliable systems together.</p>

            {/* Contact button */}
            <a href="mailto:mauganlerhun@gmail.com" className="inline-block px-6 py-3 bg-cyan-600 rounded-xl hover:bg-cyan-500 transition-colors">
                Get in touch
            </a>
            {/* Icons row with white band */}
            <div className="flex justify-center items-center gap-6 mb-4 p-6 rounded-xl shadow-md">
                <a href="https://github.com/Gatineau" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition-transform">
                    <GitHubIcon className="w-10 h-10 bg-white rounded-full border-2" />
                </a>
                <a href="https://www.linkedin.com/in/maugan-le-rhun/" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transform transition-transform">
                    <LinkedInIcon className="w-10 h-10 bg-white rounded-full border-2" />
                </a>
            </div>
        </section>
    )
}