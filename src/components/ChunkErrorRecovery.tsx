"use client";
import { useEffect } from "react";

const RELOAD_FLAG = "bi-chunk-reload";

function isChunkLoadError(message: string | undefined | null) {
  if (!message) return false;
  return (
    message.includes("ChunkLoadError") ||
    message.includes("Loading chunk") ||
    message.includes("Failed to fetch dynamically imported module") ||
    message.includes("error loading dynamically imported module")
  );
}

// If a deploy replaces the build while a visitor already has the site open,
// their tab can still be holding references to JS chunk filenames that no
// longer exist on the server, surfacing as a dead "reload the page" error.
// This recovers automatically with a single forced reload instead of leaving
// the visitor stuck - the sessionStorage flag stops it from looping if the
// error turns out to be something else entirely.
export default function ChunkErrorRecovery() {
  useEffect(() => {
    const reloadOnce = () => {
      if (sessionStorage.getItem(RELOAD_FLAG)) return;
      sessionStorage.setItem(RELOAD_FLAG, "1");
      window.location.reload();
    };

    const onError = (event: ErrorEvent) => {
      if (isChunkLoadError(event.message)) reloadOnce();
    };
    const onRejection = (event: PromiseRejectionEvent) => {
      const reason = event.reason;
      const message = typeof reason === "string" ? reason : reason?.message;
      if (isChunkLoadError(message)) reloadOnce();
    };

    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);

  return null;
}
