# Contributing to Vue.js Masterclass

Thank you for your interest in contributing to the Vue.js Masterclass project! This document provides guidelines for contributing.

## Getting Started

1. **Fork the repository** on GitHub
2. **Clone your fork** to your local machine:
   ```bash
   git clone https://github.com/YOUR-USERNAME/vuejs-masterclass.git
   cd vuejs-masterclass
   ```
3. **Install dependencies**:
   ```bash
   npm install
   ```
4. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. **Make your changes** in your feature branch
2. **Run tests** to ensure everything works:
   ```bash
   npm run test:unit
   ```
3. **Check TypeScript types**:
   ```bash
   npm run type-check
   ```
4. **Lint your code**:
   ```bash
   npm run lint
   ```
5. **Format your code**:
   ```bash
   npm run format
   ```

## Coding Standards

### TypeScript

- Use TypeScript for all new code
- Ensure proper type annotations
- Use type-only imports for types: `import type { Type } from 'module'`

### Vue Components

- Use Vue 3 Composition API with `<script setup>` syntax
- Do NOT import compiler macros (`defineProps`, `defineEmits`, etc.)
- Use proper prop validation and TypeScript interfaces
- Follow single-responsibility principle

### Style Guide

- Follow ESLint and Prettier configurations
- Use Tailwind CSS utility classes for styling
- Write meaningful component and variable names
- Add comments for complex logic

### Testing

- Write unit tests for new components and functionality
- Use Vue Testing Library and Vitest
- Aim for good test coverage
- Test user interactions, not implementation details

## Commit Messages

Use clear, descriptive commit messages following conventional commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

Example:

```
feat: add job search filter component
fix: resolve type error in TeamsView
docs: update README with testing instructions
```

## Pull Request Process

1. **Update your branch** with the latest main:
   ```bash
   git fetch origin
   git rebase origin/main
   ```
2. **Push your changes** to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```
3. **Create a Pull Request** on GitHub with:
   - Clear description of changes
   - Reference to any related issues
   - Screenshots (if UI changes)
   - Test results
4. **Respond to feedback** from reviewers
5. **Ensure CI checks pass** before merging

## Code Review Guidelines

When reviewing:

- Be respectful and constructive
- Focus on code quality and best practices
- Test the changes locally if possible
- Approve only when satisfied with the implementation

## Questions or Issues?

If you have questions or run into issues:

- Check existing issues on GitHub
- Create a new issue with a detailed description
- Reach out in discussions

## License

By contributing, you agree that your contributions will be licensed under the same license as the project.

Thank you for contributing! 🎉
