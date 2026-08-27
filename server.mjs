import http from "node:http";
import { createReadStream, statSync, existsSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT_DIR = path.resolve(__dirname, "out");
const PORT = Number(process.env.PORT || 3000);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
};

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "form-action 'self' https://formsubmit.co",
  "script-src 'self' 'unsafe-inline'",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "connect-src 'self' https://formsubmit.co",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

function applySecurityHeaders(res) {
  res.setHeader("Content-Security-Policy", csp);
  res.setHeader("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader("Permissions-Policy", "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=(), browsing-topics=()");
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin");
  res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
  res.setHeader("Origin-Agent-Cluster", "?1");
  res.setHeader("X-DNS-Prefetch-Control", "off");
  res.setHeader("X-Permitted-Cross-Domain-Policies", "none");
  res.setHeader("Cache-Control", "no-store");
  res.removeHeader("X-Powered-By");
}

function isSensitiveProbe(pathname) {
  const lower = pathname.toLowerCase();
  return ["/.env", "/.git", "/.svn", "/.hg", "/wp-admin", "/wp-login", "/phpmyadmin"].some((probe) =>
    lower === probe || lower.startsWith(`${probe}/`)
  );
}

function safePathFromRequest(requestUrl) {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(requestUrl, "http://localhost").pathname);
  } catch {
    return null;
  }

  if (pathname.includes("\0") || pathname.includes("\\") || isSensitiveProbe(pathname)) return null;
  const relative = pathname.replace(/^\/+/, "");
  const candidate = path.resolve(OUT_DIR, relative);
  if (candidate !== OUT_DIR && !candidate.startsWith(`${OUT_DIR}${path.sep}`)) return null;
  return candidate;
}

function resolveFile(requestUrl) {
  const candidate = safePathFromRequest(requestUrl);
  if (!candidate) return null;

  if (existsSync(candidate)) {
    const stats = statSync(candidate);
    if (stats.isFile()) return candidate;
    if (stats.isDirectory()) {
      const indexFile = path.join(candidate, "index.html");
      if (existsSync(indexFile) && statSync(indexFile).isFile()) return indexFile;
    }
  }

  if (!path.extname(candidate)) {
    const htmlFile = `${candidate}.html`;
    if (existsSync(htmlFile) && statSync(htmlFile).isFile()) return htmlFile;
    const indexFile = path.join(candidate, "index.html");
    if (existsSync(indexFile) && statSync(indexFile).isFile()) return indexFile;
  }

  return null;
}

const server = http.createServer({ maxHeaderSize: 16 * 1024 }, (req, res) => {
  applySecurityHeaders(res);

  if (!req.url || !["GET", "HEAD"].includes(req.method || "")) {
    res.statusCode = 405;
    res.setHeader("Allow", "GET, HEAD");
    res.end("Method Not Allowed");
    return;
  }

  const contentLength = Number(req.headers["content-length"] || 0);
  if (contentLength > 0 || req.headers["transfer-encoding"]) {
    res.statusCode = 413;
    res.end("Request body not accepted");
    return;
  }

  const filePath = resolveFile(req.url);
  if (!filePath) {
    const notFound = path.join(OUT_DIR, "404.html");
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    if (existsSync(notFound) && req.method !== "HEAD") createReadStream(notFound).pipe(res);
    else res.end(req.method === "HEAD" ? undefined : "Not Found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  res.statusCode = 200;
  res.setHeader("Content-Type", contentTypes[ext] || "application/octet-stream");

  if (filePath.includes(`${path.sep}_next${path.sep}static${path.sep}`)) {
    res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
  } else if (ext !== ".html") {
    res.setHeader("Cache-Control", "public, max-age=3600");
  }

  if (req.method === "HEAD") {
    res.end();
    return;
  }

  const stream = createReadStream(filePath);
  stream.on("error", () => {
    if (!res.headersSent) res.statusCode = 500;
    res.end("Internal Server Error");
  });
  stream.pipe(res);
});

server.headersTimeout = 10_000;
server.requestTimeout = 10_000;
server.keepAliveTimeout = 5_000;
server.maxRequestsPerSocket = 100;

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Servixa secure static server listening on port ${PORT}`);
});
