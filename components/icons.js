export function icon(name, className = "icon") {
  return `
    <svg class="${className}" aria-hidden="true" focusable="false">
      <use href="assets/icons.svg#${name}"></use>
    </svg>
  `;
}
