import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Script from "next/script";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import WhatsAppButton from "@/components/WhatsAppButton/WhatsAppButton";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: {
    default: "Capital Solutions | Hospitality & Facility Maintenance Services in Saudi Arabia & GCC",
    template: "%s | Capital Solutions"
  },
  description: "Over 35 years of operational experience delivering preventive, corrective, and emergency maintenance support for hotels, restaurants, and commercial facilities across Saudi Arabia, UAE, Qatar, Kuwait, Bahrain, and Oman.",
  keywords: [
    "facility maintenance Saudi Arabia",
    "hospitality maintenance GCC",
    "HVAC maintenance hotels",
    "kitchen equipment maintenance",
    "cold room maintenance",
    "building maintenance Riyadh",
    "hotel engineering services",
    "preventive maintenance hospitality",
    "facility management UAE",
    "MEP services GCC"
  ],
  authors: [{ name: "Capital Solutions" }],
  creator: "Capital Solutions",
  publisher: "Capital Solutions",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Capital Solutions",
    title: "Capital Solutions | Hospitality & Facility Maintenance Services in GCC",
    description: "35+ years delivering reliable maintenance support for hotels, restaurants, and commercial facilities across Saudi Arabia and the GCC.",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Capital Solutions - Facility Maintenance GCC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Capital Solutions | Facility Maintenance Services GCC",
    description: "Preventive, corrective, and emergency maintenance for hospitality and commercial facilities across Saudi Arabia and GCC.",
    images: ["/logo.png"],
  },
  other: {
    "geo.region": "SA",
    "geo.placename": "Riyadh, Saudi Arabia",
    "geo.position": "24.7136;46.6753",
    "ICBM": "24.7136, 46.6753",
  },
};

// JSON-LD Structured Data
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Capital Solutions",
  "url": "https://capitalksa.com",
  "logo": "https://capitalksa.com/logo.png",
  "description": "Technical, maintenance, and operational support for hospitality and commercial facilities across the GCC.",
  "foundingDate": "1990",
  "founder": {
    "@type": "Person",
    "name": "Mohamed Faisal"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Riyadh",
    "addressCountry": "SA"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+966-50-093-3904",
    "contactType": "customer service",
    "email": "faisal@capitalksa.com",
    "areaServed": ["SA", "AE", "QA", "KW", "BH", "OM"],
    "availableLanguage": ["English", "Arabic"]
  },
  "areaServed": [
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "Kuwait" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Oman" }
  ],
  "sameAs": []
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Capital Solutions",
  "url": "https://capitalksa.com",
  "description": "Hospitality and facility maintenance services across the GCC region."
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Facility Maintenance",
  "provider": {
    "@type": "Organization",
    "name": "Capital Solutions"
  },
  "areaServed": [
    { "@type": "Country", "name": "Saudi Arabia" },
    { "@type": "Country", "name": "United Arab Emirates" },
    { "@type": "Country", "name": "Qatar" },
    { "@type": "Country", "name": "Kuwait" },
    { "@type": "Country", "name": "Bahrain" },
    { "@type": "Country", "name": "Oman" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Maintenance Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "HVAC, Cooling & Refrigeration Services" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cold Room & Kitchen Equipment Maintenance" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Plumbing & Water Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Electrical & Low-Voltage Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Intercom & Communication Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Security & Access Control" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fire & Life Safety Systems" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Civil, Structural & Interior Works" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Carpentry, Joinery & Fixtures" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Housekeeping & Utility Support" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Procurement & Technical Supply" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Facility Management Support" } }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Script
          id="service-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        />
      </head>
      <body className={poppins.variable}>
        <Navbar />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
