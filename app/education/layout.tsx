import type { Metadata } from "next";

const title = "التعليم والتأهيل";
const description = "تعليم عبد الحميد الرواحي ومؤهلاته ودوراته المهنية في الإدارة والموارد البشرية والمال والتسويق.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: ["/og.png"] },
  twitter: { title, description, images: ["/og.png"] },
};

export default function EducationLayout({ children }: { children: React.ReactNode }) { return children; }
