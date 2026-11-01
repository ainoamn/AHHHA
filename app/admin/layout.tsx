import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "لوحة التحكم | عبد الحميد الرواحي",
  robots: { index: false, follow: false },
};

export default function AdminRootLayout({ children }: { children: React.ReactNode }) {
  return <div className="admin-body">{children}</div>;
}
