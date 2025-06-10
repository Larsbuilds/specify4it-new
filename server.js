const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const dev = process.env.NODE_ENV !== 'production';
const hostname = 'localhost';
const port = 3000;
const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

// MIME types for common static files
const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.woff2': 'font/woff2',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.webp': 'image/webp',
  '.webm': 'video/webm'
};

// Helper function to serve static files
const serveStatic = (req, res, parsedUrl) => {
  let filePath;
  if (parsedUrl.pathname.startsWith('/_next/')) {
    filePath = path.join(__dirname, '.next', parsedUrl.pathname);
  } else {
    filePath = path.join(__dirname, 'public', parsedUrl.pathname);
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    const ext = path.extname(filePath).toLowerCase();
    const contentType = mimeTypes[ext] || 'application/octet-stream';

    res.writeHead(200, { 'Content-Type': contentType });
    const stream = fs.createReadStream(filePath);
    stream.pipe(res);
    return true;
  }
  return false;
};

app.prepare().then(() => {
  createServer((req, res) => {
    // Enable compression
    compression({
      level: 9, // Maximum compression
      threshold: 0, // Compress all responses
      filter: (req, res) => {
        if (req.headers['x-no-compression']) {
          return false;
        }
        // Compress everything except images, videos, and other binary files
        return compression.filter(req, res);
      },
    })(req, res, () => {
      const parsedUrl = parse(req.url, true);
      
      // Handle static files
      if (
        parsedUrl.pathname.startsWith('/_next/') ||
        parsedUrl.pathname.startsWith('/images/') ||
        parsedUrl.pathname.startsWith('/videos/') ||
        parsedUrl.pathname.startsWith('/fonts/')
      ) {
        if (serveStatic(req, res, parsedUrl)) {
          return;
        }
      }

      // Handle all other requests
      handle(req, res, parsedUrl);
    });
  }).listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://${hostname}:${port}`);
  });
});
