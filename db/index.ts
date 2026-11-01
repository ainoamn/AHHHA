import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

type D1DatabaseLike = {
  prepare(query: string): unknown;
};

type WorkersEnv = {
  DB?: D1DatabaseLike;
};

async function loadWorkersEnv(): Promise<WorkersEnv> {
  try {
    const mod = await import("cloudflare:workers");
    return mod.env as WorkersEnv;
  } catch {
    return {};
  }
}

export async function getDb() {
  const env = await loadWorkersEnv();

  if (!env.DB) {
    throw new Error(
      "Cloudflare D1 binding `DB` is unavailable. Set the `d1` field in .openai/hosting.json to `DB` or let your control plane inject the real binding values before using the database."
    );
  }

  return drizzle(env.DB as never, { schema });
}
