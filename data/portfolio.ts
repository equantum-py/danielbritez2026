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
    experienceSummary: '5 años de experiencia',
    cvPath: '/documents/cv-daniel-britez.pdf',
    cvAvailable: false,
  },
  seo: {
    title: 'Daniel Brítez | Técnico mecánico de motocicletas y automóviles',
    description: 'Soy Daniel Brítez, técnico mecánico con experiencia en motocicletas, automóviles, venta de repuestos y atención al cliente en Limpio, Paraguay.',
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
    'Cuento con aproximadamente cinco años de experiencia en el sector de motocicletas y mecánica. He trabajado en diagnóstico, mantenimiento, reparación de motores, sistemas eléctricos, frenos, suspensión, transmisión y carburación.',
    'Actualmente formo parte de Biciclo’s Shop, donde me desempeño en ventas, atención al cliente y asesoramiento sobre repuestos para motocicletas. También trabajé en RD Automóvil, realizando tareas de mecánica automotriz.',
    'Mi experiencia técnica me permite comprender las necesidades de cada cliente, identificar correctamente los repuestos y brindar recomendaciones basadas en el funcionamiento real de la motocicleta o el vehículo.',
  ],
  strengths: [
    { title: 'Mecánica de motos', text: 'Tengo experiencia práctica en diagnóstico, mantenimiento, motores, frenos, suspensión, transmisión y carburación.', icon: Wrench },
    { title: 'Automóviles', text: 'También trabajé en mantenimiento preventivo, revisión general, frenos, suspensión, batería y sistema eléctrico.', icon: Car },
    { title: 'Repuestos y cliente', text: 'Asesoro en venta, identificación de piezas, presupuestos, pedidos, stock y seguimiento comercial.', icon: PackageSearch },
  ],
  experience: [
    { company: 'Biciclo’s Shop', role: 'Ejecutivo comercial y atención al cliente', meta: 'Trabajo actual', intro: 'Actualmente trabajo en Biciclo’s Shop como ejecutivo comercial y encargado de atención al cliente. Mi función principal es ayudar a cada cliente a encontrar el repuesto adecuado según la marca, el modelo y la necesidad de su motocicleta.', icon: BriefcaseBusiness, items: ['Vendo repuestos y accesorios para motocicletas.', 'Atiendo consultas presenciales, telefónicas y digitales.', 'Asesoro sobre repuestos y accesorios.', 'Identifico piezas según la marca, el modelo y la necesidad del cliente.', 'Elaboro y envío presupuestos.', 'Realizo seguimiento de consultas y ventas.', 'Gestiono pedidos.', 'Verifico la disponibilidad de productos.', 'Coordino pedidos y entregas de mercaderías.', 'Organizo, exhibo y repongo repuestos.', 'Colaboro con el control básico de inventario y stock.', 'Registro productos vendidos.', 'Respondo consultas, reclamos y solicitudes.', 'Oriento a los clientes sobre mantenimiento básico de motocicletas.', 'Ofrezco productos complementarios relacionados.', 'Apoyo tareas administrativas y operativas.'] },
    { company: 'Experiencia en taller de motocicletas', role: 'Mecánica práctica de motocicletas', meta: 'Experiencia aproximada: 5 años', intro: 'Durante aproximadamente cinco años trabajé en talleres de motocicletas, desarrollando experiencia práctica en diferentes áreas de la mecánica, principalmente con motocicletas de origen chino.', icon: Bike, items: ['Diagnostico fallas mecánicas y eléctricas.', 'Realizo mantenimiento preventivo y correctivo.', 'Desmonto, reviso y monto motores.', 'Regulo y reparo carburadores.', 'Reviso sistemas de arranque, encendido y carga.', 'Realizo mantenimiento de frenos y suspensión.', 'Ajusto cadenas, coronas y piñones.', 'Reparo embragues y componentes de transmisión.', 'Cambio aceite, filtros, bujías y cubiertas.', 'Reemplazo componentes dañados.', 'Verifico el funcionamiento después de cada reparación.'] },
    { company: 'RD Automóvil', role: 'Mecánica automotriz', meta: 'Experiencia previa', intro: 'Trabajé en RD Automóvil, donde adquirí experiencia en mecánica y mantenimiento de automóviles.', icon: Car, items: ['Realicé mantenimiento preventivo y correctivo.', 'Cambié aceite y filtros.', 'Revisé niveles de líquidos e hice inspecciones generales del vehículo.', 'Revisé frenos, suspensión y dirección.', 'Cambié pastillas y componentes de freno.', 'Verifiqué baterías y sistemas eléctricos.', 'Cambié bujías y componentes de encendido.', 'Revisé correas, mangueras y conexiones.', 'Apoyé en el desmontaje y montaje de componentes del motor.', 'Reemplacé piezas y repuestos.', 'Usé y cuidé herramientas mecánicas.', 'Realicé pruebas después de cada mantenimiento.'] },
  ],
  specialties: [
    ['Mecánica de motocicletas', Bike], ['Electricidad de motocicletas', Zap], ['Motores de 2 y 4 tiempos', Gauge], ['Frenos y suspensión', ShieldCheck], ['Transmisión, embrague y relación', Wrench], ['Carburación', Sparkles], ['Mantenimiento automotriz', Car], ['Diagnóstico básico', ClipboardCheck], ['Venta e identificación de repuestos', PackageSearch],
  ],
  process: ['Escucho y comprendo la necesidad', 'Analizo el problema o la consulta', 'Identifico la solución o el repuesto adecuado', 'Realizo el trabajo o brindo el asesoramiento', 'Verifico que el resultado sea correcto'],
  competencies: ['Responsabilidad', 'Puntualidad', 'Resolución de problemas', 'Trabajo en equipo', 'Atención al detalle', 'Orientación al cliente', 'Aprendizaje continuo'],
  objective: 'Busco seguir desarrollándome en mecánica de motocicletas, diagnóstico técnico e inyección electrónica, combinando mi experiencia de taller con mis conocimientos comerciales y de atención al cliente.',
  valuesIcons: [CheckCircle2, Lightbulb, Phone],
} as const;

export const whatsappUrl = `https://wa.me/${portfolio.person.whatsappNumber}?text=${encodeURIComponent(portfolio.person.whatsappMessage)}`;
