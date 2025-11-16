import React from "react";
import { motion } from "framer-motion";

type Skill = { name: string; level: string };
type AboutProps = { bio: string; skills: Skill[] };

const About: React.FC<AboutProps> = ({ bio, skills }) => {
  return (
    <section id="about" className="p-8 bg-[#1e293b] rounded-lg my-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-[#0ea5e9] text-center">À propos de moi</h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-gray-300 max-w-3xl mx-auto text-center"
      >
        {bio}  
        Salut ! Moi, c’est SOGADJI Belange, étudiant en 3ᵉ année en Génie Informatique & Télécommunications (GIT) à l’EPAC. Passionné par la cybersécurité et l’intelligence artificielle, je me forme activement pour devenir un acteur compétent dans la sécurité numérique et le développement intelligent. J’aime transformer les idées en solutions concrètes, relever des défis techniques et apprendre chaque jour pour construire ma carrière dans la tech.
      </motion.p>

      <h3 className="text-2xl font-semibold mb-4 text-[#14b8a6] text-center">Compétences :</h3>
      <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className="bg-[#0f172a] p-4 rounded shadow hover:bg-[#0ea5e9] transition text-center cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <strong>{skill.name}</strong>
            <p className="text-gray-300">{skill.level}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;