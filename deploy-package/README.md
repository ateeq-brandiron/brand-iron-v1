# Brand Iron - Production Deploy Package

Single, ready-to-upload zip. Includes the pre-built `.next/` output, which
Hostinger's "Save & Redeploy" does NOT generate itself - without it, the
app has nothing to serve and the site goes down entirely.

To stay a single file under GitHub's 100MB limit, this excludes ~61MB of
draft images/videos never referenced by any page (confirmed by testing
every route with no broken assets). Nothing visible on the live site is
affected.

## Deploy

Download `brand-iron-deploy.zip` from this folder, then in hPanel:
Deployments -> Upload new file -> Save & Redeploy.

This file is replaced with a fresh build each time the site changes -
always grab the latest before deploying.
