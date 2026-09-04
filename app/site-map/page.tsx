import type { Metadata } from "next";
import styles from "./site-map.module.css";

export const metadata: Metadata = {
  title: "Sitemap | LevelServe",
  description: "Browse LevelServe mobile app development, web development, Google Ads, SEO, digital marketing and company pages.",
};

const groups = [
  {
    title: "Company",
    links: [
      ["Home", "/"],
      ["About LevelServe", "/#about"],
      ["Contact", "/#contact"],
      ["Frequently Asked Questions", "/#faq"],
    ],
  },
  {
    title: "Core Services",
    links: [
      ["Mobile App Development", "/services/mobile-app-development/"],
      ["Web Development", "/services/web-development/"],
      ["Google Ads & PPC", "/services/google-ads-ppc/"],
      ["SEO & Search Growth", "/services/seo-search-growth/"],
      ["Meta Ads & Social Marketing", "/services/meta-ads-social-marketing/"],
      ["Digital Marketing", "/services/digital-marketing/"],
    ],
  },
  {
    title: "Explore",
    links: [
      ["All Services", "/#services"],
      ["Industries", "/#industries"],
      ["Featured Work", "/#work"],
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
        <a className={styles.logo} href="/" aria-label="Back to LevelServe home">
          <img src="/levelserve-logo.svg" alt="LevelServe" />
        </a>
        <p className={styles.kicker}>Navigation</p>
        <h1>LevelServe Sitemap</h1>
        <p className={styles.intro}>Find LevelServe development, advertising, SEO, marketing, company and legal pages in one place.</p>

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
          <a href="/#contact">Contact LevelServe <span aria-hidden="true">↗</span></a>
        </div>
      </section>
    </main>
  );
}
