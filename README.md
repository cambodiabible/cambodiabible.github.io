# Cambodia Bible

The Cambodia Bible website is built with Astro as a static site. It includes a
home page, individual pages for Brao, Bunong, Cham, Jarai, Khmer, Kuy, Krung,
and Tampuan, plus About, Fonts, and Privacy pages.

## Local development

Use a current Node.js LTS release compatible with Astro.

```sh
npm install
npm run dev
```

Create and preview a production build:

```sh
npm run build
npm run preview
```

## Deploy to Cloudflare Pages

Connect this GitHub repository to a Cloudflare Pages project and use:

- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/`

This site uses Astro's static output and does not need a Cloudflare adapter.
After the first deployment, add `CambodiaBible.app` as a custom domain in the
Cloudflare Pages project settings.

The site banner and language icons are served from `public/header.jpg` and
`public/logoimage512.png`.
