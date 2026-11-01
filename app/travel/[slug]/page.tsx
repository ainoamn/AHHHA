import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTravelCountry, travelCountries } from "../../site-content";
import TravelDetail from "./travel-detail";

type TravelSlugPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return travelCountries.map((country) => ({ slug: country.slug }));
}

export async function generateMetadata({ params }: TravelSlugPageProps): Promise<Metadata> {
  const { slug } = await params;
  const country = getTravelCountry(slug);

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
  const country = getTravelCountry(slug);

  if (!country) {
    notFound();
  }

  return <TravelDetail country={country} />;
}
