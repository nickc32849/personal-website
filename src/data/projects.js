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
//    tags        - small labels (skills/tools); shown as pills on the card
//    featured    - true = also show it on the Home page
//    description - the detail-page text. Can be ONE string, OR an array of
//                  strings where each becomes its own paragraph.
//    tools       - (optional) list of tools/instruments, shown on the detail page
//    status      - (optional) short status line, shown on the detail page
//    images      - (optional) gallery: array of { src, caption } objects
// =====================================================================
export const projects = [
  {
    slug: "dc-power-analyzer",
    title: "DC Power Analyzer",
    blurb:
      "A precision system for profiling the voltage, current, and power draw of DC devices.",
    tags: ["Analog Design", "PCB Layout", "Altium", "LTspice"],
    featured: true,
    status: "Prototype built and validated; custom PCB layout in progress.",
    tools: ["Altium Designer", "LTspice", "Oscilloscope", "Multimeter"],
    images: [
      {
        src: "/projects/dc-power-analyzer/DC_Power_Analyzer_Breadboard_Prototype.png",
        caption: "Breadboard prototype on the bench",
      },
      {
        src: "/projects/dc-power-analyzer/DC_Power_Analyzer_Display.png",
        caption: "Live voltage, current, and power readout on the OLED",
      },
      {
        src: "/projects/dc-power-analyzer/DC_Power_Analyzer_Oscope.png",
        caption: "Oscilloscope validation of the signal chain",
      },
      {
        src: "/projects/dc-power-analyzer/rc_lowpass_bode.png",
        caption: "LTspice frequency response of the filter",
      },
    ],
    description: [
      "The DC Power Analyzer is a precision measurement system I designed to accurately profile the voltage, current, and power draw of DC devices. It is the kind of instrument you reach for when you need to characterize exactly how much a circuit is consuming.",
      "At its core is a custom current-sense amplifier stage built around the INA180, feeding a Sallen-Key anti-aliasing filter that conditions the signal before digitization. I simulated the full signal chain in LTspice to verify the amplifier and filter response, then validated the real hardware on the oscilloscope against those predictions.",
      "I laid out the PCB in Altium Designer with close attention to the analog details that make or break a measurement instrument: careful ground-plane management, Kelvin (4-wire) sensing for accurate current measurement, and isolation between the analog and digital sections to keep switching noise off the measurement path.",
      "The project grew out of wanting to build something genuinely EE-focused and analog-heavy. I wanted a real signal-chain design problem rather than a beginner microcontroller tutorial.",
    ],
  },
  {
    slug: "boxy",
    title: "Boxy",
    blurb:
      "A team-built assistive classroom device for nonverbal students, developed in Northeastern's Forge Hardware Product Lab.",
    tags: ["Hardware", "KiCad", "Arduino", "Power"],
    featured: true,
    status: "Completed as part of the Forge Hardware Product Lab (Jan to Jun 2026).",
    tools: ["KiCad", "Arduino", "Multimeter"],
    description: [
      "Boxy is an Assistive Communication Caddy, a team-built classroom device for nonverbal students that my team developed start to finish in Northeastern's Forge Hardware Product Lab.",
      "I owned the electromagnetic lock subsystem. I designed a 5V relay driver in KiCad and wrote non-blocking Arduino control firmware so the lock could operate without stalling the rest of the system.",
      "I also built and verified the project's 2x2 AA battery pack, which supplies about 6.67V, and measured per-component current draw with a multimeter to size the team's shared power budget.",
    ],
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
