# Actualización del portfolio — 22/10/2026

## Enfoque

Sistemas de gestión, procesos y datos. La IA aparece como herramienta de apoyo en el perfil, sin ser el argumento principal de presentación. GymAdmin ocupa el primer lugar y se presenta como nombre provisional de un producto en producción.

## Fuentes del contenido

- Experiencia y formación: CV técnico, CV administrativo de procesos y sistemas y CV de CEVA disponibles localmente. Se usan los datos coincidentes y la formación vigente del CV más reciente. No se publican los documentos, teléfonos ni datos personales adicionales.
- GymAdmin: guía del administrador, seguimiento de Administración, recepción y puerta, respaldo de acceso local y documentación de reportes del repositorio del producto.
- Estado en producción de GymAdmin: confirmado por el usuario y acompañado por documentación de publicaciones del producto. El material de demostración no se presenta como una captura de datos de producción.
- TECI: el último commit del repositorio del cliente y su proxy mantienen el sitio público en mantenimiento. Se presenta como proyecto en pausa, sin afirmar uso comercial activo.
- MiSodería: historial del repositorio sobre agrupación por repartidor y prioridad de venta directa.
- Celestina: historial del repositorio sobre día preferido y programación desde la última entrega confirmada.

## Capturas de GymAdmin

Se copiaron originales sin modificar el contenido de la interfaz:

| Archivo público | Fuente en el repositorio GymAdmin | Contexto |
| --- | --- | --- |
| `administracion.png` | `.data/verificaciones/attention-desktop.png` | Componente real, vista de prueba con datos ficticios; la captura indica ese contexto. |
| `recepcion.png` | `docs/verification/stage4-desktop.png` | Validación de recepción con socios de ensayo. |
| `seguimiento.png` | `.data/verificaciones/attention-detail-desktop.png` | Seguimiento de saldos y vencimientos con socia de prueba. |
| `reportes.png` | `docs/verification/reports-ux-desktop.png` | Reportes de validación con cifras de ensayo. |

Las cifras de las capturas no se usan como métricas de impacto ni de adopción. No se incorporaron archivos de entorno, datos de autenticación, configuraciones de instalación ni capturas del panel de credenciales. Fénix identifica una instalación; no sustituye la marca pendiente del producto.

## Alcance público

No se anuncian cobros online, facturación fiscal, biometría ni generación de rutinas mediante IA. El respaldo local de hasta 24 horas se limita al acceso y exige una copia vigente. Una apertura no se presenta como cruce físico confirmado.

## Verificación y publicación

Revisar lint, build, rutas e imágenes y la vista de escritorio/móvil antes de publicar. La ejecución de QA produce evidencias locales en `output/portfolio-review/`; esa carpeta no forma parte del contenido servido.

### Resultado de la revisión local

- `npm run lint`, `npm run build` y `git diff --check`: aprobados.
- Inicio y cinco casos de proyecto: respuestas HTTP 200, un H1 por página, metadatos y canonical revisados.
- Revisión responsive a 320, 390, 768 y 1440 px: sin desbordamiento horizontal ni imágenes rotas detectadas.
- Galería: apertura, cierre con Escape y retorno del foco al botón verificados.
- Navegación móvil hacia Sobre mí y Contacto, estado pausado de TECI, enlaces de regreso y detalles desplegables: comprobados.
- Sitemap, robots, LLMS y portada social: respuestas HTTP 200.
- Consola de ejecución sin errores de JavaScript durante la revisión. No se enviaron correos reales ni se modificaron datos de los productos.
- Vista local disponible en el puerto 3010. No se realizó una publicación remota.
