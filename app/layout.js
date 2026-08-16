import { Plus_Jakarta_Sans, Antonio } from "next/font/google";
import "./globals.css";

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

  metadataBase: new URL("https://goldstonefitness.com"),

  title: {
    default: "Goldstone Fitness | Best Gym & Fitness Centre in Kattigenahalli, Bengaluru",
    template: "%s | Goldstone Fitness",
  },

  description:
    "Goldstone Fitness is the premium gym & fitness centre in Kattigenahalli, Bengaluru. Get personal training, CrossFit, yoga, & custom diets. Join now!",

  keywords: [
    "Gym",
    "Fitness Centre",
    "Workout",
    "Personal Trainer",
    "Bodybuilding",
    "Strength Training",
    "Cardio",
    "Weight Loss",
    "Fitness Club",
    "Gym Bangalore",
    "Gym Kattigenahalli",
    "Premium Gym",
    "Fitness Studio",
    "CrossFit Bangalore",
    "Goldstone Fitness",
  ],

  authors: [
    {
      name: "Goldstone Fitness",
    },
  ],

  creator: "Goldstone Fitness",
  publisher: "Goldstone Fitness",
  applicationName: "Goldstone Fitness",

  openGraph: {
    title: "Goldstone Fitness | Best Gym & Fitness Centre in Kattigenahalli, Bengaluru",

    description:
      "Experience Kattigenahalli's best gym. Goldstone Fitness offers certified trainers, top-tier strength and CrossFit equipment, and custom nutrition programs.",

    url: "https://goldstonefitness.com",

    siteName: "Goldstone Fitness",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/images/gallery/gallery-1.webp",
        width: 1200,
        height: 630,
        alt: "Goldstone Fitness",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Goldstone Fitness | Gym & Fitness Centre in Kattigenahalli",

    description:
      "Premium Gym in Kattigenahalli, Bengaluru with top-tier equipment and certified coaches.",

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
    canonical: "/",
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
      "@type": "Gym",
      "@id": "https://goldstonefitness.com/#brand",
      "name": "Goldstone Fitness",
      "url": "https://goldstonefitness.com",
      "logo": "https://goldstonefitness.com/logo/logo.svg",
      "image": "https://goldstonefitness.com/images/gallery/gallery-1.webp",
      "telephone": "+918867441378",
      "sameAs": [
        "https://instagram.com/goldstone_fitness_01"
      ]
    },
    {
      "@type": "Gym",
      "@id": "https://goldstonefitness.com/#branch-kattigenahalli",
      "name": "Goldstone Fitness - Kattigenahalli",
      "parentOrganization": {
        "@type": "Gym",
        "@id": "https://goldstonefitness.com/#brand"
      },
      "url": "https://goldstonefitness.com#branches",
      "telephone": "+918867441378",
      "priceRange": "$$",
      "image": "https://goldstonefitness.com/images/gallery/gallery-1.webp",
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
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
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
      "@type": "Gym",
      "@id": "https://goldstonefitness.com/#branch-jakkur",
      "name": "Goldstone Fitness - Jakkur",
      "parentOrganization": {
        "@type": "Gym",
        "@id": "https://goldstonefitness.com/#brand"
      },
      "url": "https://goldstonefitness.com#branches",
      "telephone": "+918867441378",
      "priceRange": "$$",
      "image": "https://goldstonefitness.com/images/gallery/gallery-2.webp",
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
        "latitude": 13.072300729547326,
        "longitude": 77.60475883355028
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday"
          ],
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