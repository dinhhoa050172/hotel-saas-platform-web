---
trigger: always_on
---

# WORKFLOW, SECURITY & REVIEW POLICIES

## 1. Terminal Execution Policy
- **Policy Level:** AUTO for standard commands (`npm run lint`, `npx tsc`).
- **Policy Level:** ASK FOR REVIEW before executing destructive commands (e.g., `rm -rf`, `prisma db push`, `npm install`).
- **NEVER** commit secrets, `.env` files, or API keys. Always respect `.gitignore`.

## 2. Multi-file Edit Workflow
- Before making changes across 3 or more files, **ALWAYS** generate an Implementation Plan and ask the user for approval.
- Do not proceed with multi-file refactoring without user consent.

## 3. Error Handling
- **ALWAYS** wrap Server Actions in `try/catch` blocks.
- **ALWAYS** return a standardized error object `{ error: string, success: boolean }` from actions instead of throwing raw errors to the client.