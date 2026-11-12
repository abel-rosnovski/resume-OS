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

// The 3D avatar: one image per scroll stop, dissolving as you scroll. Pure-white backgrounds.
// tx = where the figure's centre sits across the screen (0–1); fx = the figure's centre within the image (0–1).
// Anchor each image with top or bottom; h is its height.
export const avatar = {
  poses: [
    { key: "front", src: "/media/avatar-front.jpg", tx: 0.48, fx: 0.5, bottom: "-1svh", h: "min(100svh, 54vw)" }, // hero
    { key: "profile", src: "/media/avatar-profile.jpg", tx: 0.79, fx: 0.52, top: "9svh", h: "100svh" }, // 01 brief
    { key: "back", src: "/media/avatar-back.jpg", tx: 0.79, fx: 0.505, top: "9svh", h: "100svh" }, // 02 build
    { key: "full", src: "/media/avatar-full.jpg", tx: 0.79, fx: 0.5, top: "9svh", h: "90svh" }, // 03 result
  ],
  width: 1672,
  height: 941,
};

export const heroStats = {
  kicker: "At Elevato",
  items: [
    { value: "−60%", label: "CAC in month one" },
    { value: "3×", label: "Sales, quarter on quarter" },
    { value: "+329%", label: "Traffic from AI search" },
  ],
};

export const elevato = {
  kicker: "Elevato — D2C footwear",
  panels: [
    {
      n: "01",
      tab: "Brief",
      title: ["One growth hire.", "Every lever."],
      body: "I joined Elevato, a D2C brand of height-increasing shoes, as its Growth Hacker for the relaunch. I owned acquisition, tracking, content and automation end to end.",
    },
    {
      n: "02",
      tab: "Build",
      title: ["I built", "the whole machine."],
      list: [
        "Website rebuilt from scratch on Claude's free Sonnet model",
        "SEO, GEO and agent-ready pages for LLM traffic",
        "GA4 tracking rebuilt end to end",
        "Full social media and content strategy",
        "Automated email outreach and founder content",
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

export const systems = {
  title: "Systems I've built",
  intro: "Automation, data and tools: what I build when a process should run itself.",
  items: [
    {
      n: "01",
      title: "AI content agent",
      client: "B2B tech client",
      tags: "Automation",
      outcome: "Turns raw notes into LinkedIn posts, carousels and articles that stay technically accurate.",
    },
    {
      n: "02",
      title: "Lead-scoring engine",
      client: "Drone startup · Python",
      tags: "Data · Automation",
      outcome: "Scores every lead 1–10 for fit from its website. A cleaner outreach list and hours of cleaning saved.",
    },
    {
      n: "03",
      title: "Self-updating ops dashboard",
      client: "GCC consultancy · Power BI",
      tags: "Data",
      outcome: "Client numbers refresh themselves before every weekly meeting. It surfaced bottlenecks the team then fixed.",
    },
    {
      n: "04",
      title: "Founder content workflow",
      client: "Founder personal brand · n8n",
      tags: "Automation · Content",
      outcome: "A weekly writing task cut down to minutes.",
    },
    {
      n: "05",
      title: "Startup culture scorer",
      client: "Own build",
      tags: "Tools · Data",
      outcome: "Pulls workplace reviews from several sources and scores them into one report.",
    },
    {
      n: "06",
      title: "AI Job Scout",
      client: "Own build",
      tags: "Automation · In progress",
      outcome: "Currently building.",
    },
  ],
};

// Creative made for Elevato. Add more by dropping images into /public/images and listing them here.
export const campaign = {
  title: "The campaign",
  intro: "Creative I made for Elevato's relaunch.",
  items: [
    { src: "/images/elevato-poster-1.jpg", w: 1122, h: 1402, alt: "Launch poster: why get regular shoes when you can get shoes that make you taller?", caption: "Launch poster" },
    { src: "/images/elevato-subway.jpg", w: 1254, h: 1254, alt: "Subway ad concept: a commuter reads a newspaper headlined Shoes to make you taller?", caption: "Subway ad concept" },
    { src: "/images/elevato-poster-2.jpg", w: 1122, h: 1402, alt: "Product drop poster: first collection after relaunch just dropped", caption: "Product drop poster" },
  ],
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

// The menu lists these, after "Top".
export const sections = [
  { id: "top", label: "Top" },
  { id: "elevato", label: "Elevato" },
  { id: "campaign", label: "Campaign" },
  { id: "systems", label: "Systems" },
  { id: "index", label: "Index" },
  { id: "contact", label: "Contact" },
];
