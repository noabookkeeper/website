# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15 website for Bismuth CPA, a bookkeeping service. The project uses the App Router, React 19, TypeScript, Tailwind CSS v4, and shadcn/ui components.

## Development Commands

```bash
# Development
pnpm dev              # Start dev server with Turbopack
pnpm build            # Build for production
pnpm start            # Start production server

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Auto-fix ESLint issues
pnpm format           # Format code with Prettier
pnpm format:check     # Check formatting without changes
pnpm type-check       # Run TypeScript type checking
```

## Environment Setup

Required environment variables (see `.env.example`):
- `RESEND_API_KEY`: For contact form email delivery via Resend
- `EMAIL_FROM`: Sender email address
- `EMAIL_TO`: Recipient email address (defaults to onboarding@resend.dev)

Environment variables are validated at runtime via `src/config/env.ts` using Zod.

## Architecture

### Directory Structure

- `src/app/`: Next.js App Router pages, layouts, and metadata (robots.ts, sitemap.ts)
- `src/components/ui/`: shadcn/ui primitives (button, etc.)
- `src/components/`: Shared components
- `src/features/`: Feature-specific modules organized by domain
  - `src/features/contact/`: Contact form component and server actions
- `src/config/`: Configuration files (env.ts for environment validation)
- `src/lib/`: Shared utilities (`utils.ts` contains the `cn()` helper)

### Feature Module Pattern

Features are organized in self-contained directories under `src/features/`:
- Each feature exports its public API through `index.ts`
- Server Actions live alongside components (e.g., `contact/actions.ts`)
- Example: `src/features/contact/` contains `contact-form.tsx`, `actions.ts`, and `index.ts`

### Server Actions

Server actions are defined with `"use server"` directive and handle backend operations:
- Contact form submission uses `submitContactForm()` in `src/features/contact/actions.ts`
- Resend client is initialized with validated env vars
- Actions return typed result objects (e.g., `{ success: boolean; error?: string }`)

### TypeScript Configuration

- Uses `@/*` path alias mapping to `./src/*` (configured in tsconfig.json)
- Strict mode enabled
- All exported functions and public APIs require explicit types

## Styling

- **Tailwind v4**: Imported via `@import "tailwindcss";` in `src/app/globals.css`
- **CSS Variables**: Theme colors and design tokens in `:root` and `.dark` (see globals.css)
- **Class Merging**: Always use `cn()` from `src/lib/utils.ts` for className composition
- **Animations**: Uses `tw-animate-css` package for animation utilities
- **Class Ordering**: Prettier with `prettier-plugin-tailwindcss` auto-sorts classes

## UI Components (shadcn/ui)

- Components use `class-variance-authority` (cva) for variant-based styling
- All components support `asChild` prop via Radix `Slot` for composition
- Icons from `lucide-react` are the default
- To add new components: `pnpm dlx shadcn@latest add <component-name>`
- Config: `components.json` (New York style, RSC enabled)

## Code Conventions

### React Components

- App Router defaults to Server Components
- Add `"use client"` only when using state, refs, effects, or event handlers
- Export components and their variant factories (e.g., `buttonVariants`)

### Naming and Imports

- Use `@/*` path aliases for all src imports
- Meaningful variable names (avoid 1-2 character identifiers)
- Prefer guard clauses and early returns over deep nesting

### Error Handling

- Handle errors explicitly in try/catch blocks
- No empty catch blocks
- Server actions should return typed error states

### Comments

- Avoid inline comments when code is self-explanatory
- When needed, explain "why" not "how"

## Formatting

- Prettier is authoritative for all formatting
- Semi-colons enabled, double quotes, 80 char width
- Tailwind classes are auto-sorted by Prettier plugin
- Run `pnpm format` before committing
