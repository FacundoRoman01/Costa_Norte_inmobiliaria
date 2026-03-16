export const mockProperties = [
  {
    id: 1,
    titulo: "Residencia Bosque Alto",
    descripcion: "Una obra maestra de la arquitectura contemporánea integrada en el bosque. Esta propiedad destaca por su uso de hormigón visto y grandes paños vidriados que borran los límites entre el interior y el exterior.",
    tipo_operacion: "VENTA",
    tipo_propiedad: "CASA",
    precio: 850000,
    moneda: "USD",
    superficie_total: 420,
    dormitorios: 4,
    baños: 5,
    direccion: "Av. Divisadero 1450",
    localidad: "Carilo",
    destacado: true,
    fecha_creacion: "2024-01-15T10:00:00Z",
    imagenes: [
      { id: 101, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000", es_portada: true },
      { id: 102, url: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=1000", es_portada: false },
      { id: 103, url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000", es_portada: false }
    ],
    comodidades: ["Piscina climatizada", "Cava de vinos", "Domótica", "Seguridad 24hs"]
  },
  {
    id: 2,
    titulo: "Villa del Mar Contemporánea",
    descripcion: "Ubicada en el exclusivo barrio La Herradura, esta villa combina el lujo clásico con líneas modernas. Espacios amplios, techos de doble altura y una vista inmejorable al entorno natural.",
    tipo_operacion: "VENTA",
    tipo_propiedad: "CASA",
    precio: 1200000,
    moneda: "USD",
    superficie_total: 550,
    dormitorios: 5,
    baños: 6,
    direccion: "Calle de la Herradura 45",
    localidad: "Barrios Privados",
    destacado: true,
    fecha_creacion: "2024-02-10T14:30:00Z",
    imagenes: [
      { id: 201, url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1000", es_portada: true },
      { id: 202, url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1000", es_portada: false },
      { id: 203, url: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1000", es_port_ada: false }
    ],
    comodidades: ["Gimnasio privado", "Cine", "Spa", "Dependencia de servicio"]
  },
  {
    id: 3,
    titulo: "Hormigón & Vidrio Norte",
    descripcion: "Diseño minimalista puro en el corazón de Pinamar Norte. La estructura de hormigón suspendida crea una sensación de ligereza única, mientras que los interiores ofrecen un confort absoluto.",
    tipo_operacion: "ALQUILER",
    tipo_propiedad: "CASA",
    precio: 3500,
    moneda: "USD",
    superficie_total: 280,
    dormitorios: 3,
    baños: 3,
    direccion: "Av. del Olimpo 450",
    localidad: "Pinamar Norte",
    destacado: false,
    fecha_creacion: "2024-03-01T09:15:00Z",
    imagenes: [
      { id: 301, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000", es_portada: true },
      { id: 302, url: "https://images.unsplash.com/photo-1600573472591-ee6b68d14c68?auto=format&fit=crop&q=80&w=1000", es_portada: false },
      { id: 303, url: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=1000", es_portada: false }
    ],
    comodidades: ["Calefacción por losa radiante", "Galería con parrilla", "Riego automático", "Calefacción por losa radiante", "Galería con parrilla", "Riego automático", "Calefacción por losa radiante", "Galería con parrilla", "Riego automático","Calefacción por losa radiante", "Galería con parrilla", "Riego automático", "Calefacción por losa radiante", "Galería con parrilla", "Riego automático", "Calefacción por losa radiante", "Galería con parrilla", "Riego automático"]
  },
  {
    id: 4,
    titulo: "Refugio del Golf",
    descripcion: "Frente a los hoyos más exclusivos del Golf, esta propiedad es un santuario de paz. Materiales nobles como piedra y madera se fusionan con un diseño de vanguardia.",
    tipo_operacion: "VENTA",
    tipo_propiedad: "CASA",
    precio: 950000,
    moneda: "USD",
    superficie_total: 380,
    dormitorios: 4,
    baños: 4,
    direccion: "Calle del Golf 12",
    localidad: "Valeria",
    destacado: false,
    fecha_creacion: "2024-02-20T11:00:00Z",
    imagenes: [
      { id: 401, url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000", es_portada: true },
      { id: 402, url: "https://images.unsplash.com/photo-1600607687940-4e2a09695d51?auto=format&fit=crop&q=80&w=1000", es_portada: false },
      { id: 403, url: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000", es_portada: false }
    ],
    comodidades: ["Vista al Golf", "Suite con vestidor", "Garage para 3 autos"]
  },
  {
    id: 5,
    titulo: "Casa Mirador del Este",
    descripcion: "Elevada sobre un médano natural, esta casa ofrece vistas panorámicas del amanecer. Un diseño pensado para maximizar la luz solar y la ventilación cruzada.",
    tipo_operacion: "ALQUILER",
    tipo_propiedad: "CASA",
    precio: 2800,
    moneda: "USD",
    superficie_total: 310,
    dormitorios: 3,
    baños: 4,
    direccion: "Av. del Mar 2300",
    localidad: "Pinamar Norte",
    destacado: true,
    fecha_creacion: "2024-03-10T16:45:00Z",
    imagenes: [
      { id: 501, url: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000", es_portada: true },
      { id: 502, url: "https://images.unsplash.com/photo-1600585154526-990dcea4db0d?auto=format&fit=crop&q=80&w=1000", es_portada: false },
      { id: 503, url: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000", es_portada: false }
    ],
    comodidades: ["Terraza solarium", "Hogar a leña", "Aberturas de alta gama"]
  },
  {
    id: 6,
    titulo: "Pabellón de Arena",
    descripcion: "La propiedad más imponente de la zona. Un pabellón de lujo absoluto a metros del mar, diseñado para recibir invitados con el máximo nivel de sofisticación.",
    tipo_operacion: "VENTA",
    tipo_propiedad: "CASA",
    precio: 1500000,
    moneda: "USD",
    superficie_total: 620,
    dormitorios: 6,
    baños: 7,
    direccion: "Frontera Norte Lote 14",
    localidad: "Frontera Norte",
    destacado: true,
    fecha_creacion: "2024-03-15T12:00:00Z",
    imagenes: [
      { id: 601, url: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&q=80&w=1000", es_portada: true },
      { id: 602, url: "https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?auto=format&fit=crop&q=80&w=1000", es_portada: false },
      { id: 603, url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000", es_portada: false }
    ],
    comodidades: ["Acceso privado a playa", "Piscina infinity", "Casa de huéspedes"]
  }
];