import { NextResponse } from "next/server";
import { asc, eq } from "drizzle-orm";
import { requireAdmin } from "../../../../lib/admin-auth";
import { getDb } from "../../../../db/client";
import { travelCountries, travelPhotos, travelVisits } from "../../../../db/schema";

export async function GET() {
  try {
    await requireAdmin();
    const db = getDb();
    const countries = await db
      .select()
      .from(travelCountries)
      .orderBy(asc(travelCountries.sortOrder), asc(travelCountries.id));
    const visits = await db.select().from(travelVisits);
    const photos = await db.select().from(travelPhotos);

    return NextResponse.json({
      countries: countries.map((country) => ({
        ...country,
        visitCount: visits.filter((visit) => visit.countryId === country.id).length,
        photoCount: photos.filter((photo) => photo.countryId === country.id).length,
      })),
    });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function POST(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const db = getDb();

    const [created] = await db
      .insert(travelCountries)
      .values({
        slug: String(body.slug || "").trim(),
        code: String(body.code || "").trim().toLowerCase(),
        nameAr: String(body.nameAr || "").trim(),
        nameEn: String(body.nameEn || "").trim(),
        summaryAr: String(body.summaryAr || ""),
        summaryEn: String(body.summaryEn || ""),
        detailsAr: Array.isArray(body.detailsAr) ? body.detailsAr : [],
        detailsEn: Array.isArray(body.detailsEn) ? body.detailsEn : [],
        highlightsAr: Array.isArray(body.highlightsAr) ? body.highlightsAr : [],
        highlightsEn: Array.isArray(body.highlightsEn) ? body.highlightsEn : [],
        citiesAr: Array.isArray(body.citiesAr) ? body.citiesAr : [],
        citiesEn: Array.isArray(body.citiesEn) ? body.citiesEn : [],
        sortOrder: Number(body.sortOrder || 0),
      })
      .returning();

    return NextResponse.json({ country: created });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to create country" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const id = Number(body.id);
    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const db = getDb();
    const [updated] = await db
      .update(travelCountries)
      .set({
        slug: String(body.slug || "").trim(),
        code: String(body.code || "").trim().toLowerCase(),
        nameAr: String(body.nameAr || "").trim(),
        nameEn: String(body.nameEn || "").trim(),
        summaryAr: String(body.summaryAr || ""),
        summaryEn: String(body.summaryEn || ""),
        detailsAr: Array.isArray(body.detailsAr) ? body.detailsAr : [],
        detailsEn: Array.isArray(body.detailsEn) ? body.detailsEn : [],
        highlightsAr: Array.isArray(body.highlightsAr) ? body.highlightsAr : [],
        highlightsEn: Array.isArray(body.highlightsEn) ? body.highlightsEn : [],
        citiesAr: Array.isArray(body.citiesAr) ? body.citiesAr : [],
        citiesEn: Array.isArray(body.citiesEn) ? body.citiesEn : [],
        sortOrder: Number(body.sortOrder || 0),
        updatedAt: new Date(),
      })
      .where(eq(travelCountries.id, id))
      .returning();

    return NextResponse.json({ country: updated });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to update country" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await requireAdmin();
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));
    if (!id) {
      return NextResponse.json({ error: "Missing id" }, { status: 400 });
    }

    const db = getDb();
    await db.delete(travelCountries).where(eq(travelCountries.id, id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to delete country" }, { status: 500 });
  }
}
