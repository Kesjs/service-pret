import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CreditCard, Home, DollarSign, Shield } from 'lucide-react';
import { useState } from 'react';

const loanServices = [
  {
    icon: CreditCard,
    title: 'Prêt Personnel',
    description: 'Obtenez un prêt pour des projets personnels ou des besoins urgents.',
  },
  {
    icon: Home,
    title: 'Prêt Immobilier',
    description: 'Financez l’achat de votre maison ou appartement avec des taux compétitifs.',
  },
  {
    icon: DollarSign,
    title: 'Prêt Auto',
    description: 'Accédez à un financement pour l’achat de votre véhicule neuf ou d’occasion.',
  },
  {
    icon: Shield,
    title: 'Prêt Professionnel',
    description: 'Solution de financement pour les entrepreneurs et les petites entreprises.',
  },
];

export default function Services() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const [amount, setAmount] = useState(10000);
  const [duration, setDuration] = useState(12);
  const [interestRate, setInterestRate] = useState(5);

  const calculateMonthlyPayment = () => {
    const rate = interestRate / 100 / 12;
    const monthlyPayment = (amount * rate) / (1 - Math.pow(1 + rate, -duration));
    return isFinite(monthlyPayment) ? monthlyPayment.toFixed(2) : "0.00";
  };

  const testimonials = [
    {
      name: 'Sophie L.',
      feedback: 'Grâce à ce prêt, j’ai pu acheter ma maison de rêve. Le processus a été rapide et transparent.',
      avatar: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
    {
      name: 'Michel D.',
      feedback: 'Un prêt simple et flexible pour acheter ma voiture. Les conditions étaient parfaites.',
      avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
      name: 'Julien R.',
      feedback: 'Je recommande vivement. Le prêt professionnel m’a permis de financer mon entreprise.',
      avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  ];

  const stats = [
    { value: 10998, label: 'Prêts approuvés' },
    { value: 26, label: 'Années d\'expérience' },
    { value: 10990, label: 'Clients satisfaits' },
    { value: 143, label: 'Nos experts' },
  ];

  return (
    <section id="services" className="py-20 bg-yellow-50">
      <div className="container mx-auto px-4">
        {/* Titre Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Nos Services de Prêt</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Des solutions de financement personnalisées pour tous vos besoins
          </p>
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
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-4xl font-bold text-yellow-600">{stat.value}</h3>
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
              <div className="bg-yellow-200 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Calculez votre Prêt</h2>
          <p className="text-xl text-gray-600 mb-6">Estimez vos mensualités en quelques clics</p>

          <div className="space-y-6 max-w-2xl mx-auto">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Montant du prêt (€)</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Durée (en mois)</label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">Taux d'intérêt (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <AnimatePresence>
              <motion.div
                key={calculateMonthlyPayment()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-semibold text-gray-800 mt-4">
                  Mensualité estimée :
                  <span className="text-yellow-600"> €{calculateMonthlyPayment()}</span>
                </h3>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Témoignages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Témoignages</h2>
          <p className="text-xl text-gray-600 mb-8">Ce que nos clients disent de nous</p>

          <div className="flex flex-wrap justify-center gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-8 rounded-xl shadow-lg max-w-xs text-center transition-transform"
              >
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <p className="text-lg font-semibold text-gray-900 mb-4">{testimonial.name}</p>
                <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
