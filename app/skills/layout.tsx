import type { Metadata } from "next";

const title = "المهارات والقدرات";
const description = "مهارات عبد الحميد الرواحي في القيادة والإدارة والموارد البشرية والتشغيل والتقنية.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: ["/og.png"] },
  twitter: { title, description, images: ["/og.png"] },
};

export default function SkillsLayout({ children }: { children: React.ReactNode }) { return children; }
