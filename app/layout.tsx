import type { Metadata, Viewport } from "next";
import { Amiri, Cairo } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./components/language-provider";
import { SiteChrome } from "./components/site-chrome";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://abdulhamid-alrawahi.ameed1.chatgpt.site");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "عبد الحميد الرواحي | الملف الشخصي والسيرة المهنية",
    template: "%s | عبد الحميد الرواحي",
  },
  description:
    "السيرة الذاتية لعبد الحميد بن حمود بن حمدان الرواحي: خبرة تتجاوز 15 عامًا في الإدارة والموارد البشرية والعلاقات العامة والشؤون المالية.",
  openGraph: {
    title: "عبد الحميد الرواحي | الملف الشخصي والسيرة المهنية",
    description: "موقع شخصي متعدد الصفحات يعرّف بعبد الحميد الرواحي وشغفه ومهاراته وخبراته وتطلعاته وإنجازاته وأعماله.",
    type: "website",
    locale: "ar_OM",
    alternateLocale: "en_US",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Abdul Hamid Al Rawahi — Personal Profile and Professional CV" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "عبد الحميد الرواحي | الملف الشخصي والسيرة المهنية",
    description: "موقع عبد الحميد الرواحي الشخصي: الشغف والمهارات والخبرات والتطلعات والإنجازات والأعمال.",
    images: ["/og.png"],
  },
  icons: {
    icon: [{ url: "/favicon.svg" }, { url: "/logo-ahhha.svg" }],
    shortcut: "/favicon.svg",
    apple: "/logo-ahhha.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#041215",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl" className={`${cairo.variable} ${amiri.variable}`}>
      <body>
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
