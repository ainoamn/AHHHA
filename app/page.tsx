"use client";

import Link from "next/link";
import { passions, personalFacts, profile, stats } from "./site-content";
import { useLanguage } from "./components/language-provider";
import { ArrowIcon, PinIcon } from "./components/site-chrome";
import { NextPage } from "./components/page-elements";

export default function Home() {
  const { language, isArabic } = useLanguage();

  const pageCards = [
    {
      number: "02",
      href: "/skills",
      label: { ar: "المهارات", en: "Skills" },
      title: { ar: "ما أتقنه وأطوّره", en: "What I master and keep developing" },
      copy: { ar: "قيادة، تشغيل، موارد بشرية، وتقنية.", en: "Leadership, operations, people and technology." },
    },
    {
      number: "03",
      href: "/experience",
      label: { ar: "الخبرات", en: "Experience" },
      title: { ar: "مسيرة بدأت من الميدان", en: "A career built in the field" },
      copy: { ar: "ثماني محطات مهنية موثقة منذ 2007.", en: "Eight documented professional roles since 2007." },
    },
    {
      number: "04",
      href: "/vision",
      label: { ar: "التطلعات", en: "Vision" },
      title: { ar: "ما أريد أن أبنيه غدًا", en: "What I aim to build tomorrow" },
      copy: { ar: "إدارة أذكى، بيئة إنسانية، ومؤسسات تنمو.", en: "Smarter administration, human workplaces and scalable organisations." },
    },
  ];

  return (
    <main id="main-content">
      <section className="home-hero">
        <div className="hero-grid-pattern" aria-hidden="true" />
        <div className="hero-glow hero-glow--one" aria-hidden="true" />
        <div className="hero-glow hero-glow--two" aria-hidden="true" />
        <div className="container home-hero-grid">
          <div className="home-copy">
            <div className="profile-pill"><span className="status-pulse" />{isArabic ? "ملف شخصي • قيادة • تطوير" : "PERSONAL PROFILE • LEADERSHIP • DEVELOPMENT"}</div>
            <p className="hero-role">{profile.role[language]}</p>
            <h1>{profile.name[language]}</h1>
            <h2>{profile.headline[language]}</h2>
            <p className="hero-intro">{profile.summary[language]}</p>
            <div className="hero-actions">
              <Link className="button button--primary" href="/skills">{isArabic ? "استكشف مسيرتي" : "Explore my journey"}<ArrowIcon mirrored={isArabic} /></Link>
              <Link className="button button--ghost" href="/contact">{isArabic ? "تواصل معي" : "Contact me"}</Link>
            </div>
            <div className="location-line"><PinIcon /><span>{profile.location[language]}</span></div>
          </div>

          <div className="portrait-stage" aria-label={profile.name[language]}>
            <div className="portrait-frame-lines" aria-hidden="true"><i /><i /><i /><i /></div>
            <div className="portrait-orbit portrait-orbit--outer" aria-hidden="true" />
            <div className="portrait-orbit portrait-orbit--inner" aria-hidden="true" />
            <div className="portrait-image-wrap">
              <img src="/abdulhamid-alrawahi.png" alt={profile.name[language]} />
              <span className="portrait-monogram">AHHA</span>
            </div>
            <div className="portrait-caption"><span>LEAD</span><i /><span>BUILD</span><i /><span>DEVELOP</span></div>
          </div>
        </div>

        <div className="container stats-strip" aria-label={isArabic ? "ملخص السيرة" : "CV summary"}>
          {stats.map((stat) => <div className="stat-item" key={stat.value}><strong>{stat.value}</strong><span>{stat.label[language]}</span></div>)}
        </div>
      </section>

      <section className="paper-section about-home">
        <div className="container split-intro">
          <div>
            <p className="eyebrow eyebrow--dark"><span>01</span>{isArabic ? "عن عبد الحميد" : "About Abdul Hamid"}</p>
            <h2>{isArabic ? "خبرة إدارية بروح مؤسس وعقلية مطوّر." : "Executive experience with a founder’s spirit and a builder’s mindset."}</h2>
          </div>
          <div className="about-copy">
            <p>{profile.summary[language]}</p>
            <dl className="facts-list">
              {personalFacts.map((fact) => <div key={fact.label.en}><dt>{fact.label[language]}</dt><dd>{fact.value[language]}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <section className="dark-section passion-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow"><span>PASSION</span>{isArabic ? "ما يحركني" : "What drives me"}</p>
            <h2>{isArabic ? "الشغف الذي يصنع اتجاهي." : "The passions that shape my direction."}</h2>
          </div>
          <div className="three-grid passion-grid">
            {passions.map((passion) => (
              <article className="number-card" key={passion.number}>
                <span>{passion.number}</span>
                <h3>{passion.title[language]}</h3>
                <p>{passion.description[language]}</p>
              </article>
            ))}
          </div>
          <div className="interests-line">
            <span>{isArabic ? "اهتماماتي" : "Interests"}</span>
            <p>{isArabic ? "القراءة • الكتابة • الابتكار • التقنية • التصميم • التصوير • السفر • التخييم" : "Reading • Writing • Innovation • Technology • Design • Photography • Travel • Camping"}</p>
          </div>
        </div>
      </section>

      <section className="paper-section journey-map">
        <div className="container">
          <div className="section-heading section-heading--dark">
            <p className="eyebrow eyebrow--dark"><span>EXPLORE</span>{isArabic ? "اكتشف الملف" : "Explore the profile"}</p>
            <h2>{isArabic ? "كل صفحة تحكي فصلًا مستقلًا من قصتي." : "Each page tells a distinct chapter of my story."}</h2>
          </div>
          <div className="page-card-grid">
            {pageCards.map((card) => (
              <Link className="page-card" href={card.href} key={card.href}>
                <span className="page-card-number">{card.number}</span>
                <small>{card.label[language]}</small>
                <h3>{card.title[language]}</h3>
                <p>{card.copy[language]}</p>
                <span className="page-card-arrow"><ArrowIcon mirrored={isArabic} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NextPage href="/skills" number="02" label={{ ar: "الصفحة التالية", en: "Next page" }} title={{ ar: "المهارات والقدرات", en: "Skills & capabilities" }} />
    </main>
  );
}
