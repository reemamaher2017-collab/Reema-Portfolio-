# Reema Maher Al-Tamimi — Portfolio

A single-page personal portfolio built with plain **HTML, CSS, and JavaScript** — no
build step, no dependencies. Designed to be hosted for free on **GitHub Pages**.

```
portfolio/
├── index.html               # All content lives here
├── styles.css               # Theme — change colors/fonts in the :root block at the top
├── script.js                # Mobile nav, scroll-reveal, footer year
├── Reema Resume 2026.pdf     # Résumé linked from the "Download résumé" button
├── .nojekyll                # Tells GitHub Pages to skip Jekyll processing
└── .gitignore
```

## Editing your content

All content lives in `index.html`, grouped into clearly commented sections. The main
things to keep up to date:

| Where | What to change |
|-------|----------------|
| `<title>` / `<meta>` in `<head>` | Page title, description, social preview |
| **Hero** | One-line professional summary |
| **About** | Bio paragraphs + the "At a glance" facts |
| **Skills** | Skill cards and tags |
| **Experience** | Each role/consultancy: title, org, dates, bullet points |
| **Projects** | Highlighted geospatial work |
| **Education** | Degrees, thesis, certifications & courses |
| **Contact** | Email, phone, and LinkedIn URL (LinkedIn is a placeholder — add your real profile link) |

### Change the look
All colors and fonts are defined at the top of `styles.css` in the `:root` block.
For example, to change the accent color, edit `--accent`.

### Update your résumé
The "Download résumé" button in the hero points to `Reema Resume 2026.pdf`. To swap in
a newer version, either replace that file or update the `href` on the résumé button in
`index.html`. (If you don't want the button, delete that `<a>` line.)

## Preview locally
Just open `index.html` in a browser, or run a tiny local server:

```bash
# Python
python -m http.server 8000
# then visit http://localhost:8000
```

## Deploy to GitHub Pages
See the deployment steps provided in chat, or:

1. Create a GitHub repo and push this folder to it.
2. In the repo: **Settings → Pages → Build and deployment**.
3. Source: **Deploy from a branch**, Branch: **main** / **/(root)**, then **Save**.
4. Your site goes live at `https://<your-username>.github.io/<repo-name>/`
   (or `https://<your-username>.github.io/` if the repo is named
   `<your-username>.github.io`).
