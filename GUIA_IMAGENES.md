# Guía para poner fotos reales

1. Entra a un banco de imágenes gratuito: **Unsplash**, **Pexels** o **Pixabay** (revisa que la licencia permita uso comercial).
2. Busca con el término sugerido y descarga la foto (mejor cuadrada, mínimo 800 x 800 px).
3. Renómbrala con el nombre de la primera columna y guárdala en `src/assets/images/products/`.
4. La página la usa automáticamente en lugar de la imagen de muestra. Si no se actualiza, reinicia `npm run dev`.

**Mejor opción:** si PetStyle ya tiene fotos de sus propios productos, usa esas, porque las fotos de stock no muestran el producto exacto.

**Alternativa con enlace:** en `src/data/catalog.js`, agrega a un producto el campo `imageUrl: "https://..."` y usará esa dirección en vez del archivo.

| Archivo a crear | Producto | Qué buscar |
|---|---|---|
| `bandana-cuadros-lila.jpg` | Bandana Cuadros Lila | dog wearing bandana |
| `bandana-algodon-rosa.jpg` | Bandana Algodón Rosa | dog wearing bandana |
| `botas-antideslizantes.jpg` | Botas Antideslizantes | dog wearing boots |
| `botas-impermeables-rain.jpg` | Botas Impermeables Rain | dog wearing rain boots |
| `casaca-acolchada-cozy.jpg` | Casaca Acolchada Cozy | dog wearing jacket coat |
| `impermeable-rain-amarillo.jpg` | Impermeable Rain Amarillo | dog wearing raincoat |
| `impermeable-rain-rosa.jpg` | Impermeable Rain Rosa | dog wearing raincoat |
| `casaca-invierno.jpg` | Casaca Invierno | dog wearing jacket coat |
| `pijama-estrellas.jpg` | Pijama Estrellas | dog wearing pajamas |
| `pijama-huellitas.jpg` | Pijama Huellitas | dog wearing pajamas |
| `polo-algodon-lila.jpg` | Polo Algodón Lila | dog wearing t-shirt |
| `polo-rayas-negro.jpg` | Polo Rayas Negro | dog wearing t-shirt |
| `sudadera-cozy-crema.jpg` | Sudadera Cozy Crema | dog wearing sweater hoodie |
| `sudadera-cozy-lila.jpg` | Sudadera Cozy Lila | dog wearing sweater hoodie |
| `abrigo-polar-suave.jpg` | Abrigo Polar Suave | dog wearing sweater hoodie |
| `collar-clasico-negro.jpg` | Collar Clásico Negro | dog collar |
| `collar-rosa-brillante.jpg` | Collar Rosa Brillante | dog collar |
| `collar-rain-impermeable.jpg` | Collar Rain Impermeable | dog collar |
| `correa-clasica-negra.jpg` | Correa Clásica Negra | dog leash walking |
| `correa-manos-libres.jpg` | Correa Manos Libres | dog leash walking |
| `correa-rain-impermeable.jpg` | Correa Rain Impermeable | dog leash walking |
| `pechera-air-mesh-ajustable.jpg` | Pechera Air Mesh Ajustable | dog harness |
| `arnes-acolchado-reflectivo.jpg` | Arnés Acolchado Reflectivo | dog harness |
| `placa-smart-id-huella.jpg` | Placa Smart ID Huella | pet id tag |
| `placa-smart-id-corazon.jpg` | Placa Smart ID Corazón | pet id tag |
| `pelota-de-goma-resistente.jpg` | Pelota de Goma Resistente | dog toy |
| `hueso-de-cuerda.jpg` | Hueso de Cuerda | dog toy |
| `peluche-sonoro.jpg` | Peluche Sonoro | dog toy |
| `cama-ortopedica-m.jpg` | Cama Ortopédica M | pet bed |
| `cama-redonda-suave.jpg` | Cama Redonda Suave | pet bed |
| `shampoo-hipoalergenico.jpg` | Shampoo Hipoalergénico | dog grooming |
| `cepillo-desenredante.jpg` | Cepillo Desenredante | dog grooming |
| `bowl-de-viaje-plegable.jpg` | Bowl de Viaje Plegable | pet food bowl |
| `bowl-ceramica-rosa.jpg` | Bowl Cerámica Rosa | pet food bowl |
| `polo-gato-algodon.jpg` | Polo Gato Algodón | cat wearing t-shirt |
| `polo-gato-rayas.jpg` | Polo Gato Rayas | cat wearing t-shirt |
| `pijama-gato-luna.jpg` | Pijama Gato Luna | cat wearing pajamas |
| `pijama-gato-estrellas.jpg` | Pijama Gato Estrellas | cat wearing pajamas |
| `casaca-gato-acolchada.jpg` | Casaca Gato Acolchada | cat wearing jacket coat |
| `impermeable-gato-rain.jpg` | Impermeable Gato Rain | cat wearing raincoat |
| `collar-gato-rosa.jpg` | Collar Gato Rosa | cat collar |
| `collar-gato-cascabel.jpg` | Collar Gato Cascabel | cat collar |
| `arnes-correa-gato-lila.jpg` | Arnés + Correa Gato Lila | cat harness leash |
| `arnes-correa-gato-negro.jpg` | Arnés + Correa Gato Negro | cat harness leash |
| `placa-gato-smart-id.jpg` | Placa Gato Smart ID | pet id tag |
| `placa-gato-corazon.jpg` | Placa Gato Corazón | pet id tag |
| `cama-gato-nube.jpg` | Cama Gato Nube | pet bed |
| `cueva-para-gatos.jpg` | Cueva para Gatos | pet bed |
| `rascador-torre.jpg` | Rascador Torre | cat scratching post |
| `rascador-alfombra.jpg` | Rascador Alfombra | cat scratching post |
| `transportador-de-viaje.jpg` | Transportador de Viaje | pet carrier |
| `mochila-transportadora.jpg` | Mochila Transportadora | pet carrier |
