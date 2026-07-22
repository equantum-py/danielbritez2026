# Portafolio profesional — Daniel Brítez

Landing page profesional, responsive y lista para Vercel para **Daniel Brítez**, técnico mecánico de motocicletas y automóviles con experiencia comercial en repuestos y atención al cliente.

## Stack

- Next.js App Router
- TypeScript estricto
- Tailwind CSS
- Lucide React
- ESLint
- Fuentes optimizadas con `next/font`

## Comandos

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Estructura

- `app/`: layout, página principal, estilos globales, robots y sitemap.
- `components/`: header, footer, botones y elementos interactivos.
- `data/portfolio.ts`: fuente central de todo el contenido profesional y datos de contacto.
- `public/images/`: espacio documentado para fotografías reales.
- `public/documents/`: espacio documentado para el CV PDF.

## Contenido centralizado

Toda la información personal, profesional, SEO, navegación, experiencia, especialidades y mensajes de WhatsApp se edita en `data/portfolio.ts`. No se deben duplicar datos manualmente en componentes.

## Despliegue en Vercel

1. Conectar este repositorio a Vercel.
2. Usar la configuración automática de Next.js.
3. Ejecutar build command `npm run build`.
4. Publicar cuando el CV y las fotos definitivas estén disponibles o mantener los placeholders actuales.

## Datos pendientes

Consultar `CONTENT_PENDING.md` antes de publicar una versión final con información completa.
