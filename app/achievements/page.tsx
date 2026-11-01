"use client";

import { achievements } from "../site-content";
import { useLanguage } from "../components/language-provider";
import { PageHero, NextPage } from "../components/page-elements";

export default function AchievementsPage() {
  const { language, isArabic } = useLanguage();
  return (
    <main id="main-content">
      <PageHero
        number="05"
        eyebrow={{ ar: "الإنجازات", en: "Achievements" }}
        title={{ ar: "أفكار انتقلت من الورق إلى الواقع.", en: "Ideas that moved from paper into reality." }}
        lead={{ ar: "لا أقيس الإنجاز بحجمه فقط، بل بما أضافه من تجربة، وما بناه من معرفة، وما تركه من أثر على الناس والعمل.", en: "I measure achievement not only by scale, but by the experience it creates, the knowledge it builds and the impact it leaves on people and work." }}
        aside={<div className="hero-aside-stat"><strong>04</strong><span>{isArabic ? "محطات أعتز بها" : "Milestones I value"}</span></div>}
      />

      <section className="paper-section achievement-detail-section">
        <div className="container achievement-list">
          {achievements.map((achievement) => (
            <article className="achievement-row" key={achievement.number}>
              <span className="achievement-number">{achievement.number}</span>
              <h2>{achievement.title[language]}</h2>
              <p>{achievement.description[language]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="dark-section impact-section">
        <div className="container impact-grid">
          <div>
            <p className="eyebrow"><span>IMPACT</span>{isArabic ? "الأثر المجتمعي" : "Community impact"}</p>
            <h2>{isArabic ? "النجاح الأجمل هو ما يصل أثره إلى الآخرين." : "The most meaningful success is the one others can feel."}</h2>
          </div>
          <p>{isArabic ? "من العمل الشبابي والرحلات الجماعية إلى متابعة مبادرات تشجير حديقة عامة وتحسين الطرق الداخلية في المعبيلة الجنوبية؛ أؤمن بأن الخبرة تصبح أعمق عندما تخدم المجتمع." : "From youth activities and group trips to supporting a public park planting project and internal-road improvements in South Maabela, I believe experience becomes more meaningful when it serves the community."}</p>
        </div>
      </section>

      <NextPage href="/ventures" number="06" label={{ ar: "الصفحة التالية", en: "Next page" }} title={{ ar: "المؤسسات والأعمال", en: "Organisations & ventures" }} />
    </main>
  );
}
