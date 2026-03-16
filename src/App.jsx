import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import UseScrollToTop from "./components/useScrollToTop";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import PropertyDetail from "./pages/PropertyDetail";
import Sales from "./pages/Sales";
import Rentals from "./pages/Rentals";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>

      <UseScrollToTop />
      <div className="min-h-screen bg-white font-sans selection:bg-slate-950 selection:text-white">
        <Toaster 
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              borderRadius: '0px',
              background: '#020617',
              color: '#fff',
              fontSize: '12px',
              letterSpacing: '0.1em',
              padding: '16px 24px',
            },
          }}
        />
        <Navbar />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/propiedad/:id" element={<PropertyDetail />} />
            <Route path="/ventas" element={<Sales />} />
            <Route path="/alquileres" element={<Rentals />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer Section (Shared across pages) */}
        <footer className="bg-slate-950 text-white py-32 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
            <div className="col-span-1 md:col-span-2">
              <div className="w-20 h-20 rounded-full bg-[#0a1128] flex items-center justify-center overflow-hidden border border-slate-700 shadow-lg mb-10">
                <img 
                  src="/assets/costanorte_logo.jpeg" 
                  alt="Logo de Costa Norte" 
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <p className="text-slate-400 text-base max-w-md leading-relaxed font-light">
                Líderes en el mercado inmobiliario premium de Pinamar. 
                Especializados en arquitectura contemporánea, residencias de lujo y 
                desarrollos que definen el paisaje de la costa.
              </p>
            </div>
            
            <div>
              <h4 className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-8 font-bold">Oficina Central</h4>
              <ul className="space-y-5 text-sm font-light text-slate-300">
                <li className="flex flex-col">
                  <span className="text-white/60 mb-1">Dirección</span>
                  Av. Bunge 1234, Pinamar Norte
                </li>
                <li className="flex flex-col">
                  <span className="text-white/60 mb-1">Teléfono</span>
                  +54 2254 000000
                </li>
                <li className="flex flex-col">
                  <span className="text-white/60 mb-1">Email</span>
                  info@costanorte.com
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[10px] tracking-[0.4em] text-white/40 uppercase mb-8 font-bold">Navegación</h4>
              <ul className="space-y-4 text-sm font-light text-slate-300">
                <li><Link to="/ventas" className="hover:text-white transition-colors">Ventas</Link></li>
                <li><Link to="/alquileres" className="hover:text-white transition-colors">Alquileres</Link></li>
                <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-7xl mx-auto mt-32 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-[10px] tracking-[0.3em] text-white/20 font-medium">
              © 2026 COSTA NORTE GROUP. TODOS LOS DERECHOS RESERVADOS.
            </p>
            <div className="flex space-x-8 text-[10px] tracking-[0.3em] text-white/20">
              <a href="#" className="hover:text-white/50 transition-colors">PRIVACIDAD</a>
              <a href="#" className="hover:text-white/50 transition-colors">TÉRMINOS</a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}
