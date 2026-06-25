export function SectionHeader({ eyebrow, title, body = "" }) {
  return `
    <div class="section-header reveal">
      <p class="eyebrow">${eyebrow}</p>
      <h2>${title}</h2>
      ${body ? `<p>${body}</p>` : ""}
    </div>
  `;
}
