# Hello World Site

A minimal static site used to test the deployment pipeline:

GitHub push → Cloudflare Pages build → live site (and QR code target)

## Files

- `index.html` – the whole site (one self-contained page, no build step)
- `.gitignore` – keeps OS and editor junk out of the repo

## Making a change

1. Edit `index.html`.
2. Commit and push to `main`:

   ```bash
   git add .
   git commit -m "Describe the change"
   git push
   ```

3. Cloudflare Pages rebuilds automatically; the live site updates within about a minute.

## Cloudflare Pages settings

- Framework preset: **None**
- Build command: *(leave empty)*
- Build output directory: `/` (the repo root)
