import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Servixa | Software Development, AI, Cloud & IT Services",
    template: "%s | Servixa",
  },
  description:
    "Servixa is a software development and digital solutions company providing web and mobile app development, AI automation, cloud and DevOps, cybersecurity, UI/UX, enterprise platforms and global IT services.",
  applicationName: "Servixa",
  keywords: [
    "Servixa",
    "Servixa Digital Solutions",
    "software development company",
    "web development company",
    "mobile app development",
    "AI development company",
    "AI automation services",
    "cloud DevOps services",
    "cybersecurity services",
    "IT staff augmentation",
    "global IT services",
    "custom software development",
    "Flutter development",
    "Next.js development",
  ],
  authors: [{ name: "Servixa" }],
  creator: "Servixa",
  publisher: "Servixa",
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Servixa",
    title: "Servixa | Software Development, AI, Cloud & IT Services",
    description:
      "Build websites, mobile apps, AI solutions, cloud systems and secure digital products with Servixa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servixa | Software Development, AI, Cloud & IT Services",
    description:
      "Software, web and mobile development, AI automation, cloud, cybersecurity and global IT services.",
  },
  alternates: {
    languages: { "en": "/" },
  },
  other: {
    "codex-preview": "development",
    "business:contact_data:email": "servixaa@gmail.com",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, maximumScale: 5 };

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Servixa",
  alternateName: "Servixa Digital Solutions",
  description:
    "Software development and digital solutions company providing web and mobile development, AI automation, cloud, cybersecurity, enterprise platforms and global IT services.",
  email: "servixaa@gmail.com",
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales and project inquiries",
      email: "servixaa@gmail.com",
      telephone: "+92-307-8155793",
      availableLanguage: ["English", "Urdu"],
      areaServed: "Worldwide",
    },
  ],
  sameAs: [
    "https://www.instagram.com/servixatech",
    "https://www.linkedin.com/company/servixa-digital-solutions/",
  ],
  knowsAbout: [
    "Custom Software Development",
    "Web Development",
    "Mobile App Development",
    "Generative AI and Automation",
    "Cloud and DevOps",
    "Cybersecurity",
    "UI/UX Design",
    "Data Analytics",
    "Microsoft Power Platform",
    "Dynamics 365",
    "IT Staff Augmentation",
    "Global IT Support",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="privacy-policy" href="/privacy" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <nav
          aria-label="Legal information"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            flexWrap: "wrap",
            padding: "18px 24px 26px",
            background: "#070a13",
            color: "#aab3c5",
            fontSize: "13px",
          }}
        >
          <a href="/privacy" style={{ color: "inherit", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/terms" style={{ color: "inherit", textDecoration: "none" }}>Terms & Conditions</a>
          <a href="mailto:servixaa@gmail.com" style={{ color: "inherit", textDecoration: "none" }}>Contact Servixa</a>
        </nav>
      </body>
    </html>
  );
}
