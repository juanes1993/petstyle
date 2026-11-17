# PetStyle – Moda para Mascotas

Tienda en línea de ropa y accesorios para perros y gatos, hecha con **React 19 + Vite + Tailwind CSS 4 + React Router**.
Los productos se consumen desde una **API simulada con JSON Server**.

## Cómo ejecutarlo

```bash
npm install
npm run dev        # enciende la API (3001) y la web (5173) juntas → http://localhost:5173
```

| Comando | Qué hace |
|---|---|
| `npm run dev` | API + web a la vez (lo normal) |
| `npm run web` | Solo la web (Vite) |
| `npm run api` | Solo la API (JSON Server en `http://localhost:3001/products`) |
| `npm run build` | Genera la versión de producción en `dist/` |
| `npm run preview` | Prueba la versión de producción en tu computadora |
| `npm run lint` | Revisa el código |

## Rutas (React Router)

| Ruta | Página |
|---|---|
| `/` | Inicio |
| `/tienda` | Todos los productos |
| `/categoria/:pet` y `/categoria/:pet/:sub` | Perros / Gatos y sus subcategorías |
| `/tienda/coleccion/:id` | Colecciones (cozy, rain, paseo) |
| `/ofertas` | Productos con descuento |
| `/buscar?q=…` | Resultados del buscador |
| `/producto/:id` | Detalle de producto |
| `/guia-de-tallas` | Guía de tallas |
| `/contacto` | Formulario de contacto |
| `*` | Página de error 404 |

## API

- **Desarrollo:** JSON Server lee `public/db.json` y responde en `GET http://localhost:3001/products` (52 productos).
  Admite filtros, por ejemplo `?pet=gatos&_limit=3`.
- **Producción (Vercel / Netlify):** esos servicios no ejecutan servidores, por eso la app lee el mismo archivo publicado como `/db.json`. Es el mismo dato, así que **solo se edita `public/db.json`**.
- **Otra API:** copia `.env.example` a `.env` y define `VITE_API_URL`.
- Código: `src/services/api.js` (fetch) y `src/context/ProductsContext.jsx` (estados de carga y error con `useState` y `useEffect`).

## Estructura

```
src/
├─ components/
│  ├─ layout/    Header, Navbar, Footer, WhatsAppFloat, ScrollManager
│  ├─ home/      Hero, CollectionSection, Benefits, SizeGuide, CtaBanner
│  ├─ product/   ProductCard, ProductImage
│  ├─ cart/      CartDrawer
│  ├─ forms/     ContactForm
│  └─ ui/        Button, Breadcrumbs, FormField, LoadingGrid, ErrorState, ProductsGate
├─ pages/        Home, CatalogPage, ProductPage, SizesPage, ContactPage, NotFoundPage
├─ context/      ProductsContext (API), CartContext (carrito)
├─ hooks/        useForm, useDocumentTitle
├─ services/     api.js
├─ utils/        validators.js, text.js
└─ data/         catalog.js (menú, contacto, tallas), images.js (fotos)
public/db.json   Base de datos de la API (52 productos)
```

## Cumplimiento de la PC3 (preguntas 6 a 10)

| Pregunta | Requisito | Dónde está |
|---|---|---|
| **6** | Mínimo 6 componentes | 20 componentes en `src/components` |
| | Organizados en carpetas | `layout/`, `home/`, `product/`, `cart/`, `forms/`, `ui/` |
| | Uso de props | `ProductCard product={…}`, `CollectionSection title/products/to`, `Button variant/to/href`, `FormField label/error` |
| | Reutilizar 2+ componentes en distintas secciones | `ProductCard` (Home, catálogo, producto, relacionados), `Button` (Hero, CtaBanner, 404, formularios), `Breadcrumbs` (5 páginas), `FormField` (contacto) |
| **7** | Instalar y configurar React Router | `main.jsx` (`BrowserRouter`) y `App.jsx` (`Routes`) |
| | 4+ rutas funcionales | 10 rutas (tabla de arriba) |
| | Navegación con `Link` / `NavLink` | `Navbar.jsx` (`NavLink` con ruta activa), `ProductCard`, `Breadcrumbs`, `Footer` (`Link`) |
| | Página de error 404 | `pages/NotFoundPage.jsx` (ruta `*`) |
| | Menú consistente | `Header` y `Footer` están fuera de `Routes`, así que se ven en todas las páginas |
| **8** | API simulada con JSON Server | `public/db.json` + `npm run api` |
| | `fetch` o Axios | `src/services/api.js` (fetch) |
| | 10+ registros dinámicos | 52 productos |
| | `useState` y `useEffect` | `ProductsContext.jsx` |
| | Estados de carga y error | `LoadingGrid` (esqueleto), `ErrorState` (con botón Reintentar) |
| **9** | 3+ interacciones | Carrito (agregar, cantidad, quitar), buscador, filtros, orden, selector de talla, formularios |
| | `onClick`, `onChange`, `onSubmit` | Botones del carrito; buscador y filtros; `ContactForm` y suscripción |
| | Buscador o filtro dinámico | Buscador del header (`/buscar?q=`) y filtros del catálogo (solo ofertas, ocultar agotados, precio máximo) |
| | Formulario con validaciones | `ContactForm` (5 campos validados) y suscripción de `CtaBanner` |
| | Estado con Hooks | `useState`, `useEffect`, `useMemo`, `useContext`, `useForm` (propio) |
| **10** | Integrar todas las vistas | `App.jsx` |
| | Tailwind responsive | Clases `sm:` `md:` `lg:` en todos los componentes |
| | Verificar móvil, tablet y escritorio | Probado a 390, 768 y 1440 px: sin scroll horizontal y con menú hamburguesa en móvil |
| | GitHub y despliegue | Pasos abajo; `vercel.json` y `public/_redirects` ya están incluidos |

## Publicar en GitHub

```bash
git init
git add .
git commit -m "PetStyle: React Router, API con JSON Server y formularios"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/NOMBRE-DEL-REPOSITORIO.git
git push -u origin main
```
Crea antes el repositorio vacío en github.com (sin README) y copia la dirección con el botón de copiar.

## Desplegar

**Vercel:** vercel.com → *Add New → Project* → importa el repositorio → *Deploy*. Detecta Vite solo.

**Netlify:** app.netlify.com → *Add new site → Import an existing project* → elige el repositorio →
*Build command* `npm run build` y *Publish directory* `dist` → *Deploy*.

Ambos usan los archivos incluidos para que las rutas como `/producto/12` funcionen al recargar la página.

## Notas

- Las fotos están en `src/assets/images/` (ver `GUIA_IMAGENES.md`).
- Los formularios **simulan** el envío: validan y confirman, pero no mandan datos a un servidor. El de contacto ofrece continuar por WhatsApp con el mensaje ya escrito.
- Las páginas legales del footer (políticas, términos) aún no existen y apuntan a Contacto.
