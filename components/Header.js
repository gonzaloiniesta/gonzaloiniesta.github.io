import { icon } from "./icons.js";

export function Header({ profile, navigation, links }) {
  const socialLinks = links
    .filter((link) => !link.pending && ["GitHub", "YouTube"].includes(link.label))
    .map(
      (link) => `
        <a class="icon-link" href="${link.href}" aria-label="${link.label}" rel="noopener">
          ${icon(link.icon)}
        </a>
      `
    )
    .join("");

  const navItems = navigation
    .map((item) => `<a href="${item.href}">${item.label}</a>`)
    .join("");

  return `
    <header class="site-header" data-header>
      <a class="brand" href="#top" aria-label="${profile.brand} home">
        <span class="brand-mark">${icon("gamepad")}</span>
        <span>
          <strong>${profile.brand}</strong>
          <small>Games / Code / Community</small>
        </span>
      </a>
      <nav class="site-nav" aria-label="Primary navigation">${navItems}</nav>
      <div class="header-actions">${socialLinks}</div>
    </header>
  `;
}
