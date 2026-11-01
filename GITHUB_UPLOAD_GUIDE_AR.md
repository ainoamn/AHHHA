# دليل رفع الموقع إلى GitHub

## الطريقة الأسهل من موقع GitHub

1. سجّل الدخول إلى GitHub.
2. اختر **New repository**.
3. اكتب اسمًا مثل `abdulhamid-personal-site`.
4. لا تضف README أو `.gitignore` عند إنشاء المستودع، لأنهما موجودان داخل المشروع.
5. فك ضغط ملف المشروع على جهازك.
6. افتح المستودع الجديد في GitHub واختر **uploading an existing file**.
7. ارفع محتويات المجلد بعد فك الضغط، وليس ملف ZIP نفسه.
8. اكتب وصفًا مثل `Initial personal website` ثم اضغط **Commit changes**.

## الطريقة الاحترافية باستخدام Git

افتح نافذة الأوامر داخل مجلد المشروع ثم نفّذ:

```bash
git init
git add .
git commit -m "Initial personal website"
git branch -M main
git remote add origin https://github.com/USERNAME/REPOSITORY.git
git push -u origin main
```

## ملاحظات مهمة

- لا ترفع مجلد `node_modules` إلى GitHub.
- لا ترفع مجلد `dist` أو ملفات البناء المؤقتة.
- ملف `.gitignore` الموجود في المشروع يمنع رفع هذه الملفات تلقائيًا.
- احتفظ بملف `package-lock.json` لأنه يثبت إصدارات الحزم المستخدمة.
- لتغيير بيانات السيرة لاحقًا عدّل `app/site-content.ts`.
- لتغيير الصورة الشخصية استبدل `public/abdulhamid-alrawahi.png` بصورة جديدة بالاسم نفسه.
