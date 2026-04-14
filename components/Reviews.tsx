"use client";

import AnimateIn from "@/components/AnimateIn";

const reviews = [
  {
    name: "Isabel Goretti",
    initials: "IG",
    color: "bg-purple-500",
    stars: 5,
    date: "hace 1 semana",
    text: "Muy buen trato con Alex, muy recomendable ✨ Gracias por hacer de mi boda algo espectacular 😊",
  },
  {
    name: "Pamela Sue Martin",
    initials: "PM",
    color: "bg-blue-500",
    stars: 5,
    date: "hace 2 semanas",
    text: "Excelente ubicación, y buen trato por parte de Alejandro. Muy recomendable. Todo muy bien.",
  },
  {
    name: "Albanely Rivera Ledesma",
    initials: "AR",
    color: "bg-pink-500",
    stars: 5,
    date: "hace 1 mes",
    text: "Muy bonito lugar, lo recomiendo ampliamente para tus fiestas o reuniones.",
  },
  {
    name: "Cristina Daniela Velázquez",
    initials: "CV",
    color: "bg-rose-500",
    stars: 5,
    date: "hace 1 mes",
    text: "Muy buen servicio.",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 w-80 shrink-0 mx-3 cursor-default">
      <div className="flex items-center gap-3 mb-3">
        <div
          className={`w-10 h-10 rounded-full ${review.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
        >
          {review.initials}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">{review.name}</p>
          <p className="text-gray-400 text-xs">{review.date}</p>
        </div>
        <svg viewBox="0 0 48 48" className="w-5 h-5 ml-auto shrink-0">
          <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
          <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
          <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
          <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
        </svg>
      </div>
      <StarRating count={review.stars} />
      <p className="text-gray-600 text-sm leading-relaxed mt-3 italic">
        &ldquo;{review.text}&rdquo;
      </p>
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reseñas" className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <AnimateIn>
          <div className="text-center">
            <span className="inline-block bg-diamante-gold/10 text-amber-600 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
              Reseñas
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Reseñas de nuestros
              <br />
              <span className="text-diamante-gold">clientes en Querétaro</span>
            </h2>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-5 py-2.5 shadow-sm mt-2">
              <svg viewBox="0 0 48 48" className="w-5 h-5">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
              </svg>
              <span className="text-sm font-semibold text-gray-700">
                4.6 ★★★★☆ en Google Maps
              </span>
            </div>
          </div>
        </AnimateIn>
      </div>

      {/* Infinite marquee strip */}
      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        {/* Track — hover pauses via CSS group */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused] pb-4">
          {/* Original set */}
          {reviews.map((review, i) => (
            <ReviewCard key={`a-${i}`} review={review} />
          ))}
          {/* Duplicate for seamless loop */}
          {reviews.map((review, i) => (
            <ReviewCard key={`b-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
