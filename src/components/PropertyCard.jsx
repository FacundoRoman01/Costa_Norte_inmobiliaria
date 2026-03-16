import { motion } from "framer-motion";
import { BedDouble, Bath, Maximize2, MapPin, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  const mainImage = property.imagenes.find(img => img.es_portada)?.url || property.imagenes[0]?.url;

  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col h-full"
    >
      {/* Contenedor de Imagen: Aspect Ratio fijo para que todas las cards midan igual */}
      <Link to={`/propiedad/${property.id}`} className="block relative aspect-[4/3] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 1.2 }}
          src={mainImage}
          alt={property.titulo}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        {/* Tag de Operación: Más minimalista en mobile */}
        <div className="absolute top-4 left-4 md:top-6 md:left-6">
          <span className="bg-slate-950/90 backdrop-blur-md text-white text-[8px] md:text-[9px] tracking-[0.2em] px-3 py-1.5 md:px-5 md:py-2 rounded-full font-bold uppercase shadow-2xl">
            {property.tipo_operacion}
          </span>
        </div>
      </Link>

      {/* Cuerpo de la Card */}
      <div className="p-5 md:p-8 flex flex-col flex-grow">
        {/* Ubicación */}
        <div className="flex items-center text-slate-400 text-[9px] md:text-[10px] tracking-[0.2em] mb-3 font-bold uppercase">
          <MapPin className="w-3 h-3 mr-1.5 text-slate-300" strokeWidth={2} />
          {property.localidad}
        </div>
        
        {/* Título: font-light para el toque "caro" */}
        <Link to={`/propiedad/${property.id}`} className="flex-grow">
          <h3 className="text-xl md:text-2xl font-light text-slate-900 mb-6 tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
            {property.titulo}
          </h3>
        </Link>

        {/* Características: Grid que se adapta */}
        <div className="grid grid-cols-3 gap-2 border-y border-slate-50 py-5 mb-6">
          <div className="flex flex-col items-center gap-1">
            <BedDouble className="w-4 h-4 text-slate-400" strokeWidth={1.2} />
            <span className="text-[10px] text-slate-500 font-medium">{property.dormitorios} Dorm.</span>
          </div>
          <div className="flex flex-col items-center gap-1 border-x border-slate-50">
            <Bath className="w-4 h-4 text-slate-400" strokeWidth={1.2} />
            <span className="text-[10px] text-slate-500 font-medium">{property.baños} Baños</span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Maximize2 className="w-4 h-4 text-slate-400" strokeWidth={1.2} />
            <span className="text-[10px] text-slate-500 font-medium">{property.superficie_total} m²</span>
          </div>
        </div>

        {/* Footer: Precio y Call to Action */}
        <div className="flex items-center justify-between mt-auto">
          <div className="flex flex-col">
            <span className="text-[8px] text-slate-400 tracking-widest uppercase mb-0.5 font-bold">Inversión</span>
            <div className="text-xl md:text-2xl font-light text-slate-950 tracking-tighter">
              <span className="text-[10px] mr-1 text-slate-400 font-normal">{property.moneda}</span>
              {property.precio.toLocaleString()}
            </div>
          </div>
          
          <Link 
            to={`/propiedad/${property.id}`}
            className="flex items-center gap-2 text-[9px] tracking-[0.2em] text-slate-950 font-bold group/btn"
          >
            <span className="hidden xs:block">VER MÁS</span>
            <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover/btn:bg-slate-950 group-hover/btn:text-white transition-colors">
              <ChevronRight size={14} />
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}