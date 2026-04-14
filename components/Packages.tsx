import AnimateIn from "@/components/AnimateIn";

const packages = [
  {
    name: "Básico",
    emoji: "🎈",
    price: "5,200",
    duration: "8 horas de evento",
    features: [
      "Terraza techada",
      "Mobiliario para 50 personas",
      "Mesas y sillas",
      "Mantelería blanca",
      "Cubremanteles en el color que elijas",
      "Estacionamiento",
    ],
    cta: "Reservar Básico",
    popular: false,
    highlight: "",
  },
  {
    name: "Diamante",
    emoji: "💎",
    price: "5,700",
    duration: "8 horas de evento",
    features: [
      "Terraza techada",
      "Mobiliario para 80 personas",
      "Mesas y sillas",
      "Mantelería blanca",
      "Cubremanteles en el color que elijas",
      "Estacionamiento",
    ],
    cta: "Reservar Diamante",
    popular: true,
    highlight: "Más Popular",
  },
  {
    name: "Premium",
    emoji: "👑",
    price: "6,800",
    duration: "8 horas de evento",
    features: [
      "Terraza techada",
      "Mobiliario para 100 personas",
      "Mesas y sillas",
      "Mantelería blanca",
      "Cubremanteles en el color que elijas",
      "Estacionamiento",
      "Inflable incluido",
      "Invitación digital personalizada",
    ],
    cta: "Reservar Premium",
    popular: false,
    highlight: "Completo",
  },
];

export default function Packages() {
  return (
    <section
      id="paquetes"
      className="py-20 bg-gradient-to-b from-diamante-light to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="inline-block bg-diamante-purple/10 text-diamante-purple px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Paquetes y Precios
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Paquetes y Precios
              <br />
              <span className="text-diamante-pink">Salón de Fiestas Querétaro</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Todos los paquetes incluyen 8 horas de evento. Aparta tu fecha con
              solo <strong>$1,000</strong>.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <AnimateIn key={pkg.name} delay={i * 120} direction="up">
              <div
                className={`relative rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col ${
                  pkg.popular
                    ? "bg-gradient-to-br from-diamante-purple to-diamante-pink text-white shadow-2xl scale-105"
                    : "bg-white text-gray-900 shadow-lg border border-gray-100"
                }`}
              >
                {pkg.highlight && (
                  <div
                    className={`absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-1.5 rounded-full text-sm font-bold shadow-lg ${
                      pkg.popular
                        ? "bg-diamante-gold text-white"
                        : "bg-diamante-purple text-white"
                    }`}
                  >
                    {pkg.highlight}
                  </div>
                )}

                <div className="text-center mb-6">
                  <span className="text-4xl">{pkg.emoji}</span>
                  <h3 className="font-heading text-2xl font-bold mt-2">{pkg.name}</h3>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">${pkg.price}</span>
                    <span className={`text-sm ml-1 ${pkg.popular ? "text-white/70" : "text-gray-500"}`}>
                      MXN
                    </span>
                  </div>
                  <p className={`text-sm mt-1 font-medium ${pkg.popular ? "text-white/80" : "text-diamante-purple"}`}>
                    {pkg.duration}
                  </p>
                </div>

                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className={`text-sm mt-0.5 font-bold ${pkg.popular ? "text-diamante-gold" : "text-diamante-purple"}`}>
                        ✓
                      </span>
                      <span className={`text-sm ${pkg.popular ? "text-white/90" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={`https://wa.me/524421118867?text=Hola%2C%20me%20interesa%20el%20Paquete%20${encodeURIComponent(pkg.name)}%20de%20Terraza%20Diamante.%20%C2%BFMe%20pueden%20dar%20m%C3%A1s%20informaci%C3%B3n%3F`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3.5 rounded-full font-bold transition-all hover:scale-105 ${
                    pkg.popular
                      ? "bg-white text-diamante-purple hover:bg-gray-100"
                      : "bg-diamante-purple text-white hover:bg-diamante-purple-dark"
                  }`}
                >
                  {pkg.cta}
                </a>
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={400}>
          <p className="text-center text-gray-500 mt-8 text-sm">
            * Precios sujetos a cambios. Aparta tu fecha con $1,000 de anticipo.
            Saldo restante a liquidar 15 días antes del evento.
          </p>
        </AnimateIn>
      </div>
    </section>
  );
}
