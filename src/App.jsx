import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./index.css";
//import "./App.css";

const languages = [
  { name: "HTML", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
  { name: "CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Java", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "C", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" },
  { name: "C++", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
  { name: "PostgreSQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Microsoft SQL Server", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" },
];

const tools = [
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Flutter", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg" },
  { name: "Laravel", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
  { name: "Spring Boot", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
  <div
    className="min-h-screen w-full font-sans
      bg-gradient-to-br from-slate-100 via-white to-slate-200
      dark:from-slate-900 dark:via-slate-950 dark:to-black
      text-neutral-900 dark:text-neutral-100 transition-colors duration-300"
  >
{/* Navbar */}
<nav className="fixed top-0 left-0 w-full z-50
  bg-white/70 dark:bg-black/40 backdrop-blur
  border-b border-black/10 dark:border-white/10">

  <div className="max-w-6xl mx-auto px-4 md:px-6 py-4
    flex justify-between items-center text-sm">

    {/* Logo */}
    <span className="font-semibold tracking-wide">
      Filipe Coelho
    </span>

    {/* Desktop menu */}
    <div className="hidden md:flex gap-5 items-center
      text-neutral-700 dark:text-neutral-300">

      <a href="#education" className="hover:text-black dark:hover:text-white">Education</a>
      <a href="#projects" className="hover:text-black dark:hover:text-white">Projects</a>
      <a href="#skills" className="hover:text-black dark:hover:text-white">Skills</a>
      <a href="#others" className="hover:text-black dark:hover:text-white">Others</a>

      <a
        href="/Filipe_Coelho.pdf"
        target="_blank"
        className="text-amber-400 hover:text-amber-500"
      >
        CV
      </a>

      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/filipe-coelho-363718278"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-black dark:hover:text-white"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
          fill="currentColor" className="w-4 h-4">
          <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.2 8h4.6v16H.2V8Zm7.3 0h4.4v2.2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V24h-4.6v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24H7.5V8Z" />
        </svg>
      </a>

      {/* Theme toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="ml-2 p-2 rounded-full border
        border-black/10 dark:border-white/10
        hover:bg-black/5 dark:hover:bg-white/10 transition"
      >
        {theme === "dark" ? "🌙" : "☀️"}
      </button>
    </div>

    {/* Mobile menu button */}
    <button
      onClick={() => setMenuOpen(!menuOpen)}
      className="md:hidden text-2xl"
    >
      ☰
    </button>
  </div>

  {/* Mobile menu */}
  {menuOpen && (
    <div className="md:hidden bg-white dark:bg-black
      border-t border-black/10 dark:border-white/10">

      <div className="flex flex-col px-6 py-6 gap-4
        text-neutral-700 dark:text-neutral-300">

        <a onClick={() => setMenuOpen(false)} href="#education">Education</a>
        <a onClick={() => setMenuOpen(false)} href="#projects">Projects</a>
        <a onClick={() => setMenuOpen(false)} href="#skills">Skills</a>
        <a onClick={() => setMenuOpen(false)} href="#others">Others</a>

        <a
          href="/Filipe_Coelho.pdf"
          target="_blank"
          className="text-amber-400"
        >
          CV
        </a>

        <a
          href="https://www.linkedin.com/in/filipe-coelho-363718278"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
            fill="currentColor" className="w-4 h-4">
            <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5ZM.2 8h4.6v16H.2V8Zm7.3 0h4.4v2.2h.1c.6-1.1 2.1-2.3 4.3-2.3 4.6 0 5.4 3 5.4 6.9V24h-4.6v-7.9c0-1.9 0-4.3-2.6-4.3s-3 2-3 4.1V24H7.5V8Z" />
          </svg>
          LinkedIn
        </a>

        <button
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setMenuOpen(false);
          }}
          className="self-start mt-2 px-3 py-2 rounded-full border
          border-black/10 dark:border-white/10"
        >
          {theme === "dark" ? "🌙 Dark" : "☀️ Light"}
        </button>
      </div>
    </div>
  )}
</nav>


    <main className="pt-28">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 min-h-[80vh] flex flex-col justify-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">Filipe Coelho</h1>
        <p className="mt-4 text-xl text-neutral-400">Software Engineer</p>
        <p className="mt-8 max-w-3xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
          I am a Computer Engineer highly motivated to acquire new knowledge and experience, aiming to build a solid career and contribute to projects with real impact. I value teamwork, adaptability, organization and continuous learning.
        </p>
      </section>

      {/* Education */}
      <section id="education" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="section-title">Education</h2>
        <div className="rounded-2xl border p-6 shadow-md
                        bg-white text-neutral-900 border-neutral-200
                        dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-900
                        transition-colors duration-300">
          <h3 className="text-xl font-medium">BSc in Computer Engineering</h3>
          <p className="text-neutral-600 dark:text-neutral-400">Universidade Fernando Pessoa · 2021 — 2025</p>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="section-title">Relevant Academic Projects</h2>
        <div className="space-y-6">
          {[
            {
              title: "MaisTRUST – Sports Health Claims Platform",
              description: "Web and mobile application for managing sports health claims.",
              technologies: "Flutter, React.js, Spring Boot, SQL Server",
              github: "https://github.com/tiagommr/MaisTrust-Frontend"
            },
            {
              title: "Distributed File Sharing System",
              description: "Distributed system similar to Google Drive (without web interface).",
              technologies: "Java, RMI, RabbitMQ, Multithreading",
              github: "https://github.com/Filipecoelho999/SD_Proj"
            },
            {
              title: "LP Project",
              description: " Website for a sports club, with functionalities for both general users and administrators.",
              technologies: "PHP - Laravel",
              github: "https://github.com/JoaoRocha13/lp-project"
            }
          ].map(project => (
            <motion.details
              key={project.title}
              whileHover={{ scale: 1.01 }}
              className="group rounded-2xl border p-6 shadow-md
                         bg-white text-neutral-900 border-neutral-200
                         dark:bg-neutral-800 dark:text-neutral-100 dark:border-neutral-700
                         transition-colors duration-300"
            >
              <summary className="cursor-pointer list-none">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="mt-2 text-neutral-600 dark:text-neutral-400">{project.description}</p>
              </summary>
              <div className="mt-4 text-neutral-600 dark:text-neutral-300 space-y-2">
                <p><span className="font-medium">Technologies:</span> {project.technologies}</p>
                <a href={project.github} target="_blank" className="inline-block text-amber-400 hover:text-amber-300">
                  View on GitHub
                </a>
              </div>
            </motion.details>
          ))}
        </div>

        {/* Global GitHub link */}
        <div className="mt-10 text-center">
          <a href="https://github.com/filipecoelho999" target="_blank" className="text-neutral-400 hover:text-black dark:hover:text-white underline">
            Visit my GitHub profile
          </a>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24">
        <h2 className="section-title text-amber-400">Languages</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {languages.map(skill => (
            <motion.div key={skill.name} whileHover={{ scale: 1.05 }} className="group">
              <div className="w-28 h-28 rounded-2xl border shadow-md
                              bg-white border-neutral-200 text-neutral-900
                              dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100
                              flex items-center justify-center transition-colors duration-300">
                <img src={skill.img} alt={skill.name} className="w-14 h-14 object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tools & Frameworks */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <h2 className="section-title text-amber-400">Tools & Frameworks</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8">
          {tools.map(tool => (
            <motion.div key={tool.name} whileHover={{ scale: 1.05 }} className="group">
              <div className="w-28 h-28 rounded-2xl border shadow-md
                              bg-white border-neutral-200 text-neutral-900
                              dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-100
                              flex items-center justify-center transition-colors duration-300">
                <img src={tool.img} alt={tool.name} className="w-14 h-14 object-contain" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Spoken Languages & Interests */}
      <section id="others" className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
        {/* Spoken Languages */}
        <div className="rounded-2xl border p-8 shadow-md
                        bg-white border-neutral-200 text-neutral-900
                        dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100
                        transition-colors duration-300">
          <h2 className="section-title text-amber-400 mb-6">Spoken Languages</h2>
          <ul className="space-y-4 text-neutral-600 dark:text-neutral-300">
            <li className="flex justify-between"><span>Portuguese</span><span className="text-neutral-400 dark:text-neutral-400">Native</span></li>
            <li className="flex justify-between"><span>English</span><span className="text-neutral-400 dark:text-neutral-400">Professional</span></li>
          </ul>
        </div>

        {/* Interests */}
        <div className="rounded-2xl border p-8 shadow-md
                        bg-white border-neutral-200 text-neutral-900
                        dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-100
                        transition-colors duration-300">
          <h2 className="section-title text-amber-400 mb-6">Interests</h2>
          <div className="flex flex-wrap gap-3">
            {["Team Sports","Hiking / Walking","Music","Movies & TV Series","Social Activities","E-sports"].map(interest => (
              <span key={interest} className="px-4 py-2 rounded-full border border-neutral-200 bg-white text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100 text-sm transition-colors duration-300">
                {interest}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>

    <footer className="py-12 text-center text-neutral-600 dark:text-neutral-400 text-sm border-t border-neutral-200 dark:border-neutral-700 transition-colors duration-300">
      © {new Date().getFullYear()} Filipe Coelho
    </footer>
  </div>
);
}