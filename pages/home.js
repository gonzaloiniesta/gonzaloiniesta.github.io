import { Header } from "../components/Header.js";
import { Hero } from "../components/Hero.js";
import { SectionHeader } from "../components/SectionHeader.js";
import { GameCard } from "../components/GameCard.js";
import { TechStack } from "../components/TechStack.js";
import { Roadmap } from "../components/Roadmap.js";
import { Devlog } from "../components/Devlog.js";
import { Footer } from "../components/Footer.js";
import {
  profile,
  navigation,
  links,
  games,
  technologies,
  roadmap,
  devlogPosts
} from "../data/site.js";

const app = document.querySelector("#app");

app.innerHTML = `
  ${Header({ profile, navigation, links })}
  <main id="main">
    ${Hero({ profile, links })}

    <section id="projects" class="section">
      ${SectionHeader({
        eyebrow: "Projects",
        title: "A growing catalog of games and experiments.",
        body:
          "The site is structured so each new game can be added as data: cover, description, tech stack and public links."
      })}
      <div class="games-grid">
        ${games.map((game) => GameCard(game)).join("")}
      </div>
    </section>

    <section id="about" class="section section-split">
      ${SectionHeader({
        eyebrow: "About",
        title: "Software engineering mindset, game developer curiosity."
      })}
      <div class="about-panel reveal">
        ${profile.about.map((paragraph) => `<p>${paragraph}</p>`).join("")}
      </div>
    </section>

    <section id="tech" class="section">
      ${SectionHeader({
        eyebrow: "Tech",
        title: "Tools I use to build, ship and learn.",
        body: "Prepared for more engines, stores, SDKs and production tools as the studio workflow grows."
      })}
      ${TechStack(technologies)}
    </section>

    <section id="roadmap" class="section section-split">
      ${SectionHeader({
        eyebrow: "Roadmap",
        title: "Public progress without pretending everything is finished."
      })}
      ${Roadmap(roadmap)}
    </section>

    <section id="devlog" class="section">
      ${SectionHeader({
        eyebrow: "Devlog",
        title: "Notes, postmortems and development diaries.",
        body:
          "A dedicated space for the process: what worked, what failed and what I learn while building games."
      })}
      ${Devlog(devlogPosts)}
    </section>
  </main>
  ${Footer({ profile, links })}
`;

const header = document.querySelector("[data-header]");
const year = document.querySelector("[data-year]");
const revealItems = document.querySelectorAll(".reveal");

function syncHeader() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealItems.forEach((item) => observer.observe(item));
year.textContent = new Date().getFullYear();
syncHeader();
window.addEventListener("scroll", syncHeader, { passive: true });
