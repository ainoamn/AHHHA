"use client";

import { FormEvent, useEffect, useState } from "react";
import { AdminShell } from "../admin-shell";
import type { ExperienceItem } from "../../../lib/site-settings";

const blankItem = (): ExperienceItem => ({
  period: "",
  title: { ar: "", en: "" },
  organization: "",
  location: { ar: "", en: "" },
  description: { ar: "", en: "" },
});

export default function AdminExperiencePage() {
  const [experience, setExperience] = useState<ExperienceItem[]>([]);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/experience")
      .then((response) => response.json())
      .then((data) => setExperience(data.experience || []))
      .finally(() => setLoading(false));
  }, []);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/experience", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ experience }),
    });
    setMessage(response.ok ? "تم حفظ الخبرات." : "تعذر الحفظ.");
  }

  function updateItem(index: number, updater: (item: ExperienceItem) => ExperienceItem) {
    setExperience((current) => current.map((item, itemIndex) => (itemIndex === index ? updater(item) : item)));
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
            <p className="admin-kicker">EXPERIENCE</p>
            <h1>إدارة الخبرات المهنية</h1>
          </div>
          <button type="button" className="admin-secondary" onClick={() => setExperience((current) => [blankItem(), ...current])}>
            إضافة خبرة
          </button>
        </header>

        <form className="admin-form" onSubmit={onSubmit}>
          {experience.map((item, index) => (
            <article className="admin-editor-card" key={`${item.organization}-${index}`}>
              <div className="admin-editor-card-top">
                <strong>خبرة #{index + 1}</strong>
                <button type="button" className="admin-danger" onClick={() => setExperience((current) => current.filter((_, i) => i !== index))}>
                  حذف
                </button>
              </div>
              <div className="admin-grid-2">
                <label>
                  الفترة
                  <input value={item.period} onChange={(event) => updateItem(index, (current) => ({ ...current, period: event.target.value }))} />
                </label>
                <label>
                  الجهة
                  <input value={item.organization} onChange={(event) => updateItem(index, (current) => ({ ...current, organization: event.target.value }))} />
                </label>
                <label>
                  المسمى (عربي)
                  <input value={item.title.ar} onChange={(event) => updateItem(index, (current) => ({ ...current, title: { ...current.title, ar: event.target.value } }))} />
                </label>
                <label>
                  Title (EN)
                  <input value={item.title.en} onChange={(event) => updateItem(index, (current) => ({ ...current, title: { ...current.title, en: event.target.value } }))} />
                </label>
                <label>
                  الموقع (عربي)
                  <input value={item.location.ar} onChange={(event) => updateItem(index, (current) => ({ ...current, location: { ...current.location, ar: event.target.value } }))} />
                </label>
                <label>
                  Location (EN)
                  <input value={item.location.en} onChange={(event) => updateItem(index, (current) => ({ ...current, location: { ...current.location, en: event.target.value } }))} />
                </label>
                <label>
                  الوصف (عربي)
                  <textarea rows={4} value={item.description.ar} onChange={(event) => updateItem(index, (current) => ({ ...current, description: { ...current.description, ar: event.target.value } }))} />
                </label>
                <label>
                  Description (EN)
                  <textarea rows={4} value={item.description.en} onChange={(event) => updateItem(index, (current) => ({ ...current, description: { ...current.description, en: event.target.value } }))} />
                </label>
              </div>
            </article>
          ))}

          {message ? <p className="admin-success">{message}</p> : null}
          <button type="submit">حفظ الخبرات</button>
        </form>
      </div>
    </AdminShell>
  );
}
