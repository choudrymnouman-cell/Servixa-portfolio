import type { ServiceDetail } from "./service-data";

export const marketingServiceDetails: ServiceDetail[] = [
  {
    slug: "google-ads-ppc",
    title: "Google Ads & PPC",
    eyebrow: "Paid search built around measurable growth",
    summary: "Google Ads campaigns planned around qualified traffic, conversion tracking and practical return on ad spend.",
    description: "Servixa helps businesses plan, launch and improve Google Ads campaigns with clear targeting, stronger landing-page alignment and reliable conversion measurement. We focus on the business outcome behind the clicks—not vanity traffic.",
    provides: ["Google Search campaign setup", "Keyword and competitor research", "Ad copy and campaign structure", "Conversion tracking and analytics", "Landing-page recommendations", "Ongoing bid, budget and search-term optimization"],
    outcomes: ["More qualified traffic", "Clearer cost-per-lead or acquisition visibility", "Better use of advertising budget", "Campaigns that improve with real performance data"],
    approach: ["Define the conversion goal and target customer", "Research demand and keyword intent", "Build focused campaign groups", "Connect accurate conversion tracking", "Launch with controlled budgets", "Optimize using search terms and conversion data"],
    technologies: ["Google Ads", "Google Analytics", "Google Tag Manager", "Search campaigns", "Conversion tracking", "Landing pages"],
    idealFor: ["Local businesses", "Service companies", "E-commerce", "Lead generation", "Businesses entering new markets"]
  },
  {
    slug: "seo-search-growth",
    title: "SEO & Search Growth",
    eyebrow: "Build long-term visibility in search",
    summary: "Technical, on-page, local and content-led SEO designed to improve relevance, discoverability and organic growth.",
    description: "Servixa improves the technical and content foundations that help search engines understand and trust a website. We combine technical SEO, content structure, local signals, performance improvements and practical keyword strategy around how customers actually search.",
    provides: ["Technical SEO audits", "On-page optimization", "Keyword and search-intent research", "Local SEO improvements", "Content structure and internal linking", "Performance and indexability improvements"],
    outcomes: ["Stronger search visibility", "More relevant organic traffic", "Better local discovery", "A healthier technical foundation for long-term growth"],
    approach: ["Audit technical and content foundations", "Identify high-value search opportunities", "Fix crawl, index and performance issues", "Improve pages around user intent", "Strengthen internal linking and local signals", "Measure rankings, traffic and conversions over time"],
    technologies: ["Google Search Console", "Google Analytics", "Schema.org", "Core Web Vitals", "Keyword research", "Technical SEO"],
    idealFor: ["Business websites", "Local services", "E-commerce", "Content-led brands", "Companies investing in long-term search growth"]
  },
  {
    slug: "meta-ads-social-marketing",
    title: "Meta Ads & Social Marketing",
    eyebrow: "Reach the right audience across Facebook and Instagram",
    summary: "Meta advertising and social campaign support built around awareness, leads, sales and measurable customer actions.",
    description: "Servixa plans Meta campaigns around the audience, offer and conversion path—not just boosted posts. We support campaign structure, targeting, creative direction, tracking and optimization for Facebook and Instagram.",
    provides: ["Meta Ads campaign setup", "Audience and targeting strategy", "Creative and message direction", "Lead and conversion campaign structure", "Pixel and event tracking guidance", "Performance review and optimization"],
    outcomes: ["More focused audience reach", "Stronger lead or sales campaigns", "Clearer campaign performance data", "Better alignment between creative, offer and landing experience"],
    approach: ["Define objective and customer profile", "Plan audiences and creative angles", "Connect tracking", "Launch test campaigns", "Compare creative and audience performance", "Scale the combinations that perform best"],
    technologies: ["Meta Ads Manager", "Facebook", "Instagram", "Meta Pixel", "Events", "Lead campaigns"],
    idealFor: ["Consumer brands", "Local businesses", "E-commerce", "Lead generation", "New product launches"]
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    eyebrow: "One practical plan across your digital channels",
    summary: "Integrated digital marketing that connects search, paid media, content, social and conversion journeys around business goals.",
    description: "Servixa helps clients build a clearer digital growth plan across the channels that matter most. We connect website experience, search visibility, paid campaigns, content and measurement so marketing activity supports a consistent customer journey.",
    provides: ["Digital growth strategy", "Campaign and channel planning", "Content and social direction", "SEO and paid search coordination", "Landing-page and conversion improvements", "Analytics and performance reporting"],
    outcomes: ["A clearer digital growth roadmap", "More consistent messaging across channels", "Better conversion paths", "Marketing decisions supported by useful performance data"],
    approach: ["Understand the business, offer and audience", "Audit current channels and conversion path", "Prioritize the highest-value opportunities", "Launch focused initiatives", "Measure real customer actions", "Refine channel mix and investment over time"],
    technologies: ["Google Ads", "Meta Ads", "Google Analytics", "Search Console", "SEO", "Content marketing"],
    idealFor: ["Growing businesses", "Startups", "Local brands", "E-commerce", "Companies needing one coordinated digital plan"]
  }
];

export const marketingServiceBySlug = Object.fromEntries(marketingServiceDetails.map((service) => [service.slug, service])) as Record<string, ServiceDetail>;
