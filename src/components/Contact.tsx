import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sogadjibelange@gmail.com?subject=Message de ${encodeURIComponent(name)}&body=${encodeURIComponent(message + "\n\nEmail: " + email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="p-8 bg-[#1e293b] rounded-lg my-8 text-white ">
      <h2 className="text-3xl font-bold mb-6 text-[#0ea5e9] text-center">Contactez-moi</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto flex flex-col gap-4">
        <input
          type="text"
          placeholder="Nom"
          value={name}
          onChange={e => setName(e.target.value)}
          className="p-3 rounded border border-gray-600 bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          className="p-3 rounded border border-gray-600 bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="p-3 rounded border border-gray-600 bg-[#0f172a] focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
          rows={5}
          required
        />
        <button
          type="submit"
          className="bg-[#14b8a6] hover:bg-[#0ea5e9] py-3 rounded-lg font-semibold transition transform hover:scale-105"
        >
          Envoyer
        </button>
      </form>
    </section>
  );
};

export default Contact;
