# Portfolio de Gabriel González

Portfolio orientado al desarrollo de sistemas de gestión para negocios. Incluye proyectos, casos de implementación, experiencia laboral, formación y contacto.

## Desarrollo

```sh
npm install
npm run dev
```

## Verificación

```sh
npm run lint
npm run build
```

Next.js 16.2.9, React 19, TypeScript y Tailwind CSS 4. Consultar `AGENTS.md` y las guías locales en `node_modules/next/dist/docs/` antes de modificar convenciones del framework.

## Contenido

- `src/lib/data/projects.ts`: proyectos, orden, estado, funciones y medios. GymAdmin es el caso destacado y su nombre sigue siendo provisional.
- `src/components/sections/About.tsx`: perfil, experiencia y formación basados en los CV locales.
- `public/projects/`: imágenes públicas. Las nuevas capturas de GymAdmin provienen de componentes reales con datos ficticios.
- `src/lib/site.ts`: URL pública. Configurar `NEXT_PUBLIC_SITE_URL` con el dominio canónico al cambiar de dominio.
- `src/app/sitemap.ts`, `robots.ts` y `opengraph-image.tsx`: descubrimiento y vista previa al compartir.

## Contacto

El endpoint de contacto utiliza `RESEND_API_KEY`, configurada exclusivamente en el entorno del servidor. No incluir archivos de entorno ni credenciales en Git.

## Publicación

Las verificaciones locales no confirman un despliegue. El seguimiento en Google Search Console y Analytics requiere las cuentas y configuración del propietario; no se añaden identificadores ficticios.
