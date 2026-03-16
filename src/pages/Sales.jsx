import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { mockProperties } from "../data/mockData";
import PropertyCard from "../components/PropertyCard";
import FilterBar from "../components/FilterBar";

export default function Sales() {
   const initialProperties = mockProperties.filter(p => p.tipo_operacion === "VENTA");
  const [filteredProperties, setFilteredProperties] = useState(initialProperties);

  const handleFilterChange = (filters) => {
    let result = initialProperties;

      if (filters.localidad && filters.localidad !== "todas") {
      const locLower = filters.localidad.toLowerCase();
      result = result.filter((p) => 
            p.localidad.toLowerCase().includes(locLower)
      );
    }

    if (filters.precioMin) {
      result = result.filter((p) => p.precio >= Number(filters.precioMin));
    }
    if (filters.precioMax) {
      result = result.filter((p) => p.precio <= Number(filters.precioMax));
    }

    if (filters.dormitorios) {
      result = result.filter((p) => p.dormitorios >= Number(filters.dormitorios));
    }

    setFilteredProperties(result);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pt-32 pb-24 px-6 bg-slate-50 min-h-screen"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-[10px] tracking-[0.5em] text-slate-400 uppercase mb-3 block font-semibold">
            Inversión & Legado
          </span>
          <h1 className="text-4xl md:text-5xl font-light text-slate-950 tracking-tight leading-tight">
            Propiedades en <span className="italic font-serif text-slate-700">Venta</span>
          </h1>
        </div>

        <div className="mb-16 relative z-50">
          <FilterBar onFilterChange={handleFilterChange} />
        </div>

        <AnimatePresence mode="wait">
          {filteredProperties.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
            >
              {filteredProperties.map((property) => (
                <PropertyCard key={property.id} property={property} />
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
    </motion.div>
  );
}
