import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./home-trust.css";
import FaqSection from "./FaqSection";
import SiteFooter from "./SiteFooter";
import ServiceCardLinks from "./ServiceCardLinks";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Servixa | Mobile Apps, Web Development, Google Ads & SEO",
    template: "%s | Servixa",
  },
  description:
    "Servixa is a digital solutions company specializing in mobile app development, web development, Google Ads, Meta Ads, SEO, digital marketing, UI/UX and custom software. 4+ years of experience with 100+ projects delivered.",
  applicationName: "Servixa",
  keywords: [
    "Servixa",
    "Servixa Digital Solutions",
    "mobile app development company",
    "web development company",
    "Google Ads services",
    "Meta Ads services",
    "SEO services",
    "digital marketing company",
    "social media marketing",
    "custom software development",
    "Flutter development",
    "Next.js development",
    "website development Kot Addu",
    "web development Islamabad",
    "web development Lahore",
    "web development Multan",
    "digital agency Pakistan",
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
    title: "Servixa | Mobile Apps, Web Development, Google Ads & SEO",
    description:
      "Build mobile apps and websites, grow with Google and Meta Ads, and improve search visibility with Servixa.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Servixa | Mobile Apps, Web Development, Google Ads & SEO",
    description:
      "Mobile apps, websites, Google Ads, Meta Ads, SEO, digital marketing and custom software from Servixa.",
  },
  alternates: { languages: { en: "/" } },
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
    "Digital solutions company specializing in mobile app development, web development, Google Ads, Meta Ads, SEO, digital marketing, UI/UX and custom software.",
  email: "servixaa@gmail.com",
  areaServed: ["Kot Addu", "Islamabad", "Lahore", "Multan", "New Zealand", "Dubai", "Australia", "Germany"],
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
    "Mobile App Development",
    "Web Development",
    "Google Ads",
    "Meta Ads",
    "Search Engine Optimization",
    "Digital Marketing",
    "Social Media Marketing",
    "UI/UX Design",
    "Custom Software Development",
    "Generative AI and Automation",
    "Cloud and DevOps",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="privacy-policy" href="/privacy/" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ServiceCardLinks />
        {children}
        <FaqSection />
        <SiteFooter />
      </body>
    </html>
  );
}
