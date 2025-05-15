import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const creditOffers = [
  { title: 'Prêt Personnel', href: '/nos-offres/pret-personnel' },
  { title: 'Prêt Immobilier', href: '/nos-offres/pret-immobilier' },
  { title: 'Prêt Auto', href: '/nos-offres/pret-auto' },
  { title: 'Prêt Professionnel', href: '/nos-offres/pret-pro' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false); // État pour afficher le contenu de NosOffres

  const handleNosOffresClick = () => {
    setIsContentVisible(!isContentVisible); // Bascule la visibilité du composant NosOffres
    setShowDropdown(false); // Ferme le dropdown quand on clique sur NosOffres
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-yellow-500"
          >
 Servizi - Prestito          </motion.h1>

          <nav className="hidden md:flex space-x-8 items-center">
              {['Home', 'Servizi', 'Chi siamo', 'Contatti'].map((item) => (
              <motion.a
                key={item}
                href={item === 'Accueil' ? '#hero' : `#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-yellow-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}

            {/* Nos offres crédit */}
            <div
              className="relative"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <motion.button
                className="flex items-center text-gray-600 hover:text-yellow-500 transition-all"
                whileHover={{ scale: 1.05 }}
                onClick={handleNosOffresClick} // Handle click on "Nos Offres"
              >
                Le nostre offerte di credito <ChevronDown className="ml-1 w-4 h-4" />
              </motion.button>

              <AnimatePresence>
                {showDropdown && !isContentVisible && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute bg-white mt-2 shadow-xl rounded-lg py-2 w-56 z-50"
                  >
                    {creditOffers.map((offer, index) => (
                      <li key={index}>
                        <Link
                          to={offer.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-yellow-100 hover:text-yellow-600 transition-all"
                          onClick={() => setShowDropdown(false)}
                        >
                          {offer.title}
                        </Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Call Button for larger screens */}
          <motion.div
            className="hidden md:flex items-center"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <a
              href="tel:+33123456789"
              className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              <span>Ci chiami</span>
            </a>
          </motion.div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-yellow-500"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute left-0 right-0 top-20 bg-white shadow-lg"
          >
            <div className="space-y-4 px-4 py-4 flex flex-col justify-center items-center">
              {/* Menu Items */}
              {['Home', 'Servizi', 'Chi siamo', 'Contatti'].map((item) => (
                <motion.a
                  key={item}
                  href={item === 'Accueil' ? '#hero' : `#${item.toLowerCase()}`}
                  className="block text-gray-600 hover:text-yellow-500 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}

              {/* Nos offres crédit */}
              <motion.button
                className="flex items-center text-gray-600 hover:text-yellow-500 transition-all"
                whileHover={{ scale: 1.05 }}
                onClick={handleNosOffresClick} // Handle click on "Nos Offres"
              >
                Le nostre offerte di credito<ChevronDown className="ml-1 w-4 h-4" />
              </motion.button>

              {isContentVisible && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className=" mt-2 shadow-xl rounded-lg py-2 w-full"
                >
                  {creditOffers.map((offer, index) => (
                    <li key={index}>
                      <Link
                        to={offer.href}
                        className="block px-4 py-2 text-gray-700 hover:bg-yellow-100 hover:text-yellow-600 transition-all"
                        onClick={() => setIsMenuOpen(false)} // Close menu when selecting offer
                      >
                        {offer.title}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}

              {/* Call Button for Mobile */}
              <motion.div
                className="flex items-center bg-yellow-500 text-white px-4 py-2 rounded-full hover:bg-yellow-600 transition-colors mt-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <a
                  href="tel:+33123456789"
                  className="flex items-center text-white"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  <span>Ci chiami</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
