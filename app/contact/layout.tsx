import type { Metadata } from "next";

const title = "التواصل";
const description = "وسائل التواصل المهني المباشر مع عبد الحميد الرواحي في مسقط، سلطنة عُمان.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: ["/og.png"] },
  twitter: { title, description, images: ["/og.png"] },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) { return children; }
