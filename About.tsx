import { Award, Clock, Users, Wrench } from 'lucide-react';

const stats = [
  { icon: Clock, value: '10+', label: 'Lat doświadczenia' },
  { icon: Users, value: '350+', label: 'Zadowolonych klientów' },
  { icon: Award, value: '4.7/5', label: 'Ocena w Google' },
  { icon: Wrench, value: '100%', label: 'Realizacji na czas' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-sm overflow-hidden aspect-[4/5]">
              <img
                src="https://images.pexels.com/photos/8961065/pexels-photo-8961065.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Fachowiec przy pracy"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div
              className="absolute -bottom-6 -right-6 bg-white rounded-sm shadow-xl p-6 max-w-[180px]"
              style={{ border: '2px solid #B8960C' }}
            >
              <p className="text-3xl font-bold" style={{ color: '#B8960C', fontFamily: 'Playfair Display, serif' }}>10+</p>
              <p className="text-sm text-gray-600 mt-1 leading-tight">lat precyzji i doświadczenia</p>
            </div>
          </div>

          {/* Content side */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#B8960C' }}>
              O nas
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Pasja do perfekcji w każdym detalu
            </h2>
            <p className="text-gray-600 leading-relaxed mb-5">
              Dream House to zespół doświadczonych fachowców, którzy traktują każde zlecenie jak własny projekt. Nasza firma powstała z miłości do rzemiosła i przekonania, że remont powinien być nie tylko ładny, ale i trwały.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Specjalizujemy się w glazurnictwie, wykończeniach wnętrz oraz kompleksowych remontach. Nasz mistrz Pan Paweł znany jest z wyjątkowej precyzji i sumienności — klienci wracają do nas, bo wiedzą, że każdy centymetr zostanie wykonany z najwyższą starannością.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#F7F3E8' }}>
                    <Icon className="w-5 h-5" style={{ color: '#B8960C' }} />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-gray-900">{value}</p>
                    <p className="text-sm text-gray-500">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
