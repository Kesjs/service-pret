import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Hero() {
  const images = [
    'https://enterprisectr.org/wp-content/uploads/2019/08/9-24-19-Business-Financials-PURCHASED-scaled.jpeg',
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 8000); // Changer l'image toutes les 8 secondes pour un défilement plus lent

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 text-white"
    >
      {/* Overlay sombre pour lisibilité */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Contenu principal */}
      <motion.div
        className="relative z-10 max-w-2xl text-center"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Obtenez un prêt en quelques clics
        </h1>

        <p className="text-lg mb-4">
          Des solutions rapides, fiables et transparentes pour financer vos projets.
        </p>

        {/* Badge de confiance */}
        <p className="inline-block bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow mb-6">
          🔒 100% sécurisé — Réponse en moins de 24h
        </p>

        {/* Boutons avec transition améliorée */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#"
            className="flex items-center justify-center bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-300 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Simuler mon prêt
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Nos offres de crédit
          </motion.a>
        </div>
      </motion.div>

      {/* Fond avec images qui défilent lentement sans espace */}
      <div className="absolute inset-0 flex z-0">
        {images.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: '100%' }}
            animate={{
              opacity: 0.7,
              x: '0%',
              transition: { duration: 2, ease: 'easeInOut' },
            }}
            exit={{
              opacity: 0,
              x: '-100%',
              transition: { duration: 2, ease: 'easeInOut' },
            }}
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              flex: '0 0 100%', // Chaque image prend 100% de la largeur
            }}
          />
        ))}
      </div>
    </section>
  );
}
