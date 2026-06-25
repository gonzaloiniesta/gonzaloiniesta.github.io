import { icon } from "./icons.js";

export function TechStack(technologies) {
  return `
    <div class="tech-grid">
      ${technologies
        .map(
          (tech) => `
            <article class="tech-card reveal">
              <span class="tech-icon">${icon(tech.icon)}</span>
              <span>
                <strong>${tech.name}</strong>
                <small>${tech.detail}</small>
              </span>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}
