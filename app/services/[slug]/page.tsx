import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { serviceBySlug, serviceDetails } from "../service-data";
import { marketingServiceBySlug, marketingServiceDetails } from "../marketing-service-data";
import styles from "../service-page.module.css";

const allServiceDetails = [...marketingServiceDetails, ...serviceDetails];
const allServiceBySlug = { ...serviceBySlug, ...marketingServiceBySlug };

export function generateStaticParams() {
  return allServiceDetails.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = allServiceBySlug[slug];
  if (!service) return {};
  return {
    title: `${service.title} Services`,
    description: `${service.summary} Learn what Servixa provides, how we deliver it and the outcomes we focus on for clients.`,
    alternates: { canonical: `/services/${service.slug}/` },
    openGraph: {
      title: `${service.title} | Servixa`,
      description: service.summary,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = allServiceBySlug[slug];
  if (!service) notFound();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.summary,
    provider: { "@type": "Organization", name: "Servixa" },
    areaServed: "Worldwide",
    url: `https://servixa-bzem.onrender.com/services/${service.slug}/`,
  };

  return (
    <main className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className={styles.shell}>
        <nav className={styles.nav} aria-label="Service page navigation">
          <a href="/" aria-label="Servixa home"><img src="/servixa-logo.webp" alt="Servixa" /></a>
          <div className={styles.navLinks}>
            <a href="/#services">Services</a>
            <a href="/#industries">Industries</a>
            <a href="/#contact">Contact</a>
            <a className={styles.back} href="/#services">← All capabilities</a>
          </div>
        </nav>

        <section className={styles.hero}>
          <div>
            <p className={styles.eyebrow}>{service.eyebrow}</p>
            <h1>{service.title}</h1>
            <p>{service.description}</p>
            <a className={styles.cta} href="/#contact">Discuss this service ↗</a>
          </div>
          <aside className={styles.heroCard}>
            <span>What we aim to give our clients</span>
            <p>{service.summary}</p>
            <div className={styles.pills} style={{ marginTop: 20 }}>
              {service.technologies.slice(0, 5).map((tech) => <span className={styles.pill} key={tech}>{tech}</span>)}
            </div>
          </aside>
        </section>
      </div>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <h2>What Servixa can provide.</h2>
            <p>We shape the engagement around your goals, existing systems, users and budget. These are the core capabilities we can bring into a {service.title.toLowerCase()} project.</p>
          </div>
          <div className={styles.grid}>
            {service.provides.map((item, index) => (
              <article className={styles.card} key={item}><div className={styles.number}>{String(index + 1).padStart(2, "0")}</div><strong>{item}</strong><p>Planned and delivered around the needs, constraints and priorities of your business.</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <h2>Outcomes we work toward.</h2>
            <p>Technology and marketing should improve how the business performs. Our goal is to create useful, maintainable solutions that give clients visible customer and commercial value.</p>
          </div>
          <div className={styles.grid}>
            {service.outcomes.map((item) => (
              <article className={styles.card} key={item}><div className={styles.number}>✓</div><strong>{item}</strong><p>We validate priorities with the client and measure success against the agreed business objective.</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <h2>How we deliver.</h2>
            <p>Clear checkpoints, visible progress and direct communication keep the work aligned from discovery through launch and ongoing improvement.</p>
          </div>
          <div className={styles.grid}>
            {service.approach.map((item, index) => (
              <article className={styles.card} key={item}><div className={styles.number}>{String(index + 1).padStart(2, "0")}</div><strong>{item}</strong><p>Each stage is adapted to project size, risk, timeline and the client&apos;s preferred way of working.</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.shell}>
          <div className={styles.sectionHead}>
            <h2>Tools & fit.</h2>
            <p>We choose tools and channels for maintainability, measurement and business fit—not simply because they are fashionable.</p>
          </div>
          <h3>Typical tools and technologies</h3>
          <div className={styles.pills}>{service.technologies.map((tech) => <span className={styles.pill} key={tech}>{tech}</span>)}</div>
          <h3 style={{ marginTop: 34 }}>Often a good fit for</h3>
          <div className={styles.pills}>{service.idealFor.map((item) => <span className={styles.pill} key={item}>{item}</span>)}</div>
        </div>
      </section>

      <section className={styles.finalCta}>
        <div className={styles.shell}>
          <div className={styles.finalBox}>
            <div><h2>Have a {service.title.toLowerCase()} project?</h2><p>Share your goals with Servixa and we&apos;ll help you define a practical next step.</p></div>
            <a className={styles.cta} href="/#contact">Start a conversation ↗</a>
          </div>
          <footer className={styles.footer}><span>© {new Date().getFullYear()} Servixa. All rights reserved.</span><span><a href="/privacy/">Privacy</a> · <a href="/terms/">Terms</a> · <a href="/sitemap/">Sitemap</a></span></footer>
        </div>
      </section>
    </main>
  );
}
