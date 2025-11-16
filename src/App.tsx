import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App: React.FC = () => {
  const skills = [
    { name: "React", level: "Intermédiaire" },
    { name: "TypeScript", level: "Intermédiaire" },
    { name: "Kali Linux", level: "Avancé" },
    { name: "Pentest", level: "Intermédiaire" },
    { name: "Python", level: "Avancé" },
  ];

  const projects = [
      {
      title: "Exoplanet AI",
      description: "Identifications des exoplanètes à l'aide d'une IA entrainée par les données de la NASA",
      technologies: ["Python","Django","render"],
      link: "https://exoplanet-ai-584i.vercel.app/",
      status: "Terminé",
    },
    
    {
      title: "Capture The Flag",
      description: "Challenges CTF résolus en Python et Bash.",
      technologies: ["Python", "Bash", "Kali Linux","Crypto"],
      link: "#",
      status: "En cours",
    },
    {
      title: "Analyse de vulnérabilités Web",
      description: "Test de sécurité sur applications web avec Nmap et Burp Suite.",
      technologies: ["Nmap", "Burp Suite", "Metasploit"],
      link: "#",
      status: "En cours",
    },
  ];

  return (
    <div className="font-sans bg-[#0f172a] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col justify-between">
        <div>
          <Hero />
          <About  skills={skills} />
          <Project projects={projects} />
        </div>
        <Contact />
      </main>
    </div>
  );
};

export default App;
