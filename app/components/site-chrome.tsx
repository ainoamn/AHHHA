"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { navigation, profile } from "../site-content";
import { useLanguage } from "./language-provider";

function MenuIcon({ open }: { open: boolean }) {
  return <span className={open ? "menu-icon menu-icon--open" : "menu-icon"} aria-hidden="true"><i /><i /></span>;
}

export function ArrowIcon({ mirrored = false }: { mirrored?: boolean }) {
  return (
    <svg aria-hidden="true" className={mirrored ? "icon icon--mirrored" : "icon"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function ExternalIcon() {
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M14 5h5v5M19 5l-9 9" />
      <path d="M19 13v5a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
      <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function SiteChrome({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, isArabic, toggleLanguage } = useLanguage();

  useEffect(() => setMenuOpen(false), [pathname]);

  if (pathname?.startsWith("/admin")) {
    return <>{children}</>;
  }

  return (
    <div className="site-shell" dir={isArabic ? "rtl" : "ltr"} lang={language}>
      <a className="skip-link" href="#main-content">{isArabic ? "انتقل إلى المحتوى" : "Skip to content"}</a>

      <header className="site-header">
        <div className="container header-inner">
          <Link className="brand" href="/" aria-label={profile.shortName[language]}>
            <span className="brand-mark">AHHA</span>
            <span className="brand-copy">
              <strong>{profile.shortName[language]}</strong>
              <small>{isArabic ? "ملف شخصي • سيرة مهنية" : "PERSONAL PROFILE • CV"}</small>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label={isArabic ? "التنقل الرئيسي" : "Primary navigation"}>
            {navigation.map((item) => (
              <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
                {item.label[language]}
              </Link>
            ))}
          </nav>

          <div className="header-actions">
            <button className="language-toggle" type="button" onClick={toggleLanguage} aria-label={isArabic ? "Switch to English" : "التبديل إلى العربية"}>
              <span>{isArabic ? "English" : "العربية"}</span>
              <span className="language-dot" aria-hidden="true" />
            </button>
            <button className="menu-toggle" type="button" aria-label={isArabic ? "القائمة" : "Menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
              <MenuIcon open={menuOpen} />
            </button>
          </div>
        </div>

        <nav className={menuOpen ? "mobile-nav mobile-nav--open" : "mobile-nav"} aria-label={isArabic ? "القائمة" : "Menu"}>
          <div className="container">
            {navigation.map((item, index) => (
              <Link className={pathname === item.href ? "active" : ""} href={item.href} key={item.href}>
                <span>{String(index + 1).padStart(2, "0")}</span>{item.label[language]}
              </Link>
            ))}
          </div>
        </nav>
      </header>

      {children}

      <footer className="site-footer">
        <div className="container footer-main">
          <Link className="brand footer-brand" href="/">
            <span className="brand-mark">AHHA</span>
            <span className="brand-copy"><strong>{profile.shortName[language]}</strong><small>LEAD • BUILD • DEVELOP</small></span>
          </Link>
          <p>{isArabic ? "خبرة إدارية، شغف بالتطوير، ورؤية تبني للمستقبل." : "Administrative experience, a passion for development and a vision built for the future."}</p>
          <Link className="footer-contact" href="/contact">{isArabic ? "ابدأ حوارًا" : "Start a conversation"}<ArrowIcon mirrored={isArabic} /></Link>
        </div>
        <div className="container footer-bottom">
          <span>© {new Date().getFullYear()} {profile.shortName[language]}. {isArabic ? "جميع الحقوق محفوظة" : "All rights reserved"}.</span>
          <Link href="/education">{isArabic ? "التعليم والتأهيل" : "Education & qualifications"}</Link>
        </div>
      </footer>
    </div>
  );
}
