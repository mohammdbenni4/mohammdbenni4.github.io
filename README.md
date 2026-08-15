# mohammdbenni.me

Personal site for Mohammd Benni — robotics & automation engineer and full-stack developer.
SvelteKit, Tailwind, prerendered to static HTML and deployed to GitHub Pages.

## Running locally

```bash
npm install
npm run dev      # http://localhost:5174
npm run build    # static output in ./build
npm run preview  # serve the production build
npm run check    # svelte-check
```

## Editing content

**All copy lives in [`src/lib/data/site.ts`](src/lib/data/site.ts).** Components are
presentation only — to change what the site says, edit that one file. It covers meta tags,
contact details, hero, stats, about, projects, the system-design deep dives, skills,
experience, and the contact block.

To replace the CV, drop a new PDF at `static/Mohammd-Benni-CV.pdf` (the download buttons
point at `contact.cv` in the data file).

## Design system

Light mode only. Tokens live in [`tailwind.config.ts`](tailwind.config.ts).

| Token         | Value     | Use                                        |
| ------------- | --------- | ------------------------------------------ |
| `brand-700`   | `#04451e` | Primary — headings accent, buttons, links  |
| `brand-50…950`| ramp      | Tints/shades mixed from the primary        |
| `paper`       | `#fcfcfa` | Page background                            |
| `ink`         | `#0e1310` | Body text (18.3:1)                         |
| `muted`       | `#5a6560` | Secondary text (5.9:1)                     |
| `faint`       | `#6b7570` | Meta, labels, spec keys (4.6:1)            |
| `line`        | `#e3e6e1` | Hairline rules and borders                 |
| `signal`      | `#2fa35f` | Status dots only — non-text (3.1:1)        |
| `signal-ink`  | `#177a43` | Status text (5.2:1)                        |

Type: **IBM Plex Sans** for text, **JetBrains Mono** for labels and metadata.
Every text pair clears WCAG AA (4.5:1); `signal` is used only for non-text indicators,
where the 3:1 threshold applies.

Motion is limited to a scroll reveal and the hero's step-response trace, and everything is
disabled under `prefers-reduced-motion`.

## Deploying to GitHub Pages

The repo ships a workflow at `.github/workflows/deploy.yml` that builds and publishes on
every push to `main`.

1. **Create the repo** and push:

   ```bash
   git init
   git add -A
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin git@github.com:mohammdbenni4/mohammdbenni4.github.io.git
   git push -u origin main
   ```

2. **Enable Pages**: repo → Settings → Pages → *Build and deployment* → Source =
   **GitHub Actions**. (Not "Deploy from a branch" — the workflow uploads an artifact.)

3. **Custom domain**: `static/CNAME` already contains `mohammdbenni.me`, so it deploys
   with the build. At your DNS provider, point the domain at GitHub Pages:

   | Type    | Name  | Value                                                            |
   | ------- | ----- | ---------------------------------------------------------------- |
   | `A`     | `@`   | `185.199.108.153` `185.199.109.153` `185.199.110.153` `185.199.111.153` |
   | `CNAME` | `www` | `mohammdbenni4.github.io.`                                       |

   Then in Settings → Pages set the custom domain to `mohammdbenni.me` and tick
   **Enforce HTTPS** once the certificate is issued (can take up to ~24h).

### Deploying to a project repo instead

This is configured for a **user site** (`mohammdbenni4.github.io`) served at the domain
root, so `kit.paths.base` is `''`. If you ever serve it from a project repo at
`mohammdbenni4.github.io/<repo>/`, set `base: '/<repo>'` in `svelte.config.js` and drop
`static/CNAME`.
