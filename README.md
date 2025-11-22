# Vue.js Masterclass - Job Search Application

A comprehensive, production-ready Vue 3 application demonstrating modern front-end development practices, built as part of a complete Vue.js masterclass. This project implements a job search platform with a focus on enterprise-level architecture and best practices.

## 🚀 Project Overview

This is a full-featured job search application built with **Vue 3**, **TypeScript**, **Pinia**, and **TailwindCSS**. The application showcases real-world patterns including state management, routing, dependency injection, testing, and modern styling approaches.

## 🛠️ Tech Stack

### Core Technologies

- **Vue 3.4.29** - Progressive JavaScript framework with Composition API
- **TypeScript 5.4** - Type-safe JavaScript development
- **Vite 5.3** - Next-generation frontend build tool
- **Pinia 2.1** - Intuitive state management for Vue

### Routing & Navigation

- **Vue Router 4.3** - Official router with lazy-loaded routes

### Styling

- **TailwindCSS 3.4** - Utility-first CSS framework
- **PostCSS 8.4** - CSS transformations
- **Custom Design System** - Brand colors, shadows, and typography

### Testing

- **Vitest 2.1** - Blazing fast unit test framework
- **Vue Testing Library 8.1** - Testing utilities for Vue components
- **@testing-library/jest-dom 6.5** - Custom DOM matchers
- **@vitest/coverage-v8** - Code coverage reporting
- **JSDOM 24.1** - DOM implementation for testing

### Code Quality

- **ESLint 8.57** - JavaScript/TypeScript linting
- **Prettier 3.2** - Code formatting
- **prettier-plugin-tailwindcss** - Automatic class sorting
- **vue-tsc** - Type checking for Vue components

## 📁 Project Structure

```
src/
├── assets/          # Static assets (images, fonts, styles)
├── components/      # Reusable Vue components
│   ├── ActionButton.vue
│   ├── MainNav.vue
│   ├── ProfileImage.vue
│   └── icons/       # Icon components
├── router/          # Vue Router configuration
│   └── index.ts     # Route definitions
├── services/        # Business logic and data services
│   ├── jobsService.ts
│   ├── teamsService.ts
│   ├── studentFactory.ts
│   └── studentTypes.ts
├── stores/          # Pinia state management
│   ├── counter.ts
│   ├── jobs.ts
│   └── students.ts
├── views/           # Page components
│   ├── HomeView.vue
│   ├── JobsView.vue
│   ├── TeamsView.vue
│   ├── StudentsView.vue
│   ├── LocationView.vue
│   ├── LifeAtSabreView.vue
│   ├── HowWeHireView.vue
│   └── AboutView.vue
├── App.vue          # Root component with dependency injection
└── main.ts          # Application entry point
```

## 🎯 Key Features

### Architecture Patterns

- **Composition API** - Modern Vue 3 reactivity and composition
- **Dependency Injection** - Service layer with `provide/inject`
- **Factory Pattern** - Student factory for object creation
- **State Management** - Centralized state with Pinia stores
- **Lazy Loading** - Code-splitting with dynamic imports

### Application Features

- Multi-page navigation with 8 distinct views
- Job listings and search functionality
- Student management system
- Team information display
- Company culture and hiring process pages
- Responsive design with TailwindCSS

### Development Features

- Path aliasing with `@` for clean imports
- Hot Module Replacement (HMR) for fast development
- Type-safe component development
- Comprehensive unit testing setup
- Code coverage reporting

## 🚦 Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or pnpm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open browser to http://localhost:5173
```

### Available Scripts

```bash
# Development
npm run dev              # Start dev server with HMR

# Building
npm run build           # Type check and build for production
npm run build-only      # Build without type checking
npm run preview         # Preview production build

# Testing
npm run test:unit       # Run unit tests
npm run test:coverage   # Run tests with coverage report

# Code Quality
npm run type-check      # Run TypeScript type checking
npm run lint            # Lint and fix code
npm run format          # Format code with Prettier
```

## 🧪 Testing

The project uses Vitest and Vue Testing Library for comprehensive testing:

```typescript
// Test setup (tests/setup.ts)
import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/vue";
import { afterEach } from "vitest";

afterEach(() => {
  cleanup();
});
```

Run tests with:

```bash
npm run test:unit           # Watch mode
npm run test:coverage       # With coverage
```

## 🎨 Custom Design System

The project includes a custom Tailwind configuration with:

### Brand Colors

- `brand-gray-1`: #DADCE0
- `brand-blue-1`: #1967D2
- `brand-blue-2`: #4285f4
- `brand-green-1`: #137333
- Extended gray scale (100-900)

### Custom Shadows

- `shadow-blue`: Focus states
- `shadow-brand-md/lg/xl`: Elevation system

### Typography

- Open Sans font family

## 📚 Learning Objectives

This project demonstrates:

1. **Vue 3 Fundamentals**

   - Component composition and reusability
   - Props, events, and two-way binding
   - Lifecycle hooks and reactivity
   - Template directives (v-if, v-for, v-model, etc.)

2. **Advanced Patterns**

   - Composition API with `setup` syntax
   - Provide/inject for dependency injection
   - Factory pattern implementation
   - Service layer architecture

3. **State Management**

   - Pinia stores with Composition API
   - Reactive state management
   - Store composition and modularity

4. **Routing**

   - Dynamic route configuration
   - Lazy-loaded components
   - Navigation guards (ready for implementation)

5. **Testing Best Practices**

   - Component testing with Testing Library
   - Unit testing with Vitest
   - Test setup and cleanup
   - Coverage reporting

6. **Modern Tooling**
   - Vite configuration and optimization
   - TypeScript integration
   - ESLint and Prettier setup
   - Build optimization

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `vitest.config.ts` - Test runner configuration
- `tsconfig.json` - TypeScript compiler options
- `tailwind.config.js` - TailwindCSS customization
- `postcss.config.js` - PostCSS plugins

## 📖 References

- [Course by Boris Paskhaver](https://www.udemy.com/user/borispaskhaver/)
- [Vue 3 Documentation](https://vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vite Documentation](https://vitejs.dev/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Vitest Documentation](https://vitest.dev/)

## 📝 Important Notes

### Testing Library Setup

The `@testing-library/jest-dom` package requires the following import in your test setup file:

```typescript
import "@testing-library/jest-dom/vitest";
```

This differs from older versions that used `expect.extend()` syntax. The current setup file is configured correctly at `tests/setup.ts`.

## 📄 License

This project is created for educational purposes as part of a Vue.js masterclass.

---

**Built with** ❤️ **using Vue 3, TypeScript, and modern web technologies**
