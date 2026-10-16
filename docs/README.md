# Current-state documentation

## Purpose

This repository is a Vue 3/TypeScript masterclass project that explores component composition, routing, Pinia stores, simulated service layers, Tailwind styling, and frontend test tooling.

## Current state

- Framework: Vue 3, TypeScript, Vite, Vue Router, and Pinia.
- Styling: Tailwind CSS and local visual assets.
- Screens: route-backed views for home, jobs, teams, students, location, life at Sabre, hiring, and about.
- Data: jobs and teams are in-memory simulated async services; no backend integration is present.
- Quality tooling: type checking, Vitest, Testing Library, ESLint, Prettier, and coverage scripts are configured.
- Repository hygiene: compiled `.js` and `.d.ts` counterparts are tracked alongside several TypeScript/Vue sources; this is historical project state, not a recommended source-management pattern.

## Decision

Retain as a supporting Vue/TypeScript learning reference. `dotnet-vue` and other cohesive portfolio projects remain stronger demonstrations of end-to-end delivery. Do not present this repository as an operational job-search or corporate recruitment application.

See the [learning charter](project-charter.md), [architecture](architecture.md), and [quality handoff](delivery-and-quality.md).
