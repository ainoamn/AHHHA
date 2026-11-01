import { eq } from "drizzle-orm";
import { getDb, hasDatabase } from "../db/client";
import { siteSettings } from "../db/schema";
import { experience, profile, type LocalizedText } from "../app/site-content";

export type ProfileContent = typeof profile;
export type ExperienceItem = (typeof experience)[number];

export async function getSetting<T>(key: string, fallback: T): Promise<T> {
  if (!hasDatabase()) return fallback;

  try {
    const db = getDb();
    const rows = await db.select().from(siteSettings).where(eq(siteSettings.key, key)).limit(1);
    if (!rows[0]) return fallback;
    return rows[0].value as T;
  } catch {
    return fallback;
  }
}

export async function setSetting<T>(key: string, value: T) {
  const db = getDb();
  await db
    .insert(siteSettings)
    .values({ key, value, updatedAt: new Date() })
    .onConflictDoUpdate({
      target: siteSettings.key,
      set: { value, updatedAt: new Date() },
    });
}

export async function getProfileContent() {
  return getSetting<ProfileContent>("profile", profile);
}

export async function getExperienceContent() {
  return getSetting<ExperienceItem[]>("experience", experience);
}

export type LocalizedPair = LocalizedText;
