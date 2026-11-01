import Link from "next/link";
import { AdminShell } from "./admin-shell";
import { countTravelCountries } from "../../lib/travel-data";
import { getExperienceContent, getProfileContent } from "../../lib/site-settings";

export const dynamic = "force-dynamic";

export default async function AdminHomePage() {
  const [profile, experience, travelCount] = await Promise.all([
    getProfileContent(),
    getExperienceContent(),
    countTravelCountries(),
  ]);

  return (
    <AdminShell>
      <div className="admin-page">
        <header className="admin-header">
          <div>
            <p className="admin-kicker">DASHBOARD</p>
            <h1>مرحباً، يمكنك تحديث السيرة والمحتوى من هنا</h1>
          </div>
        </header>

        <div className="admin-stats">
          <article>
            <strong>{travelCount}</strong>
            <span>دول السفر</span>
          </article>
          <article>
            <strong>{experience.length}</strong>
            <span>خبرات مهنية</span>
          </article>
          <article>
            <strong>{profile.shortName.ar}</strong>
            <span>الاسم المختصر</span>
          </article>
        </div>

        <div className="admin-cards">
          <Link href="/admin/profile" className="admin-card">
            <h2>الملف الشخصي</h2>
            <p>عدّل النبذة والمسمى الوظيفي وبيانات التواصل باستمرار.</p>
          </Link>
          <Link href="/admin/experience" className="admin-card">
            <h2>الخبرات</h2>
            <p>أضف أو احذف أو عدّل المحطات المهنية في السيرة الذاتية.</p>
          </Link>
          <Link href="/admin/travel" className="admin-card">
            <h2>السفر والدول</h2>
            <p>أدر الدول وسنوات الزيارة والأماكن والصور وعدد الزيارات.</p>
          </Link>
        </div>
      </div>
    </AdminShell>
  );
}
