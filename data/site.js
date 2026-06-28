export const profile = {
  name: "Gonzalo Iniesta",
  label: "Software Engineer & Game Developer",
  brand: "Gonzalo Iniesta",
  email: "hello@gonzaloiniesta.com",
  hero: {
    kicker: "Games / Code / Community",
    title: ["Building games.", "Writing code.", "Sharing the", "journey."],
    body:
      "I'm a software engineer building games in my free time to learn, experiment and share the journey with the community.",
    image: "assets/hero/dev-studio-hero.jpg"
  },
  about: [
    "I'm a software engineer who enjoys turning small ideas into finished, playable projects.",
    "Game development is where I practice creativity, systems thinking and product discipline at the same time.",
    "I'm using Godot, AI tools and modern web/mobile workflows to learn in public without pretending everything is already figured out."
  ]
};

export const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Devlog", href: "#devlog" }
];

export const links = [
  { label: "GitHub", href: "https://github.com/gonzaloiniesta", icon: "github" },
  { label: "itch.io", href: "https://gonzaloiniesta.itch.io", icon: "itch" },
  { label: "YouTube", href: "https://www.youtube.com/@gonzaloiniesta", icon: "youtube" },
  { label: "Google Play", href: "", icon: "play-store", pending: true },
  { label: "LinkedIn", href: "", icon: "linkedin", pending: true }
];

export const games = [
  {
    title: "Queens of the Realm",
    status: "Published on itch.io",
    description:
      "A royal chess puzzle built with Godot. Place queens, avoid threats, use walls and solve each board with a polished mobile-first web interface.",
    image: "assets/games/queens-of-the-realm.png",
    technologies: ["Godot", "GDScript", "Puzzle", "Web", "Mobile-first"],
    links: [
      { label: "Play on itch.io", href: "https://gonzaloiniesta.itch.io/queens-of-the-realm", icon: "itch" }
    ]
  },
  {
    title: "Sky Hopper",
    status: "Published on itch.io",
    description:
      "A mobile-first arcade game built with Godot. The project is now moving from web release toward Android, ads and analytics experiments.",
    image: "assets/games/sky-hopper-itch-cover.jpg",
    technologies: ["Godot", "GDScript", "Web", "YouTube Playables-ready"],
    links: [
      { label: "Play on itch.io", href: "https://gonzaloiniesta.itch.io/sky-hopper", icon: "itch" },
      { label: "Dev videos", href: "https://www.youtube.com/@gonzaloiniesta", icon: "youtube" },
      { label: "Google Play", href: "", icon: "play-store", pending: true }
    ]
  }
];

export const technologies = [
  { name: "Godot", detail: "Engine", icon: "godot" },
  { name: "GDScript", detail: "Gameplay", icon: "gdscript" },
  { name: "Git", detail: "Version control", icon: "git" },
  { name: "GitHub", detail: "Code & workflow", icon: "github" },
  { name: "VS Code", detail: "Editor", icon: "vscode" },
  { name: "Android", detail: "Mobile release", icon: "android" },
  { name: "HTML5", detail: "Web builds", icon: "html5" },
  { name: "Blender", detail: "3D experiments", icon: "blender" },
  { name: "Aseprite", detail: "Pixel art", icon: "aseprite" }
];

export const roadmap = [
  { label: "First game published", state: "done" },
  { label: "Google Play release", state: "active" },
  { label: "AdMob integration", state: "active" },
  { label: "Firebase Analytics", state: "active" },
  { label: "Second game prototype", state: "next" },
  { label: "Growing game catalog", state: "next" }
];

export const devlogPosts = [
  {
    title: "Development logs are coming",
    category: "Devlog",
    description:
      "Notes about Godot, publishing, postmortems, AI-assisted workflows and what I learn while building games in public.",
    href: "",
    date: "Soon"
  }
];
