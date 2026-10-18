# acronoxx.github.io

Personal website and portfolio of **Alexis Baret**, software engineering student at IMT Atlantique.

🔗 **Live:** [acronoxx.github.io](https://acronoxx.github.io) *[ton vrai lien]*

## About

This site presents who I am, my projects and my resume, in one place.
It is designed to be fast, readable and accessible, with a light and a dark theme.

## Features

- **Projects**: a selection of my work, with links to the code and live demos
- **Resume**: my education, experience and skills, with a downloadable PDF
- **Contact**: email, LinkedIn and GitHub
- **Light and dark themes**, following the system setting
- **Responsive layout**, from phone to desktop

## Design

The visual identity, *Encre & Lin* (ink and linen), uses black and white with a single beige accent.

| Role | Value |
|---|---|
| Ink (text, dark background) | `#111110` |
| Paper (light background) | `#FAFAF7` |
| Linen (accent) | `#D8C7A3` |
| Headings | Instrument Serif |
| Body text | Inter *[ou la police que tu utilises]* |
| Details (dates, tags) | IBM Plex Mono *[ou Geist Mono]* |

## Tech stack

- *[HTML, CSS and JavaScript]* *[ou : React + Vite + TypeScript]*
- Hosted on **GitHub Pages**

## Run locally

*[Si c'est du HTML simple :]*
```bash
git clone https://github.com/acronoxx/acronoxx.github.io.git
cd acronoxx.github.io
# open index.html in your browser
```

*[Si c'est un projet Vite / React :]*
```bash
git clone https://github.com/acronoxx/acronoxx.github.io.git
cd acronoxx.github.io
npm install
npm run dev
```

## Project structure

```
├── index.html        Home page
├── assets/           Images, logo, resume PDF
├── styles/           Stylesheets (colors and fonts defined as CSS variables)
└── scripts/          Theme toggle and small interactions
```
*[Adapte selon ton dossier]*

## Deployment

The site is deployed automatically by GitHub Pages from the `main` branch.
*[Si tu utilises Vite : deployed with a GitHub Actions workflow that builds the site and publishes the `dist` folder.]*

## Credits

- Fonts: [Instrument Serif](https://fonts.google.com/specimen/Instrument+Serif) and *[autres polices]*, under the SIL Open Font License
- Logo and design: Alexis Baret

## License

The code is available under the [MIT License](LICENSE). The content (texts, logo, resume) remains © Alexis Baret.