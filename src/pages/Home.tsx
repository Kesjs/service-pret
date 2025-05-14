// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero';  // Composant pour l'introduction
import Services from '../components/Services';  // Composant pour les services
import Contact from '../components/Contact';  // Composant pour le contact

export default function Home() {
  return (
    <div>
      <Hero />      {/* Section d'introduction */}
      <Services />  {/* Section des services */}
      <Contact />   {/* Section de contact */}
    </div>
  );
}
