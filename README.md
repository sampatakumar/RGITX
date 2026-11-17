# RGITX — Web Lab & Machine Learning Learning Portal

RGITX is a lightweight, static educational website that groups web-development lab material and machine-learning learning content behind a simple navigation interface. It is built with plain HTML, CSS, and JavaScript and includes a web app manifest for installability-oriented browser support.

## Website Sections

- **Home:** Entry page with navigation cards for the Web Lab and Machine Learning sections.
- **Web Lab:** A collection of web-development practical exercises and code examples.
- **Machine Learning:** A dedicated section for machine-learning learning material.
- **Responsive navigation:** Header navigation with a collapsible mobile menu.
- **Code-copy helper:** JavaScript helper for selecting and copying displayed code snippets.
- **PWA metadata:** Web app manifest with application name, theme colour, start URL, and display settings.
- **SEO basics:** Page title, description, keywords, robots metadata, sitemap, and Google site-verification file.

## Technology

| Technology | Use |
|---|---|
| HTML5 | Page structure and content |
| CSS3 | Layout, visual styling, and responsive behaviour |
| Vanilla JavaScript | Navigation interactions and copy-to-clipboard helpers |
| Web App Manifest | Browser application metadata |
| XML / robots.txt | Search engine discovery configuration |

## Project Structure

```text
RGITX/
├── index.html       # Home page and main navigation
├── weblab.html      # Web lab material and code examples
├── ml.html          # Machine learning section
├── main.css         # Shared site styling
├── script.js        # Shared interactions and code-copy helpers
├── manifest.json    # Web app metadata
├── robots.txt       # Crawler instructions
├── sitemap.xml      # Search-engine sitemap
└── google*.html     # Search Console verification file
```

## Run Locally

No package installation or build step is required.

```bash
git clone https://github.com/sampatakumar/RGITX.git
cd RGITX
```

Open `index.html` in a browser, or serve the folder through a local static server:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

This is a static website and can be hosted using GitHub Pages, Vercel static hosting, Netlify, or any web server that serves HTML/CSS/JS files. When deploying under a subpath, review absolute paths in the manifest and sitemap.

## Current Limitations

- The content is static; there is no backend, database, user account system, or server-side progress tracking.
- The manifest references an icon file that should be confirmed to exist in the deployed root.
- The home page includes browser shortcuts intended to discourage right-click and developer-tool shortcuts. These are only UI deterrents and cannot protect source code or prevent inspection.
- The current metadata includes repeated viewport metadata and should be cleaned up.
- Clipboard behaviour should use the modern Clipboard API with a fallback for unsupported contexts.

## Future Improvements

- [ ] Add searchable lab exercises and topic filters.
- [ ] Add interactive code editors and browser-based previews.
- [ ] Add downloadable lab notes and practice sheets.
- [ ] Add progress tracking and bookmarks.
- [ ] Add accessible navigation and keyboard support.
- [ ] Add multilingual learning content.
- [ ] Add quizzes and self-assessment.
- [ ] Add a verified, maintained PWA icon set and offline caching.
- [ ] Add automated HTML, accessibility, and link checks.

## License

No license file was identified at the repository root. Add a license before explicitly permitting reuse.
