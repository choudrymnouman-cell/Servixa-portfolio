import styles from "./site-footer.module.css";

const serviceLinks = [
  ["Web Development", "#services"],
  ["Mobile App Development", "#services"],
  ["AI & Automation", "#services"],
  ["Cloud & DevOps", "#services"],
  ["Cybersecurity", "#services"],
  ["UI/UX Design", "#services"],
];

const industryLinks = ["Fintech","Healthcare","Retail & Commerce","Telecom","Public Sector","Startups"];

const InstagramIcon = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4.2"/><circle cx="17.4" cy="6.7" r="1" className={styles.socialDot}/></svg>);
const LinkedInIcon = () => (<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10v7m0-10v.01M12 17v-4.1c0-1.8 1.2-3 2.8-3s2.7 1.1 2.7 3V17M12 10v7"/></svg>);

export default function SiteFooter() {
  return (<>
    <footer className={styles.footer} aria-label="LevelServe footer"><div className={styles.glow} aria-hidden="true"/><div className={styles.inner}>
      <section className={styles.cta} aria-label="Start a LevelServe project"><div className={styles.ctaIcon} aria-hidden="true"><svg viewBox="0 0 24 24"><path d="M5 5.75h14a2 2 0 0 1 2 2v7.5a2 2 0 0 1-2 2h-7.2L7 20.5v-3.25H5a2 2 0 0 1-2-2v-7.5a2 2 0 0 1 2-2Z"/><circle cx="8" cy="11.5" r="1"/><circle cx="12" cy="11.5" r="1"/><circle cx="16" cy="11.5" r="1"/></svg></div><div className={styles.ctaCopy}><h2>Ready to start your project?</h2><p>Let&apos;s build something exceptional together. Tell us what you need and our team will help you shape the right solution.</p></div><a className={styles.ctaButton} href="#contact">Send message <span aria-hidden="true">↗</span></a></section>
      <div className={styles.grid}>
        <div className={styles.brandCol}><a href="#top" className={styles.logo} aria-label="LevelServe home"><img src="/levelserve-logo-light.svg" alt="LevelServe Technologies"/></a><p>We build secure, scalable and intelligent digital products that help businesses move faster, operate smarter and grow with confidence.</p><div className={styles.socials} aria-label="LevelServe social media"><a href="https://www.instagram.com/servixatech" target="_blank" rel="noopener noreferrer" aria-label="LevelServe on Instagram" title="Instagram"><InstagramIcon/></a><a href="https://www.linkedin.com/company/servixa-digital-solutions/" target="_blank" rel="noopener noreferrer" aria-label="LevelServe on LinkedIn" title="LinkedIn"><LinkedInIcon/></a></div></div>
        <div className={styles.linksCol}><h3>Services</h3>{serviceLinks.map(([label,href])=><a key={label} href={href}><span>›</span>{label}</a>)}</div>
        <div className={styles.linksCol}><h3>Industries</h3>{industryLinks.map(label=><a key={label} href="#industries"><span>›</span>{label}</a>)}</div>
        <div className={styles.contactCol}><h3>Contact</h3><a href="mailto:servixaa@gmail.com"><span>✉</span> servixaa@gmail.com</a><a href="https://wa.me/923078155793" target="_blank" rel="noopener noreferrer"><span>◉</span> WhatsApp</a><p><span>⌖</span> Pakistan · Serving clients worldwide</p><a className={styles.contactButton} href="#contact">Discuss your project ↗</a></div>
      </div>
      <div className={styles.secondary}><img src="/levelserve-logo-light.svg" alt="LevelServe Technologies"/><nav aria-label="Footer navigation"><a href="#services">Services</a><a href="#industries">Industries</a><a href="#contact">Contact</a></nav><small>© {new Date().getFullYear()} LevelServe Technologies. All rights reserved.</small></div>
    </div></footer>
    <section className={styles.legal} aria-label="Legal information"><div className={styles.legalInner}><div className={styles.privacyNote}><span aria-hidden="true" className={styles.privacyBrand}><img src="/favicon.svg" alt=""/></span><p>Your privacy and data security are important to us.</p></div><nav><a href="/terms/">Terms &amp; Conditions</a><a href="/privacy/">Privacy Policy</a><a href="mailto:servixaa@gmail.com">Contact LevelServe</a><a href="/site-map/">Sitemap</a></nav></div></section>
  </>);
}
