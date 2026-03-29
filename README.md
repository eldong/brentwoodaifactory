# Brentwood AI Factory

A marketing website for Brentwood AI Factory, built with React, Vite, TypeScript, and React Router.

## Tech Stack

- **React 19** — UI library
- **Vite** — Fast build tool and dev server
- **TypeScript** — Type-safe JavaScript
- **React Router v7** — Client-side routing
- **CSS Modules** — Scoped component styles

## Project Structure

```
src/
├── components/       # Shared UI components (Header, Footer, etc.)
├── data/             # Static data and configuration
├── layouts/          # Page layout wrappers
├── pages/            # Route-level page components
└── main.tsx          # Application entry point
```

## Routes

| Path               | Page             |
|--------------------|------------------|
| `/`                | Home             |
| `/team`            | Team             |
| `/success-stories` | Success Stories  |
| `/insights`        | Insights         |
| `/contact`         | Contact          |

## Getting Started

### Prerequisites

- Node.js 18 or later
- npm 9 or later

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### Build

Build for production:

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```
