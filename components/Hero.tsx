export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-diamante-purple via-diamante-pink to-diamante-blue">
      {/* Soft blurred blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-32 w-80 h-80 bg-diamante-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute -bottom-20 left-1/3 w-72 h-72 bg-diamante-pink/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

        {/* Floating decorative emojis — varied sizes and positions */}
        <div className="absolute top-[18%] left-[4%]  text-5xl  animate-float hidden sm:block" style={{ animationDelay: "0.0s" }}>🎉</div>
        <div className="absolute top-[12%] left-[18%] text-3xl  animate-sparkle hidden sm:block" style={{ animationDelay: "0.3s" }}>✨</div>
        <div className="absolute top-[28%] right-[5%] text-6xl  animate-float hidden sm:block" style={{ animationDelay: "0.8s" }}>🎈</div>
        <div className="absolute top-[15%] right-[20%] text-2xl animate-sparkle hidden sm:block" style={{ animationDelay: "1.2s" }}>⭐</div>
        <div className="absolute top-[45%] left-[3%]  text-4xl  animate-float hidden sm:block" style={{ animationDelay: "1.6s" }}>🎁</div>
        <div className="absolute top-[55%] right-[4%] text-3xl  animate-float hidden sm:block" style={{ animationDelay: "2.0s" }}>🌈</div>
        <div className="absolute bottom-[32%] left-[10%] text-5xl animate-float hidden sm:block" style={{ animationDelay: "0.5s" }}>🎀</div>
        <div className="absolute bottom-[28%] right-[10%] text-4xl animate-sparkle hidden sm:block" style={{ animationDelay: "1.8s" }}>🎊</div>
        <div className="absolute top-[38%] left-[22%] text-2xl animate-float hidden lg:block" style={{ animationDelay: "2.2s" }}>💫</div>
        <div className="absolute top-[60%] right-[22%] text-2xl animate-sparkle hidden lg:block" style={{ animationDelay: "0.9s" }}>🌟</div>
        <div className="absolute bottom-[40%] left-[2%]  text-3xl animate-float hidden lg:block" style={{ animationDelay: "1.3s" }}>🎠</div>
        <div className="absolute top-[20%] right-[38%] text-xl  animate-sparkle hidden lg:block" style={{ animationDelay: "2.5s" }}>✨</div>
      </div>

      {/* Content — pt-24 clears the fixed 80px navbar */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center pt-24 pb-16">

        {/* ── LOGO ── centrado, grande, responsivo */}
        <div className="mb-10 relative">
          <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl scale-125 animate-pulse" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Logo.png"
            alt="Terraza Diamante — Salón de Fiestas en Querétaro"
            width={420}
            height={420}
            fetchPriority="high"
            className="relative w-64 sm:w-80 md:w-96 lg:w-[420px] h-auto object-contain drop-shadow-2xl animate-hero-logo mx-auto"
          />
        </div>

        {/* H1 visible — keyword principal para SEO */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white text-center leading-tight mb-6 drop-shadow-lg">
          Salón de Fiestas Infantiles
          <br />
          <span className="text-diamante-gold">en Querétaro</span>
        </h1>

        {/* Location badge */}
        <div className="mb-8">
          <span className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white border border-white/30 px-5 py-2 rounded-full text-sm font-bold shadow-lg">
            <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            Santiago de Querétaro
          </span>
        </div>

        {/* Subline */}
        <p className="text-lg sm:text-xl text-white/90 mb-10 max-w-xl mx-auto leading-relaxed">
          Terraza techada, inflables, decoración y más — todo en un solo lugar en Querétaro.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center w-full sm:w-auto">
          <a
            href="https://wa.me/524421118867?text=Hola%2C%20quiero%20cotizar%20una%20fiesta%20en%20Terraza%20Diamante"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 bg-diamante-gold text-white px-8 py-4 rounded-2xl text-lg font-bold hover:bg-amber-500 transition-all hover:scale-105 shadow-2xl cursor-pointer"
            style={{ boxShadow: "0 8px 24px rgba(245,158,11,0.45)" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.315 0-4.458-.763-6.182-2.052l-.432-.334-3.29 1.103 1.103-3.29-.334-.432A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Cotiza tu Fiesta
          </a>
          <a
            href="#paquetes"
            className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm text-white border-2 border-white/40 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-white/30 transition-all hover:scale-105 cursor-pointer"
          >
            Ver Paquetes
          </a>
        </div>

        {/* Trust badges — z-20 so the wave never overlaps them */}
        <div className="relative z-20 mt-12 flex flex-wrap justify-center gap-3">
          {[
            { icon: "👨‍👩‍👧‍👦", text: "Hasta 100 personas" },
            { icon: "🎪", text: "Inflables incluidos" },
            { icon: "🛡️", text: "Terraza techada" },
          ].map(({ icon, text }) => (
            <div
              key={text}
              className="flex items-center gap-2 bg-white/30 backdrop-blur-md border border-white/50 text-white px-5 py-2.5 rounded-xl text-sm font-bold shadow-lg"
            >
              <span className="text-base">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path
            d="M0 100L60 91C120 82 240 64 360 58C480 52 600 58 720 62C840 66 960 68 1080 72C1200 76 1320 80 1380 82L1440 84V100H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}
