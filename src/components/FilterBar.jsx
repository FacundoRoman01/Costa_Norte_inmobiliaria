import { useState, useRef, useEffect } from "react";
import { ChevronDown, MapPin, DollarSign, BedDouble, Search, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function FilterBar({ onFilterChange }) {
  const [filters, setFilters] = useState({
    localidad: "todas",
    precioMin: "",
    precioMax: "",
    dormitorios: "",
    tipo: "todos"
  });

  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const locations = ["todas", "Pinamar", "Ostende", "Valeria", "Carilo", "Barrios Privados"];
  const priceOptions = ["", "500", "1000", "2000", "5000", "10000", "50000", "100000", "200000", "500000", "1000000"];
  const bedroomOptions = ["", "1", "2", "3", "4", "5"];

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (name, value) => {
    setFilters(prev => ({ ...prev, [name]: value }));
    if (name !== 'precioMin' && name !== 'precioMax') {
      setActiveDropdown(null);
    }
  };

  const handleSearch = () => {
    onFilterChange(filters);
    setActiveDropdown(null);
  };

  const clearFilters = () => {
    const reset = {
      localidad: "todas",
      precioMin: "",
      precioMax: "",
      dormitorios: "",
      tipo: "todos"
    };
    setFilters(reset);
    onFilterChange(reset);
    setActiveDropdown(null);
  };

  const Dropdown = ({ label, icon: Icon, name, options, value, displayValue }) => (
    <div className="relative flex-1 min-w-[140px]">
      <button
        onClick={() => setActiveDropdown(activeDropdown === name ? null : name)}
        className={`w-full flex items-center justify-between px-4 md:px-5 py-3.5 md:py-4 bg-white border rounded-xl transition-all duration-300 ${
          activeDropdown === name ? "border-[oklch(12.9%_0.042_264.695)] ring-2 ring-[oklch(12.9%_0.042_264.695/0.1)]" : "border-slate-200 hover:border-slate-300"
        }`}
      >
        <div className="flex items-center gap-3">
          <Icon className="w-4 h-4 text-slate-400" />
          <div className="text-left">
            <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-none mb-1">{label}</p>
            <p className="text-xs md:text-sm text-slate-950 font-medium truncate max-w-[100px]">
              {displayValue || (value === "" || value === "todas" ? "Indiferente" : value)}
            </p>
          </div>
        </div>
        <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeDropdown === name ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {activeDropdown === name && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 py-2 max-h-[300px] overflow-y-auto"
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSelect(name, opt)}
                className={`w-full text-left px-5 py-3 text-sm transition-colors ${
                  value === opt ? "bg-[oklch(12.9%_0.042_264.695/0.05)] text-[oklch(12.9%_0.042_264.695)] font-semibold" : "text-slate-600 hover:bg-slate-50"
                }`}
              >
                {opt === "" || opt === "todas" ? "Indiferente" : opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative z-50" ref={dropdownRef}>
      <div className="bg-white/90 backdrop-blur-xl rounded-3xl md:rounded-[2rem] shadow-2xl border border-white/20 p-2 md:p-4 flex flex-col lg:flex-row items-stretch gap-2 md:gap-3">
        
        {/* Ubicación Dropdown */}
          <Dropdown 
          label="Localidad" 
          icon={MapPin} 
          name="localidad" 
          options={locations} 
          value={filters.localidad} 
        />

        {/* Precio Dropdown */}
        <div className="relative flex-1 min-w-[140px]">
          <button
            onClick={() => setActiveDropdown(activeDropdown === 'precio' ? null : 'precio')}
            className={`w-full h-full flex items-center justify-between px-4 md:px-5 py-3.5 md:py-4 bg-white border rounded-xl transition-all duration-300 ${
              activeDropdown === 'precio' ? "border-[oklch(12.9%_0.042_264.695)] ring-2 ring-[oklch(12.9%_0.042_264.695/0.1)]" : "border-slate-200 hover:border-slate-300"
            }`}
          >
            <div className="flex items-center gap-3">
              <DollarSign className="w-4 h-4 text-slate-400" />
              <div className="text-left">
                <p className="text-[8px] md:text-[9px] uppercase tracking-widest text-slate-400 font-bold leading-none mb-1">Precio</p>
                <p className="text-xs md:text-sm text-slate-950 font-medium">
                  {filters.precioMin || filters.precioMax 
                    ? `${filters.precioMin || '0'} - ${filters.precioMax || '∞'}`
                    : "Indiferente"}
                </p>
              </div>
            </div>
            <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform duration-300 ${activeDropdown === 'precio' ? "rotate-180" : ""}`} />
          </button>

          <AnimatePresence>
            {activeDropdown === 'precio' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-100 rounded-2xl shadow-2xl z-50 p-6 min-w-[300px]"
              >
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Mínimo</p>
                    <select 
                      value={filters.precioMin}
                      onChange={(e) => handleSelect('precioMin', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[oklch(12.9%_0.042_264.695)] transition-colors"
                    >
                      {priceOptions.map(opt => (
                        <option key={opt} value={opt}>{opt === "" ? "Indiferente" : opt}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-3">Máximo</p>
                    <select 
                      value={filters.precioMax}
                      onChange={(e) => handleSelect('precioMax', e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-sm outline-none focus:border-[oklch(12.9%_0.042_264.695)] transition-colors"
                    >
                      {priceOptions.map(opt => (
                        <option key={opt} value={opt}>{opt === "" ? "Indiferente" : opt}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <button 
                  onClick={handleSearch}
                  className="w-full mt-6 py-3 bg-[oklch(12.9%_0.042_264.695)] text-white rounded-xl text-sm font-bold hover:opacity-90 transition-all shadow-lg shadow-slate-900/10"
                >
                  Aplicar Rango
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Habitaciones Dropdown */}
        <Dropdown 
          label="Habitaciones" 
          icon={BedDouble} 
          name="dormitorios" 
          options={bedroomOptions} 
          value={filters.dormitorios}
          displayValue={filters.dormitorios ? `${filters.dormitorios}+ Dorm` : "Indiferente"}
        />

        {/* Search Button */}
        <div className="flex items-center gap-2">
          <button
            onClick={clearFilters}
            className="p-4 text-slate-400 hover:text-slate-950 transition-colors"
            title="Limpiar filtros"
          >
            <X className="w-5 h-5" />
          </button>
          <button
            onClick={handleSearch}
            className="flex-1 lg:flex-none flex items-center justify-center gap-3 px-10 py-4 bg-[oklch(20.8%_0.042_265.755)] hover:opacity-90 text-white rounded-2xl text-sm font-bold transition-all duration-300 shadow-xl shadow-slate-900/20 active:scale-95"
          >
            <Search className="w-4 h-4" />
            BUSCAR
          </button>
        </div>
      </div>
    </div>
  );
}
