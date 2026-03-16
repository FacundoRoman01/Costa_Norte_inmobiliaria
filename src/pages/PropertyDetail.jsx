import { useParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { BedDouble, Bath, Maximize2, MapPin, ArrowLeft, CheckCircle2, X, ChevronLeft, ChevronRight, Share2 } from "lucide-react";
import { mockProperties } from "../data/mockData";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export default function PropertyDetail() {
  const { id } = useParams();
   const property = mockProperties.find((p) => p.id === Number(id));
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!property) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-slate-400 tracking-widest">PROPIEDAD NO ENCONTRADA</p>
      </div>
    );
  }

  const whatsappNumber = "5491123456789"; // Reemplazar por tu número real de WhatsApp
  const whatsappMessage = encodeURIComponent(`Hola! Me gustaría solicitar una visita privada para la propiedad "${property.titulo}" (ID: ${property.id}).`);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const handleShare = async () => {
    const shareData = {
      title: property.titulo,
      text: `Mira esta propiedad exclusiva en ${property.localidad}: ${property.titulo}`,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(window.location.href);
        toast.success("Enlace copiado al portapapeles");
      }
    } catch (err) {
      console.error("Error al compartir:", err);
    }
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % property.imagenes.length);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + property.imagenes.length) % property.imagenes.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-32 pb-24 px-8 bg-white"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <Link 
            to="/" 
            className="inline-flex items-center text-[10px] tracking-[0.3em] text-slate-400 hover:text-slate-950 transition-colors"
          >
            <ArrowLeft className="w-3 h-3 mr-2" /> VOLVER AL CATÁLOGO
          </Link>

          <button 
            onClick={handleShare}
            className="inline-flex items-center text-[10px] tracking-[0.3em] text-slate-400 hover:text-slate-950 transition-colors group"
          >
            <Share2 className="w-3 h-3 mr-2 group-hover:scale-110 transition-transform" /> COMPARTIR
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Editorial Image Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl cursor-pointer group"
            onClick={() => openModal(0)}
          >
            <img
              src={property.imagenes.find(img => img.es_portada)?.url || property.imagenes[0]?.url}
              alt={property.titulo}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
              <span className="text-white text-[10px] tracking-[0.3em] opacity-0 group-hover:opacity-100 transition-opacity duration-500 font-medium">
                VER GALERÍA
              </span>
            </div>
          </motion.div>

          {/* Editorial Content Section */}
          <div className="flex flex-col justify-center">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-[10px] tracking-[0.5em] text-slate-400 uppercase mb-4 block font-semibold"
            >
                  {property.localidad}
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-5xl md:text-6xl font-light text-slate-950 mb-8 tracking-tight leading-tight"
            >
              {property.titulo}
            </motion.h1>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-4xl font-light text-slate-950 mb-12 tracking-tighter"
            >
              <span className="text-sm mr-2 text-slate-400 font-normal tracking-normal">{property.moneda}</span>
              {property.precio.toLocaleString()}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-3 gap-8 mb-12 border-y border-slate-100 py-8"
            >
              <div className="flex flex-col">
                <BedDouble className="w-5 h-5 text-slate-400 mb-3" strokeWidth={1.2} />
                <span className="text-xs text-slate-400 uppercase tracking-widest mb-1">Dormitorios</span>
                <span className="text-lg font-light text-slate-950">{property.dormitorios}</span>
              </div>
              <div className="flex flex-col border-x border-slate-100 px-8">
                <Bath className="w-5 h-5 text-slate-400 mb-3" strokeWidth={1.2} />
                <span className="text-xs text-slate-400 uppercase tracking-widest mb-1">Baños</span>
                <span className="text-lg font-light text-slate-950">{property.baños}</span>
              </div>
              <div className="flex flex-col">
                <Maximize2 className="w-5 h-5 text-slate-400 mb-3" strokeWidth={1.2} />
                <span className="text-xs text-slate-400 uppercase tracking-widest mb-1">Superficie</span>
                 <span className="text-lg font-light text-slate-950">{property.superficie_total} m²</span>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="space-y-8"
            >
              <p className="text-slate-500 leading-relaxed font-light text-lg">
                {property.descripcion}
              </p>

              <div className="grid grid-cols-2 gap-4">
                 {property.comodidades.map((item, idx) => (
                  <div key={idx} className="flex items-center text-sm text-slate-600 font-light">
                    <CheckCircle2 className="w-4 h-4 mr-3 text-slate-300" strokeWidth={1.5} />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-slate-950 text-white py-5 rounded-full text-[12px] tracking-[0.3em] font-semibold hover:bg-slate-800 transition-all duration-300 shadow-xl flex items-center justify-center text-center"
                >
                  SOLICITAR VISITA PRIVADA
                </a>
                <button 
                  onClick={handleShare}
                  className="px-8 py-5 border border-slate-200 rounded-full text-[12px] tracking-[0.3em] font-semibold text-slate-400 hover:text-slate-950 hover:border-slate-950 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Share2 className="w-4 h-4" />
                  COMPARTIR
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/95 backdrop-blur-sm p-4 md:p-12"
            onClick={closeModal}
          >
            <button 
              onClick={closeModal}
              className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-[110]"
            >
              <X className="w-8 h-8" strokeWidth={1} />
            </button>

            <div className="relative w-full max-w-6xl aspect-video flex items-center justify-center">
              <button 
                onClick={prevImage}
                className="absolute left-0 md:-left-16 text-white/30 hover:text-white transition-colors z-[110] p-4"
              >
                <ChevronLeft className="w-10 h-10" strokeWidth={1} />
              </button>

              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="w-full h-full"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                   src={property.imagenes[currentImageIndex].url}
                  alt={`Gallery ${currentImageIndex}`}
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              <button 
                onClick={nextImage}
                className="absolute right-0 md:-right-16 text-white/30 hover:text-white transition-colors z-[110] p-4"
              >
                <ChevronRight className="w-10 h-10" strokeWidth={1} />
              </button>

              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
                   {property.imagenes.map((_, idx) => (
                  <div 
                    key={idx}
                    className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentImageIndex ? 'bg-white w-8' : 'bg-white/20'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
