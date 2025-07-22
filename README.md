# ⚡️astro-bento-portfolio

## A personal portfolio website made using `Astro`.

![astro-bento-portfolio | Bento-like Personal Porfolio Template](public/preview.png)

To view a demo example, **[click here](https://sparkly-speculoos-0c9197.netlify.app/)**

or my portfolio **[click here](https://gianmarcocavallo.com)**

## Features

- Modern and Minimal bento-like, sleek UI Design
- All in one page (almost)
- Fully Responsive
- Performances and SEO optimizations
- Ready to be deployed on [Netlify](https://www.netlify.com/)
- Blog
- RSS support (your-domain/rss.xml)
- Cool 3d globe

## Tech Stack

- [Astro](https://astro.build)
- [unocss](https://unocss.dev/)
- [motion](https://motion.dev/)
- [d3](https://d3js.org/)

# Steps ▶️

```bash
# Clone this repository
$ git clone https://github.com/Ladvace/astro-bento-portfolio
```

```bash
# Go into the repository
$ cd astro-bento-portfolio
```

```bash
# Install dependencies
$ pnpm install
or
$ npm install
```

```bash
# Start the project in development
$ pnpm run dev
or
$ npm run dev
```
# Update
On the UI pull updates from the master branch
or 
Use Git - instructions coming
```
# Update dev with changes from master branch
# Step 1: Make sure you're on dev
git checkout dev

# Step 2: Pull the latest changes
git fetch origin

# Step 3: Rebase onto main
git rebase origin/main

```
If there are any conflicts, Git will pause. Fix them, then:
```
git add <file>
git rebase --continue
```
If things get messy, you can cancel:
```
git rebase --abort
```
If you already pushed dev and use rebase, you’ll need to force-push:
```
git push origin dev --force-with-lease
```
Verify everything looks good
```
git log --oneline --graph --decorate --all
```

# Be sure to replace the momoji and all the relative information, such as email, website and other info, if you don't your website is gonna point to my domain and to my info

## REMOVE THE umami analytics script tag (or replace it with your id) in `src/layouts/Layout.astro`

# Configuration

remember to replace the `site` and other properties with your data in `astro.config.mjs`

# Deploy on Netlify 🚀

Deploying your website on Netlify it's optional but I reccomand it in order to deploy it faster and easly.

You just need to fork this repo and linking it to your Netlify account.

or

[![Netlify Deploy button](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Ladvace/astro-bento-portfolio)

## Authors ❤️

- Gianmarco - https://github.com/Ladvace
