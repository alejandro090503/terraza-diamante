"use client";

import AnimateIn from "@/components/AnimateIn";

const FACEBOOK_URL = "https://www.facebook.com/TerrazaDiamante6/";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <AnimateIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.png"
                alt="Terraza Diamante"
                className="h-20 w-auto object-contain mb-4"
                onError={(e) => {
                  const img = e.currentTarget;
                  img.style.display = "none";
                  const fallback = img.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = "flex";
                }}
              />
              <div className="items-center gap-2 mb-4 hidden">
                <span className="text-3xl">💎</span>
                <span className="font-heading text-2xl font-bold">Terraza Diamante</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                El lugar perfecto para celebrar los momentos más especiales en
                Querétaro.
              </p>
              <div className="flex items-center gap-4 mt-5">
                <a
                  href={FACEBOOK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a
                  href="https://wa.me/524421118867"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="text-gray-400 hover:text-green-400 transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" /><path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.763-6.182-2.052l-.432-.334-3.29 1.103 1.103-3.29-.334-.432A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="font-heading text-lg font-bold mb-4">Navegación</h3>
              <ul className="space-y-2">
                {[
                  ["#servicios", "Servicios"],
                  ["#paquetes", "Paquetes"],
                  ["#galeria", "Galería"],
                  ["#reservaciones", "Reservaciones"],
                  ["#faq", "Dudas Frecuentes"],
                  ["#contacto", "Contacto"],
                ].map(([href, label]) => (
                  <li key={href}>
                    <a href={href} className="text-gray-400 hover:text-diamante-gold transition-colors">
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-heading text-lg font-bold mb-4">Contacto</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-start gap-2">
                  <span>📍</span>
                  <span>
                    Calle Diamante 6, Col. El Tepetate
                    <br />
                    Santiago de Querétaro, Qro.
                  </span>
                </li>
                <li className="flex items-center gap-2">
                  <span>📱</span>
                  <a href="tel:+524421118867" className="hover:text-diamante-gold transition-colors">
                    +52 442 111 8867
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <span>🕐</span>
                  <span>
                    Lun – Vie: 3:00 PM – 11:30 PM
                    <br />
                    Sáb – Dom: 7:00 AM – 11:30 PM
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </AnimateIn>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Terraza Diamante. Todos los derechos
            reservados.
          </p>
          <a
            href={FACEBOOK_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold transition-colors text-sm"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            /TerrazaDiamante6
          </a>
        </div>
      </div>
    </footer>
  );
}
