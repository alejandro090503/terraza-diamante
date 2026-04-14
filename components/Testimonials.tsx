const testimonials = [
  {
    name: "María González",
    event: "Cumpleaños de Sofía (5 años)",
    quote:
      "Increíble lugar. Los niños no pararon de jugar en los inflables. La decoración quedó hermosa y el personal muy atento. ¡Sofía no deja de hablar de su fiesta!",
    stars: 5,
  },
  {
    name: "Carlos Ramírez",
    event: "Cumpleaños de Diego (7 años)",
    quote:
      "Reservamos el paquete Diamante y valió cada peso. El sonido excelente, los inflables en perfecto estado y el espacio muy limpio. Super recomendado.",
    stars: 5,
  },
  {
    name: "Ana Martínez",
    event: "Fiesta temática de Princesas",
    quote:
      "La decoración de princesas superó nuestras expectativas. Todo organizado, puntual y con mucho detalle. Mis hijas quedaron encantadas. Ya estamos planeando la próxima.",
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-20 bg-gradient-to-br from-diamante-purple/5 via-diamante-pink/5 to-diamante-blue/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-diamante-gold/10 text-diamante-gold px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Testimonios
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Lo que dicen los
            <br />
            <span className="text-diamante-gold">papás felices</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            La satisfacción de nuestras familias es nuestra mejor carta de
            presentación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <span key={i} className="text-diamante-gold text-xl">
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="border-t pt-4">
                <p className="font-heading font-bold text-gray-900">{t.name}</p>
                <p className="text-sm text-diamante-purple">{t.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
