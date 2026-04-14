import AnimateIn from "@/components/AnimateIn";

const services = [
  {
    icon: "🏗️",
    title: "Terraza Techada",
    description:
      "Espacio amplio y cómodo para hasta 100 personas, protegido del sol y la lluvia. Ideal para cualquier tipo de celebración.",
  },
  {
    icon: "🪑",
    title: "Mobiliario Completo",
    description:
      "Mesas, sillas, mantelería blanca y cubremanteles en el color que elijas. Puedes combinar colores para tu decoración.",
  },
  {
    icon: "🎪",
    title: "Inflable",
    description:
      "Contamos con inflable para los más pequeños. Incluido en el Paquete Premium y disponible como servicio adicional.",
  },
  {
    icon: "🎨",
    title: "Estructuras para Decoración",
    description:
      "Aro, marco y columnas disponibles para que montes tu propia decoración temática. Tú decides el estilo.",
  },
  {
    icon: "🚗",
    title: "Estacionamiento",
    description:
      "Estacionamiento gratuito para tus invitados. Llega sin preocupaciones y enfócate en disfrutar.",
  },
  {
    icon: "🌮",
    title: "Espacio para Servicios Externos",
    description:
      "¿Quieres taquiza, carnitas o bufet? Hay espacio habilitado para el servicio de comida de tu preferencia.",
  },
  {
    icon: "📅",
    title: "Decoración un Día Antes",
    description:
      "Puedes instalar toda tu decoración el día anterior al evento. Llega el día de la fiesta con todo listo.",
  },
  {
    icon: "🚻",
    title: "Baños Limpios y Abastecidos",
    description:
      "Los baños se entregan completamente limpios y abastecidos para tu evento. Tus invitados siempre encontrarán higiene y confort.",
  },
  {
    icon: "💰",
    title: "Aparta con Solo $1,000",
    description:
      "Reserva tu fecha con un anticipo de $1,000. El saldo restante se liquida 15 días antes de tu evento.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="inline-block bg-diamante-light text-diamante-purple px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Nuestros Servicios
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Servicios incluidos en tu
              <br />
              <span className="text-diamante-purple">salón de fiestas en Querétaro</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Terraza Diamante es el salón de fiestas infantiles en Querétaro ideal para que tú y tus invitados disfruten sin preocupaciones. Ubicados en Santiago de Querétaro, ofrecemos espacio, mobiliario y todo lo necesario para tu celebración.
            </p>
          </div>
        </AnimateIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <AnimateIn key={service.title} delay={i * 75} direction="up">
              <div className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-diamante-purple/20 hover:-translate-y-1 h-full">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>
      </div>
    </section>
  );
}
