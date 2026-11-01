import { NextResponse } from "next/server";
import { asc, eq } from "drizzle-orm";
import { requireAdmin } from "../../../../../lib/admin-auth";
import { getDb } from "../../../../../db/client";
import { travelCountries, travelPhotos, travelVisits } from "../../../../../db/schema";

type Params = { params: Promise<{ id: string }> };

export async function GET(_request: Request, { params }: Params) {
  try {
    await requireAdmin();
    const { id } = await params;
    const countryId = Number(id);
    const db = getDb();

    const countries = await db.select().from(travelCountries).where(eq(travelCountries.id, countryId)).limit(1);
    const country = countries[0];
    if (!country) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    const visits = await db
      .select()
      .from(travelVisits)
      .where(eq(travelVisits.countryId, countryId))
      .orderBy(asc(travelVisits.sortOrder), asc(travelVisits.id));

    const photos = await db
      .select()
      .from(travelPhotos)
      .where(eq(travelPhotos.countryId, countryId))
      .orderBy(asc(travelPhotos.sortOrder), asc(travelPhotos.id));

    return NextResponse.json({ country, visits, photos });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}
