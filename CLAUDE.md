# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `pnpm dev` or `pnpm start`: Start development server
- `pnpm build`: Build for production
- `pnpm preview`: Preview the build
- `pnpm eslint`: Run ESLint on source files
- `pnpm check`: Run Astro TypeScript checker

## Code Style Guidelines
- **Framework**: Astro with SolidJS, Svelte, UnoCSS
- **TypeScript**: Use interfaces for component Props, strict type checking
- **Imports**: Group by external/internal and sort alphabetically
- **Components**: 
  - Use named interfaces for props (e.g., `interface Props {...}`)
  - Astro components (.astro), SolidJS (.tsx) and Svelte (.svelte) components
- **CSS**: UnoCSS for styling (Tailwind-like utility classes)
- **Errors**: Handle errors gracefully, avoid console logs in production
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Linting**: ESLint with Astro plugin, no-unused-vars, no-undef

## Project Structure
- `/src/components`: UI components
- `/src/layouts`: Page layouts
- `/src/pages`: Page definitions
- `/src/lib`: Utilities and constants
- `/src/data`: Content files (Markdown)