import { NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { requireAdmin } from "../../../../../lib/admin-auth";
import { getDb } from "../../../../../db/client";
import { travelPhotos } from "../../../../../db/schema";

const MAX_DATA_URL_LENGTH = 2_500_000;

export async function POST(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    const src = String(body.src || "");

    if (!src) {
      return NextResponse.json({ error: "Missing image" }, { status: 400 });
    }

    if (src.startsWith("data:") && src.length > MAX_DATA_URL_LENGTH) {
      return NextResponse.json({ error: "Image is too large. Use a smaller photo." }, { status: 400 });
    }

    const db = getDb();
    const [created] = await db
      .insert(travelPhotos)
      .values({
        countryId: Number(body.countryId),
        visitId: body.visitId ? Number(body.visitId) : null,
        src,
        altAr: String(body.altAr || ""),
        altEn: String(body.altEn || ""),
        sortOrder: Number(body.sortOrder || 0),
      })
      .returning();

    return NextResponse.json({ photo: created });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to upload photo" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    await requireAdmin();
    const { searchParams } = new URL(request.url);
    const id = Number(searchParams.get("id"));
    const db = getDb();
    await db.delete(travelPhotos).where(eq(travelPhotos.id, id));
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to delete photo" }, { status: 500 });
  }
}
