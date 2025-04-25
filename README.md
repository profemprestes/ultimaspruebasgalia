# Firebase Studio con NextJS

## 📋 Descripción del Proyecto

Este proyecto es un starter de NextJS integrado con Firebase Studio, diseñado para desarrollar aplicaciones web modernas con una arquitectura robusta y escalable. Proporciona una base sólida con herramientas líderes en la industria para crear aplicaciones web de alto rendimiento.

## 🚀 Tecnologías Utilizadas

### Frontend
- **NextJS 15**: Framework de React para renderizado del lado del servidor y generación de sitios estáticos.
- **React 18**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Superset de JavaScript que añade tipado estático.
- **Tailwind CSS**: Framework CSS utility-first para diseño rápido y responsivo.
- **Shadcn UI**: Componentes UI reutilizables basados en Radix UI.
- **Lucide React**: Biblioteca de iconos modernos.

### Backend y Datos
- **Firebase 11**: Plataforma de desarrollo de aplicaciones que incluye autenticación, base de datos en tiempo real, almacenamiento y hosting.
- **Tanstack React Query**: Gestión de estado y caché para datos remotos.

### Inteligencia Artificial
- **Google GenAI**: Integración con la API de Google AI para funcionalidades de inteligencia artificial.
- **GenKit**: Herramientas para desarrollo e integración de AI.

### Formularios y Validación
- **React Hook Form**: Manejo de formularios con validación.
- **Zod**: Biblioteca de validación de esquemas para TypeScript.

## 🧩 Estructura del Proyecto

```
.
├── public/                  # Archivos estáticos
├── src/
│   ├── app/                 # Páginas y rutas de la aplicación
│   │   └── page.tsx         # Página principal
│   ├── components/          # Componentes reutilizables
│   │   └── ui/              # Componentes de UI de Shadcn
│   ├── hooks/               # Custom React hooks
│   ├── lib/                 # Utilidades y funciones auxiliares
│   └── ai/                  # Integración con AI
│       └── dev.ts           # Configuración para desarrollo de AI
├── .env                     # Variables de entorno (API keys)
├── .gitignore               # Archivos ignorados por git
├── components.json          # Configuración de componentes UI
├── next.config.ts           # Configuración de NextJS
├── package.json             # Dependencias y scripts
├── postcss.config.js/mjs    # Configuración de PostCSS
├── tailwind.config.ts       # Configuración de Tailwind CSS
└── tsconfig.json            # Configuración de TypeScript
```

## ⚙️ Configuración del Proyecto

### Variables de Entorno
El proyecto utiliza las siguientes variables de entorno:
- `GOOGLE_GENAI_API_KEY`: Clave de API para Google GenAI
- `GOOGLE_MAPS_API_KEY`: Clave de API para Google Maps (configurada en next.config.ts)

### Tailwind CSS
La configuración personalizada de Tailwind incluye:
- Tema de color personalizado con esquema claro
- Animaciones personalizadas
- Componentes responsivos
- Colores específicos para gráficos

### NextJS
Configurado con:
- Turbopack para desarrollo rápido
- TypeScript con opciones para ignorar errores en build
- Puerto personalizado (9002) para desarrollo

## 🔧 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo con Turbopack en el puerto 9002
- `npm run genkit:dev`: Inicia el desarrollo con GenKit AI
- `npm run genkit:watch`: Inicia GenKit en modo observador
- `npm run build`: Compila la aplicación para producción
- `npm run start`: Inicia el servidor de producción
- `npm run lint`: Ejecuta ESLint para verificar la calidad del código
- `npm run typecheck`: Ejecuta la verificación de tipos de TypeScript

## 🚀 Cómo Empezar

1. **Clonar el repositorio**
   ```bash
   git clone <url-repositorio>
   cd firebase-studio
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   yarn
   # o
   pnpm install
   ```

3. **Configurar variables de entorno**
   Crea un archivo `.env.local` en la raíz del proyecto con las siguientes variables:
   ```
   GOOGLE_GENAI_API_KEY=tu_clave_api_google_genai
   GOOGLE_MAPS_API_KEY=tu_clave_api_google_maps
   # Añade tu configuración de Firebase aquí
   ```

4. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```
   Abre [http://localhost:9002](http://localhost:9002) en tu navegador.

## 📝 Prompt para ChatGPT

Si necesitas obtener ayuda de ChatGPT con este proyecto, puedes usar el siguiente prompt:

```
Estoy trabajando en un proyecto de desarrollo web moderno que utiliza las siguientes tecnologías y configuraciones:

- Frontend: NextJS 15, React 18, TypeScript, Tailwind CSS con tema personalizado, Shadcn UI basado en Radix UI
- Backend: Firebase 11 para autenticación, base de datos y almacenamiento
- Gestión de datos: Tanstack React Query para manejo de estado y caché
- IA: Integración con Google GenAI y herramientas GenKit
- Formularios: React Hook Form con validación Zod

El proyecto está estructurado con una clara separación de componentes UI, hooks personalizados, utilidades y configuración de AI. Utiliza variables de entorno para las claves API y está configurado con Turbopack para desarrollo rápido.

Mi pregunta es: [TU PREGUNTA AQUÍ]
```

