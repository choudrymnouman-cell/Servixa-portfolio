import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read how LevelServe handles information submitted through its website, contact form and external communication channels.",
  robots: { index: true, follow: true },
};

export default function PrivacyPage() {
  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <a className={styles.back} href="/">← Back to LevelServe</a>
        <p className={styles.eyebrow}>Legal · Privacy</p>
        <h1 className={styles.title}>Privacy Policy</h1>
        <p className={styles.intro}>
          This Privacy Policy explains how LevelServe handles personal information when you visit our website, submit a project inquiry, contact us by email or WhatsApp, or interact with links to our social channels.
        </p>
        <p className={styles.updated}>Last updated: 23 August 2026</p>

        <section className={styles.card}>
          <h2>1. Information we collect</h2>
          <p>When you use our project inquiry form, you may provide your name, work email, company name, the service you are interested in, and project details. We also receive information you voluntarily send to us by email, WhatsApp or other communication channels.</p>
          <p>Like most websites, our hosting and infrastructure providers may process limited technical information needed to deliver and protect the website, such as IP address, browser information, device information, request logs and timestamps.</p>
        </section>

        <section className={styles.card}>
          <h2>2. How we use information</h2>
          <ul>
            <li>To respond to project inquiries and provide requested information.</li>
            <li>To understand project requirements and prepare proposals or service recommendations.</li>
            <li>To operate, maintain, secure and improve the website and our services.</li>
            <li>To prevent misuse, fraud, spam and security incidents.</li>
            <li>To comply with legal obligations where applicable.</li>
          </ul>
        </section>

        <section className={styles.card}>
          <h2>3. Contact form and service providers</h2>
          <p>LevelServe currently uses FormSubmit to transmit website inquiry form submissions to our business email inbox. Information submitted through that form is therefore processed by FormSubmit and by the email services used to receive and manage the inquiry.</p>
          <p>We may also rely on hosting, infrastructure and communication providers that process limited information on our behalf to operate the website and respond to you.</p>
        </section>

        <section className={styles.card}>
          <h2>4. External services and links</h2>
          <p>Our website may link to third-party services including WhatsApp, LinkedIn and Instagram. If you follow those links or communicate with us through those services, the relevant provider may process information under its own privacy policy. LevelServe does not control those third-party privacy practices.</p>
        </section>

        <section className={styles.card}>
          <h2>5. Cookies and analytics</h2>
          <p>We do not use the website contact form to require an account or advertising profile. If analytics, advertising, account features or additional cookies are introduced in the future, this policy will be updated to explain those practices and any consent choices that apply.</p>
        </section>

        <section className={styles.card}>
          <h2>6. Retention</h2>
          <p>We retain inquiry and business correspondence for as long as reasonably necessary to respond to you, maintain appropriate business records, protect our legitimate interests and meet applicable legal obligations. Retention periods may vary depending on the nature of the communication and any resulting business relationship.</p>
        </section>

        <section className={styles.card}>
          <h2>7. Security</h2>
          <p>We take reasonable technical and organizational steps intended to protect information handled through our website and business communications. No internet transmission or storage system can be guaranteed to be completely secure.</p>
        </section>

        <section className={styles.card}>
          <h2>8. Your privacy choices and rights</h2>
          <p>Depending on where you live, applicable privacy law may give you rights to request access to, correction of, or deletion of certain personal information, or to object to or restrict certain processing. You can contact us to make a privacy request and we will respond as required by applicable law.</p>
        </section>

        <section className={styles.card}>
          <h2>9. Children</h2>
          <p>Our website and professional technology services are intended for businesses and adults seeking technology services. We do not knowingly solicit personal information from children through the project inquiry form.</p>
        </section>

        <section className={styles.card}>
          <h2>10. Changes to this policy</h2>
          <p>We may update this Privacy Policy when our website, service providers or legal obligations change. The latest version will remain available on this page with the updated date shown above.</p>
        </section>

        <section className={styles.card}>
          <h2>11. Contact LevelServe</h2>
          <p>For privacy questions or requests, email <a href="mailto:servixaa@gmail.com">servixaa@gmail.com</a>. You can also use the contact section on the LevelServe website for general business inquiries.</p>
        </section>

        <div className={styles.note}>This policy is written to describe the current website behavior. It should be reviewed whenever LevelServe adds analytics, advertising, user accounts, payment processing, newsletters or other systems that collect additional personal information.</div>

        <div className={styles.footer}>
          <a href="/">Home</a>
          <a href="/terms">Terms & Conditions</a>
          <a href="mailto:servixaa@gmail.com">Contact</a>
        </div>
      </div>
    </main>
  );
}
