import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "./components/language-provider";
import { SiteChrome } from "./components/site-chrome";

export const metadata: Metadata = {
  metadataBase: new URL("https://abdulhamid-alrawahi.ameed1.chatgpt.site"),
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
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
