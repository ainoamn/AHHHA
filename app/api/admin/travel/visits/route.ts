import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { requireAdmin } from "../../../../../lib/admin-auth";
import { getDb } from "../../../../../db/client";
import { travelVisits } from "../../../../../db/schema";

export async function POST(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const db = getDb();

    const [created] = await db
      .insert(travelVisits)
      .values({
        countryId: Number(body.countryId),
        year: String(body.year || "").trim(),
        placesAr: String(body.placesAr || ""),
        placesEn: String(body.placesEn || ""),
        notesAr: String(body.notesAr || ""),
        notesEn: String(body.notesEn || ""),
        sortOrder: Number(body.sortOrder || 0),
      })
      .returning();

    return NextResponse.json({ visit: created });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to create visit" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const id = Number(body.id);
    const db = getDb();

    const [updated] = await db
      .update(travelVisits)
      .set({
        year: String(body.year || "").trim(),
        placesAr: String(body.placesAr || ""),
        placesEn: String(body.placesEn || ""),
        notesAr: String(body.notesAr || ""),
        notesEn: String(body.notesEn || ""),
        sortOrder: Number(body.sortOrder || 0),
      })
      .where(eq(travelVisits.id, id))
      .returning();

    return NextResponse.json({ visit: updated });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to update visit" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await requireAdmin();
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));
    const db = getDb();
    await db.delete(travelVisits).where(eq(travelVisits.id, id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to delete visit" }, { status: 500 });
  }
}
