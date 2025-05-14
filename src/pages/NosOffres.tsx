// src/pages/NosOffres.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function NosOffres() {
  return (
    <div className="pt-28 px-6">
      <h2 className="text-3xl font-bold mb-8 text-yellow-600">Nos Offres de Crédit</h2>

      <section id="pret-personnel" className="mb-12">
        <Link to="/nos-offres/pret-personnel">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
            Prêt Personnel
          </button>
        </Link>
      </section>

      <section id="pret-immobilier" className="mb-12">
        <Link to="/nos-offres/pret-immobilier">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
            Prêt Immobilier
          </button>
        </Link>
      </section>

      <section id="pret-auto" className="mb-12">
        <Link to="/nos-offres/pret-auto">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
            Prêt Auto
          </button>
        </Link>
      </section>

      <section id="pret-pro" className="mb-12">
        <Link to="/nos-offres/pret-pro">
          <button className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600 transition">
            Prêt Professionnel
          </button>
        </Link>
      </section>
    </div>
  );
}
