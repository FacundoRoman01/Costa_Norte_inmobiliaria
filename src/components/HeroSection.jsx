import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden bg-slate-950">
      {/* Atmospheric Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-slate-800/10 blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-slate-900/20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-16 items-center pt-24">
        
        {/* Left Column: Typography */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-6 h-[1px] bg-white/20"></span>
              <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold">
                Inmobiliaria Boutique
              </span>
            </div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-white mb-8 tracking-tight leading-[1.15]">
              Encontrá tu propiedad ideal, <br />
              <span className="italic font-serif text-white/50">te acompañamos</span> <br />
              en cada paso.
            </h1>

            <p className="text-white/40 text-base md:text-lg font-light max-w-lg mb-10 leading-relaxed">
              Propiedades exclusivas diseñadas para quienes buscan la armonía perfecta entre el bosque y el mar en la costa atlántica.
            </p>

          </motion.div>
        </div>

        {/* Right Column: Artistic Visuals */}
        <div className="lg:col-span-5 relative hidden lg:block">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Main Oval Image */}
            <div className="w-full aspect-[4/5] rounded-[160px] overflow-hidden border border-white/10 shadow-2xl relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000" 
                alt="Luxury Property" 
                className="w-full h-full object-cover grayscale-[10%] hover:grayscale-0 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>

            {/* Floating Glass Card */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-12 bottom-16 z-20 bg-white/5 backdrop-blur-2xl border border-white/10 p-6 rounded-3xl shadow-2xl"
            >
              <p className="text-[9px] tracking-[0.3em] text-white/40 uppercase mb-2 font-bold">Ubicación Destacada</p>
              <p className="text-lg text-white font-light tracking-tight">Pinamar Norte, <br /> Costa Esmeralda</p>
              <div className="mt-4 flex items-center gap-2 text-emerald-400">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-[9px] tracking-[0.2em] font-bold uppercase">Disponible</span>
              </div>
            </motion.div>

            {/* Decorative Vertical Text */}
            <div className="absolute -right-16 top-1/2 -translate-y-1/2 rotate-90 origin-center whitespace-nowrap">
              <span className="text-[9px] tracking-[1em] text-white/10 uppercase font-bold">
                COSTA NORTE GROUP • PINAMAR
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent"></div>
        <span className="text-[8px] tracking-[0.4em] text-white uppercase font-bold">Scroll</span>
      </motion.div>
    </section>
  );
}