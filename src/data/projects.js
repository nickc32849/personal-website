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
//    type        - (optional) project type and dates, shown in the metadata strip
//    role        - (optional) your role, shown in the metadata strip
//    tools       - (optional) list of tools; shown in the detail metadata strip
//    status      - (optional) short status line, shown in the detail metadata strip
//    badge       - (optional) short status pill (e.g. "In Progress"), shown on
//                  the card and at the top of the detail page (accent color)
//    images      - (optional) gallery: array of { src, caption } objects.
//                  Add type: "video" to render an inline <video> player instead
//                  of an image (src should point to an mp4).
//    sections    - (optional) array of { title?, body?, images[] } blocks, each
//                  rendered as an optional heading + body paragraph + its own
//                  image grid. Takes precedence over `images` when present.
// =====================================================================
export const projects = [
  {
    slug: "foc-motor-controller",
    thumbnail: "/projects/foc-motor-controller/thumb.jpg",
    title: "FOC Motor Controller and Reaction-Wheel Inverted Pendulum",
    badge: "In Progress",
    blurb:
      "A self-directed build of a custom FOC brushless motor controller driving a self-balancing reaction-wheel inverted pendulum.",
    tags: ["Motor Control", "Power Electronics", "Embedded", "Controls", "PCB Layout"],
    featured: true,
    type: "Personal project, Jul 2026 to present",
    role: "Sole designer",
    status:
      "In progress. Brushless motor running under field-oriented control on a development kit; custom inverter PCB and control firmware in active development.",
    tools: ["STM32", "Altium", "LTspice", "SolidWorks"],
    sections: [
      {
        images: [
          {
            src: "/projects/foc-motor-controller/foc-block-diagram.png",
            caption:
              "System block diagram: microcontroller, gate driver, three-phase inverter, motor, and feedback",
          },
          {
            src: "/projects/foc-motor-controller/foc-concept-sketch.png",
            caption:
              "Initial concept sketch of the reaction-wheel inverted pendulum",
          },
          {
            src: "/projects/foc-motor-controller/foc-schematic-sketch.png",
            caption: "Early power stage schematic from the design phase",
          },
        ],
      },
      {
        title: "Simulation",
        body:
          "Simulated one half-bridge of the inverter in LTspice before starting the PCB. Built the circuit from the hand-drawn schematic: two MOSFETs, PWM gate drives with 1µs dead-time at 20kHz, and an RL stand-in for the motor winding. Predicted the steady-state current by hand (duty-weighted average over winding resistance, 0.576A), ran the sim over five time constants, and measured ~0.57A. Then deliberately overlapped the gate signals to demonstrate shoot-through: predicted 343-430A from the FETs' on-resistance, measured ~315A sustained, with the switch node sitting at half rail confirming both FETs on and the load current untouched, which is why the fault is catastrophic and why dead-time exists. Bonus experiments: moved a 50nH parasitic inductance into the power loop to produce switching-node ringing, and back-solved the FET's effective output capacitance (~2.6nF) from the measured ring frequency.",
        images: [
          {
            src: "/projects/foc-motor-controller/halfbridge-simulation-circuit.png",
            caption:
              "Half-bridge with dead-time-staggered PWM and RL motor model.",
          },
          {
            src: "/projects/foc-motor-controller/halfbridge-5tau.png",
            caption: "Predicted 0.576A steady state; measured ~0.57A over 5τ.",
          },
          {
            src: "/projects/foc-motor-controller/halfbridge-shootthrough.png",
            caption:
              "1µs deliberate gate overlap: ~315A fault current, node at half rail, load unaffected.",
          },
        ],
      },
      {
        images: [
          {
            type: "video",
            src: "/projects/foc-motor-controller/motor-spin.mp4",
            caption:
              "First motor spin under field-oriented control on the ST development kit",
          },
        ],
      },
    ],
    description: [
      "I am building my own field-oriented control (FOC) brushless motor controller for a reaction-wheel inverted pendulum. The robot will stay balanced by spinning a flywheel to create torque. My goal is to design and build every part myself, including the power electronics, PCB, control firmware, and mechanical parts.",
      "I took on this project by myself to learn more about actuation and closed-loop control. I began by designing the system from the ground up, then focused on the hardware. I learned how a three-phase inverter with six MOSFETs works, what the gate driver does, and how the microcontroller, driver, and power stage all connect. Before designing my own board, I ran a brushless motor with field-oriented control on an STM32 development kit.",
      "Next, I will move on to the main engineering steps. First, I plan to design my own 3-phase inverter PCB in Altium, using an STM32G4 microcontroller, a six-MOSFET power stage, a gate driver, and current sensors. After that, I will write the firmware for the control loop. Finally, I will design the mechanical reaction-wheel pendulum in SolidWorks and add encoder and IMU feedback to help the controller keep the robot balanced.",
      "This is the project I am most excited about because I get to turn an idea into real hardware that can balance itself.",
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
    type: "Personal project, Feb to May 2026",
    role: "Sole designer",
    status: "Concluded at working prototype. Breadboard prototype validated within 1% of a calibrated multimeter; Altium PCB workflow validated on a standalone test board.",
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
      "I designed the DC Power Analyzer as a precise tool for measuring the voltage, current, and power use of DC devices. It displays exactly how much power a circuit is using.",
      "The main part of the analyzer is a custom current-sense amplifier using the INA180, which sends its signal through a Sallen-Key anti-aliasing filter before digitization. I simulated the whole signal chain in LTspice to verify the amplifier and filter, then tested the real hardware on the oscilloscope to confirm it matched my predictions. The working breadboard prototype reads voltage, current, and power live on an OLED display, validated within 1% of a calibrated multimeter.",
      "In Altium Designer, my PCB design focused on the analog details that affect measurement accuracy, including careful ground-plane management, Kelvin (4-wire) sensing for precise current readings, and keeping the analog and digital sections separate to avoid noise in the measurements.",
      "To reduce risk with the custom board, I started by taking a simple RC low-pass filter (the same 1.5k ohm and 100nF filter I tested on a breadboard with a cutoff near 1kHz) through the full PCB process in Altium Designer. I went from schematic capture to component footprints, board layout, 3D review, and finally generated the Gerber and NC drill files. This let me test the whole design-to-fabrication process before moving on to the full analyzer.",
      "I started this project because I wanted to build something truly focused on electrical engineering and analog design. I was looking for a real signal-chain challenge, not just another beginner microcontroller project. I completed it as a working prototype and carried the analog design and PCB skills straight into my current project, the FOC motor controller and reaction-wheel inverted pendulum.",
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
    type: "Team project, Forge Hardware Product Lab, Jan to Jun 2026",
    role: "I owned the electromagnetic lock subsystem: relay driver design in KiCad, Arduino control firmware, and the battery pack and power budget measurements.",
    status: "Completed.",
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
      "Boxy is an Assistive Communication Caddy, a classroom device for nonverbal students that my team built from the ground up in Northeastern's Forge Hardware Product Lab.",
      "I was responsible for the electromagnetic lock subsystem. I designed a 5V relay driver in KiCad and wrote non-blocking Arduino control firmware, allowing the lock to work without interrupting the rest of the system.",
      "I also built and tested the project's 2x2 AA battery pack, which provides about 6.67V. I measured the current draw of each component with a multimeter to help determine the team's overall power budget.",
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
    type: "Class project, Cornerstone of Engineering 2, Jan to Jun 2026",
    role: "Sole designer of the electronics and firmware",
    status: "Completed.",
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
      "The IR-Sensor Puzzle Controller is a full electronics system designed for an interactive escape-room puzzle. I built it as part of the Cornerstone of Engineering 2 course.",
      "I connected a Raspberry Pi Pico to eight IR break-beam sensors, an I2C LCD, and a pushbutton. All components shared power and ground rails, with pull-up resistors on the inputs.",
      "I then wrote MicroPython firmware that handles sensor polling, debounces the hold-to-check button, and manages a state-based LCD interface.",
      "Playtesting several rounds helped me refine the input logic and display loop, removing false triggers and screen flicker.",
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
    type: "Class project, Cornerstone of Engineering 1, Sep to Dec 2025",
    role: "Team project; I focused on the electronics and the dual-battery power fix",
    status: "Completed.",
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
      "The Whack-a-Mole Electromechanical Game is an arcade game my team built for Cornerstone of Engineering 1. It uses five servo motors, physical buttons, and an LCD to show scores in real time, all managed by a Raspberry Pi Pico with MicroPython.",
      "The biggest engineering challenge was making the game reliable. I found that power instability was causing voltage dropouts, so I fixed it by adding a dual-battery setup. This solved the problem and made the game consistently playable.",
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
    type: "Entrepreneurship pitch, Husky Startup Challenge, Dec 2024",
    role: "Developed the concept, business model, and pitch",
    status: "2nd place.",
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
      "I came up with SustainaFill to help students find campus water refill stations more easily, reduce single-use plastic waste, and save money. The idea is a mobile app that shows real-time GPS locations of refill stations, sends hydration reminders and alerts for nearby stations, and connects with student IDs so universities can see how stations are used and where to add more.",
      "I put together a full business plan for SustainaFill. The plan includes a university licensing model with fees based on school size, partnerships with eco-friendly brands, and reports that share anonymous data insights. I projected a path from an initial investment year to about $1.5 million in net profit by year five with 250 university partners. My research showed that 91% of students would use reusable bottles if refill stations were easy to find. I also created a customer profile and compared SustainaFill to other apps, highlighting its focus on campuses, indoor navigation, and tools for university administrators.",
      "I presented SustainaFill on demo day and finished in second place. The judges praised the app's design, the clear customer profile, and the revenue model. This project shows how much I enjoy combining engineering with entrepreneurship, and it connects to my goal of starting a company that makes a positive difference.",
    ],
  },
];
