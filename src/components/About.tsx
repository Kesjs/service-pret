import { motion } from 'framer-motion';
import { FileText, ThumbsUp, Clock } from 'lucide-react';

export default function About() {
  return (
    <section id="à propos" className="bg-gradient-to-br from-yellow-50 via-yellow-100 to-yellow-200 py-20 text-gray-800">
      <div className="container mx-auto px-6">
        {/* Titolo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-yellow-900">Chi siamo</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Dal 2003 accompagniamo i nostri clienti con soluzioni di finanziamento su misura.
            Il nostro obiettivo? Il tuo successo finanziario.
          </p>
        </motion.div>

        {/* Bloc introduttivo con immagine del team */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="md:flex md:items-center md:gap-12 mb-20"
        >
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80"
            alt="Il nostro team"
            className="w-full md:w-1/2 rounded-xl shadow-lg mb-8 md:mb-0"
          />
          <div className="md:w-1/2">
            <h3 className="text-2xl font-semibold mb-4 text-yellow-900">Un team impegnato ed esperto</h3>
            <p className="text-gray-700 mb-3">
              Siamo in questo settore dal <strong>1987</strong> e offriamo i migliori servizi.
              Scopri come i nostri servizi possono trasformare la tua vita finanziaria.
            </p>
            <p className="text-gray-700">
              Un’azienda specializzata nel credito al consumo.
              Ti offriamo <strong>soluzioni personalizzate</strong> per tutte le tue esigenze di finanziamento.
            </p>
          </div>
        </motion.div>

        {/* Fasi del processo di prestito */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {[
            {
              icon: <FileText className="w-8 h-8 text-yellow-600" />,
              title: '1. Compila la tua richiesta',
              desc: 'Accedi al modulo online in pochi clic. Inserisci i tuoi dati personali e l’importo desiderato.'
            },
            {
              icon: <Clock className="w-8 h-8 text-yellow-600" />,
              title: '2. Elaborazione rapida',
              desc: 'Il nostro team esamina la tua richiesta e ti risponde entro 24 ore, in base al tuo profilo e alle tue esigenze.'
            },
            {
              icon: <ThumbsUp className="w-8 h-8 text-yellow-600" />,
              title: '3. Finanziamento immediato',
              desc: 'Una volta approvata, riceverai i fondi rapidamente e potrai realizzare i tuoi progetti senza attese.'
            }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h4 className="text-xl font-semibold mb-2 text-yellow-800">{step.title}</h4>
              <p className="text-gray-600">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Statistiche / Performance */}
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            { value: '90%', label: 'Soddisfazione del cliente' },
            { value: '80%', label: 'Performance' },
            { value: '70%', label: 'Esperienza' }
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-yellow-50 py-8 rounded-xl shadow text-yellow-900"
            >
              <div className="text-4xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-700 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
