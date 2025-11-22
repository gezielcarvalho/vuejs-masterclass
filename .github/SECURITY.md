# Security Policy

## Supported Versions

This is an educational project for learning Vue.js. As this is a learning/demo project:

| Version | Supported          |
| ------- | ------------------ |
| main    | :white_check_mark: |

## Reporting a Vulnerability

While this is primarily an educational project, we take security seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

1. **Do NOT** open a public issue
2. Send a detailed report to the repository owner via GitHub's private vulnerability reporting feature or create a security advisory
3. Include:
   - Description of the vulnerability
   - Steps to reproduce
   - Potential impact
   - Suggested fix (if any)

### What to Expect

- Acknowledgment within 48 hours
- Assessment of the vulnerability
- Discussion of fix implementation
- Credit for responsible disclosure (if desired)

## Security Best Practices

This project demonstrates:

- TypeScript for type safety
- ESLint for code quality
- Proper dependency management
- Test coverage with Vitest
- Modern Vue 3 security practices

## Dependencies

We regularly update dependencies to address security vulnerabilities. Run `npm audit` to check for known vulnerabilities:

```bash
npm audit
npm audit fix
```

## Additional Notes

This is an educational project. For production applications, additional security measures should be implemented:

- Environment variable management
- Authentication and authorization
- Input validation and sanitization
- HTTPS/SSL certificates
- Content Security Policy (CSP)
- Regular security audits
