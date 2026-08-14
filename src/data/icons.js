// Maps the Font Awesome-ish icon names stored in the subjects data to emojis
// shown on the UI. Keep this in sync with the `icon` field used in subjects.js.
const ICON_MAP = {
  "fa-calculator": "🧮",
  "fa-atom": "⚛️",
  "fa-code": "💻",
  "fa-screwdriver-wrench": "🛠️",
  "fa-globe": "🌐",
  "fa-comments": "💬",
  "fa-shield-halved": "🛡️",
  "fa-leaf": "🌿",
  "fa-sitemap": "🗂️",
  "fa-book-open": "📖",
  "fa-robot": "🤖",
  "fa-microchip": "🔌",
  "fa-database": "🗄️",
  "fa-network-wired": "🕸️",
  "fa-brain": "🧠",
  "fa-chart-line": "📈",
  "fa-gears": "⚙️",
  "fa-bolt": "⚡",
  "fa-lightbulb": "💡",
  "fa-project-diagram": "🧩",
  "fa-flask": "🧪",
  "fa-cogs": "⚙️",
  "fa-wave-square": "📶",
  "fa-signal": "📡",
  "fa-server": "🖥️",
  "fa-laptop-code": "💻",
  "fa-hands-praying": "🙏",
  "fa-tower-broadcast": "📡",
  "fa-briefcase": "💼",
  "fa-window-restore": "🪟",
  "fa-infinity": "♾️",
  "fa-pen-ruler": "📐",
  "fa-cubes": "🧊",
  "fa-fire-alt": "🔥",
  "fa-mobile-screen": "📱",
};

export function iconFor(name) {
  return ICON_MAP[name] || "📚";
}
