export function Roadmap(items) {
  return `
    <ol class="roadmap-list">
      ${items
        .map(
          (item) => `
            <li class="roadmap-item ${item.state} reveal">
              <span class="roadmap-marker" aria-hidden="true"></span>
              <div>
                <strong>${item.label}</strong>
                <small>${item.state === "done" ? "Done" : item.state === "active" ? "In progress" : "Planned"}</small>
              </div>
            </li>
          `
        )
        .join("")}
    </ol>
  `;
}
