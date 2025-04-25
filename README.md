# Galia's First Adventure - Invitación Digital

## 📜 Resumen del Proyecto

"Galia's First Adventure" es una aplicación web interactiva construida con Next.js 15 para servir como invitación digital al primer cumpleaños de Galia. El proyecto combina tecnologías modernas de frontend y backend para ofrecer una experiencia atractiva y funcional a los invitados.

**Tecnologías Principales:**

*   **Framework Frontend:** Next.js 15 (App Router) con React 18 y TypeScript.
*   **Estilos:** Tailwind CSS con Shadcn UI para componentes y CSS variables para temas (claro/oscuro).
*   **Animaciones:** Framer Motion y `tailwindcss-animate`.
*   **Gestión de Estado (Cliente):** React Hooks (`useState`, `useEffect`, hooks personalizados).
*   **Inteligencia Artificial:** Google GenAI con Genkit para generación de mensajes.
*   **Backend (Simulado/Externo):** Firebase Firestore para almacenamiento de mensajes.
*   **Formularios:** Componentes controlados con React state y validación básica.
*   **Iconos:** Lucide React.

La aplicación presenta una estructura de tres secciones con transiciones suaves: una pantalla de carga animada, una sección introductoria con galería de fotos y la invitación principal con detalles del evento, mapa interactivo (actualmente placeholder) y formulario RSVP.

## ⚙️ Detalles de Configuración

### `next.config.ts`

*   Configuración básica de Next.js.
*   Habilita `typescript.ignoreBuildErrors` y `eslint.ignoreDuringBuilds` (no recomendado para producción final, usar con precaución).
*   Define variables de entorno accesibles del lado del servidor (ej., `GOOGLE_MAPS_API_KEY`, aunque actualmente se usa una imagen estática).

### `package.json`

*   Define el nombre del proyecto, versión y scripts (`dev`, `build`, `start`, `lint`, etc.).
*   Enumera todas las dependencias del proyecto (ver sección "Resumen de Dependencias").
*   Incluye scripts específicos para Genkit (`genkit:dev`, `genkit:watch`).

### `tailwind.config.ts`

*   Configura Tailwind CSS.
*   Habilita el modo oscuro basado en clase (`darkMode: ["class"]`).
*   Define la ubicación de los archivos a escanear por Tailwind (`content`).
*   Extiende el tema por defecto (`theme.extend`):
    *   Define colores personalizados usando variables CSS (`hsl(var(--...))`) para `background`, `foreground`, `primary`, `secondary`, `accent`, `muted`, `destructive`, `card`, `popover`, `border`, `input`, `ring`. Esto permite la tematización claro/oscuro.
    *   Define colores específicos para gráficos (`chart-1` a `chart-5`).
    *   Define radios de borde (`borderRadius`).
    *   Define keyframes (`accordion-down`, `accordion-up`) y animaciones (`animation`).
*   Incluye el plugin `tailwindcss-animate`.

### `tsconfig.json`

*   Configuración del compilador TypeScript.
*   Establece `target` a `ES2017` y `module` a `esnext`.
*   Habilita `jsx`: `preserve` para que Next.js maneje la transformación.
*   Define `moduleResolution`: `bundler` para alinearse con las herramientas modernas.
*   Habilita opciones estrictas (`strict`: `true`).
*   Configura alias de rutas (`paths`: `{"@/*": ["./src/*"]}`) para importaciones más limpias.
*   Incluye los archivos necesarios (`include`) y excluye `node_modules` (`exclude`).
*   Integra el plugin de Next.js.

### Variables de Entorno (`.env` / `.env.local`)

*   El proyecto utiliza variables de entorno para gestionar claves de API y configuraciones sensibles.
*   `NEXT_PUBLIC_FIREBASE_*`: Claves de configuración de Firebase accesibles en el cliente.
*   `GOOGLE_GENAI_API_KEY`: Clave para la API de Google GenAI (usada en el backend/servidor).
*   `GOOGLE_MAPS_API_KEY`: Clave para Google Maps (usada en `next.config.ts`).
*   **Importante:** Las variables con prefijo `NEXT_PUBLIC_` son expuestas al navegador. Las claves sensibles (como `GOOGLE_GENAI_API_KEY`) **no deben** tener este prefijo y solo deben usarse en el lado del servidor o API routes.

## 🔌 Resumen de Dependencias

### Core (Next.js, React, Tailwind)

*   `next`: Framework principal.
*   `react`, `react-dom`: Librería para construir interfaces.
*   `typescript`: Tipado estático.
*   `tailwindcss`: Framework CSS utility-first.
*   `autoprefixer`, `postcss`: Procesamiento CSS.

### UI y Estilos (Shadcn UI y relacionados)

*   `@radix-ui/*`: Primitivas de UI accesibles (base para Shadcn).
*   `class-variance-authority`, `clsx`, `tailwind-merge`: Utilidades para clases CSS dinámicas.
*   `tailwindcss-animate`: Plugin para animaciones con Tailwind.
*   `lucide-react`: Biblioteca de iconos.
*   `next-themes`: Gestión de temas (claro/oscuro).

### Firebase

*   `firebase`: SDK principal de Firebase para interactuar con Firestore.

### Inteligencia Artificial (Genkit)

*   `genkit`, `@genkit-ai/googleai`, `@genkit-ai/next`: Herramientas para integrar Google GenAI.

### Formularios y Validación

*   `react-hook-form`, `@hookform/resolvers`: Manejo de formularios (aunque no se usa explícitamente en `MensajeModal`).
*   `zod`: Librería de validación de esquemas (usada en Genkit y potencialmente en formularios).

### Otros

*   `framer-motion`: Librería para animaciones complejas.
*   `date-fns`: Utilidades para manejo de fechas.

## 📁 Estructura de Directorios

```
/src
├── app/                 # Rutas principales (App Router)
│   ├── api/             # API Routes (ej: mensajes, rsvp)
│   ├── favicon.svg      # Favicon de la aplicación
│   ├── globals.css      # Estilos globales y variables CSS de Tailwind/Shadcn
│   ├── layout.tsx       # Layout raíz de la aplicación
│   └── page.tsx         # Página principal (entry point)
├── components/          # Componentes reutilizables
│   ├── animations/      # Componentes específicos de animación (Confetti, DaisyFlower)
│   ├── invitation/      # Componentes específicos de la invitación (Loading, Intro, Hero, Details, Modales)
│   └── ui/              # Componentes de UI de Shadcn (Button, Card, Dialog, etc.)
├── hooks/               # Hooks personalizados (use-countdown, use-gallery, use-mobile, use-toast)
├── lib/                 # Utilidades, constantes y configuración
│   ├── constants.ts     # Constantes de la aplicación (fecha evento, etc.)
│   ├── firebase.ts      # Configuración e inicialización de Firebase Client
│   ├── theme.ts         # (Obsoleto) Definiciones de tema
│   └── utils.ts         # Funciones de utilidad (cn)
├── services/            # Lógica para interactuar con servicios externos (ej: map.ts)
├── styles/              # Archivos CSS específicos para componentes (CSS Modules o globales)
│   ├── *.css            # Estilos para LoadingScreen, IntroSection, Gallery, Details, etc.
└── ai/                  # Lógica relacionada con Inteligencia Artificial
    ├── flows/           # Flujos de Genkit (thank-you-message.ts)
    ├── ai-instance.ts   # Instancia global de Genkit
    └── dev.ts           # Archivo para desarrollo con Genkit UI
```

### `src/app/layout.tsx`

*   Define la estructura HTML raíz (`<html>`, `<body>`).
*   Configura el idioma (`lang="es"`).
*   Incluye metadatos globales (SEO, Open Graph, Twitter Cards, favicon).
*   Importa y aplica fuentes globales (Geist Sans, Geist Mono).
*   Envuelve el contenido (`children`) en el `ThemeProvider` de `next-themes` para habilitar el cambio de tema (aunque actualmente forzado a 'light').
*   Aplica clases base de Tailwind y variables de fuente al `<body>`.
*   Incluye `suppressHydrationWarning` para mitigar errores comunes de hidratación.

### `src/app/page.tsx`

*   Es el componente principal de la página de inicio (`/`).
*   Utiliza el hook `useState` para gestionar el estado de la aplicación (carga, sección visible).
*   Utiliza `useEffect` para simular un tiempo de carga inicial.
*   Renderiza condicionalmente los componentes de las diferentes secciones:
    *   `LoadingScreen`: Mientras `isLoading` es `true`.
    *   `IntroSection`: Cuando `showIntro` es `true`.
    *   `HeroSection`, `DetailsSection`, `BotonFlotanteRegalos`, `BotonFlotanteMensajes`, `Toaster`: Cuando `showInvitation` es `true`.
*   Define la función `handleProceedToInvitation` para pasar de la introducción a la invitación principal.

## 🎨 Uso de Componentes y Estilos

### `src/app/layout.tsx`

*   **Componentes UI:**
    *   `ThemeProvider` (`@/components/theme-provider.tsx`): Envuelve la aplicación para gestionar el tema (claro/oscuro).
*   **Estilos:**
    *   `globals.css`: Importado para estilos globales, variables CSS de Tailwind/Shadcn y fuentes.
    *   Clases de Tailwind aplicadas directamente al `<body>` (`antialiased`) y para las variables de fuente (`geistSans.variable`, `geistMono.variable`).

### `src/app/page.tsx`

*   **Componentes UI:**
    *   `LoadingScreen` (`@/components/invitation/LoadingScreen.tsx`): Pantalla de carga inicial.
    *   `IntroSection` (`@/components/invitation/IntroSection.tsx`): Sección de bienvenida con galería.
    *   `HeroSection` (`@/components/invitation/HeroSection.tsx`): Banner principal de la invitación.
    *   `DetailsSection` (`@/components/invitation/DetailsSection.tsx`): Detalles del evento (fecha, lugar).
    *   `BotonFlotanteRegalos` (`@/components/invitation/BotonFlotanteRegalos.tsx`): Botón para modal de información de regalos.
    *   `BotonFlotanteMensajes` (`@/components/invitation/BotonFlotanteMensajes.tsx`): Botón para modal de envío de mensajes.
    *   `Toaster` (`@/components/ui/toaster.tsx`): Componente de Shadcn para mostrar notificaciones (toasts).
*   **Estilos:**
    *   Utiliza clases de Tailwind para el layout principal (`flex`, `flex-col`, `items-center`, `min-h-screen`, `w-full`).
    *   Cada componente importado (`LoadingScreen`, `IntroSection`, etc.) trae consigo sus propios estilos, definidos internamente con Tailwind o mediante archivos CSS específicos importados (ej: ` "@/styles/intro-section.css"`).
    *   Los componentes de Shadcn UI (`Toaster`) utilizan los estilos definidos en `globals.css` y `tailwind.config.ts`.
```