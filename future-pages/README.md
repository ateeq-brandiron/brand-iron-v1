# Future Pages

This directory holds pages that were pulled out of `src/app/` before launch
because they only had "Coming Soon" placeholder content, not real content.
They are kept here (out of Next.js's routing) so they aren't publicly
reachable, but are still in the repo for the next version.

To bring a page back live, move its folder back into the matching path
under `src/app/`. For example:

```
mv future-pages/industries src/app/industries
mv future-pages/services/brand-strategy src/app/services/brand-strategy
```

Folders here mirror their original `src/app/` path exactly.
