# Tina Cabrera Beauty Salon — web

Nueva web de [Tina Cabrera Beauty Salon](https://tinacbeautysalon.com/) (Tres Olivos – Montecarmelo, Madrid), hecha con **Next.js 16**.

Web de varias páginas, blanca y sencilla, pensada para que cualquiera la use sin esfuerzo, también personas mayores:

- Menú siempre visible con palabras (en móvil, un botón que dice «Menú»).
- En móvil, barra fija abajo con **Reservar · Llamar · WhatsApp**.
- Letra grande, botones grandes y poco texto.
- Todo dentro de la propia web: la reserva online (Treatwell) va incrustada en `/reservar`.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Inicio |
| `/servicios` y `/servicios/[servicio]` | Peluquería y color, Estética, Depilación |
| `/trabajos` | Fotos de resultados |
| `/salon` | El salón y opiniones |
| `/vales-regalo` | Vales de 50, 100 y 150 € (se piden por WhatsApp o en el salón) |
| `/reservar` | Reserva online y teléfono |
| `/contacto` | Teléfono, WhatsApp, horario y mapa |
| `/legal` | Aviso legal |

Los datos del salón (teléfono, horario, servicios, opiniones…) están en un solo archivo: `lib/site.ts`. Las fotos están en `public/images/`; para cambiar una, basta con reemplazar el archivo manteniendo el nombre.

## Desarrollo

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

```bash
npm run build   # versión de producción
npm run lint    # revisión de código
```

## Despliegue

En Vercel se detecta Next.js automáticamente; no necesita configuración.
