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
    default: "Goldstone Fitness | Best Gym & Fitness Centre in Yelahanka, Bengaluru",
    template: "%s | Goldstone Fitness",
  },

  description:
    "Goldstone Fitness is the premium gym & fitness centre in Yelahanka, Bengaluru. Certified personal trainers, CrossFit, strength training, yoga, and custom nutrition plans.",

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
    "Gym Yelahanka",
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
    title: "Goldstone Fitness | Best Gym & Fitness Centre in Yelahanka, Bengaluru",

    description:
      "Experience Yelahanka's best gym. Goldstone Fitness offers certified trainers, top-tier strength and CrossFit equipment, and custom nutrition programs.",

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

    title: "Goldstone Fitness | Gym & Fitness Centre in Yelahanka",

    description:
      "Premium Gym in Yelahanka, Bengaluru with top-tier equipment and certified coaches.",

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

  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/icon.svg",
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
  "@type": "Gym",
  "name": "Goldstone Fitness",
  "image": "https://goldstonefitness.com/images/gallery/gallery-1.webp",
  "@id": "https://goldstonefitness.com/#gym",
  "url": "https://goldstonefitness.com",
  "telephone": "+918867441378",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "#No 62, KFC Building – 4th Floor, Baba Nagar, Bagalur Main Road",
    "addressLocality": "Yelahanka",
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
  ],
  "sameAs": [
    "https://instagram.com/goldstone_fitness_01"
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