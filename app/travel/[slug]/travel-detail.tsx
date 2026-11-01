"use client";

import Link from "next/link";
import type { TravelCountry } from "../../site-content";
import { getTravelFlagUrl, travelCountries } from "../../site-content";
import { useLanguage } from "../../components/language-provider";
import { ArrowIcon } from "../../components/site-chrome";
import { NextPage } from "../../components/page-elements";

export default function TravelDetail({ country }: { country: TravelCountry }) {
  const { language, isArabic } = useLanguage();
  const index = travelCountries.findIndex((item) => item.slug === country.slug);
  const nextCountry = travelCountries[(index + 1) % travelCountries.length];

  return (
    <main id="main-content">
      <section className="page-hero travel-detail-hero">
        <div className="page-hero-grid" aria-hidden="true" />
        <div className="container page-hero-inner">
          <Link className="travel-back" href="/travel">
            <ArrowIcon mirrored={!isArabic} />
            <span>{isArabic ? "العودة إلى الدول" : "Back to countries"}</span>
          </Link>

          <div className="travel-detail-hero-grid">
            <div className="travel-detail-flag-stage" aria-hidden="true">
              <img
                className="travel-detail-flag"
                src={getTravelFlagUrl(country.code, 640)}
                alt=""
                width={320}
                height={240}
              />
            </div>
            <div className="travel-detail-copy">
              <p className="eyebrow">
                <span>{String(index + 1).padStart(2, "0")}</span>
                {isArabic ? "تفاصيل الزيارة" : "Visit details"}
              </p>
              <p className="travel-detail-year">{country.year}</p>
              <h1>{country.name[language]}</h1>
              <p className="travel-detail-period">
                {country.period ? country.period[language] : country.year}
              </p>
              <p className="travel-detail-summary">{country.summary[language]}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="paper-section travel-detail-body">
        <div className="container travel-detail-layout">
          <div>
            <p className="eyebrow eyebrow--dark">
              <span>STORY</span>
              {isArabic ? "ملخص السفر" : "Travel summary"}
            </p>
            <h2>{isArabic ? "ماذا بقي من هذه الرحلة." : "What remains from this journey."}</h2>
            <div className="travel-detail-list">
              {country.details.map((detail) => (
                <p key={detail.en}>{detail[language]}</p>
              ))}
            </div>
          </div>

          <aside className="travel-aside">
            {country.cities && country.cities.length > 0 ? (
              <div className="travel-aside-block">
                <h3>{isArabic ? "المدن" : "Cities"}</h3>
                <ul>
                  {country.cities.map((city) => (
                    <li key={city.en}>{city[language]}</li>
                  ))}
                </ul>
              </div>
            ) : null}

            {country.highlights && country.highlights.length > 0 ? (
              <div className="travel-aside-block">
                <h3>{isArabic ? "أبرز المحطات" : "Highlights"}</h3>
                <ul>
                  {country.highlights.map((item) => (
                    <li key={item.en}>{item[language]}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <section className="dark-section travel-photos-section">
        <div className="container">
          <div className="section-heading">
            <p className="eyebrow">
              <span>PHOTOS</span>
              {isArabic ? "صور الرحلة" : "Travel photos"}
            </p>
            <h2>
              {country.photos.length > 0
                ? isArabic
                  ? "لحظات من الزيارة."
                  : "Moments from the visit."
                : isArabic
                  ? "الصور قادمة قريبًا."
                  : "Photos coming soon."}
            </h2>
          </div>

          {country.photos.length > 0 ? (
            <div className="travel-photo-grid">
              {country.photos.map((photo) => (
                <figure className="travel-photo" key={photo.src}>
                  <img src={photo.src} alt={photo.alt[language]} loading="lazy" />
                  <figcaption>{photo.alt[language]}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <div className="travel-photo-empty">
              <p>
                {isArabic
                  ? "يمكنك إضافة صور هذه الدولة داخل المجلد public/travel/" +
                    country.slug +
                    " ثم تسجيلها في site-content.ts لتظهر للجمهور."
                  : `Add photos for this country in public/travel/${country.slug}, then list them in site-content.ts to show them publicly.`}
              </p>
            </div>
          )}
        </div>
      </section>

      <NextPage
        href={`/travel/${nextCountry.slug}`}
        number={String((index + 1) % travelCountries.length + 1).padStart(2, "0")}
        label={{ ar: "الدولة التالية", en: "Next country" }}
        title={nextCountry.name}
      />
    </main>
  );
}
