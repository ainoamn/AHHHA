import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TravelDetail from "./travel-detail";
import { getPublicTravelCountry, getTravelCountrySlugs, listPublicTravelCountries } from "../../../lib/travel-data";

type TravelSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const slugs = await getTravelCountrySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: TravelSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = await getPublicTravelCountry(slug);

  if (!country) {
    return { title: "دولة غير موجودة" };
  }

  const title = country.name.ar;
  const description = country.summary.ar;

  return {
    title,
    description,
    openGraph: { title, description, images: ["/og.png"] },
    twitter: { title, description, images: ["/og.png"] },
  };
}

export default async function TravelSlugPage({ params }: TravelSlugPageProps) {
  const { slug } = await params;
  const [country, countries] = await Promise.all([
    getPublicTravelCountry(slug),
    listPublicTravelCountries(),
  ]);

  if (!country) {
    notFound();
  }

  return <TravelDetail country={country} countries={countries} />;
}
