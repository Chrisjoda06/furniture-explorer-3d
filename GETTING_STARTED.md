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

---

## Saving your changes to GitHub

After you edit files (in Cursor, VS Code, or any editor), you can save those changes to GitHub so they’re backed up and others can see them.

### Step 1: Check what changed

```bash
git status
```

**What this does:** Shows which files you modified, added, or deleted. It’s like a “preview” before you commit.

### Step 2: Stage your changes

```bash
git add -A
```

**What this does:** `git add` tells Git “I want to include these files in my next commit.” The `-A` means “all changes.” You can also stage specific files: `git add README.md` (just that file).

### Step 3: Commit with a message

```bash
git commit -m "Describe what you changed"
```

**What this does:** Creates a snapshot of your changes with a message. The message should be short and clear, like:
- `"Update header design"`
- `"Add new furniture item"`
- `"Fix 3D viewer bug"`

**Example:**
```bash
git commit -m "Update header design and add mobile menu"
```

### Step 4: Push to GitHub

```bash
git push
```

**What this does:** Uploads your commits to GitHub. After this, your changes are live on GitHub and visible to anyone with access to the repo.

**If you see an error about authentication:** GitHub might ask you to sign in. You can use a personal access token or GitHub CLI. Ask for help if you get stuck here.

---

## Quick reference

| Command           | When to use it                          |
|------------------|------------------------------------------|
| `npm install`    | First time, or after `package.json` changes |
| `npm run dev`    | Work on the app locally                  |
| `npm run build`  | Create files to deploy                   |
| `npm run preview`| Test the production build locally        |
| `git status`     | See what files changed                   |
| `git add -A`     | Stage all changes for commit             |
| `git commit -m "message"` | Save changes with a message      |
| `git push`       | Upload commits to GitHub                 |

If you hit an error, copy the full message and share it—we can debug from there.
