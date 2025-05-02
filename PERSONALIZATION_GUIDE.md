# Portfolio Personalization Guide

This guide provides information on where to edit files to personalize this Astro-based portfolio site.

## 1. Personal Information

### Name and Bio
- **IntroCard**: Update name and bio in `/src/components/IntroCard.astro` (lines 16-18)
- **Page Layout**: Change name in `/src/layouts/BasicLayout.astro` (lines 23, 54, 60)
- **Homepage Footer**: Update name in `/src/pages/index.astro` (line 103)
- **Homepage Title**: Change title in `/src/pages/index.astro` (line 43)

### Contact Information
- **Constants File**: Update email and all social links in `/src/lib/constants.ts` (lines 2-7)
- **Contact Card**: Update email and location in `/src/components/ContactsCard.astro` (lines 15-16)
- **Schema Data**: Update location and nationality in `/src/layouts/BasicLayout.astro` (lines 33-40)

## 2. Profile Image and OG Images
- Replace your profile image at `/public/me.webp` 
- Update OG image for social sharing at `/public/og-image.png`

## 3. Colors and Theme
- **Main Colors**: Edit the color palette in `/uno.config.ts`:
  - Primary color (red by default) at lines 52-62
  - Background colors (dark slate) at lines 40-51
  - Gray colors at lines 28-39

## 4. Fonts
- Current fonts are CabinetGrotesk and Satoshi
- Font files are in `/public/fonts/`
- Font definitions in `/src/layouts/BasicLayout.astro` (lines 124-159)
- You can replace font files with your preferred fonts

## 5. Deployment to Cloudflare
To deploy to Cloudflare Pages:
1. Push your personalized site to GitHub
2. Log in to Cloudflare Pages dashboard
3. Create new project and connect to your GitHub repo
4. Set build command to `pnpm build`
5. Set build output directory to `dist`

## Key Files Reference

### Constants File (`/src/lib/constants.ts`)
```typescript
export const LINKS = {
  github: "https://github.com/Ladvace",
  linkedin: "https://www.linkedin.com/in/gianmarco-cavallo/",
  medium: "https://ladvace.medium.com/",
  discord: "https://discordapp.com/users/163300027618295808",
  dribble: "https://dribbble.com/Ladvace_Jace",
  email: "contact@gianmarcocavallo.com<",
};
```

### Intro Card (`/src/components/IntroCard.astro`)
```astro
<p class="m-0 font-light text-xl">
  Hi, I'm <b class="font-bold">Gianmarco Cavallo</b>, a software
  developer with strong focus on the user experience, animations and
  micro interactions
</p>
```

### Contact Card (`/src/components/ContactsCard.astro`)
```astro
<address class="flex flex-col mt-4">
  <h2 class="text-gray-500">Contact Details</h2>
  <p>contact@gianmarcocavallo.com</p>
  <p>Italy</p>
</address>
```

### Theme Colors (`/uno.config.ts`)
```typescript
colors: {
  // Primary colors (default red)
  primary: {
    100: "#F9CDD3",
    200: "#F3A3AA",
    300: "#EC7981",
    400: "#E64F59",
    500: "#E63946", // Main primary color
    600: "#CF2F3D",
    700: "#B82534",
    800: "#A01B2B",
    900: "#891321",
  },
  // Background colors (dark slate)
  darkslate: {
    500: "#171717" /* Background color */,
    // Other shades...
  },
}
```
### Icons
Use the following for new icons
https://icon-sets.iconify.design/ri/?keyword=Remix+Icon[https://icon-sets.iconify.design/ri/?keyword=Remix+Icon]