const faqs = [
  {
    question: "¿Cuáles son los horarios de la terraza?",
    answer:
      "Lunes a Viernes de 3:00 PM a 11:30 PM. Sábados y Domingos de 7:00 AM a 11:30 PM. Cada evento tiene una duración de 8 horas.",
  },
  {
    question: "¿Puedo decorar el día antes de mi evento?",
    answer:
      "¡Sí! Puedes instalar toda tu decoración un día antes del evento y dejarla lista. Así el día de la fiesta llegás con todo listo para disfrutar.",
  },
  {
    question: "¿Tienen equipo de sonido?",
    answer:
      "No contamos con equipo de sonido propio. El cliente puede traer su propio equipo o contratar un servicio externo de DJ o sonido.",
  },
  {
    question: "¿Puedo traer mi propio servicio de comida?",
    answer:
      "¡Claro que sí! Contamos con espacio disponible para servicios externos como taquizas, carnitas, bufet y más. Tú eliges el servicio de comida de tu preferencia.",
  },
  {
    question: "¿Cómo aparto mi fecha?",
    answer:
      "Con solo $1,000 de anticipo apartamos tu fecha. El saldo restante se liquida 15 días antes del evento. Para reservar, escríbenos por WhatsApp.",
  },
  {
    question: "¿Solo hacen eventos infantiles?",
    answer:
      "No, ¡Terraza Diamante es para todo tipo de celebraciones! Cumpleaños infantiles y de adultos, XV años, reuniones familiares, graduaciones, baby showers y más.",
  },
  {
    question: "¿Tienen inflable?",
    answer:
      "Sí, contamos con inflable. Viene incluido en el Paquete Premium. También está disponible como servicio adicional para los paquetes Básico y Diamante.",
  },
  {
    question: "¿Qué colores de cubremanteles tienen disponibles?",
    answer:
      "Tenemos una amplia variedad de colores en cubremanteles. Tú eliges el color que combine con tu evento, ¡incluso puedes combinar varios colores!",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-diamante-blue/10 text-diamante-blue px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Preguntas Frecuentes
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Preguntas Frecuentes —{" "}
            <span className="text-diamante-blue">Terraza Diamante Querétaro</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Aquí respondemos las preguntas más comunes de nuestros clientes.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300 hover:border-diamante-purple/30"
            >
              <summary className="flex items-center justify-between p-6 text-left bg-white hover:bg-gray-50 transition-colors cursor-pointer list-none">
                <span className="font-heading font-bold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <span className="text-diamante-purple text-2xl transition-transform duration-300 shrink-0 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="px-6 pb-6">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
