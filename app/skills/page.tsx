"use client";

import Link from "next/link";
import { skillGroups } from "../site-content";
import { useLanguage } from "../components/language-provider";
import { PageHero, NextPage } from "../components/page-elements";
import { ArrowIcon } from "../components/site-chrome";

export default function SkillsPage() {
  const { language, isArabic } = useLanguage();
  return (
    <main id="main-content">
      <PageHero
        number="02"
        eyebrow={{ ar: "المهارات والقدرات", en: "Skills & capabilities" }}
        title={{ ar: "مهارات صقلها الميدان، وتدفعها الرغبة في التطوير.", en: "Skills shaped by experience and driven by a desire to improve." }}
        lead={{ ar: "أجمع بين قيادة الناس، وضبط العمليات، وفهم التقنية؛ لأحوّل الهدف إلى نظام واضح يمكن تنفيذه وتطويره.", en: "I bring together people leadership, operational discipline and technology to turn goals into clear systems that can be executed and improved." }}
        aside={<div className="hero-aside-stat"><strong>03</strong><span>{isArabic ? "مجالات متكاملة" : "Integrated disciplines"}</span></div>}
      />

      <section className="paper-section skill-detail-section">
        <div className="container skill-detail-grid">
          {skillGroups.map((group, groupIndex) => (
            <article className="skill-detail-card" key={group.title.en}>
              <header><span>0{groupIndex + 1}</span><h2>{group.title[language]}</h2></header>
              <ul>{group.items[language].map((item, itemIndex) => <li key={item}><span>{String(itemIndex + 1).padStart(2, "0")}</span>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section method-section">
        <div className="container method-grid">
          <div className="section-heading">
            <p className="eyebrow"><span>METHOD</span>{isArabic ? "كيف أعمل" : "How I work"}</p>
            <h2>{isArabic ? "من الفكرة إلى التنفيذ، بخطوات محسوبة." : "From idea to execution, through deliberate steps."}</h2>
          </div>
          <ol className="method-list">
            {[
              { ar: "فهم الواقع وجمع التفاصيل", en: "Understand the reality and gather detail" },
              { ar: "ترتيب الأولويات والمسؤوليات", en: "Set priorities and ownership" },
              { ar: "بناء الإجراء أو النظام المناسب", en: "Build the right process or system" },
              { ar: "القياس والتحسين المستمر", en: "Measure and continuously improve" },
            ].map((item, index) => <li key={item.en}><span>{String(index + 1).padStart(2, "0")}</span><p>{item[language]}</p></li>)}
          </ol>
        </div>
        <div className="container education-cta">
          <span>{isArabic ? "المعرفة خلف المهارة" : "The learning behind the skills"}</span>
          <Link href="/education">{isArabic ? "استعرض التعليم والدورات" : "View education and courses"}<ArrowIcon mirrored={isArabic} /></Link>
        </div>
      </section>

      <NextPage href="/experience" number="03" label={{ ar: "الصفحة التالية", en: "Next page" }} title={{ ar: "الخبرات المهنية", en: "Professional experience" }} />
    </main>
  );
}
