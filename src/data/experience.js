// =====================================================================
//  EXPERIENCE DATA — drives the timeline on the Experience page.
//  List entries MOST RECENT FIRST (top of the file = top of the timeline).
//
//  Fields:
//    role         - your job title
//    organization - company, lab, or team
//    location     - city/state (optional; leave "" to hide)
//    dates        - any format you like, e.g. "Summer 2025" or "Jan to Jun 2025"
//    prose        - (optional) array of paragraph strings shown above the
//                   bullets (each string becomes its own paragraph)
//    bullets      - a few short lines: what you did + the impact
//                   (start each with an action verb: Built, Designed, Tested)
// =====================================================================
export const experiences = [
  {
    role: "Electrical Engineering Co-op",
    organization: "CPI Electron Device Business",
    location: "Beverly, MA",
    dates: "Jun to Dec 2026",
    prose: [
      "CPI Electron Device Business builds RF and microwave parts for radar and defense systems. As an Electrical Engineering Co-op, I work across both production and design, spending time at the bench and using design tools during each stage of a board's life cycle.",
      "Each day, I investigate failures, rework production boards alongside the assembly team, redesign schematics in OrCAD X Capture, and prepare design packages for vendors. So far, this co-op has taught me how RF and microwave hardware is built, tested, and shipped, and introduced me to concepts like transmission lines, VSWR, and receiver protectors.",
    ],
    bullets: [
      "Root-caused a component-fit failure on a production RF/microwave PCB by comparing datasheets, footprints, and electrical ratings of original and substitute ICs, isolating the fault to the board layout rather than the part.",
      "Developed a manual rework procedure to recover 5 affected boards, iterating soldering instructions with assemblers and completing production documentation for release in an ITAR-regulated defense environment.",
      "Produced a vendor-ready BOM and design package for PCB layout and scoped a test harness to electrically screen the redesigned board; designated to lead all active and upcoming vendor PCB designs through the calendar year.",
    ],
  },
  {
    role: "Spacecraft Technology Intern",
    organization: "NASA",
    location: "Remote (Mountain View, CA)",
    dates: "Jun to Aug 2025",
    prose: [
      "I interned remotely on a spacecraft technology team out of Mountain View, CA, turning subsystem data from NASA's Small Satellite Report into a searchable resource for researchers and industry partners.",
      "The Small Satellite Report is NASA's reference on the state of small spacecraft technology, and my job was making its data usable, which involved restructuring subsystem performance tables into query-ready datasets for a searchable system. It taught me how much value there is in unglamorous data work done carefully, and it was my first time contributing to something researchers and industry partners actually rely on.",
    ],
    bullets: [
      "Structured spacecraft subsystem performance and design tables from NASA's Small Satellite Report into query-ready datasets, supporting a searchable system that reduced data retrieval time by approximately 40%.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    organization: "Northeastern University London",
    location: "London, UK",
    dates: "May to Aug 2025",
    prose: [
      "I worked remotely as a research assistant for my economics professor at NU London on a project studying the environmental impacts of US trade policy. This was my first experience with academic research and working with large datasets.",
    ],
    bullets: [
      "Analyzed 10+ global trade, emissions, and regulatory datasets spanning 195 countries across 33 years to quantify the environmental impacts of US trade policy, supporting a peer-reviewed publication.",
      "Compiled datasets for econometric modeling, including difference-in-differences analysis and GVAR data preparation, and synthesized literature on carbon leakage and the Pollution Haven Hypothesis.",
    ],
  },
  {
    role: "Holiday Pop-Up Store Manager and Teaching Assistant",
    organization: "Martha's Vineyard Regional High School",
    location: "Oak Bluffs, MA",
    dates: "Sep to Dec 2023",
    prose: [
      "Before college, I started and managed my high school's holiday pop-up store. This was my first time recruiting a team and overseeing an entire operation from start to finish.",
    ],
    bullets: [
      "Managed a 4-day holiday retail operation generating $11,000+ in sales, coordinating with 10 local vendors on consignment agreements and recruiting 30+ student volunteers.",
      "Negotiated vendor partnerships, developed a pricing strategy without historical sales data, and implemented POS systems, returning $1,000 in profit to school programs.",
    ],
  },
];
