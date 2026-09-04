import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms governing use of the LevelServe website and submission of project inquiries.",
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <a className={styles.back} href="/">← Back to LevelServe</a>
        <p className={styles.eyebrow}>Legal · Terms</p>
        <h1 className={styles.title}>Terms & Conditions</h1>
        <p className={styles.intro}>These Terms & Conditions govern your use of the public LevelServe website and the information and inquiry features available through it.</p>
        <p className={styles.updated}>Last updated: 23 August 2026</p>

        <section className={styles.card}>
          <h2>1. About this website</h2>
          <p>LevelServe provides information about software development, web and mobile development, AI automation, cloud, cybersecurity, design, enterprise technology and IT services. Website content is provided for general business information and inquiry purposes.</p>
        </section>

        <section className={styles.card}>
          <h2>2. Project inquiries</h2>
          <p>Submitting a contact form, email or WhatsApp message does not by itself create a client relationship, contract, guarantee of availability or commitment to a particular price, scope or delivery date. Any commercial engagement will be based on separately agreed terms, scope and pricing.</p>
        </section>

        <section className={styles.card}>
          <h2>3. Acceptable use</h2>
          <p>You may not misuse the website, attempt unauthorized access, interfere with its operation, submit malicious code or automated spam, impersonate another person, or use the website for unlawful activity.</p>
        </section>

        <section className={styles.card}>
          <h2>4. Intellectual property</h2>
          <p>Unless otherwise stated, the LevelServe name, branding, website design, written content, graphics and original website materials are owned by or used by LevelServe. You may view the site for ordinary personal or business evaluation, but you may not reproduce or commercially exploit protected material without permission.</p>
        </section>

        <section className={styles.card}>
          <h2>5. Accuracy and availability</h2>
          <p>We aim to keep website information useful and current, but service descriptions, technologies, availability and other information may change. The website may occasionally be unavailable or contain errors. Specific commitments are only those expressly agreed in a separate client agreement or proposal.</p>
        </section>

        <section className={styles.card}>
          <h2>6. External links</h2>
          <p>The website may include links to third-party websites and communication platforms. Those services are operated independently and are subject to their own terms and policies. A link does not mean LevelServe controls or guarantees the third-party service.</p>
        </section>

        <section className={styles.card}>
          <h2>7. Liability</h2>
          <p>To the extent permitted by applicable law, LevelServe is not liable for indirect, incidental or consequential loss arising solely from use of, or inability to use, this public informational website. Nothing in these terms excludes liability that cannot legally be excluded.</p>
        </section>

        <section className={styles.card}>
          <h2>8. Privacy</h2>
          <p>Personal information submitted through the website is handled as described in our <a href="/privacy">Privacy Policy</a>.</p>
        </section>

        <section className={styles.card}>
          <h2>9. Changes</h2>
          <p>We may update these terms when the website or our business processes change. The current version will be posted on this page with the latest revision date.</p>
        </section>

        <section className={styles.card}>
          <h2>10. Contact</h2>
          <p>Questions about these terms can be sent to <a href="mailto:servixaa@gmail.com">servixaa@gmail.com</a>.</p>
        </section>

        <div className={styles.footer}>
          <a href="/">Home</a>
          <a href="/privacy">Privacy Policy</a>
          <a href="mailto:servixaa@gmail.com">Contact</a>
        </div>
      </div>
    </main>
  );
}
