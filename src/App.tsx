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

  const bio = 
    "Étudiant en 3ème année à l'EPAC, filière Génie Informatique et Télécommunications (GIT), passionné par la cybersécurité, l'intelligence artificielle et le développement d'applications orientées sécurité.";

  const projects: {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    status?: "En cours" | "Terminé";
  }[] = [
    {
      title: "Exoplanet AI",
      description:
        "Identification des exoplanètes à l'aide d'une IA entraînée avec des données de la NASA.",
      technologies: ["Python", "Django", "Render"],
      link: "https://exoplanet-ai-584i.vercel.app/",
      status: "Terminé",
    },
    {
      title: "Capture The Flag",
      description: "Résolution de challenges CTF utilisant Python, Bash et outils offensifs.",
      technologies: ["Python", "Bash", "Kali Linux", "Cryptanalyse"],
      link: "#",
      status: "En cours",
    },
    {
      title: "Analyse de vulnérabilités Web",
      description: "Audit de sécurité web avec Nmap, Burp Suite et Metasploit.",
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
          <About skills={skills} bio={bio} />
          <Project projects={projects} />
        </div>
        <Contact />
      </main>
    </div>
  );
};

export default App;
