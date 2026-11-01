"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { AdminShell } from "../admin-shell";

type CountryListItem = {
  id: number;
  slug: string;
  code: string;
  nameAr: string;
  nameEn: string;
  visitCount: number;
  photoCount: number;
  sortOrder: number;
};

const blankCountry = {
  slug: "",
  code: "",
  nameAr: "",
  nameEn: "",
  summaryAr: "",
  summaryEn: "",
  sortOrder: 0,
};

export default function AdminTravelPage() {
  const [countries, setCountries] = useState<CountryListItem[]>([]);
  const [form, setForm] = useState(blankCountry);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  async function loadCountries() {
    const response = await fetch("/api/admin/travel");
    const data = await response.json();
    setCountries(data.countries || []);
    setLoading(false);
  }

  useEffect(() => {
    loadCountries();
  }, []);

  async function onCreate(event: FormEvent) {
    event.preventDefault();
    setMessage("");
    const response = await fetch("/api/admin/travel", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (!response.ok) {
      setMessage("تعذر إضافة الدولة.");
      return;
    }

    setForm(blankCountry);
    setMessage("تمت إضافة الدولة.");
    await loadCountries();
  }

  async function onDelete(id: number) {
    if (!confirm("هل تريد حذف هذه الدولة وكل زياراتها وصورها؟")) return;
    await fetch(`/api/admin/travel?id=${id}`, { method: "DELETE" });
    await loadCountries();
  }

  return (
    <AdminShell>
      <div className="admin-page">
        <header className="admin-header">
          <div>
            <p className="admin-kicker">TRAVEL</p>
            <h1>إدارة الدول والزيارات</h1>
          </div>
        </header>

        <form className="admin-form admin-editor-card" onSubmit={onCreate}>
          <h2>إضافة دولة جديدة</h2>
          <div className="admin-grid-2">
            <label>
              الاسم عربي
              <input value={form.nameAr} onChange={(event) => setForm({ ...form, nameAr: event.target.value })} required />
            </label>
            <label>
              Name EN
              <input value={form.nameEn} onChange={(event) => setForm({ ...form, nameEn: event.target.value })} required />
            </label>
            <label>
              Slug
              <input value={form.slug} onChange={(event) => setForm({ ...form, slug: event.target.value })} placeholder="uae" required />
            </label>
            <label>
              رمز العلم
              <input value={form.code} onChange={(event) => setForm({ ...form, code: event.target.value })} placeholder="ae" required />
            </label>
            <label>
              ملخص عربي
              <textarea rows={3} value={form.summaryAr} onChange={(event) => setForm({ ...form, summaryAr: event.target.value })} />
            </label>
            <label>
              Summary EN
              <textarea rows={3} value={form.summaryEn} onChange={(event) => setForm({ ...form, summaryEn: event.target.value })} />
            </label>
          </div>
          <button type="submit">إضافة الدولة</button>
          {message ? <p className="admin-success">{message}</p> : null}
        </form>

        <div className="admin-table-wrap">
          {loading ? <p>جاري التحميل...</p> : null}
          <table className="admin-table">
            <thead>
              <tr>
                <th>الدولة</th>
                <th>الرمز</th>
                <th>عدد الزيارات</th>
                <th>الصور</th>
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              {countries.map((country) => (
                <tr key={country.id}>
                  <td>
                    <strong>{country.nameAr}</strong>
                    <div>{country.nameEn}</div>
                  </td>
                  <td>{country.code}</td>
                  <td>{country.visitCount}</td>
                  <td>{country.photoCount}</td>
                  <td className="admin-table-actions">
                    <Link href={`/admin/travel/${country.id}`}>إدارة</Link>
                    <button type="button" className="admin-danger" onClick={() => onDelete(country.id)}>
                      حذف
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
