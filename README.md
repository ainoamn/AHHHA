# الموقع الشخصي لعبد الحميد الرواحي

موقع شخصي احترافي متعدد الصفحات لعرض السيرة المهنية والمهارات والخبرات والتطلعات والإنجازات والمؤسسات والأعمال الرقمية.

## الصفحات

- `/` — الصفحة الرئيسية والنبذة والشغف.
- `/skills` — المهارات والقدرات وطريقة العمل.
- `/experience` — الخبرات المهنية منذ عام 2007.
- `/vision` — التطلعات والرؤية والمبادئ.
- `/achievements` — الإنجازات والأثر المجتمعي.
- `/ventures` — المؤسسات والمبادرات والأعمال الرقمية.
- `/education` — التعليم والمؤهلات والدورات.
- `/contact` — معلومات التواصل.

## التقنيات

- Next.js App Router
- React وTypeScript
- Tailwind CSS
- Vinext وVite
- Cloudflare Workers / OpenAI Sites

## التشغيل على الكمبيوتر

يتطلب المشروع Node.js بإصدار `22.13.0` أو أحدث.

```bash
npm install
npm run dev
```

ثم افتح الرابط الذي يظهر في نافذة الأوامر.

## إنشاء نسخة الإنتاج

```bash
npm run build
npm run start
```

## تعديل البيانات

جميع بيانات السيرة والنصوص العربية والإنجليزية موجودة في:

```text
app/site-content.ts
```

التصميم والألوان والمسافات موجودة في:

```text
app/globals.css
```

الصورة الشخصية وبطاقة مشاركة الموقع موجودتان في:

```text
public/abdulhamid-alrawahi.png
public/og.png
```

راجع `CONTENT_GUIDE_AR.md` للاطلاع على دليل التعديل والإضافة والحذف.

## رفع المشروع إلى GitHub

بعد إنشاء مستودع جديد وفارغ في GitHub، نفّذ داخل مجلد المشروع:

```bash
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

استبدل `USERNAME` باسم حسابك و`REPOSITORY` باسم المستودع.

## الهوية

الهوية الحالية تستخدم الأحرف `AHHA` اختصارًا للاسم:

**ABDULHAMID HAMOOD HAMDAN ALRAWAHI**

© عبد الحميد الرواحي.
