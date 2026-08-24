export type ServiceDetail = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  description: string;
  provides: string[];
  outcomes: string[];
  approach: string[];
  technologies: string[];
  idealFor: string[];
};

export const serviceDetails: ServiceDetail[] = [
  {
    slug: "generative-ai-automation",
    title: "Generative AI & Automation",
    eyebrow: "AI that creates measurable business value",
    summary: "Practical AI assistants, copilots and automation that reduce repetitive work and help teams move faster.",
    description: "Servixa designs AI solutions around real workflows, not technology for its own sake. We help clients identify high-value use cases, connect trusted business data, automate repetitive processes and deploy secure AI experiences that are easy for teams to adopt.",
    provides: ["Custom AI assistants and copilots", "Workflow and document automation", "RAG and knowledge-base solutions", "AI-enabled customer support", "LLM integrations and API orchestration", "Model evaluation, guardrails and monitoring"],
    outcomes: ["Faster decisions and response times", "Lower manual workload", "More consistent customer and employee experiences", "AI systems designed with security and governance in mind"],
    approach: ["Discover the workflows with the strongest ROI", "Prototype quickly using representative business data", "Validate accuracy, safety and usability", "Integrate with existing systems", "Monitor and improve after launch"],
    technologies: ["OpenAI", "Azure AI", "Python", "FastAPI", "Next.js", "PostgreSQL", "Vector databases"],
    idealFor: ["Operations teams", "Customer support", "Knowledge-heavy businesses", "SaaS products", "Enterprise automation"]
  },
  {
    slug: "dynamics-365-erp-crm",
    title: "Dynamics 365 ERP & CRM",
    eyebrow: "Connected operations, finance and customer experiences",
    summary: "Dynamics 365 implementations and improvements that connect sales, service, operations and finance around one reliable platform.",
    description: "We help organisations configure and extend Microsoft Dynamics 365 around the way their teams actually work. The goal is cleaner processes, better visibility and a platform that supports growth instead of creating more complexity.",
    provides: ["Dynamics 365 implementation and configuration", "CRM and sales process design", "Finance and operations workflows", "Custom integrations and extensions", "Data migration and cleanup", "Reporting, dashboards and user training"],
    outcomes: ["A single source of operational truth", "More efficient sales and service processes", "Better reporting and forecasting", "A platform that can evolve with the organisation"],
    approach: ["Map current processes and pain points", "Design a practical target architecture", "Configure and integrate in phases", "Migrate and validate data", "Train users and support adoption"],
    technologies: ["Microsoft Dynamics 365", "Power Platform", "Dataverse", "Power BI", "Azure", ".NET"],
    idealFor: ["Growing companies", "Sales organisations", "Service businesses", "Operations-heavy teams", "Enterprises modernising legacy systems"]
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    eyebrow: "Mobile products people enjoy using",
    summary: "Secure, fast and polished Android, iOS and cross-platform applications designed around real user needs.",
    description: "Servixa takes mobile products from idea to production with product strategy, UX, engineering, backend integration, testing and release support. We focus on performance, reliability, accessibility and a user experience strong enough to support long-term adoption.",
    provides: ["Android and iOS application development", "Cross-platform Flutter applications", "Product strategy and mobile UX", "Backend and API integration", "Push notifications and analytics", "App Store and Play Store release support"],
    outcomes: ["Fast and intuitive user journeys", "Stable applications built for scale", "Consistent experiences across devices", "Maintainable code that supports future features"],
    approach: ["Clarify product goals and target users", "Prototype key journeys", "Build in testable releases", "Test across devices and edge cases", "Launch, monitor and iterate"],
    technologies: ["Flutter", "Dart", "Firebase", "Supabase", "REST APIs", "GraphQL", "Node.js", "FastAPI"],
    idealFor: ["Startups", "Consumer apps", "Internal business apps", "Marketplaces", "Subscription products"]
  },
  {
    slug: "it-staff-augmentation",
    title: "IT Staff Augmentation",
    eyebrow: "The right specialists when your team needs them",
    summary: "Flexible access to engineers, designers and technology professionals who can strengthen delivery without slowing your roadmap.",
    description: "Servixa helps clients extend their teams with carefully matched technology specialists. We focus on practical fit, communication, delivery discipline and clear accountability so augmented talent feels like part of the client team rather than an external handoff.",
    provides: ["Dedicated software engineers", "Mobile and web developers", "Cloud and DevOps specialists", "QA and test engineers", "UI/UX designers", "Technical project support"],
    outcomes: ["Faster access to specialist skills", "Flexible team capacity", "Reduced hiring bottlenecks", "Better continuity during high-priority delivery periods"],
    approach: ["Understand role, stack and working style", "Match relevant specialists", "Align onboarding and delivery expectations", "Track performance and communication", "Scale the team up or down as needs change"],
    technologies: ["JavaScript / TypeScript", "React", "Next.js", "Flutter", "Python", "AWS", "Azure", "DevOps"],
    idealFor: ["Product teams", "Agencies", "Enterprises", "Scale-ups", "Teams with temporary skill gaps"]
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    eyebrow: "Reliable infrastructure built for continuous delivery",
    summary: "Cloud architecture, CI/CD, observability and automation that make software easier to ship, operate and scale.",
    description: "We help clients modernise infrastructure and delivery practices so teams can release confidently. Our work covers architecture, automation, environments, deployment pipelines, monitoring, performance and practical cost awareness.",
    provides: ["Cloud architecture and migration", "CI/CD pipeline design", "Infrastructure as code", "Containerisation and orchestration", "Monitoring and observability", "Performance, resilience and cost optimisation"],
    outcomes: ["Faster and safer releases", "More reliable production environments", "Improved visibility into system health", "Infrastructure that scales with demand"],
    approach: ["Assess the current platform", "Define the target cloud architecture", "Automate infrastructure and deployment", "Add monitoring and recovery practices", "Optimise continuously based on real usage"],
    technologies: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Terraform", "Linux", "PostgreSQL"],
    idealFor: ["SaaS teams", "Growing digital products", "Legacy migrations", "Teams improving release reliability", "Cloud-native applications"]
  },
  {
    slug: "ui-ux-product-design",
    title: "UI/UX & Product Design",
    eyebrow: "Clear experiences for complex products",
    summary: "Research-led product design that turns business goals and user needs into intuitive, polished digital experiences.",
    description: "Servixa combines product thinking, UX research, interaction design and interface design to create experiences that are useful, understandable and consistent. We work closely with engineering so the final product reflects the design intent.",
    provides: ["UX research and discovery", "User flows and information architecture", "Wireframes and interactive prototypes", "UI design and design systems", "Usability review and refinement", "Developer-ready design specifications"],
    outcomes: ["Simpler user journeys", "Stronger product consistency", "Higher usability and adoption", "Less rework between design and engineering"],
    approach: ["Understand users, goals and constraints", "Map journeys and content", "Prototype key experiences", "Validate and refine", "Create a scalable visual system", "Support implementation"],
    technologies: ["Figma", "Design systems", "Responsive design", "Accessibility", "Prototyping", "UX research"],
    idealFor: ["New digital products", "Product redesigns", "SaaS platforms", "Mobile applications", "Complex enterprise workflows"]
  },
  {
    slug: "web-development",
    title: "Web Development",
    eyebrow: "Fast, accessible websites and web products",
    summary: "Modern websites, portals, e-commerce experiences and web applications engineered for performance and growth.",
    description: "We build web experiences that balance strong design with solid engineering. Whether the requirement is a marketing website, customer portal or complex SaaS product, Servixa focuses on speed, accessibility, maintainability and conversion-ready user journeys.",
    provides: ["Corporate and marketing websites", "SaaS and web application development", "E-commerce experiences", "Customer and partner portals", "CMS and content integrations", "Performance and SEO-focused implementation"],
    outcomes: ["Fast-loading user experiences", "Responsive behaviour across devices", "Search-friendly technical foundations", "A maintainable platform ready for future growth"],
    approach: ["Define audience, goals and conversion paths", "Plan architecture and content", "Design responsive experiences", "Build and integrate", "Test performance and accessibility", "Launch and improve"],
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "PostgreSQL", "Supabase", "Headless CMS"],
    idealFor: ["Businesses refreshing their website", "SaaS companies", "E-commerce brands", "Startups", "Organisations building customer portals"]
  },
  {
    slug: "custom-software-development",
    title: "Custom Software Development",
    eyebrow: "Software shaped around your business",
    summary: "Purpose-built platforms, internal tools and systems designed around the workflows that make your organisation unique.",
    description: "Off-the-shelf software is not always a fit. Servixa designs and builds custom systems around real operational needs, with careful attention to architecture, security, integrations, data and long-term maintainability.",
    provides: ["Custom business platforms", "Internal tools and workflow systems", "API and backend development", "Legacy modernisation", "Third-party system integrations", "Maintenance and product evolution"],
    outcomes: ["Software that fits your real processes", "Less manual work and duplication", "Better visibility across teams", "A scalable technical foundation for future change"],
    approach: ["Understand workflows and business rules", "Prioritise an achievable first release", "Design architecture and interfaces", "Develop in visible increments", "Test with real users", "Support and extend after launch"],
    technologies: ["TypeScript", "Next.js", "Node.js", "Python", "FastAPI", ".NET", "PostgreSQL", "Cloud platforms"],
    idealFor: ["Operationally complex businesses", "Teams replacing spreadsheets", "Legacy system modernisation", "New digital ventures", "Integration-heavy projects"]
  },
  {
    slug: "cybersecurity",
    title: "Cybersecurity",
    eyebrow: "Security designed into delivery",
    summary: "Practical security assessments, secure architecture and delivery practices that help reduce risk without blocking progress.",
    description: "Servixa treats security as part of engineering rather than a final checklist. We help clients identify weaknesses, improve application and cloud security, strengthen access controls and build more secure delivery practices.",
    provides: ["Application security reviews", "Cloud security assessments", "Secure architecture guidance", "Identity and access review", "Security hardening and remediation", "Secure development practices"],
    outcomes: ["Reduced exposure to common risks", "Stronger security posture", "Better awareness across engineering teams", "Security controls aligned with real business needs"],
    approach: ["Understand systems and risk profile", "Assess priority attack surfaces", "Document findings by severity", "Remediate high-value issues", "Embed repeatable security controls", "Review improvements over time"],
    technologies: ["OWASP practices", "Cloud IAM", "Secure SDLC", "Application scanning", "Logging and monitoring", "Secrets management"],
    idealFor: ["Web and mobile products", "Cloud platforms", "Growing SaaS companies", "Businesses handling sensitive data", "Teams preparing for enterprise clients"]
  },
  {
    slug: "data-analytics-insights",
    title: "Data Analytics & Insights",
    eyebrow: "Turn operational data into useful decisions",
    summary: "Data platforms, dashboards and predictive insights that help teams understand performance and act with confidence.",
    description: "We help organisations connect scattered data, define meaningful metrics and build reporting experiences that people can actually use. Where appropriate, we also introduce forecasting and machine-learning workflows around validated business questions.",
    provides: ["Data integration and pipelines", "Business intelligence dashboards", "KPI and reporting design", "Data modelling and warehousing", "Forecasting and predictive analytics", "Automated reporting workflows"],
    outcomes: ["Clearer visibility into business performance", "Less manual reporting", "More trusted metrics", "Faster evidence-based decisions"],
    approach: ["Define the decisions data should support", "Identify and assess source systems", "Model and clean the data", "Build reporting around priority KPIs", "Validate with business users", "Expand into advanced analytics where useful"],
    technologies: ["Power BI", "Python", "SQL", "PostgreSQL", "Azure", "ETL pipelines", "Machine learning"],
    idealFor: ["Operations leaders", "Finance teams", "Sales organisations", "Digital products", "Businesses consolidating reporting"]
  },
  {
    slug: "microsoft-power-platform",
    title: "Microsoft Power Platform",
    eyebrow: "Low-code solutions with enterprise connectivity",
    summary: "Power Apps, Power Automate and Power BI solutions that simplify processes and help teams get more from Microsoft 365.",
    description: "Servixa helps organisations use the Power Platform to replace manual processes, connect information and create practical internal applications. We balance rapid delivery with governance, maintainability and integration needs.",
    provides: ["Power Apps development", "Power Automate workflows", "Power BI dashboards", "Dataverse solutions", "Microsoft 365 integrations", "Governance and environment setup"],
    outcomes: ["Faster process automation", "Fewer manual handoffs", "Better use of Microsoft investments", "Internal tools delivered with less overhead"],
    approach: ["Identify repetitive processes", "Choose the right Power Platform components", "Prototype with users", "Build integrations and controls", "Deploy with governance", "Measure adoption and improve"],
    technologies: ["Power Apps", "Power Automate", "Power BI", "Dataverse", "SharePoint", "Microsoft 365", "Azure"],
    idealFor: ["Microsoft 365 organisations", "Operations teams", "Finance and HR workflows", "Internal app needs", "Reporting automation"]
  },
  {
    slug: "cloud-applications-integration",
    title: "Cloud Applications & Integration",
    eyebrow: "Connected applications without unnecessary disruption",
    summary: "Cloud-native applications, migrations and integrations that connect systems, data and teams reliably.",
    description: "Servixa helps clients build and modernise cloud applications while connecting the systems their business already depends on. We focus on resilient integration patterns, secure APIs, clean data movement and migration plans that minimise operational disruption.",
    provides: ["Cloud-native application development", "Application and data migration", "API design and integration", "System-to-system connectivity", "Event-driven integration", "Integration monitoring and support"],
    outcomes: ["Better-connected business systems", "Reduced manual data transfer", "Modern applications that are easier to evolve", "Safer migration from legacy platforms"],
    approach: ["Map systems, dependencies and data flows", "Define integration contracts", "Build and test incrementally", "Plan migration and rollback", "Observe production integrations", "Optimise reliability and performance"],
    technologies: ["AWS", "Azure", "REST", "GraphQL", "Webhooks", "Message queues", "Node.js", "Python", "PostgreSQL"],
    idealFor: ["Businesses modernising legacy applications", "Multi-system environments", "SaaS integrations", "Cloud migration programmes", "Data-connected platforms"]
  }
];

export const serviceBySlug = Object.fromEntries(serviceDetails.map((service) => [service.slug, service])) as Record<string, ServiceDetail>;
