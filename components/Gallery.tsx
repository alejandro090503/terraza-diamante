"use client";

import AnimateIn from "@/components/AnimateIn";

type MediaItem = {
  type: "image" | "video";
  src: string;
  title?: string;
  aspect?: "portrait" | "landscape";
};

const galleryItems: MediaItem[] = [
  { type: "video",  src: "/gallery/video1.mp4",  aspect: "portrait" },
  { type: "image",  src: "/gallery/foto5.jpg",   aspect: "landscape" },
  { type: "image",  src: "/gallery/foto6.jpg",   aspect: "landscape" },
  { type: "video",  src: "/gallery/video2.mp4",  aspect: "portrait" },
  { type: "image",  src: "/gallery/foto1.jpg",   aspect: "portrait" },
  { type: "image",  src: "/gallery/foto2.jpg",   aspect: "landscape" },
  { type: "image",  src: "/gallery/foto7.jpg",   aspect: "landscape" },
  { type: "video",  src: "/gallery/video3.mp4",  aspect: "portrait" },
  { type: "image",  src: "/gallery/foto3.jpg",   aspect: "portrait" },
  { type: "image",  src: "/gallery/foto8.jpg",   aspect: "landscape" },
  { type: "image",  src: "/gallery/foto9.jpg",   aspect: "landscape" },
  { type: "image",  src: "/gallery/foto4.jpg",   aspect: "portrait" },
  { type: "image",  src: "/gallery/foto10.jpg",  aspect: "landscape" },
];

export default function Gallery() {
  return (
    <section id="galeria" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateIn>
          <div className="text-center mb-14">
            <span className="inline-block bg-diamante-pink/10 text-diamante-pink px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Galería
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Así lucen los eventos
              <br />
              <span className="text-diamante-blue">en Terraza Diamante</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Fotos y videos reales de nuestras celebraciones.
            </p>
          </div>
        </AnimateIn>

        {/* Masonry-style grid */}
        <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
          {galleryItems.map((item, i) => (
            <AnimateIn key={i} delay={i * 50} direction="fade">
              <div className="break-inside-avoid rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 relative mb-3">
                {item.type === "image" ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.src}
                    alt={item.title ?? `Evento ${i + 1}`}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-auto object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{ aspectRatio: "9/16" }}
                  />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 rounded-2xl" />
                {item.title && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-xs font-semibold">{item.title}</p>
                  </div>
                )}
              </div>
            </AnimateIn>
          ))}
        </div>

        <AnimateIn delay={200}>
          <div className="text-center mt-10">
            <a
              href="https://wa.me/524421118867?text=Hola%2C%20me%20gustar%C3%ADa%20ver%20fotos%20y%20videos%20de%20eventos%20en%20Terraza%20Diamante"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-diamante-purple text-white px-8 py-3.5 rounded-full font-bold hover:bg-diamante-purple-dark transition-all hover:scale-105 shadow-lg cursor-pointer"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.763-6.182-2.052l-.432-.334-3.29 1.103 1.103-3.29-.334-.432A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Ver más fotos por WhatsApp
            </a>
          </div>
        </AnimateIn>
      </div>
    </section>
  );
}
