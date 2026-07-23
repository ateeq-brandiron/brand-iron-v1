// Hostinger's Node.js app hosting (hPanel) runs a single entry-point script
// via Phusion Passenger rather than `next start` directly, so we start Next
// programmatically here. See node_modules/next/dist/docs/01-app/02-guides/custom-server.md.
//
// Passenger keeps this process alive across deploys and only restarts it when
// tmp/restart.txt's mtime changes - otherwise it keeps serving the OLD build
// (stale page manifest/JS chunks) even after new files land on disk, which is
// what causes "reload the page" chunk-load errors right after a deploy. The
// "postbuild" script in package.json touches that file on every `next build`
// so Passenger always restarts onto the fresh build.
const { createServer } = require("http");
const next = require("next");

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

// A single request throwing should not take the whole server down for every
// visitor - log it and respond with a 500 instead of letting it crash/restart
// the process (which is what an unhandled rejection/exception does by default).
process.on("unhandledRejection", err => {
  console.error("[server] Unhandled rejection:", err);
});
process.on("uncaughtException", err => {
  console.error("[server] Uncaught exception:", err);
});

app.prepare().then(() => {
  createServer((req, res) => {
    handle(req, res).catch(err => {
      console.error("[server] Request handler error:", err, "for", req.url);
      if (!res.headersSent) {
        res.statusCode = 500;
        res.end("Internal Server Error");
      }
    });
  }).listen(port, () => {
    console.log(`> Ready on port ${port} (${dev ? "development" : "production"})`);
  });
});
