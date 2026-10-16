# Architecture and data boundaries

## Frontend structure

| Area | Current responsibility |
| --- | --- |
| `src/main.ts` and `App.vue` | Starts the Vue application and root composition. |
| `src/router/` | Client-side routes with lazy-loaded view components. |
| `src/views/` | Page-level learning screens. |
| `src/components/` | Reusable navigation, button, image, and icon components. |
| `src/stores/` | Pinia state for examples such as jobs and students. |
| `src/services/` | In-memory/simulated asynchronous data providers and factory/type examples. |
| `tests/` | Vitest and Testing Library setup plus component/unit examples. |

## Data boundary

Jobs and teams are static in-memory arrays returned through delayed promises. They are not real job postings, team data, or API responses. No network service, persistence layer, authentication mechanism, or sensitive candidate information is part of the current project.

## Build and test boundary

The package scripts support Vite build, `vue-tsc` type checking, Vitest, linting, formatting, and coverage. These tools provide a useful local foundation, but no CI workflow or release/deployment setup was found. The repository also tracks generated JavaScript/declaration files next to sources, so future maintenance should make an explicit decision on generated-output policy before substantial changes.
