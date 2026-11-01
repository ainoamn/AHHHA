import { asc, eq, sql } from "drizzle-orm";
import { getDb, hasDatabase } from "../db/client";
import { travelCountries, travelPhotos, travelVisits } from "../db/schema";
import {
  getTravelCountry as getStaticTravelCountry,
  getTravelFlagUrl,
  travelCountries as staticTravelCountries,
  type LocalizedText,
} from "../app/site-content";

export type PublicTravelCountry = {
  id?: number;
  slug: string;
  code: string;
  name: LocalizedText;
  year: string;
  period?: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText[];
  highlights?: LocalizedText[];
  cities?: LocalizedText[];
  photos: { id?: number; src: string; alt: LocalizedText }[];
  isHome: boolean;
  visitCount: number;
  visits: {
    id?: number;
    year: string;
    places: LocalizedText;
    notes: LocalizedText;
  }[];
};

function zipLocalized(ar: string[], en: string[]): LocalizedText[] {
  const length = Math.max(ar.length, en.length);
  return Array.from({ length }, (_, index) => ({
    ar: ar[index] || en[index] || "",
    en: en[index] || ar[index] || "",
  })).filter((item) => item.ar || item.en);
}

function fromStatic(): PublicTravelCountry[] {
  return staticTravelCountries.map((country) => {
    const isHome = Boolean(country.isHome);
    return {
      slug: country.slug,
      code: country.code,
      name: country.name,
      year: isHome ? "—" : country.year,
      period: country.period,
      summary: country.summary,
      details: country.details,
      highlights: country.highlights,
      cities: country.cities,
      photos: country.photos,
      isHome,
      visitCount: isHome ? 0 : country.year && country.year !== "—" ? 1 : 0,
      visits:
        !isHome && country.year && country.year !== "—"
          ? [
              {
                year: country.year,
                places: {
                  ar: (country.cities || []).map((city) => city.ar).join("، "),
                  en: (country.cities || []).map((city) => city.en).join(", "),
                },
                notes: country.summary,
              },
            ]
          : [],
    };
  });
}

export async function listPublicTravelCountries(): Promise<PublicTravelCountry[]> {
  if (!hasDatabase()) {
    return fromStatic();
  }

  try {
    const db = getDb();
    const countries = await db.select().from(travelCountries).orderBy(asc(travelCountries.sortOrder), asc(travelCountries.id));

    if (countries.length === 0) {
      return fromStatic();
    }

    const visits = await db.select().from(travelVisits).orderBy(asc(travelVisits.sortOrder), asc(travelVisits.id));
    const photos = await db.select().from(travelPhotos).orderBy(asc(travelPhotos.sortOrder), asc(travelPhotos.id));

    return countries.map((country) => {
      const isHome = Boolean(country.isHome);
      const countryVisits = isHome ? [] : visits.filter((visit) => visit.countryId === country.id);
      const countryPhotos = photos.filter((photo) => photo.countryId === country.id);
      const years = countryVisits.map((visit) => visit.year).filter(Boolean);
      const yearLabel = years.length > 0 ? years[years.length - 1] : "—";

      return {
        id: country.id,
        slug: country.slug,
        code: country.code,
        name: { ar: country.nameAr, en: country.nameEn },
        year: yearLabel,
        period: isHome
          ? { ar: "الوطن ومقر الإقامة", en: "Homeland & residence" }
          : {
              ar: years.length > 0 ? years.join(" · ") : "زيارات موثّقة",
              en: years.length > 0 ? years.join(" · ") : "Documented visits",
            },
        summary: { ar: country.summaryAr, en: country.summaryEn },
        details: zipLocalized(country.detailsAr || [], country.detailsEn || []),
        highlights: zipLocalized(country.highlightsAr || [], country.highlightsEn || []),
        cities: zipLocalized(country.citiesAr || [], country.citiesEn || []),
        photos: countryPhotos.map((photo) => ({
          id: photo.id,
          src: photo.src,
          alt: { ar: photo.altAr, en: photo.altEn },
        })),
        isHome,
        visitCount: countryVisits.length,
        visits: countryVisits.map((visit) => ({
          id: visit.id,
          year: visit.year,
          places: { ar: visit.placesAr, en: visit.placesEn },
          notes: { ar: visit.notesAr, en: visit.notesEn },
        })),
      };
    });
  } catch {
    return fromStatic();
  }
}

export async function getPublicTravelCountry(slug: string) {
  const countries = await listPublicTravelCountries();
  return countries.find((country) => country.slug === slug) || null;
}

export async function getTravelCountrySlugs() {
  const countries = await listPublicTravelCountries();
  return countries.map((country) => country.slug);
}

export { getTravelFlagUrl, getStaticTravelCountry };

export async function countTravelCountries() {
  if (!hasDatabase()) return staticTravelCountries.length;
  try {
    const db = getDb();
    const rows = await db.select({ count: sql<number>`count(*)` }).from(travelCountries);
    return Number(rows[0]?.count || 0);
  } catch {
    return staticTravelCountries.length;
  }
}

export async function getCountryById(id: number) {
  const db = getDb();
  const rows = await db.select().from(travelCountries).where(eq(travelCountries.id, id)).limit(1);
  return rows[0] || null;
}
