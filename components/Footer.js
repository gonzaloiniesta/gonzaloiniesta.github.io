import { icon } from "./icons.js";

export function Footer({ profile, links }) {
  const footerLinks = [
    ...links.filter((link) => !link.pending),
    { label: "Email", href: `mailto:${profile.email}`, icon: "mail" }
  ];

  return `
    <footer class="site-footer">
      <div>
        <strong>${profile.name}</strong>
        <span>Software Engineer & Game Developer</span>
      </div>
      <nav class="footer-links" aria-label="Footer links">
        ${footerLinks
          .map(
            (link) => `
              <a href="${link.href}" aria-label="${link.label}" ${link.href.startsWith("http") ? 'rel="noopener"' : ""}>
                ${icon(link.icon)}
                <span>${link.label}</span>
              </a>
            `
          )
          .join("")}
      </nav>
      <p>&copy; <span data-year></span> Gonzalo Iniesta. Built in public.</p>
    </footer>
  `;
}
