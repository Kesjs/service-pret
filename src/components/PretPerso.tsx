import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrestitoPersonale: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const handleSubmit = () => {
    if (isAccepted) {
      setModalOpen(false);
      setTimeout(() => setShowForm(true), 300);
    } else {
      alert("Si prega di accettare i termini e le condizioni prima di inviare.");
    }
  };

  return (
    <>
      <section id="pret-perso" className="pt-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">Prestito Personale</h2>

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-blue-900 mb-2">Realizza liberamente i tuoi progetti</h1>
          <div className="border-t-4 border-yellow-500 w-16 mb-4"></div>
          <p className="text-gray-700">
            Il prestito personale ti permette di finanziare i tuoi desideri senza doverne giustificare l'uso: viaggi, lavori, matrimonio o imprevisti.
            Usa liberamente i fondi secondo le tue necessità.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-blue-900 mb-2">Flessibilità e semplicità</h1>
          <div className="border-t-4 border-yellow-500 w-16 mb-4"></div>
          <p className="text-gray-700">
            Goditi rate mensili flessibili e un tasso interessante. Il nostro prestito personale si adatta al tuo budget per offrirti serenità nella vita quotidiana.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-blue-900 mb-2">Richiesta rapida e sicura</h1>
          <div className="border-t-4 border-yellow-500 w-16 mb-4"></div>
          <p className="text-gray-700">
            Invia la tua richiesta online in pochi clic. Riceverai una risposta rapida per realizzare i tuoi progetti senza attese.
          </p>
        </div>

        <button
          onClick={toggleModal}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          Invia una richiesta
        </button>
      </section>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white p-6 rounded w-96 shadow-lg"
            >
              <h2 className="text-2xl font-semibold mb-4">Termini e Condizioni</h2>
              <div className="max-h-40 overflow-y-auto mb-4 text-sm text-gray-700 border p-3 rounded">
                <p>
                  Inviando una richiesta di prestito personale, acconsenti al trattamento dei tuoi dati personali.
                  Dichiari la veridicità delle informazioni fornite e ti impegni a rispettare le scadenze stabilite nel contratto.
                  In caso di dichiarazioni false, la tua richiesta potrebbe essere rifiutata.
                </p>
              </div>
              <label className="inline-flex items-center mb-4 text-gray-700">
                <input
                  type="checkbox"
                  checked={isAccepted}
                  onChange={() => setIsAccepted(!isAccepted)}
                  className="form-checkbox"
                />
                <span className="ml-2">Accetto i termini e le condizioni</span>
              </label>
              <div className="flex justify-end mt-2">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-900 text-white px-4 py-2 rounded hover:bg-yellow-500 transition"
                >
                  Continua
                </button>
                <button
                  onClick={toggleModal}
                  className="ml-3 text-gray-500 hover:text-gray-700"
                >
                  Chiudi
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showForm && (
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-8 rounded shadow-lg max-w-xl mx-auto mt-8"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Modulo di Richiesta - Prestito Personale</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Tipo di prestito</label>
                <input
                  type="text"
                  value="Prestito Personale"
                  readOnly
                  className="w-full px-3 py-2 border border-gray-300 rounded bg-gray-100 text-gray-500 cursor-not-allowed"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Nome Completo</label>
                <input type="text" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Importo desiderato (€)</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Durata del prestito (mesi)</label>
                <input type="number" className="w-full px-3 py-2 border border-gray-300 rounded" />
              </div>

              <button
                type="submit"
                className="bg-yellow-500 text-white px-6 py-2 rounded hover:bg-blue-900 transition"
              >
                Invia la richiesta
              </button>
            </form>
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

export default PrestitoPersonale;
