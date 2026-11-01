import { NextResponse } from "next/server";
import { requireAdmin } from "../../../../lib/admin-auth";
import { getProfileContent, setSetting } from "../../../../lib/site-settings";

export async function GET() {
  try {
    await requireAdmin();
    const profile = await getProfileContent();
    return NextResponse.json({ profile });
  } catch {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
}

export async function PUT(request: Request) {
  try {
    await requireAdmin();
    const body = await request.json();
    await setSetting("profile", body.profile);
    return NextResponse.json({ ok: true });
  } catch (error) {
    if (error instanceof Error && error.message === "UNAUTHORIZED") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }
    return NextResponse.json({ error: "Failed to save profile" }, { status: 500 });
  }
}
