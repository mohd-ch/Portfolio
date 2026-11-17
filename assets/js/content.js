/* Every word on the site lives here. Edit this file and the page updates. */
window.SITE = {
  name: "Mohammed CH",
  email: "muhammedch069@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohammed-c-h/",
  github: "https://github.com/mohd-ch",

  nav: [
    { id: "work", label: "Work" },
    { id: "how", label: "Approach" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact", cta: true },
  ],

  hero: {
    title: "I run the operation behind a growing business.",
    lede: "I lead teams, build processes and run the systems that let a business grow.",
    lines: ["I run the operation", "behind a growing", "business."],
    cta: "See what I have built",
    ctaTarget: "#work",
  },

  /* Download CV: the button shows only when this points at a real file.
     Save your resume as assets/Mohammed-C-H-Resume.pdf. The button appears by itself when that file exists on the site, and stays hidden when it does not. */
  cv: { href: "assets/Mohammed-C-H-Resume.pdf", label: "Download resume" },

  /* Case study 1: Neo Smart operations. Public copy uses only confirmed facts. Open questions are in HANDOVER.md. */

  neoCase: {
    eyebrow: "Neo Smart \u00b7 Now",
    title: "Building the systems behind a growing business",
    role: "Operations Coordinator at Neo Smart. I run IT and administration, work with management on how the business should run as it scales, and advise the core team where it helps.",
    parts: [
      {
        t: "Business challenge",
        p: "As the business grew, work had to move cleanly between sales, warehouse, service and accounts, and management needed a clear view of how it was moving.",
      },
      {
        t: "My recommendation",
        p: "I mapped how the work moves between those teams, then proposed clearer ownership for each step, defined handovers between teams, and shared records that everyone works from.",
      },
      {
        t: "What management can see now",
        p: "Document and compliance tracking is live. Every tracked document sits in one list with expired and upcoming renewals at the top, and a management overview shows compliance, asset use and the documents that need action.",
      },
      {
        t: "What I owned",
        p: "The workflow design, the phased rollout of the in-house system, coordination across teams and outside partners, inventory and stock valuation, inventory reporting, and the HR side of the business.",
      },
    ],
    gallery: [
      { base: "assets/img/neosmart-dashboard-overview", alt: "Management overview in the Neo Smart in-house system, with personal details hidden", t: "The management overview", d: "Compliance, asset use and documents needing action, on one screen. Private details hidden." },
      { base: "assets/img/neosmart-dashboard-compliance", alt: "Compliance view in the Neo Smart in-house system, with personal details hidden", t: "Compliance, most urgent first", d: "Every tracked document, with expired and upcoming renewals at the top. Private details hidden." },
    ],
    progress: {
      t: "Progress",
      p: "The system is being introduced in phases, so some of the work is already running and some is still being rolled out.",
      inUse: {
        t: "Already in use",
        items: [
          { t: "Day-to-day coordination of freight, supplier sourcing, import shipments, customs follow-up and deliveries with outside partners." },
          { t: "Document control, inventory, stock valuation and inventory reports, run day to day." },
        ],
      },
      rolling: {
        t: "Still rolling out",
        items: [
          { t: "The in-house system, released one phase at a time with the team." },
        ],
      },
    },
  },

  /* Featured case study 2: repositioning Neo Smart. Public copy uses only what is verified:
     the capabilities and partners named by Mohammed, the "From Vision to Operation" line on the Neo Smart site,
     and the experience entries (shape brand strategy, including the website redesign; coordinate events).
     Real images: drop files into assets/img with these names (png, jpg, jpeg or webp). Missing before/after
     show a labelled illustration; missing catalogue and booth images are simply left out. */
  repositioning: {
    eyebrow: "Neo Smart \u00b7 Brand",
    title: "Making a whole company visible, not just its products",
    lede: "Neo Smart had been presented product by product. The company could support a complete laboratory project, through sourcing, installation, qualification, training and ongoing technical support, but that range was easy to miss.",
    parts: [
      {
        t: "Business challenge",
        p: "A list of individual products tells a customer what Neo Smart sells, not what it can take on. Customers could easily miss that one company could source the equipment, install it, qualify it, train the team and keep supporting it afterwards.",
      },
      {
        t: "Positioning decision",
        p: "\u201cFrom Vision to Operation\u201d expresses the full scope of support, from the idea for a laboratory to a working one. I guided and supervised the digital team to refresh the company\u2019s identity, and carried the brand strategy through the website, the catalogue, the way we present to clients and stakeholders, and the company\u2019s events.",
      },
      {
        t: "The site today",
        p: "The About page now states what the company is, shows its delivery process in five clear steps, from the first requirement to ongoing support, and the site offers one clear way to ask for a quote.",
      },
    ],
    visual: {
      title: "The About page: before and after",
      before: {
        base: "assets/img/neosmart-about-before",
        alt: "Archived Neo Smart company overview page, written as paragraphs only",
        t: "Before: paragraphs only",
        d: "A written company overview, from an archive of the old site. Range, industries and support were all in running text.",
      },
      after: {
        base: "assets/img/neosmart-about-after",
        alt: "Neo Smart About page today, with positioning and proof points",
        t: "After: positioning and proof, up front",
        d: "What the company is, what it supplies and the numbers behind it, in one clear opening.",
      },
      process: {
        base: "assets/img/neosmart-process-after",
        alt: "Neo Smart five-step delivery process from understanding the requirement to support",
        t: "The delivery process, made visible",
        d: "Understand, source and configure, deliver and install, commission and train, support and maintain. A customer can see what happens after they enquire.",
      },
      logos: [
        { base: "assets/img/neosmart-logo-before", alt: "Neo Smart earlier stacked flask logo", t: "Earlier logo", d: "A stacked flask emblem with the company name beneath." },
        { base: "assets/img/neosmart-logo-after", alt: "Neo Smart current horizontal logo with the tagline Accelerating Scientific Progress", t: "Logo today", d: "A horizontal wordmark with the line Accelerating Scientific Progress." },
      ],
    },
    delivered: {
      t: "What I delivered",
      items: [
        { t: "Website", d: "Messaging and page structure rebuilt around the company\u2019s full scope. The About page now shows how a project is delivered, and there is one clear route to requesting a quote." },
        { t: "One identity", d: "The website, catalogue, company profile and visiting cards now look and read as one company." },
        { t: "Company profile and catalogue", d: "The web catalogue and the way we present in front of clients and stakeholders, rebuilt from scratch around the same direction." },
        { t: "ArabLab", d: "I coordinated the whole ArabLab effort with the team and made the event a success. Neo Smart led the presentation, with VWR and IRIS fitting in as partners." },
      ],
    },
    gallery: [
      {
        base: "assets/img/neosmart-catalogue",
        alt: "Neo Smart catalogue cover",
        t: "Catalogue cover",
        d: "The same positioning carried into the catalogue.",
      },
      {
        base: "assets/img/neosmart-arablab",
        alt: "Neo Smart presentation at ArabLab",
        t: "ArabLab presentation",
        d: "Neo Smart led the presentation, with VWR and IRIS alongside as partners.",
      },
    ],
  },

  work: {
    title: "The journey so far",
    lede: "Start with where I am now, then see the whole story in the order it happened.",
    featured: [
      { id: "case", tag: "Neo Smart \u00b7 Now", t: "Running the operation as the business scales", d: "I run IT, administration, inventory and HR, and built the in-house system management reads the business from.", proof: "Live now: document and compliance tracking, with expired and upcoming renewals at the top.", cta: "Read the case" },
      { id: "positioning", tag: "Neo Smart \u00b7 Brand", t: "Making a whole company visible", d: "Website, catalogue, company profile and cards brought together as one identity, and ArabLab coordinated.", proof: "The About page now shows how a project is delivered, in five clear steps.", cta: "Read the case" },
    ],
    allLabel: "The full story, in order",
  },

  how: {
    label: "How I work",
    title: "Study first. Fix what matters. Show what changed.",
    lines: ["Study first.", "Fix what matters.", "Show what changed."],
    p: "This is how I would start with your business: look first, change what matters, and report back on what moved.",
    phases: [{ t: "Understand", span: 2 }, { t: "Build", span: 2 }, { t: "Prove", span: 1 }],
    steps: [
      { t: "Study", d: "How the work really runs today, before anything changes." },
      { t: "Find the gap", d: "What is missing in how the work moves." },
      { t: "Design with the team", d: "The fix is built with the people who will use it." },
      { t: "Release in phases", d: "One stage at a time." },
      { t: "Measure and report", d: "Tell management what changed." },
    ],
  },

  contactChoices: {
    label: "What is this about?",
    items: [
      { id: "hire", tab: "Hiring", t: "An operations role, or a conversation about how I could work with your leadership team.", cta: "Email about a role", subject: "A role at our company" },
      { id: "project", tab: "Project enquiries", t: "A website, brand or dashboard, alongside my full-time role. A few lines about what you need is plenty.", cta: "Email about a project", subject: "A website, brand or dashboard project" },
    ],
  },

  freelance: {
    title: "Projects I take on",
    lede: "Alongside my full-time role, I build websites, marketing and dashboards for businesses.",
    cards: [
      {
        tag: "Freelance \u00b7 Website",
        client: "Industrial company, Abu Dhabi",
        t: "A website built to turn enquiries into offers",
        d: "Customers send a part number, drawing or list and get an offer back with make, availability and delivery terms. I built the site and look after the marketing.",
        link: { href: "https://nawaglobalgtd.com/", label: "Visit the site" },
      },
      {
        tag: "Freelance \u00b7 Power BI",
        client: "Corporate company, Calicut, Kerala",
        t: "Sales performance, readable at a glance",
        d: "A Power BI dashboard that lets the team read sales performance at a glance, built for a corporate client in Calicut, Kerala.",
      },
    ],
  },

  jobs: [
    {
      t: "Operations Coordinator",
      win: "Building the operation, and the system behind it.",
      org: "Neo Smart Laboratory Equipment Trading L.L.C.",
      when: "Jul 2026 to now \u00b7 Ajman, on-site",
      li: [
        "IT and administration, and the company\u2019s in-house system from studying how work moves to phased rollout.",
        "Freight, sourcing, imports, customs and deliveries, plus document control, inventory and stock valuation.",
      ],
    },
    {
      t: "Software Project Manager",
      win: "Client projects, from first brief to handover.",
      org: "Olivo",
      when: "Apr to Jul 2026 \u00b7 Payyannur",
      li: [
        "Led project coordinators and developers, owning timelines and keeping delivery on track.",
        "Delivered projects for clients in Saudi Arabia, other Middle Eastern markets and India, from requirements through UAT to final handover.",
      ],
    },
    {
      t: "Technical Support Engineer",
      win: "From support lead to the reports management ran on.",
      org: "Brototype",
      when: "Jul 2023 to Jun 2025 \u00b7 Bengaluru, on-site",
      li: [
        "Led a support team and trained the juniors, with structured workflows, QA checks and reporting.",
        "Built the monthly management report, the financial analysis and the automations behind them.",
      ],
    },
    {
      t: "BIM Technical Consultant",
      win: "Client needs turned into interactive 3D.",
      org: "Freelance",
      when: "Sep 2024 to Feb 2025 \u00b7 Remote",
      li: [
        "Turned client needs into technical requirements and delivered interactive BIM and 3D visualisation through to final handover.",
      ],
    },
  ],

  profile: [
    { k: "Now", v: "Operations Coordinator at Neo Smart, Ajman" },
    { k: "Before", v: "Software project management, technical support and BIM consulting, in India and the UAE" },
    { k: "Focus", v: "Operations, process and the systems behind them" },
  ],
  about: {
    title: "Who you would be working with",
    paras: [
      "I am drawn to the space between teams, where work gets lost and nobody sees the full picture. That is where I do my best work.",
      "I started technical, with BIM, data science and then software delivery. That lets me talk to developers and still think like management.",
      "Today I am the Operations Coordinator at a laboratory equipment company in Ajman: IT, administration, inventory and HR, and working with management on how the business should run as it scales.",
    ],
    aimLabel: "My aim",
    aim: "To build and lead the operations of a growing business: its people, process and systems.",
    pathTitle: "Where I have worked",
  },
  roles: {
    title: "More from my roles",
    cards: [
      {
        tag: "Olivo \u00b7 2026",
        t: "Taking client projects from first brief to handover",
        client: "Olivo \u00b7 Apr to Jul 2026",
        d: "I sat with clients to understand what they really needed, recommended the solution that fitted, and ran the project through to a signed-off handover. The clients were in Saudi Arabia, other Middle Eastern markets and India.",
        points: [
          { t: "Requirements and approval", d: "Met clients, advised the best-fit solution, then wrote the meeting minutes and the business requirements document and got client approval before anything was built." },
          { t: "Brief to developers", d: "Explained what was needed to the developers, wrote the functional requirements document, split the work and assigned it with time frames." },
          { t: "No surprises", d: "Updated clients on progress, followed up with the developers, and told the client early about any blocker." },
          { t: "Quality and release", d: "UAT and QA, then release and handover." },
          { t: "App projects", d: "Checked the Figma designs against the functionality so nothing was missed on the functional side." },
        ],
      },
      {
        tag: "Brototype \u00b7 2023 to 2025",
        t: "Leading support, then the reports management ran on",
        client: "Brototype \u00b7 Jul 2023 to Jun 2025",
        d: "I led a support team and took on the reporting and financial analysis that management relied on.",
        points: [
          { t: "People and clients", d: "Led a support team, trained the juniors, and arranged meetings with clients and stakeholders to collect feedback and sort things out." },
          { t: "Monthly management report", d: "Met finance, operations and sales, collected their data and delivered the management report by month end." },
          { t: "Financial analysis", d: "Analysed every financial transaction and showed management where margin was made and where it could improve, with a proper expense flow." },
          { t: "At a glance", d: "Built a short Google Sheets dashboard so management could see it easily." },
          { t: "Automation", d: "Replaced manual data entry and weekly reports with automation, set up an automatic alert when a limit is hit, and wrote a script that pulls only the needed data from scattered files and folders into a clean financial sheet. Repetitive manual work fell by about 40%." },
        ],
      },
      {
        tag: "Freelance \u00b7 2024 to 2025",
        t: "Advising clients, then delivering their ideas as interactive 3D",
        client: "BIM Technical Consultant \u00b7 Sep 2024 to Feb 2025",
        d: "As an independent BIM consultant I worked directly with clients, turned what they needed into clear technical requirements, and delivered interactive 3D visualisation through to final handover.",
        points: [
          { t: "The brief", d: "Worked directly with the client to understand what they needed." },
          { t: "Requirements", d: "Turned that need into clear technical requirements." },
          { t: "The build", d: "Delivered interactive BIM and 3D visualisation." },
          { t: "Handover", d: "Stayed on the project through to final handover." },
        ],
      },
    ],
  },

  /* Short lines shown on the project tiles. Facts only, taken from the detail text. */
  tileShort: {
    case: "IT, administration, inventory and HR, with the in-house system behind them.",
    positioning: "Website, catalogue, cards and events brought together as one brand.",
    delivery: "First meeting to approved requirements, UAT, QA and handover.",
    support: "Led the team, then built the management report, analysis and automation.",
    bim: "Client needs turned into requirements, then into interactive 3D.",
    catalogue: "A quote-first site: customers send a part number, drawing or list and get an offer back.",
    dashboard: "A Power BI view that lets a corporate team read sales performance at a glance.",
  },
  education: [
    { t: "Diploma in Data Science", org: "Techolas Technologies, Calicut", when: "2022 to 2023" },
    { t: "BA, English Language and Literature", org: "Jamia Hamdard University, Delhi", when: "2019 to 2022" },
  ],
  contact: {
    title: "Let\u2019s talk.",
    body: "Choose the one that fits. The email opens with a few questions to answer, and I reply personally.",
    paths: [
      { id: "hire", cta: "Discuss a role", subject: "A role at our company", body: "Hi Mohammed,\n\nI would like to discuss a role with you.\n\n1. What does your business do?\n\n2. Where is operations stretched?\n\n3. What do you want from the role?\n\nBest way to reach me:\n" },
      { id: "project", cta: "Discuss a project", subject: "A website, brand or dashboard project", body: "Hi Mohammed,\n\nI would like to discuss a project with you.\n\n1. What do you need built?\n\n2. Who is it for?\n\n3. When do you need it?\n\nBest way to reach me:\n" },
    ],
  },
};
