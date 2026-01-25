# Furniture Explorer 3D

A 3D furniture catalog built with React, Vite, and TypeScript. Browse curated pieces and view them in 3D with optional AR support.

## Tech stack

- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://react.dev/)
- [shadcn/ui](https://ui.shadcn.com/) + [Tailwind CSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [model-viewer](https://modelviewer.dev/) (Google) for 3D/AR

## Run locally

**Requirements:** Node.js 18+ and npm (or [Bun](https://bun.sh/)).

1. Clone the repository and go to the project directory:

   ```sh
   git clone <YOUR_GIT_URL>
   cd furniture-explorer-3d
   ```

2. Install dependencies:

   ```sh
   npm install
   ```

   Or with Bun:

   ```sh
   bun install
   ```

3. Start the development server:

   ```sh
   npm run dev
   ```

   The app runs at [http://localhost:8080](http://localhost:8080) by default.

4. (Optional) Test the production build locally:

   ```sh
   npm run build
   npm run preview
   ```

## Deploy anywhere

The build outputs a **static SPA** in `dist/`. You can deploy that folder to any static host (Vercel, Netlify, GitHub Pages, Cloudflare Pages, S3 + CloudFront, etc.).

**Build:**

```sh
npm run build
```

**Deploy:** Upload the contents of `dist/` (or configure your host to use `dist/` as the publish directory).

**SPA routing:** The app uses React Router’s `BrowserRouter`. Ensure all routes serve `index.html` so the client router can handle them. Most platforms (Vercel, Netlify, Cloudflare Pages) do this automatically for SPAs. For bare static hosts (e.g. S3, nginx), add a fallback so unknown paths return `index.html`.

**Examples:**

- **Vercel:** Connect the repo, set build command `npm run build`, output directory `dist`. No extra config needed.
- **Netlify:** Build command `npm run build`, publish directory `dist`. Add a `_redirects` file with `/* /index.html 200` only if SPA fallback isn’t applied by default.
- **GitHub Pages:** Build with `npm run build`, deploy `dist/`. If the app is served under a subpath (e.g. `https://user.github.io/repo/`), set `base: '/repo/'` in `vite.config.ts` and the matching `basename` for `BrowserRouter`. Root deployments need no base change.

## Scripts

| Command        | Description                    |
|----------------|--------------------------------|
| `npm run dev`  | Start Vite dev server          |
| `npm run build`| Production build → `dist/`     |
| `npm run preview` | Serve `dist/` locally      |
| `npm run lint` | Run ESLint                     |
| `npm run test` | Run Vitest                     |
