# Brand Iron - Production Deploy Package

Pre-built, production-ready zip of the site (`.next` build output, `public`,
`src`, and the files Hostinger needs to install and start the app). Split
into two parts to fit GitHub's 100MB per-file limit; nothing is excluded.

## Reassemble before uploading to Hostinger

Download both part files from this folder into the same directory, then run:

```
cat brand-iron-deploy.zip.part0 brand-iron-deploy.zip.part1 > brand-iron-deploy.zip
```

Verify integrity (should print OK):

```
sha256sum -c SHA256SUMS.txt
```

Then upload `brand-iron-deploy.zip` via hPanel: Deployments -> Upload new
file -> Save & Redeploy.

This folder is overwritten with a fresh package each time a new deploy zip
is prepared - always grab the latest parts before deploying.
