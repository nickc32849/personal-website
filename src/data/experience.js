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
//    links        - (optional) { label, items:[{ text, href, source? }] }
//                   external links shown after the bullets (open in a new tab)
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
      "Each day, I work on the bench and in design tools throughout the full life cycle of a production board: investigating failures, reworking hardware with the assembly team, redesigning in OrCAD X, managing vendor communication for board layouts, and screening with RF assemblies on a network analyzer. It has been a crash course in how RF and microwave hardware gets built, tested, and shipped in a production environment, and in concepts like transmission lines, S-parameters, and receiver protectors that I had never encountered before this co-op.",
    ],
    bullets: [
      "Root-caused a component-fit failure on a production RF/microwave PCB by comparing datasheets, footprints, and electrical ratings of original and substitute ICs, isolating the fault to the board layout rather than the part.",
      "Designed, built, and tested a validation harness for the redesigned PCB, tracing a test failure to an incorrectly documented ground pin in the legacy schematic; corrected the schematic and validated the board's truth table.",
      "Troubleshot a legacy-replacement board failing supply current validation, root-causing an overload to reversed-polarized components and tracing a supply current turn-on anomaly to inverted op-amp inputs.",
      "Managing vendor communication for all active and upcoming PCB layout designs, submitting ECRs and ECOs and deriving form-fit-function (FFF) part substitutes validated with program engineers.",
      "Screened and documented waveguide assemblies for an RF limiter test kit using a network analyzer (PNA), capturing S-parameters, through-path loss, and coupling factor, and performing worst-case analysis in Excel against unit specifications.",
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
      "Before college, I organized and ran my high school's holiday pop-up store. It was my first experience putting together a team and managing every part of a project from beginning to end.",
      "The idea for the store came from the business and marketing classes I took. It grew into a four-day retail operation, with products made by students, consignment deals with local island vendors, and a team of classmates volunteering to help. In addition to running the store, I led a group that presented our project to the Board of Education. This experience gave me my first real understanding of what it takes for a business to survive, since we had to cover all our costs before the store could reopen the following year.",
    ],
    bullets: [
      "Managed a 4-day holiday retail operation generating $11,000+ in sales, coordinating with 10 local vendors on consignment agreements and recruiting 30+ student volunteers.",
      "Negotiated vendor partnerships, developed a pricing strategy without historical sales data, and implemented POS systems, returning $1,000 in profit to school programs.",
    ],
    links: {
      label: "Read and hear more:",
      items: [
        {
          text: "Students Bring Business Savvy to Holiday Pop-Up Shop",
          href: "https://vineyardgazette.com/news/2023/11/30/students-bring-business-savvy-holiday-pop-shop",
          source: "The Vineyard Gazette",
        },
        {
          text: "The Vineyard Current segment on the Holiday Pop-Up Market",
          href: "https://soundcloud.com/mvyradio/the-vineyard-current-segment-from-december-3rd-2023-mvrhs-holiday-pop-up-market",
          source: "MVY Radio, Dec 2023",
        },
      ],
    },
  },
];
