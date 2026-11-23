export const profile = {
  name: "Biswajit Goswami",
  location: "Bengaluru, India",
  email: "Biswag690@gmail.com",
  phone: "+91 90645 09481",
  phoneHref: "tel:+919064509481",
  resume: "/Biswajit-Goswami-Resume.pdf",
  github: "https://github.com/Biswag-34",
  linkedin: "https://www.linkedin.com/in/biswajit-goswami-8233632a7",
};

export const experience = [
  {
    company: "Nayapada’s Nstride",
    sector: "Ecommerce & digital growth",
    title: "Lead Full-Stack Engineer",
    period: "2025 – Present",
    arrangement: "Freelance contract",
    accent: "lime",
    result: { value: "+30%", label: "Storefront conversion in three months" },
    projectId: "nstride-education",
    details: [
      { title: "Three web launches", description: "Launched the original custom Shopify storefront, the educational portal at nstride.in and the ShopDeck store at nstride.shop. Manage releases and site reliability." },
      { title: "Conversion optimisation", description: "Improved storefront conversion through GA4 conversion tracking, technical SEO and performance audits using Lighthouse and Google Search Console." },
      { title: "Sales and acquisition", description: "Automate sales and enquiries with the WhatsApp Business API, manage Amazon Seller Central and run Meta and Google Ads campaigns." },
    ],
    tags: ["Shopify Liquid", "ShopDeck", "GA4", "WhatsApp Business API", "Paid acquisition"],
  },
  {
    company: "Aaramv Reality",
    sector: "Real estate lead generation",
    title: "Web & App Developer",
    period: "2026 – Present",
    arrangement: "Freelance contract",
    accent: "violet",
    result: { value: "3", label: "Campaign microsites alongside the main platform" },
    projectId: "aaramv",
    details: [
      { title: "Property platform", description: "Built and deployed the property-listing platform and buyer-enquiry pages for Poulomi Florique, Nikoo 8 and Nikoo 9 Homes." },
      { title: "Campaign lead capture", description: "Designed the campaign pages to capture enquiries from paid ad traffic." },
      { title: "Sales CRM in development", description: "Developing an internal full-stack CRM for sales pipelines, automated lead routing and buyer follow-ups." },
    ],
    tags: ["Property listings", "Campaign landing pages", "Lead capture", "CRM"],
  },
  {
    company: "Antharaganga Rural Hospital",
    sector: "Healthcare & donor outreach",
    title: "Web Developer & Digital Outreach Specialist",
    period: "2026 – Present",
    arrangement: "Freelance",
    accent: "mint",
    result: { value: "2", label: "Web properties for patients and donors" },
    projectId: "hospital",
    details: [
      { title: "Hospital website and donations", description: "Built a responsive Next.js hospital website and a donor contribution portal with custom interface animations." },
      { title: "Deployment and donor outreach", description: "Deployed both on Vercel and manage digital outreach campaigns to attract donors." },
    ],
    tags: ["Next.js", "Vercel", "UI animation", "Digital outreach"],
  },
  {
    company: "Venlakh Restocare",
    sector: "Brand website & social media",
    title: "Brand Website Developer & Social Media Manager",
    period: "2025 – Present",
    arrangement: "Freelance",
    accent: "rose",
    result: { value: "Web + social", label: "Brand site and content production" },
    projectId: "venlakh",
    details: [
      { title: "Brand website", description: "Developed, deployed and maintain the responsive brand website, with a focus on performance and search visibility." },
      { title: "Social media production", description: "Plan and produce content across social media channels and connect social traffic with the brand website." },
    ],
    tags: ["Web development", "Content production", "Social media", "SEO"],
  },
  {
    company: "Ringer Life Science Pvt Ltd",
    sector: "Marketplace expansion",
    title: "Web Developer & Ecommerce Marketplace Specialist",
    period: "Aug 2025 – Dec 2025",
    arrangement: "Contract",
    accent: "mint",
    result: { value: "4+", label: "Marketplace channels onboarded" },
    projectId: "ringer",
    details: [
      { title: "Educational portal", description: "Built and maintained an educational brand portal and website." },
      { title: "Marketplace onboarding", description: "Onboarded the catalogue to Amazon, Flipkart, Tata 1mg, PharmaGuardian and other marketplaces to expand direct-to-consumer reach." },
    ],
    tags: ["Brand portal", "Amazon", "Quick commerce", "Catalogue onboarding"],
  },
  {
    company: "Legacy Yards",
    sector: "Property search & lead capture",
    title: "Full-Stack Developer",
    period: "2024 – 2025",
    arrangement: "Contract",
    accent: "violet",
    result: { value: "200+", label: "Qualified buyer enquiries per month" },
    projectId: "legacy-yards",
    details: [
      { title: "Property search platform", description: "Built a server-rendered real estate search platform with Next.js, React, Node.js and MongoDB, using Redux Toolkit for state and Cloudinary for media." },
      { title: "Booking and CRM integrations", description: "Integrated REST API-backed appointment booking, CRM webhooks and filters for property type and location." },
      { title: "Mobile performance and analytics", description: "Reduced mobile load times through lazy loading and caching. Built dashboards to track funnel conversions." },
    ],
    tags: ["Next.js SSR", "Node.js", "MongoDB", "Cloudinary", "CRM webhooks"],
  },
  {
    company: "PRISM Lead India",
    sector: "CRM & API integrations",
    title: "Full-Stack Developer",
    period: "2022 – 2024",
    arrangement: "Junior Web Developer (2022–2023) · Web Developer (2023–2024)",
    accent: "rose",
    result: { value: "15+", label: "Third-party APIs integrated" },
    projectId: null,
    details: [
      { title: "Production applications", description: "Led development of 4+ production web applications using React, Next.js, Node.js, Express, Angular, Python, Prisma and MongoDB." },
      { title: "Reusable UI library", description: "Built a reusable UI component library with Redux and Tailwind CSS." },
      { title: "API integrations and tracking", description: "Integrated CRM, payment and ad-attribution APIs, implemented pixels and validated REST endpoints with Postman and Swagger." },
    ],
    tags: ["React", "Node.js", "Python", "Prisma", "REST APIs"],
  },
] as const;

export const categories = ["Ecommerce", "Real estate", "Healthcare", "Brand & content"] as const;

export type Project = {
  id: string;
  name: string;
  client: string;
  category: (typeof categories)[number];
  summary: string;
  details: string;
  tags: string[];
  accent: string;
  href?: string;
  image?: string;
  status?: "Original build" | "In development";
};

export const projects: Project[] = [
  {
    id: "nstride-education", name: "Nstride educational portal", client: "Nayapada’s Nstride",
    category: "Ecommerce", accent: "violet", href: "https://www.nstride.in/",
    image: "/images/projects/nstride-brand.webp",
    summary: "The current educational property for the Nstride brand.",
    details: "Launched the educational portal as one of three Nstride web properties and manage ongoing releases and site reliability.",
    tags: ["Educational portal", "Web operations"],
  },
  {
    id: "hospital", name: "Antharaganga Rural Hospital", client: "Antharaganga Rural Hospital",
    category: "Healthcare", accent: "mint", href: "https://www.antharagangaruralhospital.org/",
    image: "/images/projects/antharaganga-rural-hospital.webp",
    summary: "A responsive hospital website with custom interface animations.",
    details: "Built the public-facing hospital website in Next.js and deployed it on Vercel. The site is part of a web and donor outreach programme.",
    tags: ["Next.js", "Vercel", "UI animation"],
  },
  {
    id: "nstride-store", name: "Nstride Shopify storefront", client: "Nayapada’s Nstride",
    category: "Ecommerce", accent: "lime", image: "/images/web2.png", status: "Original build",
    summary: "A custom Liquid storefront that lifted conversion by 30% in three months.",
    details: "Built the original store with custom Shopify Liquid and metafields. Used GA4 conversion tracking, Search Console and Lighthouse audits to improve the purchase journey.",
    tags: ["Shopify Liquid", "Metafields", "GA4", "Technical SEO"],
  },
  {
    id: "legacy-yards", name: "Legacy Yards", client: "Legacy Yards",
    category: "Real estate", accent: "violet", image: "/images/web1.png", href: "https://www.legacyyards.homes/",
    summary: "A server-rendered property search and booking platform generating 200+ qualified enquiries a month.",
    details: "Built location and property-type filters, REST-backed appointment booking, CRM webhooks and analytics dashboards. Used caching and lazy-loaded media to cut mobile load time.",
    tags: ["Next.js SSR", "Node.js", "MongoDB", "Cloudinary"],
  },
  {
    id: "aaramv", name: "Aaramv Reality", client: "Aaramv Reality",
    category: "Real estate", accent: "rose", href: "https://www.aaramvreality.com/",
    image: "/images/projects/aaramv-realty.webp",
    summary: "A property-listing platform built to turn paid traffic into buyer enquiries.",
    details: "Built and deployed the main property platform and its lead-capture experience alongside three dedicated campaign microsites.",
    tags: ["Property listings", "Lead capture", "Paid traffic"],
  },
  {
    id: "ringer", name: "Ringer Life Science", client: "Ringer Life Science Pvt Ltd",
    category: "Brand & content", accent: "mint", href: "https://ringer.co.in/",
    image: "/images/projects/ringer-life-science.webp",
    summary: "An educational brand portal paired with marketplace expansion.",
    details: "Built and maintained the brand site and helped onboard its product catalogue to Amazon, Flipkart, Tata 1mg and PharmaGuardian.",
    tags: ["Brand portal", "Amazon", "Quick commerce"],
  },
  {
    id: "venlakh", name: "Venlakh Restocare", client: "Venlakh Restocare",
    category: "Brand & content", accent: "rose", href: "https://www.venlakhrestocareplus.com/",
    image: "/images/projects/venlakh-restocare-plus.webp",
    summary: "A responsive brand site designed for search visibility and social traffic.",
    details: "Developed, deployed and maintain the brand website, and plan and produce content across social media channels.",
    tags: ["Brand website", "Social media", "SEO"],
  },
  {
    id: "nstride-shopdeck", name: "Nstride ShopDeck store", client: "Nayapada’s Nstride",
    category: "Ecommerce", accent: "lime", href: "https://nstride.shop/",
    image: "/images/projects/nstride-shop.webp",
    summary: "A ShopDeck storefront for Nstride’s current ecommerce operation.",
    details: "Set up and launched the ShopDeck store as part of the brand’s ecommerce ecosystem, which also includes WhatsApp sales and enquiry automation.",
    tags: ["ShopDeck", "Ecommerce", "WhatsApp Business API"],
  },
  {
    id: "poulomi", name: "Poulomi Florique", client: "Aaramv Reality",
    category: "Real estate", accent: "mint", href: "https://www.poulomiflorique.co.in/",
    image: "/images/projects/poulomi-florique.webp",
    summary: "A dedicated campaign page for Poulomi Florique buyer enquiries.",
    details: "Built and deployed the project-specific microsite to give paid ad traffic a focused destination and capture buyer enquiries.",
    tags: ["Microsite", "Lead capture", "Paid traffic"],
  },
  {
    id: "nikoo-8", name: "Nikoo 8", client: "Aaramv Reality",
    category: "Real estate", accent: "violet", href: "https://www.nikoo8.co.in/",
    image: "/images/projects/nikoo-8.webp",
    summary: "A buyer-enquiry landing page for the Nikoo 8 campaign.",
    details: "Developed the campaign microsite for Aaramv Reality as part of its paid real estate lead-generation work.",
    tags: ["Microsite", "Lead capture", "Paid traffic"],
  },
  {
    id: "nikoo-9", name: "Nikoo 9 Homes", client: "Aaramv Reality",
    category: "Real estate", accent: "rose", href: "https://www.nikoo9homes.com/",
    image: "/images/projects/nikoo-9-homes.webp",
    summary: "A project microsite for the Nikoo 9 Homes campaign.",
    details: "Built and deployed the enquiry page that supports paid traffic for Nikoo 9 Homes.",
    tags: ["Microsite", "Lead capture", "Paid traffic"],
  },
  {
    id: "donation-portal", name: "Hospital donation portal", client: "Antharaganga Rural Hospital",
    category: "Healthcare", accent: "mint",
    summary: "A dedicated contribution portal supporting the hospital’s donor outreach.",
    details: "Built the Next.js contribution experience and deployed it on Vercel alongside the hospital’s public-facing website.",
    tags: ["Next.js", "Vercel", "Donor outreach"],
  },
  {
    id: "aaramv-crm", name: "Aaramv sales CRM", client: "Aaramv Reality",
    category: "Real estate", accent: "lime", status: "In development",
    summary: "An internal CRM for property sales pipelines, lead routing and follow-ups.",
    details: "Designing a custom full-stack CRM to track the sales pipeline and automate lead assignment and buyer follow-ups.",
    tags: ["CRM", "Lead routing", "Workflow automation"],
  },
];

export const completedProjects = projects.filter((project) => project.status !== "In development").length;

export const skills = {
  Engineering: [
    { title: "Frontend & accessibility", tools: "TypeScript · React · Next.js (SSR/SSG) · JavaScript · Redux Toolkit · Context API · Tailwind CSS · HTML5 · CSS3 · Responsive design · UI animation · WCAG" },
    { title: "Backend, databases & APIs", tools: "Node.js · Express.js · Python · MongoDB · Prisma ORM · REST APIs · Webhooks · Postman · Swagger" },
    { title: "Cloud, deployment & media", tools: "AWS · Docker · Vercel · Netlify · Firebase · Cloudinary · Bunny.net · Hostinger · Git · GitHub" },
    { title: "Chatbots & automation", tools: "AI chatbots · WhatsApp Business API · Lead routing · CRM · Google Workspace · Payment and ad-tracking APIs" },
  ],
  Growth: [
    { title: "Ecommerce & marketplaces", tools: "Shopify Liquid · Metafields · ShopDeck · Amazon Seller Central · Quick-commerce onboarding" },
    { title: "Performance & technical SEO", tools: "Core Web Vitals (LCP, CLS, INP) · Lighthouse · Chrome DevTools · Caching · Lazy loading · CDNs · Schema markup · Crawling and indexing" },
    { title: "Analytics & measurement", tools: "GA4 · Google Tag Manager · Search Console · Hotjar · Conversion dashboards · Ahrefs · Semrush · Screaming Frog" },
    { title: "Paid acquisition & content", tools: "Google Ads · Meta Ads Manager · Landing page optimization · Social media strategy · Content production" },
  ],
};
