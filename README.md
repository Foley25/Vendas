# Vendas — Simple Static Site

This is a minimal static website scaffold (HTML, CSS, JS) you can use as a starter for the Vendas repo.

Files included:
- `index.html` — main page
- `styles.css` — simple responsive styling
- `script.js` — small client-side interactions (menu + demo contact handling)

How to add these files to your repository locally:
1. In your local copy of the repo (or a new directory):
   git clone https://github.com/Foley25/Vendas.git
   cd Vendas
2. Create a branch (example: `site`) or use `main`:
   git checkout -b site
3. Copy `index.html`, `styles.css`, `script.js`, and this `README.md` into the repository root.
4. Commit and push:
   git add index.html styles.css script.js README.md
   git commit -m "Add simple static site for Vendas"
   git push --set-upstream origin site

Alternative (initialize and push from scratch if repo is empty):
   mkdir Vendas && cd Vendas
   git init -b site
   # create files here (paste contents)
   git add .
   git commit -m "Add simple static site for Vendas"
   git remote add origin https://github.com/Foley25/Vendas.git
   git push -u origin site

Publish with GitHub Pages:
- In the repository Settings → Pages, set the source to the `site` branch (root) and save.
- Or move files to a `docs/` folder on `main` and select `main / docs`.
- Or use a `gh-pages` branch.

Optional: Add a contact backend (Formspree, Netlify, or your own server) if you want form submissions saved.
