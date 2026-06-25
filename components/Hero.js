import { icon } from "./icons.js";

export function Hero({ profile, links }) {
  const primaryLinks = [
    { label: "View Projects", href: "#projects", icon: "gamepad", style: "primary" },
    ...links.map((link) => ({
      ...link,
      style: link.pending ? "disabled" : "secondary"
    }))
  ];

  const actions = primaryLinks
    .map((link) => {
      const content = `${icon(link.icon)}<span>${link.label}</span>`;

      if (link.pending) {
        return `<span class="button disabled" aria-disabled="true">${content}</span>`;
      }

      const rel = link.href.startsWith("http") ? ' rel="noopener"' : "";
      return `<a class="button ${link.style}" href="${link.href}"${rel}>${content}</a>`;
    })
    .join("");

  const title = profile.hero.title
    .map((line, index) => `<span class="${index >= 2 ? "accent-text" : ""}">${line}</span>`)
    .join("");

  return `
    <section id="top" class="hero" aria-labelledby="hero-title">
      <img class="hero-bg" src="${profile.hero.image}" alt="" fetchpriority="high" decoding="async">
      <div class="hero-noise" aria-hidden="true"></div>
      <div class="hero-grid" aria-hidden="true"></div>
      <div class="hero-content reveal">
        <p class="eyebrow">${profile.hero.kicker}</p>
        <h1 id="hero-title">${title}</h1>
        <p class="hero-copy">${profile.hero.body}</p>
        <div class="hero-actions" aria-label="Hero links">${actions}</div>
      </div>
      <div class="hero-panel reveal" aria-label="Current focus">
        <span class="panel-dot"></span>
        <span>Currently building with Godot, web exports and Android publishing workflows.</span>
      </div>
    </section>
  `;
}
