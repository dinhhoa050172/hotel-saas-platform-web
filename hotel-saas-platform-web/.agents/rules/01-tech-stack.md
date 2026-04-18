---
trigger: always_on
---

# TECH STACK & CODING STANDARDS CONSTRAINTS

## 1. Next.js App Router Rules
- **ALWAYS** use Server Components (RSC) by default.
- **NEVER** use `'use client'` at the page level (`page.tsx`) unless absolutely necessary. Push `'use client'` directives to the deepest possible leaf components (e.g., buttons, forms, interactive elements).
- **ALWAYS** use Server Actions (`'use server'`) for mutations. Do not create API Routes (`app/api/...`) for internal app mutations.

## 2. TypeScript Strictness
- **NEVER** use `any`.
- **ALWAYS** define explicit `interface` or `type` for component props and function returns.
- **ALWAYS** use Zod for validating external data and form inputs before processing.

## 3. UI & Styling Constraints
- **ALWAYS** use Tailwind CSS for styling. Never use inline styles or standard CSS/SCSS files.
- **ALWAYS** use Shadcn UI components located in `@/components/ui/`.
- **NEVER** modify the source code of Shadcn UI components unless explicitly instructed.
- Use `lucide-react` for all icons.

## 4. State Management
- **ALWAYS** use TanStack Query v5 for client-side data fetching and caching.
- **ALWAYS** use Zustand for global client state.
- **NEVER** use Redux or Context API for complex global state.
- Store pagination, filtering, and search states in the URL `searchParams`, NOT in local state.