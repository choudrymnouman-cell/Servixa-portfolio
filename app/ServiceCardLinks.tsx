"use client";

import { useEffect } from "react";

const slugByTitle: Record<string, string> = {
  "Generative AI & Automation": "generative-ai-automation",
  "Dynamics 365 ERP & CRM": "dynamics-365-erp-crm",
  "Mobile App Development": "mobile-app-development",
  "IT Staff Augmentation": "it-staff-augmentation",
  "Cloud & DevOps": "cloud-devops",
  "UI/UX & Product Design": "ui-ux-product-design",
  "Web Development": "web-development",
  "Custom Software Development": "custom-software-development",
  "Cybersecurity": "cybersecurity",
  "Data Analytics & Insights": "data-analytics-insights",
  "Microsoft Power Platform": "microsoft-power-platform",
  "Cloud Applications & Integration": "cloud-applications-integration",
};

export default function ServiceCardLinks() {
  useEffect(() => {
    const enhanceCards = () => {
      const cards = Array.from(document.querySelectorAll<HTMLElement>(".service-card"));

      cards.forEach((card) => {
        if (card.dataset.serviceLinked === "true") return;
        const title = card.querySelector("h3")?.textContent?.trim() || "";
        const slug = slugByTitle[title];
        if (!slug) return;

        const href = `/services/${slug}/`;
        card.dataset.serviceLinked = "true";
        card.setAttribute("role", "link");
        card.setAttribute("tabindex", "0");
        card.setAttribute("aria-label", `View ${title} service details`);
        card.style.cursor = "pointer";

        const existingLink = card.querySelector<HTMLAnchorElement>(".service-link");
        if (existingLink) {
          existingLink.href = href;
          existingLink.textContent = "Explore this service ↗";
        }

        const navigate = () => { window.location.href = href; };
        card.addEventListener("click", (event) => {
          const target = event.target as HTMLElement;
          if (target.closest("a,button,input,select,textarea")) return;
          navigate();
        });
        card.addEventListener("keydown", (event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            navigate();
          }
        });
      });
    };

    enhanceCards();
    const observer = new MutationObserver(enhanceCards);
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return null;
}
