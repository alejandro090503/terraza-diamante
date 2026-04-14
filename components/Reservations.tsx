import AnimateIn from "@/components/AnimateIn";
import { GradientCard } from "@/components/ui/gradient-card";

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "Contáctanos",
    description:
      "Escríbenos por WhatsApp para verificar disponibilidad en la fecha que deseas.",
  },
  {
    number: "02",
    icon: "💰",
    title: "Aparta con $1,000",
    description:
      "Con un anticipo de $1,000 tu fecha queda confirmada y reservada exclusivamente para ti.",
  },
  {
    number: "03",
    icon: "📅",
    title: "Liquida 15 días antes",
    description:
      "El saldo restante del paquete elegido se cubre 15 días antes de la fecha de tu evento.",
  },
  {
    number: "04",
    icon: "🎉",
    title: "¡A celebrar!",
    description:
      "El día de tu evento todo estará listo. Solo llega y disfruta con tus invitados.",
  },
];

export default function Reservations() {
  return (
    <section
      id="reservaciones"
      className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-white"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-16">
            <span className="inline-block bg-diamante-gold/15 text-amber-700 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Reservaciones
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Aparta tu fecha
              <br />
              <span className="text-diamante-gold">con solo $1,000</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Reservar es fácil y rápido. Asegura tu fecha hoy antes de que la
              tome alguien más.
            </p>
          </div>
        </AnimateIn>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {steps.map((step, i) => (
            <AnimateIn key={i} delay={i * 120} direction="up">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100 hover:shadow-lg transition-shadow duration-300 text-center h-full">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-diamante-gold to-amber-500 text-white font-heading font-bold text-lg mb-4 shadow-lg">
                  {step.number}
                </div>
                <div className="text-3xl mb-3">{step.icon}</div>
                <h3 className="font-heading text-lg font-bold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </AnimateIn>
          ))}
        </div>

        {/* CTA */}
        <AnimateIn delay={200} direction="fade">
          <GradientCard containerClassName="rounded-3xl shadow-2xl" className="p-8 md:p-12 text-center text-white">
            <div className="text-5xl mb-4">💎</div>
            <h3 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              ¡Tu fiesta perfecta te espera!
            </h3>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto">
              No dejes pasar tu fecha. Escríbenos ahora y en minutos tendrás tu
              evento apartado.
            </p>
            <a
              href="https://wa.me/524421118867?text=Hola%2C%20quiero%20apartar%20una%20fecha%20en%20Terraza%20Diamante.%20%C2%BFTienen%20disponibilidad%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white text-diamante-purple px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-100 transition-all hover:scale-105 shadow-xl"
            >
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.763-6.182-2.052l-.432-.334-3.29 1.103 1.103-3.29-.334-.432A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Reservar por WhatsApp
            </a>
          </GradientCard>
        </AnimateIn>
      </div>
    </section>
  );
}
