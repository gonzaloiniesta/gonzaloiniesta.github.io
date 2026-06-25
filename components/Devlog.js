export function Devlog(posts) {
  return `
    <div class="devlog-grid">
      ${posts
        .map(
          (post) => `
            <article class="devlog-card reveal">
              <div>
                <p class="eyebrow">${post.category} / ${post.date}</p>
                <h3>${post.title}</h3>
              </div>
              <p>${post.description}</p>
              ${
                post.href
                  ? `<a class="text-link" href="${post.href}">Read note</a>`
                  : `<span class="text-link muted">Draft space prepared</span>`
              }
            </article>
          `
        )
        .join("")}
    </div>
  `;
}
