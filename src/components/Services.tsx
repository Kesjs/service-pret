import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CreditCard, Home, DollarSign, Shield } from 'lucide-react';
import { useState, useEffect } from 'react';
import CountUp from 'react-countup';
import { Users, Banknote, CheckCircle2, FileText } from 'lucide-react';



const loanServices = [
  {
    icon: CreditCard,
    title: 'Prestito Personale',
    description: 'Ottieni un prestito per progetti personali o esigenze urgenti.',
  },
  {
    icon: Home,
    title: 'Mutuo Immobiliare',
    description: 'Finanzia l’acquisto della tua casa o appartamento con tassi competitivi.',
  },
  {
    icon: DollarSign,
    title: 'Prestito Auto',
    description: 'Accedi a un finanziamento per l’acquisto del tuo veicolo nuovo o usato.',
  },
  {
    icon: Shield,
    title: 'Prestito Professionale',
    description: 'Soluzione di finanziamento per imprenditori e piccole imprese.',
  },
];


export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [amount, setAmount] = useState(10000);
  const [duration, setDuration] = useState(12);
  const [interestRate, setInterestRate] = useState(5);

  const [showFAQ, setShowFAQ] = useState<Record<number, boolean>>({});

  const calculateMonthlyPayment = () => {
    const rate = interestRate / 100 / 12;
    const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -duration));
    return isFinite(monthlyPayment) ? monthlyPayment.toFixed(2) : "0.00";
  };

 const testimonials = [
  {
    name: 'Sophie L.',
    feedback: 'Grazie a questo prestito, ho potuto acquistare la casa dei miei sogni. Il processo è stato rapido e trasparente.',
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'Michel D.',
    feedback: 'Un prestito semplice e flessibile per comprare la mia auto. Le condizioni erano perfette.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Michel D.',
    feedback: 'Un prestito semplice e flessibile per comprare la mia auto. Le condizioni erano perfette.',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Julien R.',
    feedback: 'Lo consiglio vivamente. Il prestito professionale mi ha permesso di finanziare la mia attività.',
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];


const stats = [
  { label: 'Clienti soddisfatti', value: 8500, icon: Users },
  { label: 'Importo erogato (€)', value: 725000, icon: Banknote },
  { label: 'Tasso di approvazione (%)', value: 92, icon: CheckCircle2 },
  { label: 'Richieste elaborate', value:9420, icon: FileText },
];


 const faqQuestions = [
  {
    question: "Come posso seguire la mia richiesta di credito?",
    answer: "Puoi seguire lo stato della tua richiesta direttamente dal tuo spazio personale o contattare il nostro servizio clienti per maggiori informazioni.",
  },
  {
    question: "Quando riceverò una risposta alla mia richiesta di credito?",
    answer: "Le risposte vengono generalmente inviate entro 5-7 giorni lavorativi dal ricevimento di tutti i documenti richiesti.",
  },
  {
    question: "Quali documenti devo fornire per una richiesta di prestito?",
    answer: "I documenti richiesti includono un documento d’identità, una prova di residenza e le ultime tre buste paga.",
  },
  {
    question: "Quali sono le condizioni per ottenere un prestito?",
    answer: "Le condizioni variano a seconda del tipo di prestito, ma in generale è necessario avere un reddito stabile e una capacità di rimborso adeguata.",
  },
];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [, setTestimonialIndex] = useState(0);

  const toggleFAQ = (index: number) => {
    setShowFAQ((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  // Défilement automatique des témoignages
  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000); // 5000 ms = 5 secondes

    return () => clearInterval(interval); // Nettoyer l'intervalle à la fin
  }, [testimonials.length]);

  return (
    <section id="services" className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 py-20 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Titre Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">I nostri Servizi di Prestito</h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
Soluzioni di finanziamento personalizzate per tutte le tue esigenze          </p>
        </motion.div>

        {/* Statistiques */}
       <motion.div
  ref={ref}
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ duration: 0.6 }}
  className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-center mb-16"
>
  {stats.map((stat, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        type: 'spring',
        stiffness: 100,
      }}
      className="bg-gradient-to-br from-yellow-50 to-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-400 hover:scale-105 hover:shadow-xl transition-transform duration-300"
    >
      <h3 className="text-4xl font-bold text-yellow-600">
        {inView && <CountUp end={stat.value} duration={2} />}
      </h3>
      <p className="text-lg text-gray-600">{stat.label}</p>
    </motion.div>
  ))}
</motion.div>


        {/* Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {loanServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: 'spring',
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-xl shadow-lg transition-transform hover:shadow-xl"
            >
              <div className="bg-yellow-300 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <service.icon className="w-8 h-8 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Calculateur de Prêt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calcola il tuo Prestito</h2>
          <p className="text-xl text-gray-700 mb-6">Stima le tue rate in pochi clic</p>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Importo del prestito (€)</label>
             <input
  type="number"
  value={amount}
  onChange={(e) => setAmount(Number(e.target.value))}
  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:ring-2 transition-all duration-200 ease-in-out"
  placeholder="Montant du prêt"
  aria-label="Montant du prêt"
/>

            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Durata (in mesi)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:ring-2"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2"> Tasso d'interesse (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-yellow-500 focus:ring-2"
              />
            </div>

            <div className="text-xl font-semibold ">
 <p>
    Rata mensile stimata : <span className="text-yellow-600">{calculateMonthlyPayment()} €</span>
  </p>            </div>
          </div>
        </motion.div>

<motion.div
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ duration: 0.6 }}
  className="text-center mb-16 px-4"
>
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Recensioni dei nostri clienti</h2>
  <div className="flex flex-wrap justify-center gap-8">
    {testimonials.map((testimonial, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6, delay: index * 0.3 }}
        className="max-w-xs bg-transparent p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl hover:scale-105"
      >
        <div className="flex items-center mb-4">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full mr-4"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h3>
            <p className="text-gray-600">{testimonial.feedback}</p>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>




        {/* FAQ */}
        <motion.div
  initial={{ opacity: 0 }}
  animate={inView ? { opacity: 1 } : {}}
  transition={{ duration: 0.6 }}
  className="text-center mb-16 px-4"
>
  <h2 className="text-3xl font-bold text-gray-900 mb-8">Domande frequenti (FAQ)</h2>
  <div className="space-y-4">
    {faqQuestions.map((faq, index) => (
      <motion.div
        key={index}
        whileHover={{ backgroundColor: '#f3f4f6', scale: 1.02 }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.4 }}
        className="bg-white p-6 rounded-xl shadow-lg cursor-pointer transition-all"
      >
        <div
          className="flex justify-between items-center"
          onClick={() => toggleFAQ(index)}
        >
          <h3 className="text-xl font-semibold text-gray-900">{faq.question}</h3>
          <span className="text-yellow-600">{showFAQ[index] ? '−' : '+'}</span>
        </div>
        {showFAQ[index] && (
          <motion.p
            className="mt-4 text-gray-600"
            initial={{ opacity: 0 }}
            animate={showFAQ[index] ? { opacity: 1 } : {}}
            transition={{ duration: 0.3 }}
          >
            {faq.answer}
          </motion.p>
        )}
      </motion.div>
    ))}
  </div>
</motion.div>

      </div>
    </section>
  );
}
