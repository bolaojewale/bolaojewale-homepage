# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands
- `pnpm dev` or `pnpm start`: Start development server
- `pnpm build`: Build for production
- `pnpm preview`: Preview the build
- `pnpm eslint`: Run ESLint on source files (targets `src/**/*.{js,astro}`)
- `pnpm check`: Run Astro TypeScript checker

## Architecture Overview

This is a bento-style portfolio website built with Astro SSR (server-side rendering) and deployed to Cloudflare.

### Key Configuration
- **Deployment**: Cloudflare adapter (`@astrojs/cloudflare`) with SSR (`output: 'server'`)
- **Site URL**: https://bolaojewale.com/
- **Image Service**: Uses `compile` service (not sharp) for Cloudflare compatibility
- **External Blog**: Links to https://cybergardener.com for blog content

### Multi-Framework Setup
This project uses multiple frontend frameworks simultaneously:
- **Astro**: Primary framework for pages and layouts
- **SolidJS** (`@astrojs/solid-js`): Used for interactive components (e.g., Globe.tsx, Tooltip)
- **Svelte** (`@astrojs/svelte`): Used for scroll animations and SVG components (e.g., scroll-1.svelte)

Components can be Astro (.astro), SolidJS (.tsx), or Svelte (.svelte) files.

### UnoCSS Theming
- Custom color palette defined in `uno.config.ts`:
  - `darkslate-*`: Dark background colors (primary is `#171717`)
  - `primary-*`: Green accent colors (from `#DCFCE7` to `#14532D`)
  - `gray-*`: Neutral grays
- Custom shadows: `shadow-custom` and `shadow-custom-hover` for bento box effects
- Fonts: Cabinet Grotesk (headings), Satoshi (body text) via Fontshare

## Code Style Guidelines
- **TypeScript**: Use `interface Props` for component props with strict type checking
- **Imports**: Group external/internal imports, sort alphabetically
- **CSS**: UnoCSS utility classes only (Tailwind-like); avoid inline styles
- **Naming**: PascalCase for components, camelCase for variables/functions
- **Linting**: ESLint enforces `no-unused-vars` (warn), `no-undef` (error), `no-console` (warn)

## Project Structure
- `/src/components`: UI components (Card system, ContactsCard, IntroCard, MyStack, AboutMe, Now, Tooltip)
- `/src/components/playground`: Experimental/interactive components (Rive animations, scroll effects with Svelte)
- `/src/layouts`:
  - `BasicLayout.astro`: Base layout with SEO, meta tags, and structured data (Person schema)
  - `Layout.astro`: Main layout with loader animation
- `/src/pages`: Route definitions (index, resume)
- `/src/lib`:
  - `constants.ts`: Social links (LINKS object) and animations
  - `helpers.ts`: Utility functions

## Important Notes
- Personal info in `constants.ts` (LINKS), `BasicLayout.astro` (schema), and `astro.config.mjs` (site URL) should be customized for the owner
- SEO metadata and structured data use schema.org Person schema
- Blog card on homepage links to external blog at https://cybergardener.com