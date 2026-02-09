# Mohan Narasimha Portfolio

## Overview

A personal portfolio website for Mohan Narasimha, a Data Engineer & GenAI Engineer. The site showcases projects, skills, professional experience, education, certifications, and includes a contact form that persists messages to a PostgreSQL database. It's a full-stack application with a React frontend and Express backend, built as a single deployable unit.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: Wouter (lightweight client-side router) — single page app with a portfolio page and a 404 fallback
- **State/Data fetching**: TanStack React Query for server state management
- **UI Components**: shadcn/ui (new-york style) built on Radix UI primitives with Tailwind CSS
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode support via class toggling)
- **Animations**: Framer Motion for scroll-triggered animations and transitions
- **Forms**: React Hook Form with Zod validation (schemas shared with backend)
- **Icons**: Lucide React + react-icons (SimpleIcons for GitHub/LinkedIn)
- **Path aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`

### Backend
- **Framework**: Express 5 on Node.js with TypeScript (run via tsx in dev, esbuild-compiled for production)
- **API**: Single REST endpoint `POST /api/contact` for contact form submissions
- **Validation**: Zod schemas generated from Drizzle table definitions via `drizzle-zod`, shared between client and server
- **Dev server**: Vite dev server is mounted as Express middleware in development for HMR
- **Production**: Static files served from `dist/public`, server compiled to `dist/index.cjs`

### Shared Code
- `shared/schema.ts` contains all Drizzle ORM table definitions and Zod validation schemas
- Schemas are imported by both frontend (form validation) and backend (request validation)
- Two tables defined: `users` (id, username, password) and `contact_messages` (id, name, email, message, createdAt)

### Database
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Connection**: `node-postgres` (pg) pool using `DATABASE_URL` environment variable
- **Schema management**: `drizzle-kit push` for applying schema changes (no migration files tracked)
- **Storage layer**: `DatabaseStorage` class in `server/storage.ts` implements an `IStorage` interface, making it swappable

### Build System
- **Dev**: `tsx server/index.ts` runs the server with Vite middleware for hot module replacement
- **Production build**: Custom `script/build.ts` runs Vite build for client, then esbuild for server. Key dependencies are bundled (allowlisted) to reduce cold start syscalls; others are kept external.

### Theme System
- Dark mode is the default, stored in localStorage
- CSS variables in `index.css` define both light (`:root`) and dark (`.dark`) color schemes
- `ThemeProvider` context toggles the `light`/`dark` class on `<html>`

### Project Structure
```
client/           → React frontend
  src/
    components/
      portfolio/  → Page section components (hero, projects, skills, etc.)
      ui/         → shadcn/ui component library
    hooks/        → Custom React hooks
    lib/          → Utilities, theme, query client, portfolio data
    pages/        → Route-level page components
server/           → Express backend
  index.ts        → Server entry point
  routes.ts       → API route registration
  storage.ts      → Database access layer
  db.ts           → Drizzle/pg pool setup
  vite.ts         → Vite dev middleware setup
  static.ts       → Production static file serving
shared/           → Code shared between client and server
  schema.ts       → Drizzle table definitions + Zod schemas
```

## External Dependencies

- **PostgreSQL**: Required database, connected via `DATABASE_URL` environment variable
- **Google Fonts**: Inter font family loaded via CDN in `client/index.html`
- **Replit plugins** (dev only): `@replit/vite-plugin-runtime-error-modal`, `@replit/vite-plugin-cartographer`, `@replit/vite-plugin-dev-banner`
- **No external APIs**: The portfolio data (projects, skills, experience, education) is hardcoded in `client/src/lib/portfolio-data.ts`
- **No authentication**: The users table exists in the schema but no auth routes are implemented