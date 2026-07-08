# Changelog

All notable changes to the Blue Stone website are documented here.

## Unreleased

### Fixed
- Vite `preview` server rejected the Render-assigned hostname (`Blocked request... not allowed`). Added a `preview` block to `vite.config.js` with `allowedHosts: ['.onrender.com']`, `host: true`, and `port` bound to `process.env.PORT` so the site is reachable when deployed as a Render Web Service.
