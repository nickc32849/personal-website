// =====================================================================
//  EXPERIENCE DATA — drives the timeline on the Experience page.
//  List entries MOST RECENT FIRST (top of the file = top of the timeline).
//
//  Fields:
//    role         - your job title
//    organization - company, lab, or team
//    location     - city/state (optional; leave "" to hide)
//    dates        - any format you like, e.g. "Summer 2025" or "Jan to Jun 2025"
//    context      - (optional) short intro paragraph shown above the bullets
//    bullets      - a few short lines: what you did + the impact
//                   (start each with an action verb: Built, Designed, Tested)
// =====================================================================
export const experiences = [
  {
    role: "Electrical Engineering Co-op",
    organization: "CPI Electron Device Business",
    location: "Beverly, MA",
    dates: "Jun to Dec 2026",
    context:
      "CPI Electron Device Business designs and manufactures RF and microwave components for radar and defense systems. As the electrical engineering co-op, I work hands-on across production and design, from failure analysis and rework on live production boards to PCB redesign and vendor coordination.",
    bullets: [
      "Root-caused a component-fit failure on a production RF/microwave PCB by comparing datasheets, footprints, and electrical ratings of original and substitute ICs, isolating the fault to the board layout rather than the part.",
      "Developed a manual rework procedure to recover 5 affected boards, iterating soldering instructions with assemblers and completing production documentation for release in an ITAR-regulated defense environment.",
      "Redesigned the PCB in OrCAD X Capture, building a custom part library with class-correct component properties and validating connectivity with a digital multimeter (DMM).",
      "Produced a vendor-ready BOM and design package for PCB layout and scoped a test harness to electrically screen the redesigned board; designated to lead all active and upcoming vendor PCB designs through the calendar year.",
      "Self-initiated assembly of an RF test kit for a limiter, building waveguide, coupler, and circulator subassemblies to diagram.",
    ],
  },
  {
    role: "Spacecraft Technology Intern",
    organization: "NASA",
    location: "Remote (Mountain View, CA)",
    dates: "Jun to Aug 2025",
    context:
      "An internship supporting spacecraft technology research out of Mountain View, CA, focused on turning subsystem data from NASA's Small Satellite Report into a searchable resource for researchers and industry partners.",
    bullets: [
      "Structured spacecraft subsystem performance and design tables from NASA's Small Satellite Report into query-ready datasets, supporting a searchable system that reduced data retrieval time by about 40%.",
      "Standardized large Excel tables to resolve cross-platform compatibility issues between Mac and Windows, improving consistency and usability for researchers and external partners.",
    ],
  },
  {
    role: "Undergraduate Research Assistant",
    organization: "Northeastern University London",
    location: "London, UK",
    dates: "May to Aug 2025",
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
    bullets: [
      "Managed a 4-day holiday retail operation generating $11,000+ in sales, coordinating with 10 local vendors on consignment agreements and recruiting 30+ student volunteers.",
      "Negotiated vendor partnerships, developed a pricing strategy without historical sales data, and implemented POS systems, returning $1,000 in profit to school programs.",
    ],
  },
];
