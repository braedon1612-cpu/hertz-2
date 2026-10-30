# HERTZ Armature Winders — Reviewed Website

A static company website presenting HERTZ Armature Winders' electrical and mechanical engineering services, including motor repairs, generators, transformers, pumps and marine engineering.

## Features

- Company overview, services, industries and project gallery.
- Contact information, telephone links and WhatsApp shortcut.
- Embedded Google Maps location.
- Sticky header and scroll-based active navigation.
- Scroll reveal effects with reduced-motion handling.

## Run locally

```sh
git clone https://github.com/braedon1612-cpu/hertz-2.git
cd hertz-2
cd "HERTZ_Website_Reviewed/hertz website"
```

Open `index.html` in a modern browser, or serve this directory with a static web server. No package installation or build step is required. Internet access is needed for Google Fonts, Font Awesome and the embedded map.

## Project structure

The site entry point is `HERTZ_Website_Reviewed/hertz website/index.html`, relative to the repository root.

- `index.html` — page content, navigation and contact form markup.
- `css/style.css` — site styling.
- `js/script.js` — scroll and navigation interactions.
- `images/` — local site images and logo.

The repository also includes root-level `style.css` and `script.js` files. The nested HTML loads its sibling `css/style.css` and `js/script.js`; edits to the root copies do not affect that page. `HERTZ_Website_Reviewed/UPGRADE_PLAN.txt` records proposed improvements, rather than a completed-feature checklist.

## Editing and deployment

Edit content in the nested HTML file and keep its CSS, JavaScript and image directories together. Deploy the nested site directory as the web root, or configure hosting to serve it explicitly; there is no root-level `index.html`.

The contact form has no configured submission backend. It needs a form-processing service or backend before quote requests can be delivered.

## Verification

No automated test suite is included. Check desktop and mobile layouts, section links, sticky navigation, image loading, telephone and WhatsApp links, and the map. Check reduced-motion behavior as well. Review the form delivery flow separately before publishing it as an active enquiry channel.
