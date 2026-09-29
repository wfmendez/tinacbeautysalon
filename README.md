# Tina Cabrera Beauty Salon — Propuesta web

Propuesta de rediseño para [tinacbeautysalon.com](https://tinacbeautysalon.com/) con dos direcciones creativas:

- **Versión A · Exposición de color** (`propuesta/exposicion/`): el salón como una galería; el cursor pinta con pigmento (WebGL) y descubre los trabajos reales.
- **Versión B · Revista de moda** (`propuesta/revista/`): la web como un número de revista, con páginas que se pasan al hacer scroll.

`propuesta/index.html` es la portada para elegir versión. `propuesta/v1/` es una primera propuesta descartada.

## Ver en local

```bash
python -m http.server 8765 --directory propuesta
```

Abre http://localhost:8765. El efecto de pintura necesita servirse por HTTP (no funciona abriendo el archivo con doble clic).

## Despliegue

Web estática sin build. `vercel.json` publica la carpeta `propuesta/`.
