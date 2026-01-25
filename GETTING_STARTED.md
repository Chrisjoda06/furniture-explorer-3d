# Getting Started — Run the project on your Mac

You’ll run everything in the **Terminal** app. If you’ve never used it:  
**Applications → Utilities → Terminal**, or press **Cmd + Space**, type `Terminal`, then Enter.

---

## Step 1: Open the project folder in Terminal

In Terminal, type this (then press Enter):

```bash
cd ~/Code/furniture-explorer-3d
```

**What this does:** `cd` means “change directory.” This moves you into your project folder so the next commands run in the right place.

---

## Step 2: Install dependencies

```bash
npm install
```

**What this does:** The project depends on lots of small code packages (React, Vite, etc.). They’re listed in `package.json`. `npm install` downloads them into a `node_modules` folder and updates `package-lock.json`. You only need to do this once per machine (or after someone adds a new dependency).

You’ll see a bunch of output. When it finishes without errors, you’re good.

**If you see “command not found: npm”:** You need Node.js (which includes npm).  
Install it: https://nodejs.org — pick the **LTS** version, then run `npm install` again.

---

## Step 3: Start the development server

```bash
npm run dev
```

**What this does:** `npm run dev` starts the Vite dev server. It builds your app, serves it, and watches for file changes. When you edit and save a file, the app in the browser updates automatically.

You should see something like:

```
  VITE v5.x.x  ready in xxx ms
  ➜  Local:   http://localhost:8080/
```

---

## Step 4: Open the app in your browser

Click the link (**http://localhost:8080**) or copy it into your browser’s address bar.

You should see the Furniture Explorer 3D app. Leave the Terminal window open while you’re working; closing it stops the dev server.

To stop the server: press **Ctrl + C** in the Terminal.

---

## Optional: Build for production

When you’re ready to deploy (e.g. to Vercel or Netlify):

```bash
npm run build
```

**What this does:** Creates an optimized, minified build in the `dist` folder. You upload the *contents* of `dist` to your hosting provider.

To preview that production build on your machine:

```bash
npm run preview
```

Then open the URL it prints (usually http://localhost:4173). This simulates how the app will behave once deployed.

---

## Quick reference

| Command           | When to use it                          |
|------------------|------------------------------------------|
| `npm install`    | First time, or after `package.json` changes |
| `npm run dev`    | Work on the app locally                  |
| `npm run build`  | Create files to deploy                   |
| `npm run preview`| Test the production build locally        |

If you hit an error, copy the full message and share it—we can debug from there.
