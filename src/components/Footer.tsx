import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-4">Finances-service</h3>
            <p className="text-gray-400">
              Soluzioni di credito personalizzate per dare vita ai tuoi progetti personali o professionali.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-xl font-bold mb-4">I Nostri Prestiti</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#nos-offres" className="hover:text-yellow-400 transition">Prestito Auto</a></li>
              <li><a href="#nos-offres" className="hover:text-yellow-400 transition">Prestito Immobiliare</a></li>
              <li><a href="#nos-offres" className="hover:text-yellow-400 transition">Prestito Professionale</a></li>
              <li><a href="#nos-offres" className="hover:text-yellow-400 transition">Prestito Personale</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold mb-4">Contatto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>42 Avenue de la Marina</li>
              <li>75008 Cotonou</li>
              <li>+229 0197914922</li>
              <li>support@finances-service.com</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-xl font-bold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-yellow-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Finances-service. Tutti i diritti riservati.</p>
        </motion.div>
      </div>
    </footer>
  );
}
