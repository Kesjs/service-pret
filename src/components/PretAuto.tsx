import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PrestitoAuto: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const handleSubmit = () => {
    if (isAccepted) {
      setModalOpen(false);
      setTimeout(() => setShowForm(true), 300); // ritardo per una transizione migliore
    } else {
      alert("Accetta le condizioni prima di inviare.");
    }
  };

  return (
    <>
      <section id="prestito-auto" className="pt-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">Prestito Auto</h2>

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-blue-900 mb-2">Guida verso la libertà</h1>
          <div className="border-t-4 border-yellow-500 w-16 mb-4"></div>
          <p className="text-gray-700">
            Che tu voglia acquistare un veicolo nuovo o usato, il prestito auto è la soluzione ideale per finanziare il tuo acquisto senza attese.
            Semplifica le tue procedure e riparti al volante della tua auto in tutta tranquillità.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-blue-900 mb-2">Condizioni flessibili</h1>
          <div className="border-t-4 border-yellow-500 w-16 mb-4"></div>
          <p className="text-gray-700">
            Approfitta di un prestito auto a tasso vantaggioso, con rate mensili adatte al tuo budget. Che si tratti di un’auto da città, un SUV o un veicolo commerciale,
            la nostra offerta si adatta alle tue esigenze specifiche.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-blue-900 mb-2">Ottieni il finanziamento rapidamente</h1>
          <div className="border-t-4 border-yellow-500 w-16 mb-4"></div>
          <p className="text-gray-700">
            Grazie a un processo di richiesta rapido e 100% online, il tuo prestito può essere approvato in pochi giorni.
            Agisci senza aspettare e realizza il tuo progetto automobilistico già da oggi.
          </p>
        </div>

        <button
          onClick={toggleModal}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-yellow-500 transition"
        >
          Fai una richiesta
        </button>
      </section>

      {/* Modal con le condizioni */}
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
              <h2 className="text-2xl font-semibold mb-4">Condizioni Generali</h2>
              <div className="max-h-40 overflow-y-auto mb-4 text-sm text-gray-700 border p-3 rounded">
                <p>
                  Facendo una richiesta di prestito auto, accetti che i tuoi dati vengano trattati nell'ambito dello studio della tua pratica.
                  Ti impegni a fornire informazioni corrette e a rispettare i tempi di rimborso stabiliti dal contratto di prestito.
                  Qualsiasi dichiarazione falsa può comportare il rifiuto della pratica. Consulta le nostre condizioni sulla privacy per ulteriori informazioni.
                </p>
              </div>
              <label className="inline-flex items-center mb-4 text-gray-700">
                <input
                  type="checkbox"
                  checked={isAccepted}
                  onChange={() => setIsAccepted(!isAccepted)}
                  className="form-checkbox"
                />
                <span className="ml-2">Accetto le condizioni generali</span>
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

      {/* Modulo con animazione */}
      <AnimatePresence>
        {showForm && (
          <motion.section
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white p-8 rounded shadow-lg max-w-xl mx-auto mt-8"
          >
            <h3 className="text-2xl font-semibold text-blue-900 mb-4">Modulo di Richiesta - Prestito Auto</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-1">Tipo di prestito</label>
                <input
                  type="text"
                  value="Prestito Auto"
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

export default PrestitoAuto;
