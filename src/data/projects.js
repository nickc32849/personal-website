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
    slug: "project-one",
    title: "Project One",
    blurb: "Short one-line description placeholder.",
    tags: ["Placeholder", "Tag"],
    featured: true,
    description:
      "[Placeholder — a few sentences about this project: what it is, what you built, the tools and skills involved, and the outcome. We'll write these together later.]",
  },
  {
    slug: "project-two",
    title: "Project Two",
    blurb: "Short one-line description placeholder.",
    tags: ["Placeholder", "Tag"],
    featured: true,
    description: "[Placeholder project description.]",
  },
  {
    slug: "project-three",
    title: "Project Three",
    blurb: "Short one-line description placeholder.",
    tags: ["Placeholder", "Tag"],
    featured: true,
    description: "[Placeholder project description.]",
  },
  {
    slug: "project-four",
    title: "Project Four",
    blurb: "Short one-line description placeholder.",
    tags: ["Placeholder", "Tag"],
    featured: false,
    description: "[Placeholder project description.]",
  },
];
