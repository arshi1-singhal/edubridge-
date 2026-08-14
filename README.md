# EduBridge

Bridging Minds With Education — verified senior-shared notes and practice sheets
for engineering students, organised branch by branch, semester by semester.

## Tech Stack

- React (JavaScript, ES6+)
- React Router DOM (client-side routing)
- HTML5
- CSS3 (custom properties, flexbox/grid, animations)
- Vite (dev server / build tool)

## Getting Started

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

To build for production:

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── components/      # Reusable UI (Layout, Header, Footer)
├── data/            # All content lives here — edit these to update resources
│   ├── branches.js        # Branch list + semester list
│   ├── subjects.js        # Subject notes (Google Drive links) per branch/semester
│   ├── tutorialSheets.js  # Practice sheet links
│   └── icons.js           # Icon-name to emoji map
├── pages/           # One component per route
│   ├── Home.jsx
│   ├── Branch.jsx
│   ├── Semester.jsx
│   ├── Subjects.jsx
│   ├── TutorialSheets.jsx
│   └── NotFound.jsx
├── styles/          # Global CSS (theme tokens, reset, animations)
├── App.jsx          # Route definitions
└── main.jsx         # App entry point
```

## Updating Resources

All Google Drive links live in `src/data/` — no need to touch the components:

- **Notes by subject:** edit `src/data/subjects.js`.
  Set `href` to a Drive file/folder link, or `"#"` to mark "coming soon".
- **Practice sheets:** edit `src/data/tutorialSheets.js`.
- **Branches / semesters:** edit `src/data/branches.js`.

Clicking any resource card opens the Drive link in a new browser tab.

