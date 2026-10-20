# Git Commit Conventions & History Rule

## Overview
Every change in this repository must maintain a clean, organized, and descriptive Git commit history. Commits must be atomic, well-categorized, and follow the Conventional Commits specification.

## Commit Message Format
```
<type>(<scope>): <short description in present tense>

[optional body explaining what was changed and why]
```

### Commit Types:
- `feat`: A new feature or capability (e.g. `feat(i18n): add bilingual switcher`)
- `fix`: A bug fix or correction
- `docs`: Documentation changes, proposals, or specifications (e.g. `docs(proposal): update payment terms`)
- `style`: Changes that do not affect the meaning of the code (formatting, white-space, CSS aesthetics)
- `refactor`: Code change that neither fixes a bug nor adds a feature
- `chore`: Maintenance tasks, dependencies, tooling, or build configuration (e.g. `chore(deps): add resend package`)
- `perf`: Code change that improves performance
- `test`: Adding or correcting tests

## Rules & Best Practices:
1. **Atomic Commits**: Group related files together. Do not lump unrelated features, documentation, and configuration changes into a single generic commit.
2. **Clear & Professional Messages**: Write meaningful, precise descriptions in English or Greek (consistently maintained). Explain the rationale when non-obvious.
3. **Commit Frequently**: Make commits after completing each logical unit of work rather than accumulating massive unstaged changes.
4. **Clean Tree**: Never commit temporary test files, secrets, or local credentials (`.env.local`). Always maintain an up-to-date `.gitignore`.
