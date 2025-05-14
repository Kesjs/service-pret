// src/components/PretImmo.tsx
import React from 'react';

const PretImmo: React.FC = () => {
  return (
    <section id="pret-immobilier" className="pt-24 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-yellow-600 mb-4">Prêt Immobilier</h2>
      <p className="text-gray-700 mb-6">
        Financez l'achat ou la construction de votre logement grâce à nos solutions de prêt immobilier, adaptées à vos besoins.
      </p>
      <a href="#contact" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
        Faire une demande
      </a>
    </section>
  );
}

export default PretImmo;
