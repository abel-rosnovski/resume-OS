// Every word on the site lives here. Edit this file to change the copy.

export const person = {
  name: "Sourav B",
  wordmark: "SOURAV",
  email: "13souravb@gmail.com",
  linkedin: "https://www.linkedin.com/in/sourav-b-rosnovski/",
  // Drop your PDF into /public (e.g. /public/Sourav-B-CV.pdf) and set the path here.
  // While this is null, every "CV" link is hidden.
  cv: null,
  pillars: "Growth — Data — Automation — Product",
  pitch: "I build growth engines from zero.",
  pitchDetail: "Acquisition · Tracking · Automation",
  status: "Open to early-stage growth roles",
};

// The 3D avatar. Leave a value null and a soft placeholder shows instead.
// video: one continuous 10 s orbit, 24 fps, 1280×720, H.264, plain #f7f6f3 studio backdrop.
export const avatar = {
  video: null, // e.g. "/media/avatar-orbit.mp4"
  frames: 241,
  fps: 24,
  stillClose: null, // phones and reduced motion, e.g. "/media/avatar-close.jpg"
  stillFull: null, // e.g. "/media/avatar-full.jpg"
};

export const heroMetric = {
  value: "−60%",
  label: "CAC in month one — Elevato",
};

export const elevato = {
  kicker: "Elevato — D2C footwear",
  panels: [
    {
      n: "01",
      tab: "Brief",
      title: ["A shoe brand.", "No growth engine."],
      body: "Elevato sells shoes that add height. It was relaunching with no site worth ranking, no reliable tracking and no funnel. I was brought in to build growth from zero.",
    },
    {
      n: "02",
      tab: "Build",
      title: ["I built", "the whole machine."],
      list: [
        "A new website, built with Claude",
        "SEO, GEO and agent-ready pages",
        "GA4 tracking rebuilt end to end",
        "Automated email outreach in Brevo",
        "All social, content and launch creative",
      ],
    },
    {
      n: "03",
      tab: "Result",
      hero: { value: "−60%", label: "Customer acquisition cost, in the first month." },
      stats: [
        { value: "3×", label: "Sales, quarter on quarter" },
        { value: "+329%", label: "Traffic from AI search" },
        { value: "2", label: "International white-label requests" },
      ],
    },
  ],
};

export const toolkit = {
  intro: "Six things I've built beyond Elevato.",
  items: [
    {
      n: "01",
      art: "n8n",
      title: "AI content agent",
      client: "B2B tech client",
      tags: "Automation",
      outcome: "Turns raw notes into LinkedIn posts, carousels and articles that stay technically accurate.",
    },
    {
      n: "02",
      art: "/10",
      title: "Lead-scoring engine",
      client: "Drone startup · Python",
      tags: "Data · Automation",
      outcome: "Scores every lead 1–10 for fit from its website. A cleaner outreach list and hours of cleaning saved.",
    },
    {
      n: "03",
      art: "BI",
      title: "Self-updating ops dashboard",
      client: "GCC consultancy · Power BI",
      tags: "Data",
      outcome: "Client numbers refresh themselves before every weekly meeting. It surfaced bottlenecks the team then fixed.",
    },
    {
      n: "04",
      art: "Aa",
      title: "Founder content workflow",
      client: "Founder personal brand · n8n",
      tags: "Automation · Content",
      outcome: "A weekly writing task cut down to minutes.",
    },
    {
      n: "05",
      image: "/images/elevato-poster-1.jpg",
      imageAlt: "Elevato launch poster: why get regular shoes when you can get shoes that make you taller?",
      title: "Elevato launch creative",
      client: "Elevato · D2C footwear",
      tags: "Content · Growth",
      outcome: "Launch poster, product-drop poster and a subway ad concept.",
    },
    {
      n: "06",
      art: "Rank",
      title: "Startup culture scorer",
      client: "Own build",
      tags: "Tools · Data",
      outcome: "Pulls workplace reviews from several sources and scores them into one report.",
    },
  ],
  alsoBuilding: "AI Job Scout — in progress",
};

export const index = {
  experience: [
    { role: "Growth Hacker", org: "Elevato", kind: "D2C e-commerce", note: "Built the growth engine: −60% CAC in month one, 3× sales in a quarter." },
    { role: "Technical Content Writer & Researcher", org: "Drone Script", kind: "B2B marketing agency", note: "Built the lead-scoring engine and an AI content agent for a client." },
    { role: "Consulting Intern", org: "Zinnov", kind: "GCC consultancy", note: "Automated the weekly operations dashboard in Power BI." },
    { role: "Market Research Intern", org: "Arthashastra Intelligence", kind: "B2B consultancy", note: "Market studies across India, UAE, Singapore and the US, including an investigation of India's SEZs." },
    { role: "Pitch Deck Creator", org: "Independent", kind: "Freelance", note: "Investment pitch decks for founders." },
  ],
  education: [
    { degree: "M.S. Data Science & Management", school: "IIT Indore × IIM Indore", note: "Joint program" },
    { degree: "M.Sc. Applied Physics", school: "Amity University, Mumbai" },
    { degree: "B.Sc. Physics", school: "University of Calicut" },
  ],
  courses: [
    "Scaling Operations — Northwestern",
    "Management Consulting — Emory",
    "International B2B Marketing — Yonsei",
    "Sustainability Consulting — UIUC",
  ],
  stack: ["GA4", "SEO / GEO", "n8n", "Python", "Power BI", "Brevo", "Claude & LLM APIs"],
};

export const notes = [
  "I've been asked to work less at every job I've had.",
  "I grew up around entrepreneurs, so I think like a founder by default.",
  "I want to be the person you bring in when the stakes are high.",
];

export const footer = {
  manifesto: ["I find it.", "I measure it.", "I automate it.", "I ship it."],
  writing: [
    { label: "The Godfather's opening scene", href: "https://medium.com/@abelinaempire/a-six-minute-textbook-analyzing-the-iconic-opening-scene-of-the-godfather-f55a5dc36d46" },
    { label: "The eyes I borrow from cinema", href: "https://medium.com/@abelinaempire/the-eyes-i-borrow-from-cinema-8bd8c6b77b59" },
    { label: "LinkedIn: data visualisation", href: "https://lnkd.in/p/gsmQXC34" },
    { label: "LinkedIn: growth", href: "https://lnkd.in/p/gFecPbdk" },
  ],
};

// Order matters: the Space key steps through these, and the menu lists the last four.
export const sections = [
  { id: "top", label: "Top" },
  { id: "elevato", label: "Elevato" },
  { id: "toolkit", label: "Toolkit" },
  { id: "index", label: "Index" },
  { id: "contact", label: "Contact" },
];
