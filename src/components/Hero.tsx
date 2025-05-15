import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const backgroundImage =
    'https://enterprisectr.org/wp-content/uploads/2019/08/9-24-19-Business-Financials-PURCHASED-scaled.jpeg';

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20 text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Sovrapposizione scura per leggibilità */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Contenuto principale */}
      <motion.div
        className="relative z-10 max-w-2xl text-center"
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-6 leading-tight">
          Ottieni un prestito in pochi clic
        </h1>

        <p className="text-lg mb-4">
          Soluzioni rapide, affidabili e trasparenti per finanziare i tuoi progetti.
        </p>

        <p className="inline-block bg-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full shadow mb-6">
          🔒 100% sicuro — Risposta in meno di 24 ore
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#nos-offres"
            className="flex items-center justify-center bg-yellow-400 text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-yellow-300 transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Simula il mio prestito
            <ArrowRight className="w-4 h-4 ml-2" />
          </motion.a>
          <motion.a
            href="#services"
            className="flex items-center justify-center border-2 border-white text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all"
            whileHover={{ scale: 1.05, boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)' }}
            whileTap={{ scale: 0.95 }}
          >
            Le nostre offerte di credito
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
