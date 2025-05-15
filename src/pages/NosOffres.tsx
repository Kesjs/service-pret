import React from 'react';
import { Link } from 'react-router-dom';
import { MdHome, MdAttachMoney, MdWork } from 'react-icons/md';
import { BiCar } from 'react-icons/bi';

export default function NosOffres() {
  return (
    <section id="nos-offres" className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 py-20 text-gray-800">
      <div id="nos-offres" className="pt-28 px-6">
        <h2 className="text-3xl font-bold mb-8 text-yellow-600 text-center">Le Nostre Offerte di Credito</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Prestito Personale */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <MdHome className="text-yellow-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Prestito Personale</h3>
            <p className="text-gray-700 mb-4">
              Ottieni un finanziamento personalizzato per i tuoi progetti personali. Questo prestito può coprire tutte le tue esigenze, dai viaggi all'acquisto di beni di consumo.
            </p>
            <Link to="/nos-offres/pret-personnel">
              <span className="text-yellow-600 font-semibold cursor-pointer hover:underline">Leggi di più</span>
            </Link>
          </div>

          {/* Mutuo Immobiliare */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <MdAttachMoney className="text-yellow-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Mutuo Immobiliare</h3>
            <p className="text-gray-700 mb-4">
              Realizza il tuo sogno immobiliare con condizioni flessibili. Scopri soluzioni su misura per ogni fase del tuo progetto immobiliare.
            </p>
            <Link to="/nos-offres/pret-immobilier">
              <span className="text-yellow-600 font-semibold cursor-pointer hover:underline">Leggi di più</span>
            </Link>
          </div>

          {/* Prestito Auto */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <BiCar className="text-yellow-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Prestito Auto</h3>
            <p className="text-gray-700 mb-4">
              Finanzia l’acquisto della tua auto nuova o usata con semplicità. Trova l’opzione più adatta per guidare in tutta tranquillità.
            </p>
            <Link to="/nos-offres/pret-auto">
              <span className="text-yellow-600 font-semibold cursor-pointer hover:underline">Leggi di più</span>
            </Link>
          </div>

          {/* Prestito Professionale */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex justify-center mb-4">
              <MdWork className="text-yellow-500 text-4xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Prestito Professionale</h3>
            <p className="text-gray-700 mb-4">
              Offri alla tua impresa il finanziamento di cui ha bisogno per crescere. Scopri le nostre soluzioni di credito aziendale adatte al tuo settore.
            </p>
            <Link to="/nos-offres/pret-pro">
              <span className="text-yellow-600 font-semibold cursor-pointer hover:underline">Leggi di più</span>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
