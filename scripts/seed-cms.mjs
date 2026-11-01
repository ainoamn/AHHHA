import { neon } from "@neondatabase/serverless";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";

function loadEnvFile(filePath) {
  try {
    const content = readFileSync(filePath, "utf8");
    for (const line of content.split(/\r?\n/)) {
      if (!line || line.startsWith("#") || !line.includes("=")) continue;
      const index = line.indexOf("=");
      const key = line.slice(0, index).trim();
      const value = line.slice(index + 1).trim();
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // optional local env
  }
}

loadEnvFile(resolve(process.cwd(), ".env.local"));
loadEnvFile(resolve(process.cwd(), ".env"));

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
  console.error("DATABASE_URL is required");
  process.exit(1);
}

const sql = neon(databaseUrl);

const countries = [
  ["oman", "om", "سلطنة عُمان", "Sultanate of Oman", "سلطنة عُمان هي موطني ومقر إقامتي؛ منها انطلقت رحلتي، وإليها تعود كل الذكريات.", "The Sultanate of Oman is my homeland and place of residence—where my journey began and where every memory returns.", ["أقيم في عُمان، فهي ليست وجهة زيارة بل الوطن الذي أنطلق منه وأعود إليه.", "بين الجبال والسواحل والصحراء والمدن تتشكل ملامح الهوية والانتماء."], ["I live in Oman; it is not a travel destination but the homeland I leave from and return to.", "Across mountains, coasts, deserts and cities, identity and belonging take shape."], ["الوطن", "مقر الإقامة"], ["Homeland", "Place of residence"], ["مسقط", "المعبيلة"], ["Muscat", "Al Maabela"], 1, true],
  ["uae", "ae", "الإمارات العربية المتحدة", "United Arab Emirates", "زيارات جمعت بين العمل والاستكشاف في مدن حديثة.", "Visits combining work and exploration in modern cities.", ["الاطلاع على مراكز الأعمال والمعالم الحضرية."], ["Explored business centres and urban landmarks."], ["دبي وأبوظبي"], ["Dubai & Abu Dhabi"], ["دبي", "أبوظبي"], ["Dubai", "Abu Dhabi"], 2],
  ["saudi-arabia", "sa", "المملكة العربية السعودية", "Saudi Arabia", "زيارات تعكس القرب الخليجي والتحول الحضري.", "Visits that reflect Gulf closeness and urban transformation.", ["التعرّف على مشاريع التطوير وبيئة الأعمال."], ["Explored development projects and business environments."], ["تحول حضري"], ["Urban transformation"], ["الرياض", "جدة"], ["Riyadh", "Jeddah"], 3],
  ["bahrain", "bh", "البحرين", "Bahrain", "زيارة إلى المنامة بطابع خليجي قريب.", "A visit to Manama with close Gulf character.", ["استكشاف المدينة والأسواق والمعالم المحلية."], ["Explored the city, markets and local landmarks."], ["المنامة"], ["Manama"], ["المنامة"], ["Manama"], 4],
  ["qatar", "qa", "قطر", "Qatar", "زيارة إلى الدوحة ومدينتها الحديثة.", "A visit to Doha and its modern cityscape.", ["استكشاف الواجهة البحرية والمعالم الحديثة."], ["Explored the waterfront and modern landmarks."], ["الدوحة"], ["Doha"], ["الدوحة"], ["Doha"], 5],
  ["jordan", "jo", "الأردن", "Jordan", "رحلة إلى الأردن بين عمّان والتاريخ والطبيعة.", "A journey to Jordan between Amman, history and nature.", ["زيارة العاصمة والتعرّف على الضيافة الأردنية."], ["Visited the capital and Jordanian hospitality."], ["عمّان"], ["Amman"], ["عمّان"], ["Amman"], 6],
  ["iran", "ir", "إيران", "Iran", "زيارة غنية بالتاريخ والعمارة والأسواق.", "A visit rich in history, architecture and markets.", ["استكشاف المعالم التاريخية والأسواق التقليدية."], ["Explored historic landmarks and traditional markets."], ["تاريخ وعمارة"], ["History & architecture"], ["طهران", "أصفهان"], ["Tehran", "Isfahan"], 7],
  ["india", "in", "الهند", "India", "زيارة إلى الهند بتنوعها الكبير.", "A visit to India and its vast diversity.", ["تجربة إيقاع المدن والأسواق والتنوع الثقافي."], ["Experienced cities, markets and cultural diversity."], ["تنوع ثقافي"], ["Cultural diversity"], ["دلهي", "مومباي"], ["Delhi", "Mumbai"], 8],
  ["malaysia", "my", "ماليزيا", "Malaysia", "رحلة إلى ماليزيا بين المدينة والطبيعة.", "A journey to Malaysia between city and nature.", ["استكشاف كوالالمبور والمعالم والأسواق."], ["Explored Kuala Lumpur landmarks and markets."], ["كوالالمبور"], ["Kuala Lumpur"], ["كوالالمبور"], ["Kuala Lumpur"], 9],
  ["sri-lanka", "lk", "سريلانكا", "Sri Lanka", "زيارة إلى سريلانكا بسواحلها وخضرتها.", "A visit to Sri Lanka with coasts and greenery.", ["استكشاف الطبيعة والسواحل والمعالم المحلية."], ["Explored nature, coasts and local landmarks."], ["سواحل وطبيعة"], ["Coasts & nature"], ["كولومبو", "كاندي"], ["Colombo", "Kandy"], 10],
  ["kazakhstan", "kz", "كازاخستان", "Kazakhstan", "زيارة إلى كازاخستان ومدنها الحديثة.", "A visit to Kazakhstan and its modern cities.", ["التعرّف على المدن الحديثة واتساع المكان."], ["Discovered modern cities and geographic expanse."], ["مدن حديثة"], ["Modern cities"], ["أستانا", "ألماتي"], ["Astana", "Almaty"], 11],
  ["kyrgyzstan", "kg", "قيرغيزستان", "Kyrgyzstan", "زيارة إلى قيرغيزستان بلد الجبال والبحيرات.", "A visit to Kyrgyzstan, land of mountains and lakes.", ["استكشاف المشاهد الجبلية والطبيعة."], ["Explored mountain landscapes and nature."], ["جبال وبحيرات"], ["Mountains & lakes"], ["بيشكك"], ["Bishkek"], 12],
  ["azerbaijan", "az", "أذربيجان", "Azerbaijan", "زيارة إلى أذربيجان وباكو الحديثة.", "A visit to Azerbaijan and modern Baku.", ["استكشاف باكو القديمة والحديثة."], ["Explored old and modern Baku."], ["باكو"], ["Baku"], ["باكو"], ["Baku"], 13],
  ["georgia", "ge", "جورجيا", "Georgia", "زيارة إلى جورجيا بين تبليسي والجبال.", "A visit to Georgia between Tbilisi and the mountains.", ["التجوال في تبليسي والمعالم الحديثة."], ["Wandered through Tbilisi and modern landmarks."], ["تبليسي"], ["Tbilisi"], ["تبليسي", "باتومي"], ["Tbilisi", "Batumi"], 14],
];

const profile = {
  name: { ar: "عبد الحميد بن حمود بن حمدان الرواحي", en: "Abdul Hamid Hamood Hamdan Al Rawahi" },
  shortName: { ar: "عبد الحميد الرواحي", en: "Abdul Hamid Al Rawahi" },
  role: {
    ar: "مدير الإدارة والموارد البشرية | مدير الشؤون الإدارية والمالية",
    en: "Administration & HR Manager | Director of Administration & Financial Affairs",
  },
  headline: {
    ar: "أقود بعقلٍ منظّم، وأبني بشغفٍ لا يتوقف عن التعلّم.",
    en: "I lead with structure and build with a passion for continuous learning.",
  },
  summary: {
    ar: "إداري عُماني بخبرة تتجاوز 15 عامًا في الإدارة والموارد البشرية والعلاقات العامة والشؤون المالية.",
    en: "An Omani executive with over 15 years of experience in administration, human resources, public relations and financial affairs.",
  },
  objective: {
    ar: "أهدف إلى تطوير كفاءة الإدارة والموارد البشرية باستخدام التقنية والابتكار.",
    en: "My objective is to improve administration and human-resource efficiency through technology and innovation.",
  },
  location: { ar: "المعبيلة، مسقط، سلطنة عُمان", en: "Al Maabela, Muscat, Sultanate of Oman" },
  nationality: { ar: "عُماني", en: "Omani" },
  birthplace: { ar: "سناو، سلطنة عُمان", en: "Sinaw, Sultanate of Oman" },
  email: "a.hamid89@hotmail.com",
  phone: "+968 95655200",
  linkedin: "https://www.linkedin.com/in/abdul-hamid-al-rawahi",
  github: "https://github.com/ainoamn",
  website: "https://abdulhamid.me/",
};

async function main() {
  await sql`DELETE FROM travel_photos`;
  await sql`DELETE FROM travel_visits`;
  await sql`DELETE FROM travel_countries`;

  for (const country of countries) {
    const [slug, code, nameAr, nameEn, summaryAr, summaryEn, detailsAr, detailsEn, highlightsAr, highlightsEn, citiesAr, citiesEn, sortOrder, isHome = false] = country;
    await sql`
      INSERT INTO travel_countries (
        slug, code, name_ar, name_en, summary_ar, summary_en,
        details_ar, details_en, highlights_ar, highlights_en, cities_ar, cities_en, sort_order, is_home
      ) VALUES (
        ${slug}, ${code}, ${nameAr}, ${nameEn}, ${summaryAr}, ${summaryEn},
        ${JSON.stringify(detailsAr)}::jsonb, ${JSON.stringify(detailsEn)}::jsonb,
        ${JSON.stringify(highlightsAr)}::jsonb, ${JSON.stringify(highlightsEn)}::jsonb,
        ${JSON.stringify(citiesAr)}::jsonb, ${JSON.stringify(citiesEn)}::jsonb,
        ${sortOrder}, ${Boolean(isHome)}
      )
    `;
  }

  await sql`
    INSERT INTO site_settings (key, value, updated_at)
    VALUES ('profile', ${JSON.stringify(profile)}::jsonb, NOW())
    ON CONFLICT (key) DO UPDATE SET value = EXCLUDED.value, updated_at = NOW()
  `;

  console.log(`Seeded ${countries.length} countries and profile settings.`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
