import {
  integer,
  jsonb,
  pgTable,
  serial,
  text,
  timestamp,
} from "drizzle-orm/pg-core";

export const siteSettings = pgTable("site_settings", {
  key: text("key").primaryKey(),
  value: jsonb("value").notNull(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const travelCountries = pgTable("travel_countries", {
  id: serial("id").primaryKey(),
  slug: text("slug").notNull().unique(),
  code: text("code").notNull(),
  nameAr: text("name_ar").notNull(),
  nameEn: text("name_en").notNull(),
  summaryAr: text("summary_ar").notNull().default(""),
  summaryEn: text("summary_en").notNull().default(""),
  detailsAr: jsonb("details_ar").$type<string[]>().notNull().default([]),
  detailsEn: jsonb("details_en").$type<string[]>().notNull().default([]),
  highlightsAr: jsonb("highlights_ar").$type<string[]>().notNull().default([]),
  highlightsEn: jsonb("highlights_en").$type<string[]>().notNull().default([]),
  citiesAr: jsonb("cities_ar").$type<string[]>().notNull().default([]),
  citiesEn: jsonb("cities_en").$type<string[]>().notNull().default([]),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
  updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
});

export const travelVisits = pgTable("travel_visits", {
  id: serial("id").primaryKey(),
  countryId: integer("country_id")
    .notNull()
    .references(() => travelCountries.id, { onDelete: "cascade" }),
  year: text("year").notNull(),
  placesAr: text("places_ar").notNull().default(""),
  placesEn: text("places_en").notNull().default(""),
  notesAr: text("notes_ar").notNull().default(""),
  notesEn: text("notes_en").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const travelPhotos = pgTable("travel_photos", {
  id: serial("id").primaryKey(),
  countryId: integer("country_id")
    .notNull()
    .references(() => travelCountries.id, { onDelete: "cascade" }),
  visitId: integer("visit_id").references(() => travelVisits.id, { onDelete: "set null" }),
  src: text("src").notNull(),
  altAr: text("alt_ar").notNull().default(""),
  altEn: text("alt_en").notNull().default(""),
  sortOrder: integer("sort_order").notNull().default(0),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export type TravelCountryRow = typeof travelCountries.$inferSelect;
export type TravelVisitRow = typeof travelVisits.$inferSelect;
export type TravelPhotoRow = typeof travelPhotos.$inferSelect;
