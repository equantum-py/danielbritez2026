import { Bike, BriefcaseBusiness, Car, CheckCircle2, ClipboardCheck, Gauge, Lightbulb, PackageSearch, Phone, ShieldCheck, Sparkles, Wrench, Zap } from 'lucide-react';

export const portfolio = {
  person: {
    name: 'Daniel Brítez',
    initials: 'DB',
    title: 'Técnico mecánico de motocicletas y automóviles',
    subtitle: 'Ejecutivo comercial de repuestos y atención al cliente',
    phoneDisplay: '+595 976 546 438',
    phoneHref: '+595976546438',
    whatsappNumber: '595976546438',
    whatsappMessage: 'Hola Daniel, vi tu portafolio profesional y quisiera conversar contigo.',
    city: 'Limpio, Paraguay',
    email: null as string | null,
    mobility: true,
    availability: true,
    currentWork: 'Biciclo’s Shop',
    previousWork: 'RD Automóvil',
    experienceSummary: '5 años en el rubro de talleres y motocicletas',
    cvPath: '/documents/cv-daniel-britez.pdf',
    cvAvailable: false,
  },
  seo: {
    title: 'Daniel Brítez | Técnico mecánico de motocicletas y automóviles',
    description: 'Portafolio profesional de Daniel Brítez, técnico mecánico con experiencia en motocicletas, automóviles, venta de repuestos y atención al cliente en Limpio, Paraguay.',
    url: 'https://danielbritez2026.vercel.app',
  },
  nav: [
    { label: 'Inicio', href: '#inicio' },
    { label: 'Perfil', href: '#perfil' },
    { label: 'Experiencia', href: '#experiencia' },
    { label: 'Especialidades', href: '#especialidades' },
    { label: 'Contacto', href: '#contacto' },
  ],
  profile: [
    'Profesional con experiencia en motocicletas, repuestos, atención al cliente y mecánica general. Actualmente se desempeña en Biciclo’s Shop en el área comercial, asesorando técnicamente, identificando piezas, elaborando presupuestos y realizando seguimiento de clientes.',
    'Cuenta con práctica de taller en motocicletas, especialmente de origen chino, con tareas de diagnóstico, mantenimiento preventivo y correctivo, reparación de motores, sistemas eléctricos, frenos, suspensión, transmisión, carburación y reemplazo de componentes.',
    'También posee experiencia laboral en RD Automóvil, donde desarrolló tareas de mantenimiento automotriz, cambio de aceite y filtros, revisión de frenos, suspensión, batería, sistema eléctrico y apoyo en reparaciones generales.',
  ],
  strengths: [
    { title: 'Mecánica de motos', text: 'Diagnóstico, mantenimiento, motores, frenos, suspensión, transmisión y carburación.', icon: Wrench },
    { title: 'Automóviles', text: 'Mantenimiento preventivo, revisión general, frenos, suspensión, batería y sistema eléctrico.', icon: Car },
    { title: 'Repuestos y cliente', text: 'Venta, identificación de piezas, presupuestos, pedidos, stock y seguimiento comercial.', icon: PackageSearch },
  ],
  experience: [
    { company: 'Biciclo’s Shop', role: 'Ejecutivo comercial y atención al cliente', meta: 'Trabajo actual', icon: BriefcaseBusiness, items: ['Venta de repuestos y accesorios para motocicletas.', 'Atención presencial, telefónica y digital.', 'Asesoramiento técnico y comercial.', 'Identificación de repuestos según marca, modelo y necesidad del cliente.', 'Elaboración y envío de presupuestos.', 'Seguimiento de consultas y ventas.', 'Recepción y gestión de pedidos.', 'Verificación de disponibilidad de productos.', 'Coordinación de pedidos y entrega de mercaderías.', 'Organización, exhibición y reposición de repuestos.', 'Control básico de inventario y stock.', 'Registro de productos vendidos.', 'Atención de consultas, reclamos y solicitudes.', 'Orientación sobre mantenimiento de motocicletas.', 'Venta complementaria de productos relacionados.', 'Apoyo en tareas administrativas y operativas.'] },
    { company: 'Experiencia en taller de motocicletas', role: 'Mecánica práctica de motocicletas', meta: 'Experiencia aproximada: 5 años', icon: Bike, items: ['Diagnóstico de fallas mecánicas y eléctricas.', 'Reparación, desmontaje, revisión y montaje de motores.', 'Mantenimiento preventivo y correctivo.', 'Revisión de baterías, luces, sistema de arranque, encendido y carga.', 'Regulación, limpieza y reparación de carburadores.', 'Cambio de aceite, filtros y bujías.', 'Mantenimiento y reparación de frenos y suspensión.', 'Ajuste y cambio de cadenas, coronas y piñones.', 'Reparación y ajuste de embrague y transmisión.', 'Cambio y reparación de cubiertas.', 'Reemplazo de componentes dañados.', 'Pruebas de funcionamiento posteriores a cada reparación.', 'Experiencia principalmente con motocicletas de origen chino.'] },
    { company: 'RD Automóvil', role: 'Cargo sugerido: Auxiliar de mecánica automotriz', meta: 'Cargo exacto pendiente de confirmar', icon: Car, items: ['Mantenimiento preventivo y correctivo de automóviles.', 'Cambio de aceite y filtros.', 'Revisión de niveles de líquidos e inspección general del vehículo.', 'Revisión y mantenimiento de frenos.', 'Cambio de pastillas y componentes de freno.', 'Revisión de suspensión y dirección.', 'Diagnóstico básico de fallas mecánicas.', 'Revisión de batería y sistema eléctrico.', 'Cambio de bujías y componentes de encendido.', 'Revisión de correas, mangueras y conexiones.', 'Apoyo en desmontaje y montaje de piezas del motor.', 'Reemplazo de repuestos dañados.', 'Uso y cuidado de herramientas mecánicas.', 'Pruebas de funcionamiento posteriores al mantenimiento.'] },
  ],
  specialties: [
    ['Mecánica de motocicletas', Bike], ['Electricidad de motocicletas', Zap], ['Motores de 2 y 4 tiempos', Gauge], ['Frenos y suspensión', ShieldCheck], ['Transmisión, embrague y relación', Wrench], ['Carburación', Sparkles], ['Mantenimiento automotriz', Car], ['Diagnóstico básico', ClipboardCheck], ['Venta e identificación de repuestos', PackageSearch],
  ],
  process: ['Escuchar y relevar', 'Diagnosticar', 'Seleccionar solución o repuesto', 'Ejecutar o asesorar', 'Verificar el resultado'],
  competencies: ['Responsabilidad', 'Puntualidad', 'Resolución de problemas', 'Trabajo en equipo', 'Atención al detalle', 'Orientación al cliente', 'Aprendizaje continuo'],
  objective: 'Crecer profesionalmente en motocicletas de alta gama, diagnóstico técnico e inyección electrónica, fortaleciendo la combinación entre taller, repuestos y atención al cliente.',
  valuesIcons: [CheckCircle2, Lightbulb, Phone],
} as const;

export const whatsappUrl = `https://wa.me/${portfolio.person.whatsappNumber}?text=${encodeURIComponent(portfolio.person.whatsappMessage)}`;
