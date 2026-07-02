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
    images: [
      {
        src: "/projects/boxy/Boxy.png",
        caption: "The finished assistive communication caddy",
      },
      {
        src: "/projects/boxy/EM_Lock_Schematic.png",
        caption: "KiCad schematic for the electromagnetic lock relay driver",
      },
      {
        src: "/projects/boxy/EM_Lock_Circuit.png",
        caption: "The electromagnetic lock driver circuit",
      },
      {
        src: "/projects/boxy/6V_Battery.png",
        caption: "The 2x2 AA battery pack, about 6.67V",
      },
    ],
    description: [
      "Boxy is an Assistive Communication Caddy, a team-built classroom device for nonverbal students that my team developed start to finish in Northeastern's Forge Hardware Product Lab.",
      "I owned the electromagnetic lock subsystem. I designed a 5V relay driver in KiCad and wrote non-blocking Arduino control firmware so the lock could operate without stalling the rest of the system.",
      "I also built and verified the project's 2x2 AA battery pack, which supplies about 6.67V, and measured per-component current draw with a multimeter to size the team's shared power budget.",
    ],
  },
  {
    slug: "ir-sensor-puzzle-controller",
    title: "IR-Sensor Puzzle Controller",
    blurb:
      "The complete electronics system for an interactive escape-room puzzle.",
    tags: ["Embedded", "Firmware", "Sensors", "MicroPython"],
    featured: false,
    status: "Completed for Cornerstone of Engineering 2 (Jan to Jun 2026).",
    tools: [
      "Raspberry Pi Pico",
      "MicroPython",
      "I2C LCD",
      "IR break-beam sensors",
    ],
    images: [
      {
        src: "/projects/ir-sensor-puzzle-controller/Final_Product.png",
        caption: "The finished escape-room puzzle controller",
      },
      {
        src: "/projects/ir-sensor-puzzle-controller/breadboard3.jpg",
        caption:
          "The Raspberry Pi Pico wired to the IR sensors, LCD, and pushbutton",
      },
      {
        src: "/projects/ir-sensor-puzzle-controller/sensor_test.png",
        caption: "Testing the IR break-beam sensors",
      },
    ],
    description: [
      "The IR-Sensor Puzzle Controller is the complete electronics system for an interactive escape-room puzzle, built for Cornerstone of Engineering 2.",
      "I wired a Raspberry Pi Pico to eight IR break-beam sensors, an I2C LCD, and a pushbutton across shared power and ground rails with pull-up resistors.",
      "I then wrote MicroPython firmware from scratch for sensor polling, hold-to-check button debouncing, and a state-based LCD interface.",
      "I refined the input logic and display loop through iterative playtesting to eliminate false triggers and screen flicker.",
    ],
  },
  {
    slug: "whack-a-mole",
    title: "Whack-a-Mole Electromechanical Game",
    blurb:
      "An interactive arcade game with servo-driven moles, physical buttons, and live LCD scoring.",
    tags: ["Electromechanical", "Embedded", "MicroPython", "Power"],
    featured: false,
    status: "Completed for Cornerstone of Engineering 1 (Sep to Dec 2025).",
    tools: ["Raspberry Pi Pico", "MicroPython", "Servo motors", "LCD"],
    images: [
      {
        src: "/projects/whack-a-mole/final-game.png",
        caption: "The finished Whack-a-Mole arcade game",
      },
      {
        src: "/projects/whack-a-mole/breadboard-v1.jpg",
        caption: "First breadboard prototype of the control circuit",
      },
      {
        src: "/projects/whack-a-mole/breadboard-v2.jpg",
        caption: "Revised breadboard build after the power fix",
      },
    ],
    description: [
      "The Whack-a-Mole Electromechanical Game is an interactive arcade game that integrates five servo motors, physical input buttons, and an LCD for real-time scoring, all controlled by a Raspberry Pi Pico running MicroPython. I built it for Cornerstone of Engineering 1.",
      "The most interesting engineering challenge was reliability. I diagnosed a system-level power instability that was causing voltage dropouts, and I resolved it by implementing a dual-battery power architecture that eliminated the failures and made the game consistently playable.",
    ],
  },
  {
    slug: "sustainafill",
    title: "SustainaFill",
    blurb:
      "A venture concept to boost campus water refill station usage and cut single-use plastic waste.",
    tags: ["Entrepreneurship", "Product", "Business"],
    featured: true,
    status: "2nd place, Husky Startup Challenge (Dec 2024).",
    tools: ["Pitch deck", "Market research", "Business modeling"],
    description: [
      "SustainaFill is a venture concept I pitched to increase campus water refill station usage and cut single-use plastic waste.",
      "I developed the product concept: a mobile app with real-time GPS station mapping, hydration reminders, and student ID integration that would give universities data-driven insights for infrastructure decisions.",
      "I built the business model around tiered university licensing, sponsorships, and data analytics revenue. Market research I conducted found that 91% of surveyed students would switch to reusable bottles if refill stations were conveniently located.",
      "I delivered the pitch on demo day and placed 2nd in the competition. This project reflects my interest in the intersection of engineering and entrepreneurship, and my longer-term goal of building a company with a positive impact.",
    ],
  },
];
