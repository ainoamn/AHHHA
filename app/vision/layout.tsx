import type { Metadata } from "next";

const title = "التطلعات والرؤية";
const description = "تطلعات عبد الحميد الرواحي نحو إدارة أذكى وبيئة عمل تتمحور حول الإنسان ومؤسسات قابلة للنمو.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: ["/og.png"] },
  twitter: { title, description, images: ["/og.png"] },
};

export default function VisionLayout({ children }: { children: React.ReactNode }) { return children; }
