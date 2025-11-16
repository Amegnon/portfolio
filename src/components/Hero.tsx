import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg";

const Hero: React.FC = () => {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col md:flex-row items-center justify-center bg-[#0f172a] text-white px-6 md:px-20"
    >
      <motion.img
        src={profilePic}
        alt="Photo de profil"
        className="w-48 h-48 rounded-full border-4 border-[#0ea5e9] mb-6 md:mb-0 md:mr-10 shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />

      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-xl text-center md:text-left"
      >
        <h1 className="text-5xl font-bold mb-4 text-[#0ea5e9]">
          SOGADJI Belange, Développeur Cybersécurité
        </h1>
        <p className="text-lg text-[#64748b] mb-6">
          Passionné par la cybersécurité ,l'IA et le développement web. Je crée des projets sécurisés et innovants pour le monde numérique.
        </p>
        <a
          href="#projects"
          className="bg-[#14b8a6] hover:bg-[#0ea5e9] text-white px-6 py-3 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Mes Projets
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
