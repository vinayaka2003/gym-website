import { Plus_Jakarta_Sans, Antonio } from "next/font/google";
import "./globals.css";
import Script from "next/script";


const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

const antonio = Antonio({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-heading",
  display: "swap",
});

import Preloader from "./components/ui/Preloader/Preloader";
import ScrollProgress from "./components/ui/ScrollProgress/ScrollProgress";
import ScrollToTop from "./components/ui/ScrollToTop/ScrollToTop";
import WhatsAppButton from "./components/ui/WhatsAppButton/WhatsAppButton";
import BackToTop from "./components/ui/BackToTop/BackToTop";
import PageTransition from "./components/ui/PageTransition/PageTransition";
import InstaPopup from "./components/ui/InstaPopup/InstaPopup";

export const viewport = {
  themeColor: "#08090b",
};

export const metadata = {
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Goldstone Fitness",
  },

  metadataBase: new URL("https://www.goldstonefitness.in"),

  title: {
    default: "Goldstone Fitness | Premium Gym in Kattigenahalli & Jakkur, Bengaluru",
    template: "%s | Goldstone Fitness",
  },

  description:
    "Goldstone Fitness is Bengaluru's premier gym and fitness centre with locations in Kattigenahalli & Jakkur. We offer certified personal training, CrossFit, yoga, and bespoke nutrition.",

  keywords: [
    "Gym in Kattigenahalli",
    "Gym in Jakkur",
    "Best Gym in Bangalore",
    "Premium Fitness Centre",
    "Personal Trainer Bengaluru",
    "CrossFit Kattigenahalli",
    "Yoga Classes Jakkur",
    "Strength Training",
    "Weight Loss Program",
    "Bodybuilding Gym near me",
    "Goldstone Fitness",
    "Gym near Yelahanka",
    "Best Gym near Reva University",
    "Fitness Club Bangalore"
  ],

  authors: [
    {
      name: "Goldstone Fitness",
      url: "https://www.goldstonefitness.in",
    },
  ],

  creator: "Goldstone Fitness",
  publisher: "Goldstone Fitness",
  applicationName: "Goldstone Fitness",

  openGraph: {
    title: "Goldstone Fitness | Premium Gym in Kattigenahalli & Jakkur",

    description:
      "Experience Bengaluru's elite fitness centers. Goldstone Fitness offers certified trainers, top-tier strength and CrossFit equipment, and custom nutrition programs in Kattigenahalli & Jakkur.",

    url: "https://www.goldstonefitness.in",

    siteName: "Goldstone Fitness",

    locale: "en_IN",

    type: "website",

    images: [
      {
        url: "/images/gallery/gallery-1.webp",
        width: 1200,
        height: 630,
        alt: "Goldstone Fitness Premium Gym Interior",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@goldstonefitness",
    creator: "@goldstonefitness",
    title: "Goldstone Fitness | Gym & Fitness Centre in Kattigenahalli",
    description:
      "Premium Gym in Bengaluru with top-tier equipment and certified coaches. Join the elite fitness community.",
    images: ["/images/gallery/gallery-1.webp"],
  },

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

  alternates: {
    canonical: "https://www.goldstonefitness.in",
  },

  other: {
    "geo.region": "IN-KA",
    "geo.placename": "Bengaluru",
    "geo.position": "13.1155;77.6352",
    "ICBM": "13.1155, 77.6352",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.goldstonefitness.in/#brand",
      "name": "Goldstone Fitness",
      "url": "https://www.goldstonefitness.in",
      "logo": "https://www.goldstonefitness.in/logo/logo.svg",
      "image": "https://www.goldstonefitness.in/images/gallery/gallery-1.webp",
      "telephone": "+918867441378",
      "sameAs": [
        "https://instagram.com/goldstone_fitness_01"
      ]
    },
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.goldstonefitness.in/#branch-kattigenahalli",
      "name": "Goldstone Fitness - Kattigenahalli",
      "parentOrganization": {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://www.goldstonefitness.in/#brand"
      },
      "url": "https://www.goldstonefitness.in#branches",
      "telephone": "+918867441378",
      "priceRange": "$$",
      "image": "https://www.goldstonefitness.in/images/gallery/gallery-1.webp",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "150"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "#No 62, KFC Building – 4th Floor, Dwaraka Nagar, Bagalur Main Road",
        "addressLocality": "Kattigenahalli",
        "addressRegion": "Bengaluru",
        "postalCode": "560064",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.1155,
        "longitude": 77.6352
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "05:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "07:00",
          "closes": "11:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "16:00",
          "closes": "21:00"
        }
      ]
    },
    {
      "@type": "HealthAndBeautyBusiness",
      "@id": "https://www.goldstonefitness.in/#branch-jakkur",
      "name": "Goldstone Fitness - Jakkur",
      "parentOrganization": {
        "@type": "HealthAndBeautyBusiness",
        "@id": "https://www.goldstonefitness.in/#brand"
      },
      "url": "https://www.goldstonefitness.in#branches",
      "telephone": "+918867441378",
      "priceRange": "$$",
      "image": "https://www.goldstonefitness.in/images/gallery/gallery-2.webp",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "120"
      },
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "No 4, Sai ram building - 1st floor, above Kotak Mahindra bank, K V Jairam road, MCECHS layout phase 2, jakkur layout, jakkur",
        "addressLocality": "Jakkur",
        "addressRegion": "Bengaluru",
        "postalCode": "560064",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 13.0723,
        "longitude": 77.6047
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "05:00",
          "closes": "22:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "07:00",
          "closes": "11:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": "Sunday",
          "opens": "16:00",
          "closes": "21:00"
        }
      ]
    }
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} ${antonio.variable}`}>
      <body>
        {/* Local Business JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-GMD4VZLTTV"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            window.gtag = function(){window.dataLayer.push(arguments);}
            window.gtag('js', new Date());
            window.gtag('config', 'G-GMD4VZLTTV');
          `}
        </Script>


        {/* Initial Loading Screen */}
        <Preloader />

        {/* Scroll Progress Indicator */}
        <ScrollProgress />

        {/* Scroll to Top on Route Change */}
        <ScrollToTop />

        {/* Animated Page Content */}
        <PageTransition>
          {children}
        </PageTransition>

        {/* Floating Action Buttons */}
        <WhatsAppButton />
        <BackToTop />
        
        {/* Marketing Popups */}
        <InstaPopup />

      </body>
    </html>
  );
}