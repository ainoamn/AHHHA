"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import type { ReactNode } from "react";

const links = [
  { href: "/admin", label: "الرئيسية" },
  { href: "/admin/profile", label: "الملف الشخصي" },
  { href: "/admin/experience", label: "الخبرات" },
  { href: "/admin/travel", label: "السفر والدول" },
];

export function AdminShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.replace("/admin/login");
    router.refresh();
  }

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <strong>AHHA Admin</strong>
          <span>إدارة الموقع</span>
        </div>
        <nav>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href || (link.href !== "/admin" && pathname.startsWith(link.href)) ? "active" : ""}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="admin-sidebar-actions">
          <a href="/" target="_blank" rel="noreferrer">
            عرض الموقع
          </a>
          <button type="button" onClick={logout}>
            خروج
          </button>
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
