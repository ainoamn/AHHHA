"use client";

import { courses, education } from "../site-content";
import { useLanguage } from "../components/language-provider";
import { PageHero, NextPage } from "../components/page-elements";

export default function EducationPage() {
  const { language } = useLanguage();
  return (
    <main id="main-content">
      <PageHero
        number="ED"
        eyebrow={{ ar: "التعليم والتأهيل", en: "Education & qualifications" }}
        title={{ ar: "تعلّم مستمر يجمع الإدارة والمال والتقنية.", en: "Continuous learning across management, finance and technology." }}
        lead={{ ar: "التعليم بالنسبة لي ليس محطة انتهت؛ بل ممارسة مستمرة تساعدني على فهم عملي بعمق أكبر وتطوير أدواتي مع كل مرحلة.", en: "For me, education is not a completed chapter; it is a continuous practice that deepens my work and expands my tools at every stage." }}
      />

      <section className="paper-section education-detail-section">
        <div className="container education-layout">
          <div className="education-column">
            <p className="eyebrow eyebrow--dark"><span>01</span>{language === "ar" ? "المؤهلات" : "Qualifications"}</p>
            <div className="education-list">
              {education.map((item, index) => (
                <article key={`${item.period}-${item.qualification.en}`}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <time>{item.period}</time>
                  <h2>{item.qualification[language]}</h2>
                  <p>{item.institution[language]}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="courses-column">
            <p className="eyebrow eyebrow--dark"><span>02</span>{language === "ar" ? "الدورات المهنية" : "Professional courses"}</p>
            <div className="course-detail-list">
              {courses.map((course) => (
                <article key={`${course.year}-${course.name.en}`}>
                  <time>{course.year}</time>
                  <div><h3>{course.name[language]}</h3><p>{typeof course.provider === "string" ? course.provider : course.provider[language]}</p></div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NextPage href="/experience" number="03" label={{ ar: "تابع المسيرة", en: "Continue the journey" }} title={{ ar: "الخبرات المهنية", en: "Professional experience" }} />
    </main>
  );
}
