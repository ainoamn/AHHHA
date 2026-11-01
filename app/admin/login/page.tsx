"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);
    setError("");

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    setLoading(false);

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      setError(data.error || "تعذر تسجيل الدخول");
      return;
    }

    router.replace("/admin");
    router.refresh();
  }

  return (
    <main className="admin-login">
      <form className="admin-login-card" onSubmit={onSubmit}>
        <p className="admin-kicker">ADMIN</p>
        <h1>لوحة التحكم</h1>
        <p>أدخل كلمة مرور المدير لإدارة السيرة والدول والصور.</p>
        <label>
          كلمة المرور
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            autoComplete="current-password"
            required
          />
        </label>
        {error ? <p className="admin-error">{error}</p> : null}
        <button type="submit" disabled={loading}>
          {loading ? "جاري الدخول..." : "دخول"}
        </button>
      </form>
    </main>
  );
}
