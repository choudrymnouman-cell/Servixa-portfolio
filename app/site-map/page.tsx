import type { Metadata } from "next";
import styles from "./site-map.module.css";

export const metadata: Metadata = {
  title: "Sitemap | Servixa",
  description: "Browse Servixa services, industries, contact information and legal pages.",
};

const groups = [
  {
    title: "Company",
    links: [
      ["Home", "/"],
      ["About Servixa", "/#about"],
      ["Contact", "/#contact"],
      ["Frequently Asked Questions", "/#faq"],
    ],
  },
  {
    title: "Services",
    links: [
      ["Web Development", "/#services"],
      ["Mobile App Development", "/#services"],
      ["AI & Automation", "/#services"],
      ["Cloud & DevOps", "/#services"],
      ["Cybersecurity", "/#services"],
      ["UI/UX & Product Design", "/#services"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["Industries", "/#industries"],
      ["Work", "/#work"],
      ["Start a Project", "/#contact"],
    ],
  },
  {
    title: "Legal",
    links: [
      ["Privacy Policy", "/privacy/"],
      ["Terms & Conditions", "/terms/"],
      ["XML Sitemap for search engines", "/sitemap.xml"],
    ],
  },
];

export default function SiteMapPage() {
  return (
    <main className={styles.page}>
      <div className={styles.glow} aria-hidden="true" />
      <section className={styles.shell}>
        <a className={styles.logo} href="/" aria-label="Back to Servixa home">
          <img src="/servixa-logo.webp" alt="Servixa" />
        </a>
        <p className={styles.kicker}>Navigation</p>
        <h1>Servixa Sitemap</h1>
        <p className={styles.intro}>Find the main Servixa pages, services, industry information and legal resources in one place.</p>

        <div className={styles.grid}>
          {groups.map((group) => (
            <article key={group.title} className={styles.card}>
              <h2>{group.title}</h2>
              <nav aria-label={`${group.title} sitemap links`}>
                {group.links.map(([label, href]) => (
                  <a key={label} href={href}>{label}<span aria-hidden="true">↗</span></a>
                ))}
              </nav>
            </article>
          ))}
        </div>

        <div className={styles.bottom}>
          <p>Looking for something specific?</p>
          <a href="/#contact">Contact Servixa <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
