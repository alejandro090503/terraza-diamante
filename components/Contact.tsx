"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    fecha: "",
    paquete: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const paqueteText = formData.paquete ? `Paquete%3A%20${encodeURIComponent(formData.paquete)}%0A` : "";
    const text =
      `Hola%2C%20quiero%20cotizar%20un%20evento%20en%20Terraza%20Diamante%3A%0A%0A` +
      `Nombre%3A%20${encodeURIComponent(formData.nombre)}%0A` +
      `Tel%C3%A9fono%3A%20${encodeURIComponent(formData.telefono)}%0A` +
      `Fecha%3A%20${encodeURIComponent(formData.fecha)}%0A` +
      `${paqueteText}` +
      `Mensaje%3A%20${encodeURIComponent(formData.mensaje)}`;
    window.open(`https://wa.me/524421118867?text=${text}`, "_blank");
  };

  return (
    <section
      id="contacto"
      className="py-20 bg-gradient-to-br from-diamante-purple to-diamante-purple-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm font-bold mb-4">
            Contacto
          </span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-white mb-4">
            ¿Listo para reservar?{" "}
            <span className="text-diamante-gold">¡Escríbenos!</span>
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Llena el formulario y te respondemos por WhatsApp, o escríbenos
            directo.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-heading text-2xl font-bold text-white mb-6 text-center lg:text-left">
                Información de contacto
              </h3>
              <div className="space-y-5">
                {[
                  {
                    icon: "📍",
                    label: "Dirección",
                    content: (
                      <p className="text-white/70 text-sm">
                        Calle Diamante 6, Col. El Tepetate
                        <br />
                        Santiago de Querétaro, Qro.
                      </p>
                    ),
                  },
                  {
                    icon: "📱",
                    label: "Teléfono",
                    content: (
                      <a
                        href="tel:+524421118867"
                        className="text-white/70 hover:text-white transition-colors text-sm"
                      >
                        +52 442 111 8867
                      </a>
                    ),
                  },
                  {
                    icon: "🕐",
                    label: "Horario",
                    content: (
                      <p className="text-white/70 text-sm">
                        Lun – Vie: 3:00 PM – 11:30 PM
                        <br />
                        Sáb – Dom: 7:00 AM – 11:30 PM
                      </p>
                    ),
                  },
                  {
                    icon: "💰",
                    label: "Anticipo para reservar",
                    content: (
                      <p className="text-white/70 text-sm">
                        Solo $1,000 aparta tu fecha
                        <br />
                        Saldo restante: 15 días antes
                      </p>
                    ),
                  },
                ].map(({ icon, label, content }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="w-9 h-9 shrink-0 flex items-center justify-center bg-white/15 rounded-xl text-lg">
                      {icon}
                    </span>
                    <div className="pt-0.5">
                      <p className="text-white font-semibold text-sm">{label}</p>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="https://wa.me/524421118867?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20Terraza%20Diamante"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full text-lg font-bold hover:bg-green-600 transition-all hover:scale-105 shadow-xl w-full lg:w-auto"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.763-6.182-2.052l-.432-.334-3.29 1.103 1.103-3.29-.334-.432A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl p-8 shadow-2xl"
          >
            <h3 className="font-heading text-xl font-bold text-gray-900 mb-6">
              Solicita información
            </h3>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  required
                  maxLength={100}
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-diamante-purple focus:ring-2 focus:ring-diamante-purple/20 outline-none transition-all"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  required
                  maxLength={20}
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-diamante-purple focus:ring-2 focus:ring-diamante-purple/20 outline-none transition-all"
                  placeholder="442 123 4567"
                />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fecha"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Fecha del evento
                  </label>
                  <input
                    type="date"
                    id="fecha"
                    required
                    value={formData.fecha}
                    onChange={(e) =>
                      setFormData({ ...formData, fecha: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-diamante-purple focus:ring-2 focus:ring-diamante-purple/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="paquete"
                    className="block text-sm font-semibold text-gray-700 mb-1"
                  >
                    Paquete de interés
                  </label>
                  <select
                    id="paquete"
                    value={formData.paquete}
                    onChange={(e) =>
                      setFormData({ ...formData, paquete: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-diamante-purple focus:ring-2 focus:ring-diamante-purple/20 outline-none transition-all bg-white"
                  >
                    <option value="">No sé aún</option>
                    <option value="Básico ($5,200)">Básico ($5,200)</option>
                    <option value="Diamante ($5,700)">Diamante ($5,700)</option>
                    <option value="Premium ($6,800)">Premium ($6,800)</option>
                  </select>
                </div>
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-semibold text-gray-700 mb-1"
                >
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  rows={3}
                  maxLength={500}
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-diamante-purple focus:ring-2 focus:ring-diamante-purple/20 outline-none transition-all resize-none"
                  placeholder="Cuéntanos sobre tu evento..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-diamante-purple text-white py-4 rounded-xl font-bold text-lg hover:bg-diamante-purple-dark transition-all hover:scale-[1.02] shadow-lg"
              >
                Enviar por WhatsApp
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
