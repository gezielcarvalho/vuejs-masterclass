# VueJS. A complete real-world project using Vue, Pinia, TypeScript, TailwindCSS, Vitest, and more.

## Goals

1. Build a complete, real-world Vue application using Vue, Pinia, Vue Router, and more
2. Master modern front end technologies like TailwindCSS, TypeScript, and Prettier
3. Use Vitest and Vue Testing Libary to write unit tests for all elements of the Vue ecosystem
4. Learn best practices for Vue component design
5. Covers both Vue 2's Options API and Vue 3's Composition API

## Description

Content:

- Creating Vue components
- Styling Vue components
- Using Vue directives to compose dynamic interfaces
- Passing props between components
- Emitting events
- Routing our user from page to page
- Testing Vue components

Aspects:

- Vue (including both the Options API from Vue 2 and the new Composition API in Vue 3)
- Pinia for global state management
- Vue Router for navigating the user across pages in our application
- Testing with Vue Testing Library and Vitest
- Scaffolding Vue applications with Create Vue
- Styling components with Tailwind CSS
- Adding type checking with TypeScript
- Linting our code with ESLint
- Formatting our code with Prettier

# References

https://www.udemy.com/user/borispaskhaver/

# Fixes for Next Lesson

In the next lesson, we'll setup an NPM package called Vue Testing Library. We'll also install the supplementary @testing-library/jest-dom package to gain access to additional matchers/assertions.

The @testing-library/jest-dom team released a new version in August 2023 that is incompatible with what you see in the video.

Instead of the expect.extend syntax you'll see, you'll need to write the following line:

```
    import "@testing-library/jest-dom/vitest";
```

Your setup.js file should look like this at the end of the lesson. I will update the corresponding zip file at the end of each section if you want to download the project with up-to-date dependencies and files.

```
    import "@testing-library/jest-dom/vitest";
    import { cleanup } from "@testing-library/vue";
    import { afterEach } from "vitest";

    afterEach(() => {
      cleanup();
    });
```
