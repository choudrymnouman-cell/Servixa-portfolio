"use client";

import { usePathname } from "next/navigation";
import styles from "./faq.module.css";

const faqs = [
  {
    question: "What is Servixa and what services does it provide?",
    answer: "Servixa is a digital solutions and technology company that helps businesses plan, build, modernize and support digital products. Core services include custom software development, website and web app development, mobile app development, AI automation, cloud and DevOps, cybersecurity, UI/UX design, enterprise platforms, data analytics, IT staff augmentation and global IT support.",
  },
  {
    question: "Can Servixa build a professional website or web application for my business?",
    answer: "Yes. Servixa designs and develops responsive business websites, e-commerce experiences, SaaS products and custom web applications. Projects can cover product strategy, UX/UI, frontend and backend development, integrations, performance, accessibility, deployment and ongoing support.",
  },
  {
    question: "Does Servixa develop Android and iOS mobile apps?",
    answer: "Yes. Servixa develops Android, iOS and cross-platform mobile applications, including Flutter-based products. The team can support product planning, interface design, APIs, authentication, cloud integrations, testing, release preparation and future improvements.",
  },
  {
    question: "Can Servixa help with AI, automation and intelligent assistants?",
    answer: "Yes. Servixa builds practical AI solutions such as intelligent assistants, workflow automation, document intelligence, AI-enabled business tools, data-driven products and custom integrations designed around real business processes.",
  },
  {
    question: "Does Servixa provide cloud, DevOps and cybersecurity services?",
    answer: "Yes. Servixa supports cloud architecture, migrations, CI/CD, monitoring, reliability, integrations and security-focused engineering. The goal is to create infrastructure and delivery systems that are maintainable, observable and ready to scale.",
  },
  {
    question: "Does Servixa work with startups as well as established companies?",
    answer: "Yes. Servixa works with startups, growing businesses and established organizations. Engagements can range from a focused website or mobile app to ongoing product engineering, cloud modernization, enterprise platform work and global IT support.",
  },
  {
    question: "How much does a Servixa software, website or mobile app project cost?",
    answer: "Project cost depends on scope, product complexity, integrations, design requirements, timeline and support needs. Servixa reviews the business goals and required features first, then prepares a project approach and proposal suited to the engagement.",
  },
  {
    question: "How long does it take Servixa to build a digital product?",
    answer: "Timelines depend on scope. A focused website can often be delivered faster than a complex mobile app, SaaS platform or enterprise system. Servixa defines milestones and a realistic delivery plan after discovery and scope review.",
  },
  {
    question: "What technologies does Servixa work with?",
    answer: "Servixa works with modern technologies including Next.js, React, Flutter, TypeScript, Node.js, Python, .NET, PostgreSQL, GraphQL, Docker, Kubernetes, AWS, Azure and Supabase, selecting tools according to each product's requirements.",
  },
  {
    question: "How can I contact Servixa about a new project?",
    answer: "You can contact Servixa through the project inquiry form on this website, email servixaa@gmail.com, or use the WhatsApp consultation option. Share your goals, required features and preferred timeline so the team can guide you toward the right service.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function FaqSection() {
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <section id="faq" className={styles.section} aria-labelledby="servixa-faq-heading">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className={styles.glow} aria-hidden="true" />
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className={styles.kicker}>Frequently asked questions</p>
            <h2 id="servixa-faq-heading">Everything you need to know before building with <span>Servixa.</span></h2>
          </div>
          <p>Clear answers about our software, web, mobile, AI, cloud and technology services—so you can quickly decide how Servixa can help your business.</p>
        </div>

        <div className={styles.grid}>
          {faqs.map((faq, index) => (
            <details className={styles.item} key={faq.question}>
              <summary>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
                <strong>{faq.question}</strong>
                <span className={styles.plus} aria-hidden="true">+</span>
              </summary>
              <div className={styles.answer}><p>{faq.answer}</p></div>
            </details>
          ))}
        </div>

        <div className={styles.cta}>
          <div><span>Still have a question?</span><strong>Tell us what you want to build.</strong></div>
          <a href="#contact">Discuss your project <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  );
}
