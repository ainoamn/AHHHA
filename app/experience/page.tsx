"use client";

import { experience } from "../site-content";
import { useLanguage } from "../components/language-provider";
import { PageHero, NextPage } from "../components/page-elements";

export default function ExperiencePage() {
  const { language, isArabic } = useLanguage();
  return (
    <main id="main-content">
      <PageHero
        number="03"
        eyebrow={{ ar: "الخبرة المهنية", en: "Professional experience" }}
        title={{ ar: "مسيرة مهنية تتدرج من العلاقات إلى قيادة الإدارة والمال.", en: "A career that grew from public relations into administrative and financial leadership." }}
        lead={{ ar: "منذ عام 2007، عملت عبر قطاعات ومؤسسات متعددة، وتعلّمت أن القيادة الفاعلة تبدأ من التفاصيل وتنتهي بنتيجة يراها الجميع.", en: "Since 2007, I have worked across sectors and organisations, learning that effective leadership begins in the details and ends in outcomes everyone can see." }}
        aside={<div className="hero-aside-stat"><strong>+15</strong><span>{isArabic ? "عامًا من الخبرة" : "Years of experience"}</span></div>}
      />

      <section className="dark-section experience-detail-section">
        <div className="container experience-layout">
          <div className="experience-sticky">
            <p className="eyebrow"><span>2007</span>{isArabic ? "من الميدان إلى القيادة" : "From the field to leadership"}</p>
            <h2>{isArabic ? "ثماني محطات، وخيط واحد: تطوير طريقة العمل." : "Eight roles, one constant: improving how work gets done."}</h2>
            <p>{isArabic ? "كل محطة أضافت بُعدًا جديدًا إلى خبرتي في الناس والإجراءات والعقود والمال والتقنية." : "Each role added a new dimension to my experience across people, process, contracts, finance and technology."}</p>
          </div>
          <div className="career-timeline">
            {experience.map((item, index) => (
              <article className="career-entry" key={`${item.organization}-${item.period}-${index}`}>
                <div className="career-meta"><span>{String(index + 1).padStart(2, "0")}</span><time>{item.period}</time></div>
                <div className="career-copy">
                  <h3>{item.title[language]}</h3>
                  <p className="career-company">{item.organization}</p>
                  <p className="career-place">{item.location[language]}</p>
                  <p>{item.description[language]}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <NextPage href="/vision" number="04" label={{ ar: "الصفحة التالية", en: "Next page" }} title={{ ar: "التطلعات والرؤية", en: "Vision & aspirations" }} />
    </main>
  );
}
