# Gonzalo Iniesta Portfolio

Personal portfolio for Gonzalo Iniesta: software engineering, game development, public learning and community.

This repository is public and intentionally contains only public information, public promotional images and links to published destinations. Game source code, private assets, exported builds, keystores and credentials stay in each private game repository.

## Architecture

```text
index.html
pages/
  home.js
components/
  Header.js
  Hero.js
  GameCard.js
  TechStack.js
  Roadmap.js
  Devlog.js
  Footer.js
data/
  site.js
styles/
  main.css
  base.css
  layout.css
  components.css
  animations.css
assets/
  hero/
  games/
  icons.svg
```

Legacy pages remain available as standalone files:

- `merrycrhistmas.html`
- `newyear.html`

## Add A New Game

1. Add an optimized public cover image to `assets/games/`.
2. Open `data/site.js`.
3. Add a new object to the `games` array with `title`, `status`, `description`, `image`, `technologies` and `links`.
4. Use only public links such as itch.io, YouTube, Google Play, App Store or Steam.
5. Do not copy source code, builds, private assets or credentials into this repo.

## Local Preview

Because the site uses JavaScript modules, serve it locally instead of opening `index.html` directly:

```sh
python3 -m http.server 8080
```

Then open:

```text
http://localhost:8080
```

## Performance Notes

- Hero and game images are optimized JPG files.
- Non-hero images use lazy loading.
- No third-party font or analytics dependency is loaded.
- Animations respect `prefers-reduced-motion`.
