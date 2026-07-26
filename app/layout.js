import "./globals.css";

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
    default: "Goldstone Fitness | Premium Gym & Fitness Centre",
    template: "%s | Goldstone Fitness",
  },

  description:
    "Premium Gym & Fitness Centre in Yelahanka, Bengaluru. Fit for now 💪🏻, fit for always. FIGHT👊🏻 for FITNESS💪🏻. It starts with you.",

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
    title: "Goldstone Fitness | Premium Gym & Fitness Centre",

    description:
      "Premium Gym & Fitness Centre with world-class equipment, certified trainers, and personalised fitness programmes.",

    url: "https://goldstonefitness.com",

    siteName: "Goldstone Fitness",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Goldstone Fitness",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Goldstone Fitness",

    description:
      "Premium Gym & Fitness Centre with certified trainers and modern equipment.",

    images: ["/og-image.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
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