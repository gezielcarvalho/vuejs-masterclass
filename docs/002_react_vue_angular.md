# Vue vs. React vs. Angular

These three frameworks sit on an **opinionatedness spectrum**:

```
Unopinionated ◀─────────────────────────────▶ Opinionated
   React              Vue              Angular
```

## React (Unopinionated)

- A **library** for building UIs, not a full framework
- Gives maximum flexibility — you choose your own router, state manager, form library, etc.
- Uses **JSX** (JavaScript + HTML mixed together)
- Large ecosystem but requires assembling your own stack

## Vue (Middle Ground)

- A **progressive framework** — start simple, adopt more features as needed
- Ships with official router (`vue-router`) and state management (`pinia`) but doesn't force them
- Uses **Single-File Components** (`.vue` files) with a clear separation of template, script, and style
- Gentle learning curve with good defaults

## Angular (Opinionated)

- A **full-featured framework** with built-in solutions for routing, forms, HTTP, DI, and more
- Enforces a specific project structure and patterns (modules, services, decorators)
- Uses **TypeScript** by default
- Steeper learning curve but less decision-making upfront

---

## Quick Comparison

| Aspect         | React                      | Vue                                 | Angular                  |
| -------------- | -------------------------- | ----------------------------------- | ------------------------ |
| Type           | Library                    | Progressive framework               | Full framework           |
| Language       | JS / TSX                   | JS / TS                             | TypeScript               |
| Templating     | JSX                        | HTML templates                      | HTML templates           |
| Flexibility    | High (pick your own tools) | Medium (official options available) | Low (batteries included) |
| Learning curve | Medium                     | Low–Medium                          | High                     |
| Backed by      | Meta                       | Community / Evan You                | Google                   |
