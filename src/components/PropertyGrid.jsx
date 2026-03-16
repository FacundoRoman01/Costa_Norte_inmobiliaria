import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { mockProperties } from "../data/mockData";
import PropertyCard from "./PropertyCard";
import FilterBar from "./FilterBar";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export default function PropertyGrid() {
  const [filteredProperties, setFilteredProperties] = useState(mockProperties);

  const handleFilterChange = (filters) => {
    let result = mockProperties;

    // Location filter
      if (filters.localidad && filters.localidad !== "todas") {
      const locLower = filters.localidad.toLowerCase();
      result = result.filter((p) => 
        p.localidad.toLowerCase().includes(locLower)
      );
    }

    // Type filter
    if (filters.tipo !== "todos") {
    const targetOp = filters.tipo.toUpperCase(); // "VENTA" or "ALQUILER"
      result = result.filter((p) => p.tipo_operacion === targetOp);
    }

    // Price filters
    if (filters.precioMin) {
      result = result.filter((p) => p.precio >= Number(filters.precioMin));
    }
    if (filters.precioMax) {
      result = result.filter((p) => p.precio <= Number(filters.precioMax));
    }

    // Bedrooms filter
    if (filters.dormitorios) {
      result = result.filter((p) => p.dormitorios >= Number(filters.dormitorios));
    }

    setFilteredProperties(result);
  };

  return (
    <section className="py-24 px-6 bg-slate-50 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="relative z-50 -mt-20 md:-mt-36 mb-12 md:mb-20"
        >
          <FilterBar onFilterChange={handleFilterChange} />
        </motion.div>

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-6 md:space-y-0">
          <div className="max-w-2xl">
            <span className="text-[10px] tracking-[0.5em] text-slate-400 uppercase mb-3 block font-semibold">
              Curaduría Exclusiva
            </span>
            <h2 className="text-4xl md:text-5xl font-light text-slate-950 tracking-tight leading-tight">
              Propiedades que <br />
              <span className="italic font-serif text-slate-700">trascienden el tiempo.</span>
            </h2>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-[10px] tracking-widest text-slate-400 font-bold mb-4">
              {filteredProperties.length} RESULTADOS
            </span>
            {/* <button className="group flex items-center text-[11px] tracking-[0.3em] text-slate-950 font-bold">
              VER CATÁLOGO COMPLETO
              <div className="ml-4 w-12 h-[1px] bg-slate-950 group-hover:w-16 transition-all duration-300"></div>
            </button> */}
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filteredProperties.length > 0 ? (
            <motion.div
              key="grid"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredProperties.map((property) => (
                <motion.div key={property.id} variants={itemVariants}>
                  <PropertyCard property={property} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div 
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="py-32 text-center border border-dashed border-slate-200 rounded-3xl"
            >
              <p className="text-slate-400 tracking-widest text-sm uppercase">No se encontraron propiedades con esos filtros</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
