
## Tech Stack

- **Build tool:** Vite
- **UI library:** React (v19)
- **Language:** JavaScript (ES Modules)
- **Linting:** ESLint
- **Deployment:** Vercel (config present via `vercel.json`) — can also be containerized with the included `Dockerfile` / `docker-compose.yml`

## Local development

Prerequisites: Node.js (LTS) and npm

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

Open http://localhost:5173 (Vite default) in your browser.

## Build & Preview

Build for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Docker (optional)

This repo includes a `Dockerfile` and `docker-compose.yml` for containerized builds and local testing. Use them if you prefer running the app in containers.

Start a development container (docker-compose):

```bash
docker compose up
```

Build an image and run a production preview (single-container):

```bash
docker build -t dd-site .
docker run --rm -p 5173:5173 dd-site sh -c "npm run build && npm run preview -- --host 0.0.0.0"
```

Or with docker-compose (one-off preview run):

```bash
docker compose run --rm --service-ports app sh -c "npm run build && npm run preview -- --host 0.0.0.0"
```

Note: the default Vite preview server listens on port `5173`; map that port to access the preview at `http://localhost:5173`.

## CI / CD

This project is configured for automatic production deployments. Pushes to the `main` branch will trigger the configured CI/CD pipeline and automatically update the production site (Vercel deployment is configured via `vercel.json`). Adjust your deployment target in your CI/CD provider or Vercel project settings as needed.

## Files of interest

- [vercel.json](vercel.json) — Vercel deployment config
- [package.json](package.json) — npm scripts and dependencies
- [vite.config.js](vite.config.js) — Vite configuration
- [Dockerfile](Dockerfile) / [docker-compose.yml](docker-compose.yml) — container setup

## Notes

If you need CI/CD changed to a different provider, update the deployment configuration and pipeline to run `npm run build` and deploy the generated `dist/` folder on pushes to `main`.
