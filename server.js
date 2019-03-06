const { createReadStream } = require('fs');
const { createServer } = require('http');
const { join } = require('path');
const { parse } = require('url');
const next = require('next');


const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    const { pathname } = parsedUrl;
    const serviceWorker = '/service-worker.js';

    const rootStaticFiles = [
      '/manifest.json',
      '/sitemap.xml',
      '/favicon.ico',
      '/robots.txt',
      '/browserconfig.xml',
      '/site.webmanifest',
      serviceWorker,
    ];

    if (rootStaticFiles.indexOf(parsedUrl.pathname) > -1) {
      const folder = parsedUrl.pathname === serviceWorker ? '.next' : 'static';
      const path = join(__dirname, folder, parsedUrl.pathname);
      app.serveStatic(req, res, path);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
