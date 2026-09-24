# Leche 4 Life Lactation

Marketing site for Amanda Howell, IBCLC. Five pages — Home, About, Services/Packages, Resources/Podcast, and Contact — plus a contact form. **Book a consult** and the other booking buttons open [Amanda’s Calendly](https://calendly.com/amanda-leche4lifelactation) in a new tab. Contact stays a normal page in the navigation. There is no public package price.

The live site is a static export on GitHub Pages: [https://issacvinson.github.io/leche4life-site/](https://issacvinson.github.io/leche4life-site/).

Canonical and social URLs stay on `https://leche4lifelactation.com`. That origin is the default in `lib/site-url.ts`.

Stack: Next.js App Router, TypeScript, and design tokens in `app/tokens.css`.

## Design tokens

Locked Birch Cradle palette, defined once in `app/tokens.css`.

| Token | Hex | Use |
| --- | --- | --- |
| Page background | `#F8F7F6` | Site background |
| Cream | `#F1DECD` | Hero bands and soft sections |
| Blush | `#E6C4BB` | Accent blocks |
| Sage | `#C4C3A5` | Inactive package tabs, dividers |
| Ink | `#515142` | Body, headings, nav |
| White | `#FFFFFF` | Cards and nav bar |
| CTA fill | `#A4A8C2` | The only button style |
| CTA label | `#3D3E4A` | Button text |

Fonts: Cormorant Garamond for headings, DM Sans for body.

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:3847/leche4life-site](http://127.0.0.1:3847/leche4life-site). The `/leche4life-site` prefix matches GitHub Pages.

```bash
npm run build
```

`npm run build` writes the static site to `out/`. `npm run lint` runs ESLint.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the static export and deploys it with GitHub Actions. Pages for this repo is already set to deploy from Actions.

`next.config.ts` sets `output: "export"` and `basePath: "/leche4life-site"`. Image optimization is off, because GitHub Pages has no Next.js server. The contact Route Handler is gone for the same reason; the form posts to Formspree from the browser.

`basePath` is also the constant in `lib/base-path.ts`. `next/image` does not add that prefix when optimization is off, so photo and mark URLs go through `publicPath()`.

## Contact form (Formspree)

The form reads `NEXT_PUBLIC_FORMSPREE_ID` at **build** time. Set it as a GitHub Actions repository variable, not a secret (the id is public in the page once a build includes it).

1. Create a form at [formspree.io](https://formspree.io) and confirm it from the inbox Formspree uses.
2. Copy the form id, the segment after `/f/` in `https://formspree.io/f/xxxxxxxx`.
3. On this GitHub repo, open **Settings → Secrets and variables → Actions → Variables**.
4. Add a repository variable named `NEXT_PUBLIC_FORMSPREE_ID` with that id.
5. Re-run **Deploy to GitHub Pages** from the Actions tab. A new build has to run before the live site will send. Pushing to `main` does the same thing.

Until that variable is set, the contact form does not submit and does not show a success state. It tells the visitor to email `amanda@leche4lifelactation.com` or call `980-313-1037`.

## Booking

Every booking button uses `site.calendly` in `lib/site.ts`:

```ts
calendly: "https://calendly.com/amanda-leche4lifelactation",
```

Replace that string with a specific Calendly event link when you have one. The buttons open it in a new tab.

## What this site does not do

- No package prices. Every package says pricing is discussed on a discovery call.
- No server. There is no `/api/contact` route and no on-the-fly image optimizer.
