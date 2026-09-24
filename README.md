# Leche 4 Life Lactation

Marketing site for Amanda Howell, IBCLC. Five pages — Home, About, Services/Packages, Resources/Podcast, and Contact — plus a contact form. **Book a consult** and the other booking buttons open [Amanda’s Calendly](https://calendly.com/amanda-leche4lifelactation) in a new tab. Contact stays a normal page in the navigation. There is no public package price.

The live site is a static export on GitHub Pages: [https://www.leche4lifelactation.com](https://www.leche4lifelactation.com).

Canonical and social URLs use `https://www.leche4lifelactation.com`. That origin is the default in `lib/site-url.ts`.

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

Open [http://127.0.0.1:3847](http://127.0.0.1:3847).

```bash
npm run build
```

`npm run build` writes the static site to `out/`. `npm run lint` runs ESLint.

## GitHub Pages

Pushes to `main` run `.github/workflows/deploy.yml`, which builds the static export and deploys it with GitHub Actions. Pages for this repo is already set to deploy from Actions.

`next.config.ts` sets `output: "export"` and `trailingSlash: true`. There is no `basePath`: pages, images, CSS, and JS are served from the domain root. Image optimization is off, because GitHub Pages has no Next.js server. The contact Route Handler is gone for the same reason; the form posts to Formspree from the browser.

`basePath` in `lib/base-path.ts` is an empty string, kept in sync with `next.config.ts`. `next/image` does not add that prefix when optimization is off, so photo and mark URLs go through `publicPath()`.

`trailingSlash: true` writes each route as a folder with `index.html` (for example `out/contact/index.html`). On GitHub Pages, `/contact/` is that file. A request for `/contact` redirects to `/contact/`, so both URLs resolve.

## Custom domain

`public/CNAME` contains `www.leche4lifelactation.com`. The static export copies it to `out/CNAME`, which is the root of the Pages artifact. In the repository, set **Settings → Pages → Custom domain** to `www.leche4lifelactation.com`. With the DNS records below, GitHub Pages redirects the apex `leche4lifelactation.com` to `www`. After the certificate is issued, turn on **Enforce HTTPS**.

Point the website DNS at GitHub Pages. Do not change MX records or any other email records. Mail for `@leche4lifelactation.com` has to keep its current host.

| Name | Type | Value |
| --- | --- | --- |
| `@` (apex) | A | `185.199.108.153` |
| `@` (apex) | A | `185.199.109.153` |
| `@` (apex) | A | `185.199.110.153` |
| `@` (apex) | A | `185.199.111.153` |
| `@` (apex) | AAAA (optional) | `2606:50c0:8000::153` |
| `@` (apex) | AAAA (optional) | `2606:50c0:8001::153` |
| `@` (apex) | AAAA (optional) | `2606:50c0:8002::153` |
| `@` (apex) | AAAA (optional) | `2606:50c0:8003::153` |
| `www` | CNAME | `issacvinson.github.io` |

Replace the previous website records for the apex and `www` (the ones that pointed at the old host). Leave MX and other mail records as they are.

## Contact form (Formspree)

The form reads `NEXT_PUBLIC_FORMSPREE_ID` at **build** time. Set it as a GitHub Actions repository variable, not a secret (the id is public in the page once a build includes it).

1. Create a form at [formspree.io](https://formspree.io) and confirm it from the inbox Formspree uses.
2. Copy the form id, the segment after `/f/` in `https://formspree.io/f/xxxxxxxx`.
3. On this GitHub repo, open **Settings → Secrets and variables → Actions → Variables**.
4. Add a repository variable named `NEXT_PUBLIC_FORMSPREE_ID` with that id.
5. Re-run **Deploy to GitHub Pages** from the Actions tab. A new build has to run before the live site will send. Pushing to `main` does the same thing.

Until that variable is set, the contact form does not submit and does not show a success state. The page still shows the questions, and tells the visitor to email `amanda@leche4lifelactation.com` or call `980-313-1037`.

The public form is a short lactation consult request, not a clinical intake. Formspree receives these fields:

| Field | Required | Formspree name |
| --- | --- | --- |
| Full name | Yes | `name` |
| Email | Yes | `email` |
| Phone | Yes | `phone` |
| Where are you in your journey? (Pregnant or Baby is here) | Yes | `journey` |
| Baby’s due date (only if Pregnant) | Yes | `baby_due_date` |
| Baby’s date of birth (only if Baby is here) | Yes | `baby_date_of_birth` |
| Town and state | Yes | `town_and_state` |
| What’s been challenging about feeding? / How can I support you? | Yes | `feeding_challenge` |
| How did you hear about Leche 4 Life? | No | `how_did_you_hear` |

## Booking

Every booking button uses `site.calendly` in `lib/site.ts`:

```ts
calendly: "https://calendly.com/amanda-leche4lifelactation",
```

Replace that string with a specific Calendly event link when you have one. The buttons open it in a new tab.

## What this site does not do

- No package prices. Every package says pricing is discussed on a discovery call.
- No practice address. Care is home visits and virtual visits. Concord is where Amanda is based.
- No server. There is no `/api/contact` route and no on-the-fly image optimizer.
