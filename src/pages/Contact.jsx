import { motion } from "motion/react";
import { Phone, Mail, MapPin, MessageCircle, Send } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "5491123456789"; // Example number
  const whatsappMessage = encodeURIComponent("Hola! Me gustaría recibir información sobre inversiones de alto nivel.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[11px] tracking-[0.8em] text-slate-400 uppercase mb-8 block font-semibold">
              ESTAMOS PARA ASESORARTE
            </span>
            <h1 className="text-6xl md:text-8xl font-light text-slate-950 mb-12 tracking-tighter leading-none">
              Hablemos de tu <br />
              <span className="italic font-serif text-slate-400">próxima inversión.</span>
            </h1>

            <div className="space-y-12 mt-16">
              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-950 transition-colors duration-500">
                  <Phone className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-slate-400 uppercase font-bold mb-1">Teléfono</p>
                  <p className="text-xl text-slate-950 font-light">+54 911 2345 6789</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-950 transition-colors duration-500">
                  <Mail className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-slate-400 uppercase font-bold mb-1">Email</p>
                  <p className="text-xl text-slate-950 font-light">info@costanorte.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group">
                <div className="w-12 h-12 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-slate-950 transition-colors duration-500">
                  <MapPin className="w-5 h-5 text-slate-400 group-hover:text-white transition-colors" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-[10px] tracking-widest text-slate-400 uppercase font-bold mb-1">Oficina</p>
                  <p className="text-xl text-slate-950 font-light">Av. Bunge 123, Pinamar, Argentina</p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <motion.a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-20 inline-flex items-center gap-4 bg-[#25D366] text-white px-10 py-6 rounded-2xl shadow-xl shadow-green-200/50 hover:shadow-green-300/60 transition-all duration-500"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              <div className="text-left">
                <p className="text-[10px] tracking-widest uppercase font-bold opacity-80 leading-none mb-1">Atención Inmediata</p>
                <p className="text-lg font-semibold">Contactar por WhatsApp</p>
              </div>
            </motion.a>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-slate-50 p-8 md:p-12 rounded-[3rem] border border-slate-100"
          >
            <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest text-slate-400 uppercase font-bold ml-1">Nombre Completo</label>
                  <input 
                    type="text" 
                    placeholder="Tu nombre"
                    className="w-full bg-white border-none rounded-2xl p-5 text-slate-950 placeholder:text-slate-300 focus:ring-2 focus:ring-slate-950 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] tracking-widest text-slate-400 uppercase font-bold ml-1">Email</label>
                  <input 
                    type="email" 
                    placeholder="ejemplo@correo.com"
                    className="w-full bg-white border-none rounded-2xl p-5 text-slate-950 placeholder:text-slate-300 focus:ring-2 focus:ring-slate-950 transition-all outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest text-slate-400 uppercase font-bold ml-1">Asunto</label>
                <select className="w-full bg-white border-none rounded-2xl p-5 text-slate-950 focus:ring-2 focus:ring-slate-950 transition-all outline-none appearance-none">
                  <option>Consulta General</option>
                  <option>Inversión en Ventas</option>
                  <option>Alquileres Temporarios</option>
                  <option>Tasaciones</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] tracking-widest text-slate-400 uppercase font-bold ml-1">Mensaje</label>
                <textarea 
                  rows={5}
                  placeholder="¿En qué podemos ayudarte?"
                  className="w-full bg-white border-none rounded-2xl p-5 text-slate-950 placeholder:text-slate-300 focus:ring-2 focus:ring-slate-950 transition-all outline-none resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-slate-950 text-white py-6 rounded-2xl flex items-center justify-center gap-3 hover:bg-slate-800 transition-all duration-300 font-bold tracking-[0.2em] text-[12px]">
                ENVIAR MENSAJE
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
