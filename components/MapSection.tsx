import AnimateIn from "@/components/AnimateIn";

export default function MapSection() {
  return (
    <section id="ubicacion" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-12">
            <span className="inline-block bg-diamante-blue/10 text-diamante-blue px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Ubicación
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              ¿Cómo llegar?
            </h2>
            <p className="text-gray-600 text-lg mb-2">
              Calle Diamante 6, Col. El Tepetate, Santiago de Querétaro, Qro.
            </p>
            <a
              href="https://maps.google.com/?q=Calle+Diamante+6,+El+Tepetate,+Santiago+de+Queretaro,+Qro"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-diamante-purple font-semibold hover:underline text-sm"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Abrir en Google Maps
            </a>
          </div>
        </AnimateIn>
        <AnimateIn delay={150} direction="fade">
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://maps.google.com/maps?q=Calle+Diamante+6,+El+Tepetate,+Santiago+de+Queretaro,+Qro,+Mexico&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación de Terraza Diamante"
            />
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
