"use client";

import { organisations, projects } from "../site-content";
import { useLanguage } from "../components/language-provider";
import { PageHero, NextPage } from "../components/page-elements";
import { ExternalIcon } from "../components/site-chrome";

export default function VenturesPage() {
  const { language, isArabic } = useLanguage();
  return (
    <main id="main-content">
      <PageHero
        number="06"
        eyebrow={{ ar: "المؤسسات والأعمال", en: "Organisations & ventures" }}
        title={{ ar: "ما أسسته وأديره، وما أعمل على بنائه.", en: "What I founded, manage and continue to build." }}
        lead={{ ar: "تأتي أعمالي بعد خبرتي المهنية؛ فهي امتداد طبيعي لشغفي بالإدارة والتقنية وتحويل الاحتياج الحقيقي إلى مشروع أو منصة قابلة للتطور.", en: "My ventures grow from my professional experience—an extension of my passion for administration, technology and turning real needs into projects and platforms that can evolve." }}
        aside={<div className="hero-aside-stat"><strong>03+04</strong><span>{isArabic ? "مؤسسات ومشاريع" : "Organisations & projects"}</span></div>}
      />

      <section className="dark-section organisations-detail-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow"><span>FOUNDED</span>{isArabic ? "ما أسسته وأدرته" : "What I founded and led"}</p>
            <h2>{isArabic ? "مؤسسات ومبادرات بدأت بفكرة." : "Organisations and initiatives that began with an idea."}</h2>
          </div>
          <div className="organisation-grid">
            {organisations.map((organisation, index) => (
              <article className="organisation-card" key={organisation.englishName}>
                <div className="organisation-top"><span>0{index + 1}</span><small>{organisation.englishName}</small></div>
                <h3>{organisation.name[language]}</h3>
                <p className="organisation-role">{organisation.role[language]}</p>
                <p>{organisation.description[language]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="paper-section projects-detail-section">
        <div className="container">
          <div className="projects-intro">
            <div>
              <p className="eyebrow eyebrow--dark"><span>DIGITAL</span>{isArabic ? "أعمال رقمية" : "Digital work"}</p>
              <h2>{isArabic ? "منصات تجمع الإدارة والمال والعقار." : "Platforms connecting administration, finance and property."}</h2>
            </div>
            <p>{isArabic ? "مجموعة مختارة من المنصات والأنظمة التي أعمل على تصورها وتطويرها؛ تأتي هنا بعد السيرة والخبرة لأنها جزء من الرحلة وليست كل القصة." : "A selection of platforms and systems I am shaping. They appear after my CV and experience because they are part of the journey—not the whole story."}</p>
          </div>
          <div className="project-detail-grid">
            {projects.map((project, index) => (
              <article className="project-detail-card" key={project.title.en}>
                <div className="project-index">{String(index + 1).padStart(2, "0")}</div>
                <p className="project-type">{project.type[language]}</p>
                <h3>{project.title[language]}</h3>
                <p>{project.description[language]}</p>
                <a href={project.href} target="_blank" rel="noreferrer">{isArabic ? "زيارة المشروع" : "Visit project"}<ExternalIcon /></a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NextPage href="/travel" number="07" label={{ ar: "الصفحة التالية", en: "Next page" }} title={{ ar: "السفر والدول", en: "Travel & countries" }} />
    </main>
  );
}
