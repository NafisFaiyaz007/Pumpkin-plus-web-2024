// Schema for the homepage
export const homeSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Pumpkin Plus",
  "description": "A pioneering agricultural innovation company specializing in sandbar cropping technology in Bangladesh",
  "url": "https://www.pumpkinplus.com",
  "logo": "https://www.pumpkinplus.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/pumpkinplus",
    "https://www.linkedin.com/company/pumpkin-plus"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "Bangladesh"
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.pumpkinplus.com"
  }
};