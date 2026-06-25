const games = [
  {
    title: "Sky Hopper",
    status: "Playable on itch.io",
    description:
      "A bright, mobile-first arcade game about timing jumps, dodging obstacles and chasing a better high score.",
    image: "assets/sky-hopper-key-art.png",
    links: [
      {
        label: "itch.io",
        url: "https://gonzaloiniesta.itch.io/sky-hopper",
        style: "primary"
      },
      {
        label: "YouTube",
        url: "https://www.youtube.com/@gonzaloiniesta",
        style: "secondary"
      },
      {
        label: "Google Play",
        url: "",
        style: "disabled"
      }
    ],
    tags: ["Web", "Mobile-first", "Godot"]
  }
];

const gamesContainer = document.querySelector("[data-games]");
const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");

function renderGames() {
  gamesContainer.innerHTML = games
    .map((game) => {
      const tags = game.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");
      const links = game.links
        .map((link) => {
          if (!link.url) {
            return `<span class="button is-disabled">${link.label}</span>`;
          }

          return `<a class="button ${link.style}" href="${link.url}" rel="noopener">${link.label}</a>`;
        })
        .join("");

      return `
        <article class="game-card">
          <img src="${game.image}" alt="${game.title} promotional artwork">
          <div class="game-body">
            <div>
              <p class="eyebrow">${game.status}</p>
              <h3>${game.title}</h3>
            </div>
            <p>${game.description}</p>
            <div class="game-meta" aria-label="${game.title} tags">${tags}</div>
            <div class="game-actions" aria-label="${game.title} links">${links}</div>
          </div>
        </article>
      `;
    })
    .join("");
}

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

renderGames();
syncHeader();
year.textContent = new Date().getFullYear();
window.addEventListener("scroll", syncHeader, { passive: true });
