import { icon } from "./icons.js";

export function GameCard(game) {
  const tech = game.technologies
    .map((item) => `<span class="pill">${item}</span>`)
    .join("");

  const links = game.links
    .map((link) => {
      const content = `${icon(link.icon)}<span>${link.label}</span>`;
      if (link.pending) {
        return `<span class="button compact disabled" aria-disabled="true">${content}</span>`;
      }

      return `<a class="button compact secondary" href="${link.href}" rel="noopener">${content}</a>`;
    })
    .join("");

  return `
    <article class="game-card reveal">
      <img src="${game.image}" alt="${game.title} promotional artwork" loading="lazy" decoding="async">
      <div class="game-card-body">
        <div>
          <p class="eyebrow">${game.status}</p>
          <h3>${game.title}</h3>
        </div>
        <p>${game.description}</p>
        <div class="pill-list" aria-label="${game.title} technologies">${tech}</div>
        <div class="card-actions" aria-label="${game.title} links">${links}</div>
      </div>
    </article>
  `;
}
