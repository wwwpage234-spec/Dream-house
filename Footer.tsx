import { Home, Phone, Mail, MapPin } from 'lucide-react';

const links = [
  { label: 'O nas', href: '#about' },
  { label: 'Usługi', href: '#services' },
  { label: 'Opinie', href: '#testimonials' },
  { label: 'Galeria', href: '#gallery' },
  { label: 'Kontakt', href: '#contact' },
];

const services = ['Glazurnictwo', 'Wykończenia wnętrz', 'Remonty kompleksowe', 'Remont łazienki', 'Remont kuchni'];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#1A2540' }} className="text-gray-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-sm flex items-center justify-center" style={{ backgroundColor: '#B8960C' }}>
                <Home className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold text-white text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>
                Dream House
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Remonty i wykończenia wnętrz z pasją do perfekcji. Twój wymarzony dom w zasięgu ręki.
            </p>
          </div>

          {/* Nav */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Nawigacja</h4>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Usługi</h4>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-widest mb-5">Kontakt</h4>
            <ul className="space-y-4">
              {[
                { icon: Phone, text: '+48 XXX XXX XXX' },
                { icon: Mail, text: 'kontakt@dreamhouse.pl' },
                { icon: MapPin, text: 'Cała Polska' },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-3">
                  <Icon className="w-4 h-4 flex-shrink-0" style={{ color: '#B8960C' }} />
                  <span className="text-sm text-gray-400">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Dream House. Wszelkie prawa zastrzeżone.
          </p>
          <p className="text-xs text-gray-500">
            Remonty · Wykończenia wnętrz · Glazurnictwo
          </p>
        </div>
      </div>
    </footer>
  );
}
