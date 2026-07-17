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
//    thumbnail   - (optional) card image path; falls back to a placeholder
//    thumbnailPosition - (optional) object-position focal point for the card
//                  image, e.g. "center 80%" (bias toward bottom of the photo)
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
    slug: "foc-motor-controller",
    title: "FOC Motor Controller and Reaction-Wheel Inverted Pendulum",
    blurb:
      "A self-directed build of a custom FOC brushless motor controller driving a self-balancing reaction-wheel inverted pendulum.",
    tags: ["Motor Control", "Power Electronics", "Embedded", "Controls", "PCB Layout"],
    featured: true,
    status:
      "In progress. Brushless motor running under field-oriented control on a development kit; custom inverter PCB and control firmware in active development.",
    tools: ["STM32", "Altium", "LTspice", "SolidWorks"],
    description: [
      "My flagship personal project: a self-directed build of a custom field-oriented control (FOC) brushless motor controller that will drive a reaction-wheel inverted pendulum, a robot that holds itself upright by spinning a flywheel to generate correcting torque. The goal is to own the entire system end to end, from the power electronics and PCB, to the real-time control firmware, to the mechanical design.",
      "I scoped this project on my own to build depth in actuation and closed-loop control, the areas I most wanted to grow. Before touching hardware, I worked through the system design from first principles: the three-phase inverter topology and why it takes six MOSFETs, the role of the gate driver, and the division of labor between the microcontroller, driver, and power stage. I then got a brushless motor spinning under field-oriented control on an STM32 motor-control development kit, grounding the design work on real hardware.",
      "From here, the build moves into its core engineering phases: designing my own 3-phase inverter PCB in Altium (STM32G4 microcontroller, a six-MOSFET power stage, gate driver, and current sensing), writing the firmware for the control loop, and finally the mechanical reaction-wheel pendulum in SolidWorks with encoder and IMU feedback driving a balancing controller.",
      "This is the project I am most excited about: taking a hardware system from first principles all the way to a physical demo that visibly balances itself.",
    ],
  },
  {
    slug: "dc-power-analyzer",
    thumbnail: "/projects/dc-power-analyzer/thumb.jpg",
    title: "DC Power Analyzer",
    blurb:
      "A precision system for profiling the voltage, current, and power draw of DC devices.",
    tags: ["Analog Design", "PCB Layout", "Altium", "LTspice"],
    featured: true,
    status: "Prototype built and validated; Altium PCB workflow validated on a test board; full custom PCB layout in progress.",
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
      {
        src: "/projects/dc-power-analyzer/RC_Filter_PCB_3D.png",
        caption: "Altium 3D view of the RC filter workflow validation board",
      },
    ],
    description: [
      "The DC Power Analyzer is a precision measurement system I designed to accurately profile the voltage, current, and power draw of DC devices. It is the kind of instrument you reach for when you need to characterize exactly how much a circuit is consuming.",
      "At its core is a custom current-sense amplifier stage built around the INA180, feeding a Sallen-Key anti-aliasing filter that conditions the signal before digitization. I simulated the full signal chain in LTspice to verify the amplifier and filter response, then validated the real hardware on the oscilloscope against those predictions.",
      "I laid out the PCB in Altium Designer with close attention to the analog details that make or break a measurement instrument: careful ground-plane management, Kelvin (4-wire) sensing for accurate current measurement, and isolation between the analog and digital sections to keep switching noise off the measurement path.",
      "To de-risk the custom board, I first took a simple RC low-pass filter (the same 1.5k ohm and 100nF filter I built and bench-validated on the breadboard, with a cutoff near 1kHz) through the complete PCB workflow in Altium Designer: schematic capture, component footprints, board layout, 3D review, and generation of the Gerber and NC drill fabrication files. This validated the full schematic-to-fabrication toolchain end to end before committing the analyzer's full design to it.",
      "The project grew out of wanting to build something genuinely EE-focused and analog-heavy. I wanted a real signal-chain design problem rather than a beginner microcontroller tutorial.",
    ],
  },
  {
    slug: "boxy",
    thumbnail: "/projects/boxy/thumb.jpg",
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
    thumbnail: "/projects/ir-sensor-puzzle-controller/thumb.jpg",
    title: "IR-Sensor Puzzle Controller",
    blurb:
      "The complete electronics system for an interactive escape-room puzzle.",
    tags: ["Embedded", "Firmware", "Sensors", "MicroPython"],
    featured: true,
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
    thumbnail: "/projects/whack-a-mole/thumb.jpg",
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
    thumbnail: "/projects/sustainafill/thumb.jpg",
    title: "SustainaFill",
    blurb:
      "A venture I pitched to connect students with campus water refill stations, cutting single-use plastic waste.",
    tags: ["Entrepreneurship", "Product", "Business Strategy"],
    featured: false,
    status: "2nd place, Husky Startup Challenge (2024).",
    tools: ["Pitch deck", "Market research", "Financial modeling"],
    images: [
      {
        src: "/projects/sustainafill/SustainaFill-Slide-1.png",
        caption: "SustainaFill title and concept",
      },
      {
        src: "/projects/sustainafill/SustainaFill-Slide-3.png",
        caption: "The mobile app concept and key features",
      },
      {
        src: "/projects/sustainafill/SustainaFill-Slide-9.png",
        caption: "Five-year profitability projection",
      },
      {
        src: "/projects/sustainafill/SustainaFill-Slide-2.png",
        caption: "The problem: campus refill station awareness",
      },
    ],
    description: [
      "SustainaFill is a venture I pitched to close the gap between campus water refill stations and student awareness, cutting single-use plastic waste while saving students money. The concept is a mobile app with real-time GPS station mapping, hydration and nearby-station notifications, and student ID integration that gives universities data-driven insight into station usage and placement.",
      "I built the full business case around it: a tiered university licensing model ($5,000 to $15,000 per year by school size), sponsored eco-brand partnerships, and anonymized data-insight reports. I developed a five-year profitability projection showing a path from an initial investment year to roughly $1.5 million in net profit by year five at 250 university partners. My market research found that 91% of students would switch to reusable bottles if refill stations were conveniently located, and I built a customer persona and competitive analysis positioning SustainaFill against existing apps through its campus-specific focus, indoor navigation, and administrator analytics.",
      "I delivered the pitch on demo day and placed 2nd. Judges highlighted the strength of the app design, the clarity of the customer profile, and the revenue model. This project reflects my interest in the intersection of engineering and entrepreneurship, and my longer-term goal of building a company with a positive impact.",
    ],
  },
];
