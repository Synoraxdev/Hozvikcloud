import { absoluteUrl, siteConfig } from "../config/site";
import { faq } from "../content/home";

/**
 * All head metadata for the homepage. It is rendered into the built HTML by the
 * pre-render step (see src/entry-server.tsx and scripts/prerender.mjs).
 */

const canonical = siteConfig.url;
const image = siteConfig.socialImage ? absoluteUrl(siteConfig.socialImage) : "";

const organization = {
  "@type": "Organization",
  "@id": `${canonical}#organization`,
  name: siteConfig.name,
  url: canonical,
  description: siteConfig.description,
  ...(siteConfig.logo ? { logo: absoluteUrl(siteConfig.logo) } : {}),
};

const website = {
  "@type": "WebSite",
  "@id": `${canonical}#website`,
  name: siteConfig.name,
  url: canonical,
  description: siteConfig.description,
  inLanguage: "en-IN",
  publisher: { "@id": organization["@id"] },
};

// Mirrors the visible FAQ exactly, because it is generated from the same data.
const faqPage = {
  "@type": "FAQPage",
  "@id": `${canonical}#faq`,
  mainEntity: faq.items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const jsonLd = JSON.stringify({
  "@context": "https://schema.org",
  "@graph": [organization, website, faqPage],
}).replace(/</g, "\\u003c");

export function SEOHead() {
  return (
    <>
      <title>{siteConfig.title}</title>
      <meta name="description" content={siteConfig.description} />
      <meta name="robots" content={siteConfig.robots} />
      <meta name="theme-color" content={siteConfig.themeColor} />
      <link rel="canonical" href={canonical} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteConfig.name} />
      <meta property="og:locale" content={siteConfig.locale} />
      <meta property="og:title" content={siteConfig.title} />
      <meta property="og:description" content={siteConfig.description} />
      <meta property="og:url" content={canonical} />
      {image && <meta property="og:image" content={image} />}
      {image && <meta property="og:image:alt" content={siteConfig.socialImageAlt} />}

      <meta name="twitter:card" content={image ? "summary_large_image" : "summary"} />
      <meta name="twitter:title" content={siteConfig.title} />
      <meta name="twitter:description" content={siteConfig.description} />
      {image && <meta name="twitter:image" content={image} />}
      {image && <meta name="twitter:image:alt" content={siteConfig.socialImageAlt} />}

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />
    </>
  );
}
