import React, { useState } from 'react';

const PretImmo: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);
  const [answers, setAnswers] = useState({ question1: '', question2: '' });
  const [showForm, setShowForm] = useState(false);

  const toggleModal = () => setModalOpen(!isModalOpen);

  const handleSubmit = () => {
    if (isAccepted) {
      setModalOpen(false);
      setShowForm(true);
    } else {
      alert('Per favore, accetta le condizioni per continuare.');
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <section id="pret-immobilier" className="pt-12  px-6 md:px-20">
        <h2 className="text-3xl font-bold text-yellow-600 mb-4">Prestito Immobiliare</h2>

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-blue-900 mb-2">Realizza il tuo sogno immobiliare</h1>
          <div className="border-t-4 border-yellow-500 w-16 mb-4"></div>
          <p className="text-gray-700">
            Che si tratti dell'acquisto di una casa, di un appartamento o della costruzione della tua futura residenza, 
            il nostro prestito immobiliare ti accompagna in ogni fase. Approfitta di condizioni flessibili e adattate al tuo budget.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-blue-900 mb-2">Una soluzione adatta al tuo profilo</h1>
          <div className="border-t-4 border-yellow-500 w-16 mb-4"></div>
          <p className="text-gray-700">
            Analizziamo la tua situazione finanziaria per offrirti una proposta personalizzata, che tu sia un primo acquirente, un investitore o in cerca di una seconda casa. 
            Con tassi competitivi e supporto esperto, avanzare nel tuo progetto sarà sereno.
          </p>
        </div>

        <div className="mb-6">
          <h1 className="text-xl font-semibold text-blue-900 mb-2">Un supporto chiaro e veloce</h1>
          <div className="border-t-4 border-yellow-500 w-16 mb-4"></div>
          <p className="text-gray-700">
            Dalla simulazione al rilascio dei fondi, il nostro processo di prestito immobiliare è trasparente e veloce. 
            I nostri consulenti sono a tua disposizione per rispondere a tutte le tue domande e aiutarti ad affrontare ogni fase con fiducia.
          </p>
        </div>

        <a
          onClick={toggleModal}
          className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-yellow-500 transition cursor-pointer"
        >
          Fai una richiesta
        </a>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded w-96">
            <h2 className="text-2xl font-semibold mb-4">Termini e Condizioni</h2>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700">Qual è la tua situazione finanziaria attuale?</label>
                <input
                  type="text"
                  name="question1"
                  value={answers.question1}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700">Hai un contributo personale?</label>
                <input
                  type="text"
                  name="question2"
                  value={answers.question2}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded"
                />
              </div>

              <div className="mb-4">
                <label className="inline-flex items-center text-gray-700">
                  <input
                    type="checkbox"
                    checked={isAccepted}
                    onChange={() => setIsAccepted(!isAccepted)}
                    className="form-checkbox"
                  />
                  <span className="ml-2">Accetto i termini e le condizioni</span>
                </label>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                className="bg-blue-900 text-white px-6 py-2 rounded hover:bg-yellow-500 transition"
              >
                Passa al modulo
              </button>
              <button
                type="button"
                onClick={toggleModal}
                className="ml-4 text-gray-500 hover:text-gray-700"
              >
                Chiudi
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Modulo di richiesta */}
      {showForm && (
        <section className="bg-white p-8 rounded shadow-lg max-w-xl mx-auto mt-8">
          <h3 className="text-2xl font-semibold text-blue-900 mb-4">Modulo di richiesta del prestito</h3>

          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1">Tipo di prestito</label>
              <input
                type="text"
                value="Prestito Immobiliare"
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
        </section>
      )}
    </>
  );
};

export default PretImmo;
