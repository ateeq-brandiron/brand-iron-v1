<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Image/video asset reuse policy

Do not assign an existing image or video to a new spot (a page hero, a section background, a blog post header) without first checking whether it's already used somewhere else. Site visitors browsing multiple pages will notice repeated photography, and it has come up as direct client feedback before — treat it as a hard rule, not a style preference.

Before using any asset from `public/`, check both places it can be referenced from:
- `grep -rlF "<filename>" src/` — covers every page/component.
- `grep -oE "headerImage: \"[^\"]+\"" src/data/articles.ts` — blog post header images are a separate data file and won't show up in a plain page search.

If the asset already appears anywhere outside the one spot you're adding it to, pick a different one. Also watch for byte-identical duplicates hiding under different filenames (this has happened at least twice — `techy sagebrush.png` vs `Brand Iron Techy Sagebrush.png`, and `horse mane circuit lines_1.png` vs `Brand Iron Techy Horse Mane.png`); run `md5sum` on candidates before treating two differently-named files as distinct options.

To find a genuinely fresh asset, cross-reference every file in `public/images/*.{jpg,jpeg,png,webp}` (and the root `*.mp4` files) against both of the checks above — anything with zero matches is safe to use. As of this writing that pool is very small (a handful of files), so if nothing fitting is unused, say so and ask before reusing something — don't silently double up.

# Hostinger deployment requirements

This site is hosted on Hostinger's Node.js App hosting (hPanel, Phusion Passenger), deployed from a zip of this repo. Two things are required for that to keep working — don't remove either without a real reason:

- `next.config.ts` must keep `output: "standalone"`. Hostinger's zip-upload structure check expects a recognizable Next.js build shape, not raw source with only a custom entry script, and removing this reintroduces the "unsupported file or directory structure" deploy failure. This is additive — it doesn't change `next dev`, and the full `.next` directory `server.js` relies on (via the programmatic `next()` API) is still produced alongside `.next/standalone`. A one-time `"next start" does not work with "output: standalone"` warning in the server log on boot is expected and harmless — it fires any time Next boots in production with this config regardless of entry point, and isn't tied to how `server.js` actually starts the app.
- The deploy zip must have `package.json`, `next.config.ts`, `server.js`, `src/`, `public/`, etc. sitting directly at the zip's **root** — not nested inside a wrapping folder. GitHub's own "Download ZIP" button always wraps contents in a `<repo>-<branch>/` subfolder, which trips the same "unsupported structure" error. Build the zip from inside the repo directory (zipping `.` and its contents, not the directory itself), excluding `.git/`, `node_modules/`, `.next/`, and `tmp/` — Hostinger installs dependencies and builds on its end.
