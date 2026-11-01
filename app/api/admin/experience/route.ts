import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/admin-auth";
import { getExperienceContent, setSetting } from "../../../../lib/site-settings";

export async function GET() {
  try {
    await requireAdmin();
    const experience = await getExperienceContent();
    return NextResponse.json({ experience });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    await setSetting("experience", body.experience || []);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to save experience" }, { status: 500 });
  }
}
