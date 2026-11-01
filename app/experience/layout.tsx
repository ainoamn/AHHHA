import type { Metadata } from "next";

const title = "الخبرات المهنية";
const description = "المسيرة المهنية لعبد الحميد الرواحي منذ 2007 في العلاقات العامة والإدارة والموارد البشرية والشؤون المالية.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: ["/og.png"] },
  twitter: { title, description, images: ["/og.png"] },
};

export default function ExperienceLayout({ children }: { children: React.ReactNode }) { return children; }
