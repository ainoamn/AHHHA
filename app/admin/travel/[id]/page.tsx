"use client";

import Link from "next/link";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { AdminShell } from "../../admin-shell";

type Visit = {
  id: number;
  year: string;
  placesAr: string;
  placesEn: string;
  notesAr: string;
  notesEn: string;
};

type Photo = {
  id: number;
  src: string;
  altAr: string;
  altEn: string;
};

type Country = {
  id: number;
  slug: string;
  code: string;
  nameAr: string;
  nameEn: string;
  summaryAr: string;
  summaryEn: string;
  detailsAr: string[];
  detailsEn: string[];
  citiesAr: string[];
  citiesEn: string[];
};

export default function AdminTravelCountryPage() {
  const params = useParams<{ id: string }>();
  const countryId = useMemo(() => Number(params.id), [params.id]);
  const [country, setCountry] = useState<Country | null>(null);
  const [visits, setVisits] = useState<Visit[]>([]);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [message, setMessage] = useState("");
  const [visitForm, setVisitForm] = useState({ year: "", placesAr: "", placesEn: "", notesAr: "", notesEn: "" });
  const [photoAlt, setPhotoAlt] = useState({ ar: "", en: "" });

  async function load() {
    const response = await fetch(`/api/admin/travel/${countryId}`);
    const data = await response.json();
    setCountry(data.country || null);
    setVisits(data.visits || []);
    setPhotos(data.photos || []);
  }

  useEffect(() => {
    if (countryId) load();
  }, [countryId]);

  async function saveCountry(event: FormEvent) {
    event.preventDefault();
    if (!country) return;
    const response = await fetch("/api/admin/travel", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(country),
    });
    setMessage(response.ok ? "تم حفظ بيانات الدولة." : "تعذر الحفظ.");
  }

  async function addVisit(event: FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/travel/visits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ countryId, ...visitForm }),
    });
    if (response.ok) {
      setVisitForm({ year: "", placesAr: "", placesEn: "", notesAr: "", notesEn: "" });
      await load();
    }
  }

  async function deleteVisit(id: number) {
    await fetch(`/api/admin/travel/visits?id=${id}`, { method: "DELETE" });
    await load();
  }

  async function onPhotoSelected(file?: File | null) {
    if (!file || !country) return;

    const reader = new FileReader();
    reader.onload = async () => {
      const src = String(reader.result || "");
      const response = await fetch("/api/admin/travel/photos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          countryId,
          src,
          altAr: photoAlt.ar || country.nameAr,
          altEn: photoAlt.en || country.nameEn,
        }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        setMessage(data.error || "تعذر رفع الصورة.");
        return;
      }

      setPhotoAlt({ ar: "", en: "" });
      setMessage("تم رفع الصورة.");
      await load();
    };
    reader.readAsDataURL(file);
  }

  async function deletePhoto(id: number) {
    await fetch(`/api/admin/travel/photos?id=${id}`, { method: "DELETE" });
    await load();
  }

  if (!country) {
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
            <p className="admin-kicker">COUNTRY</p>
            <h1>{country.nameAr}</h1>
            <p>عدد الزيارات الحالية: <strong>{visits.length}</strong></p>
          </div>
          <Link className="admin-secondary" href="/admin/travel">
            رجوع للقائمة
          </Link>
        </header>

        <form className="admin-form admin-editor-card" onSubmit={saveCountry}>
          <h2>بيانات الدولة</h2>
          <div className="admin-grid-2">
            <label>
              الاسم عربي
              <input value={country.nameAr} onChange={(event) => setCountry({ ...country, nameAr: event.target.value })} />
            </label>
            <label>
              Name EN
              <input value={country.nameEn} onChange={(event) => setCountry({ ...country, nameEn: event.target.value })} />
            </label>
            <label>
              Slug
              <input value={country.slug} onChange={(event) => setCountry({ ...country, slug: event.target.value })} />
            </label>
            <label>
              رمز العلم
              <input value={country.code} onChange={(event) => setCountry({ ...country, code: event.target.value })} />
            </label>
            <label>
              الملخص عربي
              <textarea rows={4} value={country.summaryAr} onChange={(event) => setCountry({ ...country, summaryAr: event.target.value })} />
            </label>
            <label>
              Summary EN
              <textarea rows={4} value={country.summaryEn} onChange={(event) => setCountry({ ...country, summaryEn: event.target.value })} />
            </label>
            <label>
              التفاصيل عربي (سطر لكل نقطة)
              <textarea
                rows={5}
                value={(country.detailsAr || []).join("\n")}
                onChange={(event) => setCountry({ ...country, detailsAr: event.target.value.split("\n").filter(Boolean) })}
              />
            </label>
            <label>
              Details EN (one per line)
              <textarea
                rows={5}
                value={(country.detailsEn || []).join("\n")}
                onChange={(event) => setCountry({ ...country, detailsEn: event.target.value.split("\n").filter(Boolean) })}
              />
            </label>
            <label>
              المدن عربي (سطر لكل مدينة)
              <textarea
                rows={3}
                value={(country.citiesAr || []).join("\n")}
                onChange={(event) => setCountry({ ...country, citiesAr: event.target.value.split("\n").filter(Boolean) })}
              />
            </label>
            <label>
              Cities EN
              <textarea
                rows={3}
                value={(country.citiesEn || []).join("\n")}
                onChange={(event) => setCountry({ ...country, citiesEn: event.target.value.split("\n").filter(Boolean) })}
              />
            </label>
          </div>
          <button type="submit">حفظ بيانات الدولة</button>
        </form>

        <section className="admin-editor-card">
          <h2>الزيارات ({visits.length})</h2>
          <form className="admin-form" onSubmit={addVisit}>
            <div className="admin-grid-2">
              <label>
                سنة الزيارة
                <input value={visitForm.year} onChange={(event) => setVisitForm({ ...visitForm, year: event.target.value })} placeholder="2024" required />
              </label>
              <label>
                الأماكن عربي
                <input value={visitForm.placesAr} onChange={(event) => setVisitForm({ ...visitForm, placesAr: event.target.value })} placeholder="دبي، أبوظبي" />
              </label>
              <label>
                Places EN
                <input value={visitForm.placesEn} onChange={(event) => setVisitForm({ ...visitForm, placesEn: event.target.value })} />
              </label>
              <label>
                ملاحظات عربي
                <textarea rows={3} value={visitForm.notesAr} onChange={(event) => setVisitForm({ ...visitForm, notesAr: event.target.value })} />
              </label>
              <label>
                Notes EN
                <textarea rows={3} value={visitForm.notesEn} onChange={(event) => setVisitForm({ ...visitForm, notesEn: event.target.value })} />
              </label>
            </div>
            <button type="submit">إضافة زيارة</button>
          </form>

          <div className="admin-visit-list">
            {visits.map((visit) => (
              <article key={visit.id}>
                <div>
                  <strong>{visit.year}</strong>
                  <p>{visit.placesAr || visit.placesEn}</p>
                  <p>{visit.notesAr || visit.notesEn}</p>
                </div>
                <button type="button" className="admin-danger" onClick={() => deleteVisit(visit.id)}>
                  حذف
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="admin-editor-card">
          <h2>الصور</h2>
          <div className="admin-grid-2">
            <label>
              وصف عربي
              <input value={photoAlt.ar} onChange={(event) => setPhotoAlt({ ...photoAlt, ar: event.target.value })} />
            </label>
            <label>
              Alt EN
              <input value={photoAlt.en} onChange={(event) => setPhotoAlt({ ...photoAlt, en: event.target.value })} />
            </label>
            <label>
              رفع صورة
              <input type="file" accept="image/*" onChange={(event) => onPhotoSelected(event.target.files?.[0])} />
            </label>
          </div>
          <div className="admin-photo-grid">
            {photos.map((photo) => (
              <figure key={photo.id}>
                <img src={photo.src} alt={photo.altAr || photo.altEn} />
                <button type="button" className="admin-danger" onClick={() => deletePhoto(photo.id)}>
                  حذف
                </button>
              </figure>
            ))}
          </div>
        </section>

        {message ? <p className="admin-success">{message}</p> : null}
      </div>
    </AdminShell>
  );
}
