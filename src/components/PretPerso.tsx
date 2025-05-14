// src/components/PretPerso.tsx
import React from 'react';

const PretPerso: React.FC = () => {
  return (
    <section id="pret-personnel" className="pt-24 px-6 md:px-20">
      <h2 className="text-3xl font-bold text-yellow-500 mb-4">Prêt Personnel</h2>

      <div className="mb-6">
        <h1 className="text-xl font-semibold text-blue-900 mb-2">Quoi de plus facile ?</h1>
        <div className="border-t-4 border-yellow-500 w-16 mb-4"></div> {/* Réduit la taille du tiret */}
        <p className="text-gray-700">
          Vous n’avez aucune obligation d’avoir un apport personnel pour souscrire au prêt personnel ! Simulez votre crédit personnel en ligne facilement et obtenez votre crédit en quelques clics.
        </p>
      </div>

      <div className="mb-6">
        <h1 className="text-xl font-semibold text-blue-900 mb-2">Réalisez vos projets personnels</h1>
        <div className="border-t-4 border-yellow-500 w-16 mb-4"></div> {/* Réduit la taille du tiret */}
        <p className="text-gray-700">
          Vous souhaitez réaliser un projet personnel ? L’achat de biens, d’un équipement de maison, le financement d’un événement familial, des loisirs ou encore un achat imprévu… Pour cela, le crédit personnel est la solution de financement sur mesure idéale pour tout type de projet.
        </p>
      </div>

      <div className="mb-6">
        <h1 className="text-xl font-semibold text-blue-900 mb-2">C’est simple et rapide !</h1>
        <div className="border-t-4 border-yellow-500 w-16 mb-4"></div> {/* Réduit la taille du tiret */}
        <p className="text-gray-700">
          Le virement de la somme sur votre compte bancaire s’effectue en 48h à compter de l’acceptation définitive de votre dossier de crédit personnel et au plus tôt à compter du 8ème jour suivant la date de signature de votre contrat de crédit. Le crédit personnel de SA SOGEC s’adapte à tout type de projet.
        </p>
      </div>

      <a href="#contact" className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-yellow-500 transition">
        Soumettre ma demande
      </a>
    </section>
  );
}

export default PretPerso;
