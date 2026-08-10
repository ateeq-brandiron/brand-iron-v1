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
