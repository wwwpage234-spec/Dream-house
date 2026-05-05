import { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputClass =
    'w-full px-4 py-3 rounded-sm border border-gray-200 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-yellow-600 transition-colors duration-200 bg-white';

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#B8960C' }}>
            Kontakt
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Porozmawiajmy o Twoim remoncie
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Wypełnij formularz, a oddzwonimy w ciągu 24 godzin. Wycena jest zawsze bezpłatna.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact info */}
          <div className="md:col-span-2 space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Dane kontaktowe</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: 'Telefon', value: '+48 XXX XXX XXX', href: 'tel:+48000000000' },
                  { icon: Mail, label: 'E-mail', value: 'kontakt@dreamhouse.pl', href: 'mailto:kontakt@dreamhouse.pl' },
                  { icon: MapPin, label: 'Obszar działania', value: 'Cała Polska', href: '#' },
                ].map(({ icon: Icon, label, value, href }) => (
                  <a key={label} href={href} className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:opacity-80 transition-opacity" style={{ backgroundColor: '#F7F3E8' }}>
                      <Icon className="w-5 h-5" style={{ color: '#B8960C' }} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 mb-0.5">{label}</p>
                      <p className="text-sm font-medium text-gray-800">{value}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Map placeholder */}
            <div className="rounded-sm overflow-hidden border border-gray-100 shadow-sm">
              <iframe
                title="Mapa Dream House"
                src="https://www.openstreetmap.org/export/embed.html?bbox=20.9,52.1,21.3,52.3&layer=mapnik"
                className="w-full h-48"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {sent ? (
              <div className="flex flex-col items-center justify-center h-full gap-4 py-16 text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ backgroundColor: '#F7F3E8' }}>
                  <CheckCircle2 className="w-8 h-8" style={{ color: '#B8960C' }} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Wiadomość wysłana!</h3>
                <p className="text-gray-500 max-w-sm">
                  Dziękujemy za kontakt. Odezwiemy się w ciągu 24 godzin z bezpłatną wyceną.
                </p>
                <button
                  onClick={() => { setSent(false); setForm({ name: '', phone: '', email: '', service: '', message: '' }); }}
                  className="text-sm font-medium underline"
                  style={{ color: '#B8960C' }}
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Imię i nazwisko *</label>
                    <input
                      type="text"
                      required
                      placeholder="Jan Kowalski"
                      className={inputClass}
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-600 mb-1.5">Telefon *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+48 000 000 000"
                      className={inputClass}
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">E-mail</label>
                  <input
                    type="email"
                    placeholder="jan@example.com"
                    className={inputClass}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Rodzaj usługi</label>
                  <select
                    className={inputClass}
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                  >
                    <option value="">Wybierz usługę...</option>
                    <option>Glazurnictwo</option>
                    <option>Wykończenia wnętrz</option>
                    <option>Remont kompleksowy</option>
                    <option>Inne</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1.5">Opis projektu *</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Opisz krótko czego potrzebujesz — metraż, zakres prac, termin..."
                    className={inputClass}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 px-8 py-4 rounded-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                  style={{ backgroundColor: '#B8960C' }}
                >
                  <Send className="w-4 h-4" />
                  Wyślij zapytanie o bezpłatną wycenę
                </button>
                <p className="text-xs text-gray-400 text-center">
                  Odpowiadamy w ciągu 24 godzin roboczych.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
