# Kasper Responsive Website

A responsive **Front-End practice implementation**, built from a **provided practice design** using HTML, CSS, and a small amount of vanilla JavaScript.

> This repository presents a coding practice implementation by [Moaz Mohamed](https://github.com/Moaz-Mohamed1). The original visual design is not my creation. Design and third-party asset rights belong to their respective owners.

## Overview

Kasper is a single-page creative agency practice website featuring a hero, services, portfolio gallery, video, about section, statistics, testimonials, skills, pricing, and contact section. The implementation preserves the supplied design's layout, imagery, and color palette.

## Features

- Responsive layouts using CSS Grid, Flexbox, and media queries.
- Working section navigation and an accessible mobile menu.
- Portfolio hover effects and local video playback.
- Local images and Font Awesome fonts with deployment-safe relative paths.
- Labeled form controls and reduced-motion support for smooth scrolling.

## Technology

- HTML5 and CSS3
- Vanilla JavaScript for navigation and demo form handling
- Normalize.css
- Font Awesome Free (bundled locally)
- Open Sans via Google Fonts (requires an internet connection; falls back to sans-serif)

## Run locally

Open `index.html` in a browser, or serve the repository folder using a local static server such as your editor's Live Server extension. No package installation or build step is required.

## Project structure

```text
.
|-- index.html
|-- css/
|   |-- kasper.css
|   |-- normalize.css
|   `-- all.min.css
|-- images/             # Images and practice video
|-- js/
|   `-- main.js
|-- webfonts/           # Local Font Awesome fonts
`-- README.md
```

## GitHub Pages

The project is ready for GitHub Pages: select **Deploy from a branch**, branch **main**, folder **/(root)** in the repository's **Settings → Pages**. The root `index.html` is the entry point; no build command is needed.

## Practice scope

This is a static educational demonstration, not a production business website. Contact and subscription forms show a demo notice and do not send data. Search, slideshow indicators, portfolio filters, pricing purchases, and other decorative calls to action are practice UI elements without service integrations. Sample copy, contact details, and testimonials are placeholders.

## Design and asset attribution

The implementation follows a provided Kasper practice design. The supplied project does not identify the original design source or its license, so this repository does not claim original design authorship or grant rights to the supplied design, images, or video. Verify the original source and applicable permissions before commercial reuse or redistribution beyond this practice context.

Font Awesome and Normalize.css retain their bundled license notices. Third-party fonts, icons, and media remain subject to their respective licenses.
