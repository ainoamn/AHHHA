"use client";

import { FormEvent, useEffect, useState } from "react";
import { AdminShell } from "../admin-shell";
import type { ProfileContent } from "../../../lib/site-settings";

const emptyProfile: ProfileContent = {
  name: { ar: "", en: "" },
  shortName: { ar: "", en: "" },
  role: { ar: "", en: "" },
  headline: { ar: "", en: "" },
  summary: { ar: "", en: "" },
  objective: { ar: "", en: "" },
  location: { ar: "", en: "" },
  nationality: { ar: "", en: "" },
  birthplace: { ar: "", en: "" },
  email: "",
  phone: "",
  linkedin: "",
  github: "",
  website: "",
};

export default function AdminProfilePage() {
  const [profile, setProfile] = useState<ProfileContent>(emptyProfile);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/profile")
      .then((response) => response.json())
      .then((data) => {
        if (data.profile) setProfile(data.profile);
      })
      .finally(() => setLoading(false));
  }, []);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    const response = await fetch("/api/admin/profile", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ profile }),
    });
    setMessage(response.ok ? "تم حفظ الملف الشخصي بنجاح." : "تعذر الحفظ.");
  }

  function updateLocalized(field: keyof ProfileContent, lang: "ar" | "en", value: string) {
    setProfile((current) => {
      const entry = current[field];
      if (typeof entry === "object" && entry && "ar" in entry) {
        return { ...current, [field]: { ...entry, [lang]: value } };
      }
      return current;
    });
  }

  if (loading) {
    return (
      <AdminShell>
        <div className="admin-page"><p>جاري التحميل...</p></div>
      </AdminShell>
    );
  }

  return (
    <AdminShell>
      <div className="admin-page">
        <header className="admin-header">
          <div>
            <p className="admin-kicker">PROFILE</p>
            <h1>تحديث الملف الشخصي والسيرة</h1>
          </div>
        </header>

        <form className="admin-form" onSubmit={onSubmit}>
          {(
            [
              ["shortName", "الاسم المختصر"],
              ["name", "الاسم الكامل"],
              ["role", "المسمى الوظيفي"],
              ["headline", "العنوان التحفيزي"],
              ["summary", "النبذة"],
              ["objective", "الهدف المهني"],
              ["location", "مقر الإقامة"],
              ["nationality", "الجنسية"],
              ["birthplace", "مكان الميلاد"],
            ] as const
          ).map(([field, label]) => (
            <div className="admin-grid-2" key={field}>
              <label>
                {label} (عربي)
                <textarea
                  rows={field === "summary" || field === "objective" ? 4 : 2}
                  value={(profile[field] as { ar: string }).ar}
                  onChange={(event) => updateLocalized(field, "ar", event.target.value)}
                />
              </label>
              <label>
                {label} (English)
                <textarea
                  rows={field === "summary" || field === "objective" ? 4 : 2}
                  value={(profile[field] as { en: string }).en}
                  onChange={(event) => updateLocalized(field, "en", event.target.value)}
                />
              </label>
            </div>
          ))}

          <div className="admin-grid-2">
            <label>
              البريد
              <input value={profile.email} onChange={(event) => setProfile({ ...profile, email: event.target.value })} />
            </label>
            <label>
              الهاتف
              <input value={profile.phone} onChange={(event) => setProfile({ ...profile, phone: event.target.value })} />
            </label>
            <label>
              LinkedIn
              <input value={profile.linkedin} onChange={(event) => setProfile({ ...profile, linkedin: event.target.value })} />
            </label>
            <label>
              GitHub
              <input value={profile.github} onChange={(event) => setProfile({ ...profile, github: event.target.value })} />
            </label>
          </div>

          {message ? <p className="admin-success">{message}</p> : null}
          <button type="submit">حفظ التعديلات</button>
        </form>
      </div>
    </AdminShell>
  );
}
