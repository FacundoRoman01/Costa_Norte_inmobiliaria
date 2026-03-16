import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "VENTAS", path: "/ventas" },
    { name: "ALQUILERES", path: "/alquileres" },
    { name: "PROPIEDADES", path: "/" },
  ];

  return (
    <>
       <div className="fixed top-0 left-0 right-0 z-[90] flex justify-center p-4 md:py-6 md:px-0 pointer-events-none">
        <motion.nav
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className={`
            pointer-events-auto
            flex items-center justify-between 
            w-full max-w-7xl 
            px-6 py-2 md:py-3 
            bg-white/90 backdrop-blur-md 
            border border-slate-200/50
            shadow-[0_8px_30px_rgb(0,0,0,0.04)]
            rounded-full
            transition-all duration-500
            ${scrolled ? "shadow-xl border-slate-200" : ""}
          `}
        >
          {/* Logo Section */}
          <Link to="/" className="group flex items-center gap-4">
           <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-slate-950 flex items-center justify-center overflow-hidden border border-slate-800 shadow-lg transition-transform duration-500 group-hover:scale-105">
              <img 
                src="/assets/costanorte_logo.jpeg" 
                alt="Logo de Costa Norte" 
                className="w-full h-full object-cover scale-110" 
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = "https://picsum.photos/seed/costanorte/100/100";
                }}
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-[11px] sm:text-[13px] md:text-[15px] tracking-[0.3em] md:tracking-[0.4em] font-light text-slate-950 uppercase leading-none">Costa Norte</span>
              <span className="text-[6px] sm:text-[7px] md:text-[8px] tracking-[0.2em] md:tracking-[0.3em] font-bold text-slate-400 uppercase mt-1">Group</span>
            </div>
          </Link>
          
          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path} 
                className={`text-[10px] tracking-[0.3em] font-bold transition-all duration-300 relative group/link ${
                  location.pathname === link.path ? "text-slate-950" : "text-slate-400 hover:text-slate-950"
                }`}
              >
                {link.name}
                 <span className={`absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-950 transition-all duration-500 group-hover/link:w-full ${location.pathname === link.path ? "w-full" : ""}`} />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <Link 
              to="/contacto"
              className="hidden sm:block text-[10px] tracking-[0.2em] px-8 py-3 bg-[#0a1128] text-white hover:bg-slate-800 transition-all duration-300 rounded-full font-bold shadow-lg shadow-slate-900/20"
            >
              CONTACTO
            </Link>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-slate-950 hover:bg-slate-100 rounded-full transition-colors"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 sm:inset-4 z-[60] bg-white sm:rounded-[2.5rem] shadow-2xl flex flex-col p-6 sm:p-8 pt-8 lg:hidden overflow-hidden border border-slate-100"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4">
                
                <div className="flex flex-col">
                  <span className="text-[14px] tracking-[0.3em] font-light text-slate-950 uppercase leading-none">Costa Norte</span>
                  <span className="text-[8px] tracking-[0.2em] font-bold text-slate-400 uppercase mt-1">Group</span>
                </div>
              </Link>
              <button onClick={() => setIsOpen(false)} className="p-2 bg-slate-100 rounded-full">
                <X className="w-5 h-5 text-slate-950" />
              </button>
            </div>

            <div className="flex flex-col space-y-8 mt-4">
              {[...navLinks, { name: "CONTACTO", path: "/contacto" }].map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl sm:text-4xl font-light text-slate-950 tracking-wide hover:italic transition-all flex items-center justify-between group"
                  >
                    {link.name.toLowerCase()}
                    <span className="text-xs opacity-50 text-slate-400 tracking-widest uppercase font-bold">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-auto pt-8 border-t border-slate-100">
              <Link
                to="/contacto"
                onClick={() => setIsOpen(false)}
                className="w-full py-5 bg-[#0a1128] text-white text-[12px] tracking-[0.3em] font-bold rounded-2xl flex items-center justify-center shadow-xl shadow-slate-900/20"
              >
                CONSULTAR AHORA
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
