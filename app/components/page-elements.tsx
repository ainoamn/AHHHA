"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import type { LocalizedText } from "../site-content";
import { useLanguage } from "./language-provider";
import { ArrowIcon } from "./site-chrome";

export function PageHero({ number, eyebrow, title, lead, aside }: { number: string; eyebrow: LocalizedText; title: LocalizedText; lead: LocalizedText; aside?: ReactNode }) {
  const { language } = useLanguage();
  return (
    <section className="page-hero">
      <div className="page-hero-grid" aria-hidden="true" />
      <div className="page-watermark" aria-hidden="true">{number}</div>
      <div className="container page-hero-inner">
        <p className="eyebrow"><span>{number}</span>{eyebrow[language]}</p>
        <div className="page-hero-copy">
          <h1>{title[language]}</h1>
          <p>{lead[language]}</p>
        </div>
        {aside ? <div className="page-hero-aside">{aside}</div> : null}
      </div>
    </section>
  );
}

export function NextPage({ href, label, title, number }: { href: string; label: LocalizedText; title: LocalizedText; number: string }) {
  const { language, isArabic } = useLanguage();
  return (
    <section className="next-page">
      <Link className="container next-page-link" href={href}>
        <span className="next-page-number">{number}</span>
        <span className="next-page-copy"><small>{label[language]}</small><strong>{title[language]}</strong></span>
        <span className="next-page-arrow"><ArrowIcon mirrored={isArabic} /></span>
      </Link>
    </section>
  );
}
