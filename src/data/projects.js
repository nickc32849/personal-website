// =====================================================================
//  PROJECTS DATA — the single source of truth for your projects.
//
//  Add, edit, or remove a project in this one list and it updates
//  EVERYWHERE automatically: the Home page's featured cards, the
//  Projects page, and each project's own detail page.
//
//  Fields:
//    slug        - the URL for the detail page: /projects/<slug>
//                  (use lowercase-with-dashes, no spaces)
//    title       - project name
//    blurb       - one short line shown on the card
//    tags        - small labels (skills/tools); shown as pills
//    featured    - true = also show it on the Home page
//    description - the longer text shown on the detail page
// =====================================================================
export const projects = [
  {
    slug: "dc-power-analyzer",
    title: "DC Power Analyzer",
    blurb: "[One line describing what it does — tell me and I'll write it.]",
    tags: [],
    featured: true,
    description:
      "[Placeholder — what it is, what you designed/built, the tools and skills involved, and the result.]",
  },
  {
    slug: "boxy",
    title: "Boxy",
    blurb: "[One line describing what it does.]",
    tags: ["Forge"],
    featured: true,
    description:
      "[Placeholder — what Boxy is, your role on the Forge project, and the outcome.]",
  },
  {
    slug: "ir-sensor-puzzle-controller",
    title: "IR-Sensor Puzzle Controller",
    blurb: "[One line describing what it does.]",
    tags: [],
    featured: false,
    description: "[Placeholder — what it is, what you built, and the result.]",
  },
  {
    slug: "whack-a-mole",
    title: "Whack-a-Mole",
    blurb: "[One line describing what it does.]",
    tags: [],
    featured: false,
    description: "[Placeholder — what it is, what you built, and the result.]",
  },
  {
    slug: "sustainafill",
    title: "SustainaFill",
    blurb: "[One line describing what it does.]",
    tags: ["Husky Startup Challenge · 2nd place"],
    featured: true,
    description:
      "[Placeholder — the startup concept, your role, and the 2nd-place finish at the Husky Startup Challenge.]",
  },
];
