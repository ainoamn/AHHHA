"use client";

import Link from "next/link";
import { getTravelFlagUrl, travelCountries } from "../site-content";
import { useLanguage } from "../components/language-provider";
import { PageHero, NextPage } from "../components/page-elements";

export default function TravelPage() {
  const { language, isArabic } = useLanguage();

  return (
    <main id="main-content">
      <PageHero
        number="07"
        eyebrow={{ ar: "السفر والدول", en: "Travel & countries" }}
        title={{ ar: "دول زرتها، وذكريات ما زالت حاضرة.", en: "Countries I visited, and memories that still linger." }}
        lead={{
          ar: "خريطة مختصرة لرحلاتي؛ اضغط على علم أي دولة لمعرفة ملخص الزيارة والتفاصيل والصور إن وُجدت.",
          en: "A concise map of my journeys. Tap any flag to open the visit summary, details and photos when available.",
        }}
        aside={
          <div className="hero-aside-stat">
            <strong>{String(travelCountries.length).padStart(2, "0")}</strong>
            <span>{isArabic ? "دول موثّقة" : "Documented countries"}</span>
          </div>
        }
      />

      <section className="paper-section travel-list-section">
        <div className="container">
          <div className="section-heading section-heading--dark">
            <p className="eyebrow eyebrow--dark">
              <span>MAP</span>
              {isArabic ? "خريطة الرحلات" : "Travel map"}
            </p>
            <h2>{isArabic ? "كل علم يفتح باب رحلة." : "Every flag opens a journey."}</h2>
          </div>

          <div className="travel-grid">
            {travelCountries.map((country) => (
              <Link className="travel-card" href={`/travel/${country.slug}`} key={country.slug}>
                <span className="travel-card-flag-wrap" aria-hidden="true">
                  <img
                    className="travel-card-flag"
                    src={getTravelFlagUrl(country.code, 320)}
                    alt=""
                    width={160}
                    height={120}
                    loading="lazy"
                  />
                </span>
                <span className="travel-card-body">
                  <small>{country.year}</small>
                  <strong>{country.name[language]}</strong>
                  <span>{country.period ? country.period[language] : country.year}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <NextPage
        href="/contact"
        number="08"
        label={{ ar: "الصفحة التالية", en: "Next page" }}
        title={{ ar: "التواصل", en: "Contact" }}
      />
    </main>
  );
}
