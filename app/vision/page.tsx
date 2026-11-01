"use client";

import { aspirations, principles, profile } from "../site-content";
import { useLanguage } from "../components/language-provider";
import { PageHero, NextPage } from "../components/page-elements";

export default function VisionPage() {
  const { language, isArabic } = useLanguage();
  return (
    <main id="main-content">
      <PageHero
        number="04"
        eyebrow={{ ar: "التطلعات والرؤية", en: "Vision & aspirations" }}
        title={{ ar: "المستقبل الذي أعمل من أجله يبدأ بنظامٍ أفضل اليوم.", en: "The future I work toward begins with a better system today." }}
        lead={profile.objective}
        aside={<div className="vision-seal"><span>AHHA</span><small>{isArabic ? "أبني للمستقبل" : "BUILD FOR TOMORROW"}</small></div>}
      />

      <section className="paper-section aspiration-section">
        <div className="container">
          <div className="section-heading section-heading--dark narrow-heading">
            <p className="eyebrow eyebrow--dark"><span>VISION</span>{isArabic ? "ثلاثة اتجاهات" : "Three directions"}</p>
            <h2>{isArabic ? "تطلعات واضحة تجمع التقنية والإنسان والنمو." : "A clear ambition connecting technology, people and growth."}</h2>
          </div>
          <div className="three-grid aspiration-grid">
            {aspirations.map((item) => <article className="aspiration-card" key={item.number}><span>{item.number}</span><h3>{item.title[language]}</h3><p>{item.description[language]}</p></article>)}
          </div>
        </div>
      </section>

      <section className="dark-section philosophy-section">
        <div className="container philosophy-grid">
          <blockquote>{isArabic ? "النجاح ليس مشروعًا منفردًا؛ بل قدرة مستمرة على البناء والتطوير." : "Success is not a single project; it is the lasting ability to build and evolve."}</blockquote>
          <div className="principles-panel">
            <p className="eyebrow"><span>PRINCIPLES</span>{isArabic ? "مبادئ تقودني" : "Principles that guide me"}</p>
            <ol>{principles.map((principle, index) => <li key={principle.en}><span>{String(index + 1).padStart(2, "0")}</span>{principle[language]}</li>)}</ol>
          </div>
        </div>
      </section>

      <NextPage href="/achievements" number="05" label={{ ar: "الصفحة التالية", en: "Next page" }} title={{ ar: "الإنجازات", en: "Achievements" }} />
    </main>
  );
}
