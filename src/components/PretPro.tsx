// src/components/PretPro.tsx
import React from 'react';

const PretPro: React.FC = () => {
  return (
    <section id="pret-pro" className="pt-24 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-yellow-600 mb-4">Prêt Professionnel</h2>
      <p className="text-gray-700 mb-6">
        Développez votre activité professionnelle avec un financement sur mesure pour les entrepreneurs, artisans et PME.
      </p>
      <a href="#contact" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
        Faire une demande
      </a>
    </section>
  );
}

export default PretPro;
