// src/components/PretAuto.tsx
import React from 'react';

const PretAuto: React.FC = () => {
  return (
    <section id="pret-auto" className="pt-24 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-yellow-600 mb-4">Prêt Auto</h2>
      <p className="text-gray-700 mb-6">
        Achetez la voiture de vos rêves, neuve ou d'occasion, avec un financement simple et rapide.
      </p>
      <a href="#contact" className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
        Faire une demande
      </a>
    </section>
  );
}

export default PretAuto;
