import type { Metadata } from "next";

const title = "السفر والدول";
const description = "الدول التي زارها عبد الحميد الرواحي مع ملخص كل رحلة وسنوات الزيارة والصور.";

export const metadata: Metadata = {
  title,
  description,
  openGraph: { title, description, images: ["/og.png"] },
  twitter: { title, description, images: ["/og.png"] },
};

export default function TravelLayout({ children }: { children: React.ReactNode }) {
  return children;
}
