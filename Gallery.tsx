const images = [
  {
    src: 'https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Łazienka',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Kuchnia',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/6585601/pexels-photo-6585601.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Glazura',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Salon',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/6585761/pexels-photo-6585761.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Detal wykończenia',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/1743227/pexels-photo-1743227.jpeg?auto=compress&cs=tinysrgb&w=800',
    label: 'Sypialnia',
    span: '',
  },
];

export default function Gallery() {
  return (
    <section id="gallery" style={{ backgroundColor: '#F9F8F6' }} className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#B8960C' }}>
            Realizacje
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nasze prace mówią same za siebie
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Każda realizacja to dowód na naszą precyzję i zaangażowanie. Zapraszamy do obejrzenia wybranych projektów.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px]">
          {images.map(({ src, label, span }, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-sm group cursor-pointer ${span}`}
            >
              <img
                src={src}
                alt={label}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <span className="text-white text-sm font-medium">{label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-sm font-semibold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: '#1A2540' }}
          >
            Porozmawiajmy o Twoim projekcie
          </a>
        </div>
      </div>
    </section>
  );
}
