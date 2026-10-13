# Tina Cabrera Beauty Salon — Propuesta web

Propuesta de rediseño para [tinacbeautysalon.com](https://tinacbeautysalon.com/): una web blanca y sencilla, con scroll vertical tradicional, menú fijo y las fotos como protagonistas.

- `propuesta/index.html`: la propuesta.
- `propuesta/assets/`: logo y monograma de la marca.
- `propuesta/v1/`: primera propuesta, descartada.

Las versiones anteriores "Exposición de color" y "Revista de moda" se descartaron; siguen en el historial de git (commit `abe52f2`).

## Ver en local

```bash
python -m http.server 8765 --directory propuesta
```

Abre http://localhost:8765.

## Despliegue

Web estática sin build. `vercel.json` publica la carpeta `propuesta/`.
