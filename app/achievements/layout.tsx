import type { Metadata } from "next";

const title = "الإنجازات";
const description = "إنجازات عبد الحميد الرواحي في تأسيس الأعمال والمبادرات الشبابية وخدمة المجتمع.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: ["/og.png"] },
  twitter: { title, description, images: ["/og.png"] },
};

export default function AchievementsLayout({ children }: { children: React.ReactNode }) { return children; }
