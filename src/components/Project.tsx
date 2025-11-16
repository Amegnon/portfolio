import React from "react";
import { motion } from "framer-motion";

type ProjectType = {
  title: string;
  description: string;
  technologies: string[];
  link: string;
  status?: "En cours" | "Terminé";
};

type ProjectProps = {
  projects: ProjectType[];
};

const Project: React.FC<ProjectProps> = ({ projects }) => {
  return (
    <section id="projects" className="p-8 bg-[#0f172a] rounded-lg my-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-[#0ea5e9] text-center">Mes Projets</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-[#1e293b] p-6 rounded-lg shadow-lg hover:scale-105 hover:bg-gray-700 transition transform cursor-pointer flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
          >
            <div>
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="text-sm bg-[#0ea5e9] text-[#0f172a] px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            {project.status && (
              <span className="mt-4 inline-block bg-[#14b8a6] text-[#0f172a] px-3 py-1 rounded-full text-sm font-semibold">
                {project.status}
              </span>
            )}
            <a
              href={project.link}
              target="_blank"
              className="mt-4 text-[#0ea5e9] border-2 rounded-xl text-center font-semibold hover:underline"
            >
              Voir le 
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;
