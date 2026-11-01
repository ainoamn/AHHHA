import type { Metadata } from "next";

const title = "المؤسسات والأعمال";
const description = "مؤسسات ومبادرات عبد الحميد الرواحي وأعماله الرقمية المختارة في الإدارة والمال والعقار والتقنية.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: ["/og.png"] },
  twitter: { title, description, images: ["/og.png"] },
};

export default function VenturesLayout({ children }: { children: React.ReactNode }) { return children; }
