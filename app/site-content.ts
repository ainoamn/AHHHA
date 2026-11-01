export type Language = "ar" | "en";
export type LocalizedText = Record<Language, string>;

export const profile = {
  name: {
    ar: "عبد الحميد بن حمود بن حمدان الرواحي",
    en: "Abdul Hamid Hamood Hamdan Al Rawahi",
  },
  shortName: {
    ar: "عبد الحميد الرواحي",
    en: "Abdul Hamid Al Rawahi",
  },
  role: {
    ar: "مدير الإدارة والموارد البشرية | مدير الشؤون الإدارية والمالية",
    en: "Administration & HR Manager | Director of Administration & Financial Affairs",
  },
  headline: {
    ar: "أقود بعقلٍ منظّم، وأبني بشغفٍ لا يتوقف عن التعلّم.",
    en: "I lead with structure and build with a passion for continuous learning.",
  },
  summary: {
    ar: "إداري عُماني بخبرة تتجاوز 15 عامًا في الإدارة والموارد البشرية والعلاقات العامة والشؤون المالية. قدت فرقًا، وأسهمت في تأسيس وتطوير مؤسسات، وبنيت أنظمة عمل رفعت الكفاءة ونظّمت العمليات، مع شغف دائم بالتعلّم والابتكار والتقنية.",
    en: "An Omani executive with over 15 years of experience in administration, human resources, public relations and financial affairs. I have led teams, helped establish and develop organisations, and built systems that improve efficiency and operations, driven by continuous learning, innovation and technology.",
  },
  objective: {
    ar: "أهدف إلى تطوير كفاءة الإدارة والموارد البشرية باستخدام التقنية والابتكار، ورفع رضا الموظفين والمراجعين، وبناء بيئة عمل أكثر تنظيمًا ومرونة وقدرة على النمو.",
    en: "My objective is to improve administration and human-resource efficiency through technology and innovation, increase employee and client satisfaction, and build a more organised, flexible and scalable workplace.",
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

export const navigation = [
  { href: "/", label: { ar: "الرئيسية", en: "Home" } },
  { href: "/skills", label: { ar: "المهارات", en: "Skills" } },
  { href: "/experience", label: { ar: "الخبرات", en: "Experience" } },
  { href: "/vision", label: { ar: "التطلعات", en: "Vision" } },
  { href: "/achievements", label: { ar: "الإنجازات", en: "Achievements" } },
  { href: "/ventures", label: { ar: "الأعمال", en: "Ventures" } },
  { href: "/travel", label: { ar: "السفر", en: "Travel" } },
  { href: "/contact", label: { ar: "تواصل", en: "Contact" } },
];

export type TravelPhoto = {
  src: string;
  alt: LocalizedText;
};

export type TravelCountry = {
  slug: string;
  /** ISO 3166-1 alpha-2 country code used for the flag image. */
  code: string;
  name: LocalizedText;
  year: string;
  period?: LocalizedText;
  summary: LocalizedText;
  details: LocalizedText[];
  highlights?: LocalizedText[];
  cities?: LocalizedText[];
  /** Home/residence country — no visit count is shown. */
  isHome?: boolean;
  /** Place image files under `public/travel/{slug}/` then list them here. */
  photos: TravelPhoto[];
};

export const travelCountries: TravelCountry[] = [
  {
    slug: "oman",
    code: "om",
    name: { ar: "سلطنة عُمان", en: "Sultanate of Oman" },
    year: "—",
    period: { ar: "الوطن ومقر الإقامة", en: "Homeland & residence" },
    isHome: true,
    summary: {
      ar: "سلطنة عُمان هي موطني ومقر إقامتي؛ منها انطلقت رحلتي، وإليها تعود كل الذكريات.",
      en: "The Sultanate of Oman is my homeland and place of residence—where my journey began and where every memory returns.",
    },
    details: [
      {
        ar: "أقيم في عُمان، فهي ليست وجهة زيارة بل الوطن الذي أنطلق منه وأعود إليه.",
        en: "I live in Oman; it is not a travel destination but the homeland I leave from and return to.",
      },
      {
        ar: "بين الجبال والسواحل والصحراء والمدن تتشكل ملامح الهوية والانتماء.",
        en: "Across mountains, coasts, deserts and cities, identity and belonging take shape.",
      },
    ],
    highlights: [
      { ar: "الوطن", en: "Homeland" },
      { ar: "مقر الإقامة", en: "Place of residence" },
    ],
    cities: [
      { ar: "مسقط", en: "Muscat" },
      { ar: "المعبيلة", en: "Al Maabela" },
    ],
    photos: [],
  },
  {
    slug: "uae",
    code: "ae",
    name: { ar: "الإمارات العربية المتحدة", en: "United Arab Emirates" },
    year: "—",
    period: { ar: "زيارات متعددة", en: "Multiple visits" },
    summary: {
      ar: "زيارات جمعت بين العمل والاستكشاف في مدن حديثة نابضة بالحركة وبيئة أعمال متقدمة.",
      en: "Visits combining work and exploration in modern, energetic cities with an advanced business environment.",
    },
    details: [
      {
        ar: "الاطلاع على مراكز الأعمال والمعالم الحضرية والأسواق الحديثة.",
        en: "Explored business centres, urban landmarks and modern markets.",
      },
      {
        ar: "تجربة المدينة من الواجهات البحرية إلى الأحياء الثقافية.",
        en: "Experienced the city from waterfronts to cultural districts.",
      },
    ],
    highlights: [
      { ar: "دبي وأبوظبي", en: "Dubai & Abu Dhabi" },
      { ar: "بيئة أعمال حديثة", en: "Modern business environment" },
    ],
    cities: [
      { ar: "دبي", en: "Dubai" },
      { ar: "أبوظبي", en: "Abu Dhabi" },
    ],
    photos: [],
  },
  {
    slug: "saudi-arabia",
    code: "sa",
    name: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
    year: "—",
    period: { ar: "زيارات موثّقة", en: "Documented visits" },
    summary: {
      ar: "زيارات تعكس القرب الخليجي والتعرّف على التحول الحضري والاقتصادي في مدن المملكة.",
      en: "Visits that reflect Gulf closeness and the urban and economic transformation across Saudi cities.",
    },
    details: [
      {
        ar: "التعرّف على مشاريع التطوير وبيئة أعمال آخذة في التوسع.",
        en: "Explored development projects and a rapidly expanding business environment.",
      },
      {
        ar: "لحظات سفر تجمع بين المدن الحديثة والعمق الثقافي.",
        en: "Travel moments that combine modern cities with cultural depth.",
      },
    ],
    highlights: [
      { ar: "تحول حضري", en: "Urban transformation" },
      { ar: "قرب ثقافي خليجي", en: "Gulf cultural closeness" },
    ],
    cities: [
      { ar: "الرياض", en: "Riyadh" },
      { ar: "جدة", en: "Jeddah" },
    ],
    photos: [],
  },
  {
    slug: "bahrain",
    code: "bh",
    name: { ar: "البحرين", en: "Bahrain" },
    year: "—",
    period: { ar: "زيارة خليجية", en: "Gulf visit" },
    summary: {
      ar: "زيارة إلى المنامة؛ مدينة قريبة روحًا، تجمع بين الطابع الخليجي والمعالم الحديثة.",
      en: "A visit to Manama—a close-spirited city combining Gulf character with modern landmarks.",
    },
    details: [
      {
        ar: "استكشاف المدينة والأسواق والمعالم المحلية.",
        en: "Explored the city, markets and local landmarks.",
      },
      {
        ar: "تجربة القرب الجغرافي والثقافي داخل منظومة الخليج.",
        en: "Experienced geographic and cultural closeness within the Gulf.",
      },
    ],
    highlights: [
      { ar: "المنامة", en: "Manama" },
      { ar: "طابع خليجي مميز", en: "Distinct Gulf character" },
    ],
    cities: [{ ar: "المنامة", en: "Manama" }],
    photos: [],
  },
  {
    slug: "qatar",
    code: "qa",
    name: { ar: "قطر", en: "Qatar" },
    year: "—",
    period: { ar: "زيارة إلى الدوحة", en: "Visit to Doha" },
    summary: {
      ar: "زيارة إلى الدوحة للاطلاع على المدينة الحديثة وتنظيمها ومرافقها العامة.",
      en: "A visit to Doha to experience the modern city, its organisation and public facilities.",
    },
    details: [
      {
        ar: "استكشاف الواجهة البحرية والمعالم الحديثة.",
        en: "Explored the waterfront and modern landmarks.",
      },
      {
        ar: "ملاحظة جودة التنظيم في مدينة تستضيف فعاليات كبرى.",
        en: "Noted the quality of organisation in a city that hosts major events.",
      },
    ],
    highlights: [
      { ar: "الدوحة", en: "Doha" },
      { ar: "مرافق وتنظيم حديث", en: "Modern facilities & organisation" },
    ],
    cities: [{ ar: "الدوحة", en: "Doha" }],
    photos: [],
  },
  {
    slug: "jordan",
    code: "jo",
    name: { ar: "الأردن", en: "Jordan" },
    year: "—",
    period: { ar: "رحلة إلى بلاد الشام", en: "Levant journey" },
    summary: {
      ar: "رحلة إلى الأردن؛ بلد يجمع بين عمّان الحديثة والمعالم التاريخية والطبيعة المتنوعة.",
      en: "A journey to Jordan—a country that combines modern Amman with historic landmarks and diverse nature.",
    },
    details: [
      {
        ar: "زيارة العاصمة والتعرّف على إيقاع المدينة والضيافة الأردنية.",
        en: "Visited the capital and experienced the city’s rhythm and Jordanian hospitality.",
      },
      {
        ar: "الاطلاع على معالم تاريخية وطبيعية ضمن مسار السفر.",
        en: "Explored historic and natural landmarks along the travel route.",
      },
    ],
    highlights: [
      { ar: "عمّان", en: "Amman" },
      { ar: "تاريخ وطبيعة", en: "History & nature" },
    ],
    cities: [{ ar: "عمّان", en: "Amman" }],
    photos: [],
  },
  {
    slug: "iran",
    code: "ir",
    name: { ar: "إيران", en: "Iran" },
    year: "—",
    period: { ar: "رحلة ثقافية", en: "Cultural journey" },
    summary: {
      ar: "زيارة إلى إيران؛ تجربة غنية بالتاريخ والعمارة والأسواق والثقافة اليومية.",
      en: "A visit to Iran—an experience rich in history, architecture, markets and everyday culture.",
    },
    details: [
      {
        ar: "استكشاف المعالم التاريخية والأسواق التقليدية.",
        en: "Explored historic landmarks and traditional markets.",
      },
      {
        ar: "التعرّف على الضيافة المحلية وتنوع المدن والمناطق.",
        en: "Experienced local hospitality and the diversity of cities and regions.",
      },
    ],
    highlights: [
      { ar: "تاريخ وعمارة", en: "History & architecture" },
      { ar: "أسواق وثقافة", en: "Markets & culture" },
    ],
    cities: [
      { ar: "طهران", en: "Tehran" },
      { ar: "أصفهان", en: "Isfahan" },
    ],
    photos: [],
  },
  {
    slug: "india",
    code: "in",
    name: { ar: "الهند", en: "India" },
    year: "—",
    period: { ar: "رحلة إلى جنوب آسيا", en: "South Asia journey" },
    summary: {
      ar: "زيارة إلى الهند؛ بلد يتسم بالتنوع الكبير في الناس والألوان والأسواق والحياة اليومية.",
      en: "A visit to India—a country marked by extraordinary diversity in people, colours, markets and everyday life.",
    },
    details: [
      {
        ar: "تجربة إيقاع المدن والأسواق والتنوع الثقافي.",
        en: "Experienced the rhythm of cities, markets and cultural diversity.",
      },
      {
        ar: "لحظات سفر تعكس ثراء الهند الاجتماعي والبصري.",
        en: "Travel moments that reflect India’s social and visual richness.",
      },
    ],
    highlights: [
      { ar: "تنوع ثقافي", en: "Cultural diversity" },
      { ar: "مدن وأسواق", en: "Cities & markets" },
    ],
    cities: [
      { ar: "دلهي", en: "Delhi" },
      { ar: "مومباي", en: "Mumbai" },
    ],
    photos: [],
  },
  {
    slug: "malaysia",
    code: "my",
    name: { ar: "ماليزيا", en: "Malaysia" },
    year: "—",
    period: { ar: "رحلة إلى شرق آسيا", en: "Southeast Asia journey" },
    summary: {
      ar: "رحلة إلى ماليزيا جمعت بين كوالالمبور الحديثة والطبيعة والتنوع الثقافي.",
      en: "A journey to Malaysia combining modern Kuala Lumpur with nature and cultural diversity.",
    },
    details: [
      {
        ar: "استكشاف المدينة الحديثة والمعالم الشهيرة والأسواق المحلية.",
        en: "Explored the modern city, famous landmarks and local markets.",
      },
      {
        ar: "لحظات من الطبيعة والضيافة الآسيوية ضمن جدول سفر متوازن.",
        en: "Moments of nature and Asian hospitality within a balanced itinerary.",
      },
    ],
    highlights: [
      { ar: "كوالالمبور", en: "Kuala Lumpur" },
      { ar: "تنوع ثقافي وطبيعة", en: "Cultural diversity & nature" },
    ],
    cities: [{ ar: "كوالالمبور", en: "Kuala Lumpur" }],
    photos: [],
  },
  {
    slug: "sri-lanka",
    code: "lk",
    name: { ar: "سريلانكا", en: "Sri Lanka" },
    year: "—",
    period: { ar: "رحلة جزيرية", en: "Island journey" },
    summary: {
      ar: "زيارة إلى سريلانكا؛ جزيرة تجمع بين السواحل والخضرة والمعابد والطابع الهادئ.",
      en: "A visit to Sri Lanka—an island of coasts, greenery, temples and a calm character.",
    },
    details: [
      {
        ar: "استكشاف الطبيعة والسواحل والمعالم المحلية.",
        en: "Explored nature, coasts and local landmarks.",
      },
      {
        ar: "تجربة إيقاع الجزيرة والضيافة البسيطة الدافئة.",
        en: "Experienced the island’s rhythm and warm, simple hospitality.",
      },
    ],
    highlights: [
      { ar: "سواحل وطبيعة", en: "Coasts & nature" },
      { ar: "ثقافة محلية", en: "Local culture" },
    ],
    cities: [
      { ar: "كولومبو", en: "Colombo" },
      { ar: "كاندي", en: "Kandy" },
    ],
    photos: [],
  },
  {
    slug: "kazakhstan",
    code: "kz",
    name: { ar: "كازاخستان", en: "Kazakhstan" },
    year: "—",
    period: { ar: "رحلة إلى آسيا الوسطى", en: "Central Asia journey" },
    summary: {
      ar: "زيارة إلى كازاخستان؛ بلد واسع يجمع بين المدن الحديثة واتساع السهول والطابع الأوراسي.",
      en: "A visit to Kazakhstan—a vast country combining modern cities, open steppes and a Eurasian character.",
    },
    details: [
      {
        ar: "التعرّف على المدن الحديثة وإيقاع الحياة المحلية.",
        en: "Discovered modern cities and the local rhythm of life.",
      },
      {
        ar: "لحظات سفر تعكس اتساع المكان والتنوع الجغرافي.",
        en: "Travel moments that reflect the scale of the land and geographic diversity.",
      },
    ],
    highlights: [
      { ar: "مدن حديثة", en: "Modern cities" },
      { ar: "اتساع جغرافي", en: "Geographic expanse" },
    ],
    cities: [
      { ar: "أستانا", en: "Astana" },
      { ar: "ألماتي", en: "Almaty" },
    ],
    photos: [],
  },
  {
    slug: "kyrgyzstan",
    code: "kg",
    name: { ar: "قيرغيزستان", en: "Kyrgyzstan" },
    year: "—",
    period: { ar: "رحلة جبلية", en: "Mountain journey" },
    summary: {
      ar: "زيارة إلى قيرغيزستان؛ بلد الجبال والبحيرات والطبيعة المفتوحة والضيافة في آسيا الوسطى.",
      en: "A visit to Kyrgyzstan—a land of mountains, lakes, open nature and Central Asian hospitality.",
    },
    details: [
      {
        ar: "استكشاف المشاهد الجبلية والطبيعة المحيطة بالمدن.",
        en: "Explored mountain landscapes and nature around the cities.",
      },
      {
        ar: "تجربة الطابع المحلي الهادئ والضيافة التقليدية.",
        en: "Experienced the calm local character and traditional hospitality.",
      },
    ],
    highlights: [
      { ar: "جبال وبحيرات", en: "Mountains & lakes" },
      { ar: "طبيعة مفتوحة", en: "Open nature" },
    ],
    cities: [
      { ar: "بيشكك", en: "Bishkek" },
      { ar: "إسيك كول", en: "Issyk-Kul" },
    ],
    photos: [],
  },
  {
    slug: "azerbaijan",
    code: "az",
    name: { ar: "أذربيجان", en: "Azerbaijan" },
    year: "—",
    period: { ar: "رحلة إلى القوقاز", en: "Caucasus journey" },
    summary: {
      ar: "زيارة إلى أذربيجان؛ باكو الحديثة وملامح القوقاز بين البحر والمدينة والتاريخ.",
      en: "A visit to Azerbaijan—modern Baku and Caucasian character between sea, city and history.",
    },
    details: [
      {
        ar: "استكشاف باكو القديمة والحديثة والواجهة البحرية.",
        en: "Explored old and modern Baku and the waterfront.",
      },
      {
        ar: "التعرّف على مزيج العمارة والثقافة المحلية.",
        en: "Discovered a blend of architecture and local culture.",
      },
    ],
    highlights: [
      { ar: "باكو", en: "Baku" },
      { ar: "مدينة وتاريخ", en: "City & history" },
    ],
    cities: [{ ar: "باكو", en: "Baku" }],
    photos: [],
  },
  {
    slug: "georgia",
    code: "ge",
    name: { ar: "جورجيا", en: "Georgia" },
    year: "—",
    period: { ar: "رحلة إلى القوقاز", en: "Caucasus journey" },
    summary: {
      ar: "زيارة إلى جورجيا؛ بلد يجمع بين تبليسي العريقة والجبال والضيافة الدافئة.",
      en: "A visit to Georgia—a country combining historic Tbilisi, mountains and warm hospitality.",
    },
    details: [
      {
        ar: "التجوال في تبليسي بين الأحياء القديمة والمعالم الحديثة.",
        en: "Wandered through Tbilisi’s old neighbourhoods and modern landmarks.",
      },
      {
        ar: "تجربة الطبيعة الجبلية والضيافة الجورجية.",
        en: "Experienced mountain nature and Georgian hospitality.",
      },
    ],
    highlights: [
      { ar: "تبليسي", en: "Tbilisi" },
      { ar: "جبال وضيافة", en: "Mountains & hospitality" },
    ],
    cities: [
      { ar: "تبليسي", en: "Tbilisi" },
      { ar: "باتومي", en: "Batumi" },
    ],
    photos: [],
  },
];

export function getTravelCountry(slug: string) {
  return travelCountries.find((country) => country.slug === slug);
}

export function getTravelFlagUrl(code: string, width = 160) {
  return `https://flagcdn.com/w${width}/${code.toLowerCase()}.png`;
}

export const passions = [
  {
    number: "01",
    title: { ar: "التعلّم المستمر", en: "Continuous learning" },
    description: {
      ar: "أؤمن أن كل مرحلة مهنية تحتاج عقلًا متجددًا؛ لذلك أقرأ وأتعلم وأكتشف التقنيات التي تصنع طريقة عمل أفضل.",
      en: "Every professional chapter needs a renewed mindset, so I keep reading, learning and exploring technology that enables better ways of working.",
    },
  },
  {
    number: "02",
    title: { ar: "الابتكار والتطوير", en: "Innovation & development" },
    description: {
      ar: "يشدّني تحويل المشكلة اليومية إلى نظام أبسط، وتحويل الفكرة الجيدة إلى تجربة عملية قابلة للنمو.",
      en: "I am drawn to turning everyday problems into simpler systems and good ideas into practical experiences that can grow.",
    },
  },
  {
    number: "03",
    title: { ar: "الناس والأثر", en: "People & impact" },
    description: {
      ar: "أجد قيمة العمل في أثره على الناس؛ داخل الفريق، وفي تجربة العميل، وفي المبادرات التي تخدم المجتمع.",
      en: "I find the value of work in its impact on people—within teams, client experiences and initiatives that serve the community.",
    },
  },
];

export const aspirations = [
  {
    number: "01",
    title: { ar: "إدارة أذكى بالتقنية", en: "Smarter administration through technology" },
    description: {
      ar: "تطوير أنظمة إدارية ومالية وموارد بشرية تقلل التعقيد، وترفع الدقة، وتمنح متخذ القرار رؤية أوضح.",
      en: "Develop administrative, financial and people systems that reduce complexity, improve accuracy and give decision-makers clearer insight.",
    },
  },
  {
    number: "02",
    title: { ar: "بيئة عمل تتمحور حول الإنسان", en: "A people-centred workplace" },
    description: {
      ar: "بناء بيئة منظمة ومرنة ترفع رضا الموظفين والمراجعين، وتحوّل الإجراءات إلى تجربة أكثر وضوحًا واحترامًا.",
      en: "Build an organised, flexible environment that improves employee and client satisfaction and makes every process clearer and more respectful.",
    },
  },
  {
    number: "03",
    title: { ar: "مؤسسات قابلة للنمو", en: "Organisations built to grow" },
    description: {
      ar: "تحويل الأفكار الواعدة إلى مؤسسات ومنصات مستدامة، بهوية قوية ونظام تشغيل قادر على التطور مع المستقبل.",
      en: "Turn promising ideas into sustainable organisations and platforms with a strong identity and an operating system ready for the future.",
    },
  },
];

export const principles = [
  { ar: "أفهم قبل أن أقرر", en: "Understand before deciding" },
  { ar: "أنظّم قبل أن أتوسع", en: "Organise before scaling" },
  { ar: "أقيس الأثر لا الانشغال", en: "Measure impact, not activity" },
  { ar: "أبني نظامًا لا حلًا مؤقتًا", en: "Build a system, not a temporary fix" },
];

export const personalFacts = [
  { label: { ar: "الجنسية", en: "Nationality" }, value: profile.nationality },
  { label: { ar: "مكان الميلاد", en: "Place of birth" }, value: profile.birthplace },
  { label: { ar: "مقر الإقامة", en: "Based in" }, value: profile.location },
  { label: { ar: "اللغات", en: "Languages" }, value: { ar: "العربية والإنجليزية", en: "Arabic & English" } },
];

export const stats = [
  { value: "+15", label: { ar: "عامًا من الخبرة العملية", en: "Years of experience" } },
  { value: "2007", label: { ar: "بداية المسيرة المهنية", en: "Career began" } },
  { value: "08", label: { ar: "محطات وظيفية موثقة", en: "Documented career roles" } },
  { value: "03", label: { ar: "إنجازات تأسيسية رئيسية", en: "Major founding achievements" } },
];

export const experience = [
  {
    period: "2015 — Present",
    title: { ar: "مدير الإدارة والموارد البشرية", en: "Administration and HR Manager" },
    organization: "Syed Fayyaz International Group LLC",
    location: { ar: "مسقط، العذيبة الشمالية", en: "Muscat, North Al Athaiba" },
    description: {
      ar: "إدارة شركات المجموعة ورفع كفاءتها الإدارية، وتطوير أنظمة التشغيل، ومراجعة المستندات القانونية وعقود العمل والإيجار، وحماية مصالح المنشآت وتعزيز ثقة أصحاب المصلحة.",
      en: "Managing the group’s companies, improving administrative efficiency, developing operational systems, reviewing legal documents and employment and lease contracts, and protecting organisational interests.",
    },
  },
  {
    period: "2015 — Present",
    title: { ar: "مدير الإدارة والشؤون المالية", en: "Director of Administration and Financial Affairs" },
    organization: "United Desert Development",
    location: { ar: "السيب، المعبيلة الجنوبية", en: "Seeb, South Maabela" },
    description: {
      ar: "الإشراف على الإدارة والوثائق والعقود والمشتريات والمبيعات، والعمل على تحسين كفاءة الموظفين وجودة العمل وتعزيز العلامة المؤسسية.",
      en: "Overseeing administration, documents, contracts, procurement and sales while improving employee efficiency, work quality and the company’s institutional brand.",
    },
  },
  {
    period: "2015 — Present",
    title: { ar: "مدير الإدارة والشؤون المالية", en: "Director of Administration and Financial Affairs" },
    organization: "Construction House",
    location: { ar: "السيب، المعبيلة الجنوبية", en: "Seeb, South Maabela" },
    description: {
      ar: "إدارة الشؤون الإدارية والمالية والعقود والمشتريات والمبيعات، وتطوير جودة العمل وتنويع مصادر الدخل.",
      en: "Managing administration, finance, contracts, procurement and sales, while improving work quality and diversifying income sources.",
    },
  },
  {
    period: "2012 — 2014",
    title: { ar: "مدير الإدارة", en: "Administration Manager" },
    organization: "Dominant House Trading",
    location: { ar: "مسقط، العذيبة الشمالية", en: "Muscat, North Al Athaiba" },
    description: {
      ar: "المشاركة في تأسيس شركة مقاولات جديدة، والعمل مع الإدارة العليا على اتفاقيات القوى العاملة واستقطاب الموظفين وإدارة ملفاتهم.",
      en: "Helping establish a new construction company and working with senior management on labour agreements, recruitment and employee-file administration.",
    },
  },
  {
    period: "2012 — 2014",
    title: { ar: "مدير الإدارة والموارد البشرية", en: "Administration and HR Manager" },
    organization: "Wahdi-Al-Jazer Trading & Contracting LLC",
    location: { ar: "مسقط، العذيبة الشمالية", en: "Muscat, North Al Athaiba" },
    description: {
      ar: "تطوير الإدارة والموارد البشرية وتطبيق أنظمة الحاسب والبرامج الحديثة لنقل العمل إلى مستوى أكثر كفاءة ودقة وتنظيمًا.",
      en: "Developing administration and HR and implementing modern computing systems to make work more efficient, accurate and organised.",
    },
  },
  {
    period: "2011 — 2012",
    title: { ar: "مسؤول علاقات عامة", en: "Public Relations Officer" },
    organization: "Wahdi-Al-Jazer Trading & Contracting LLC",
    location: { ar: "مسقط، الغبرة الشمالية", en: "Muscat, North Ghubrah" },
    description: {
      ar: "المساهمة في تأسيس الشركة وبناء علاقاتها مع الجهات الحكومية والخاصة وتحقيق أهداف تشغيلية مهمة خلال فترة قصيرة.",
      en: "Contributing to the company’s establishment, building government and private-sector relationships, and reaching key goals in a short period.",
    },
  },
  {
    period: "2009 — 2011",
    title: { ar: "مسؤول علاقات عامة", en: "Public Relations Officer" },
    organization: "United Gulf Pipe Manufacturing Company LLC",
    location: { ar: "مسقط، الرسيل الصناعية", en: "Muscat, Rusayl Industrial" },
    description: {
      ar: "تمثيل المؤسسة أمام الجهات الحكومية والخاصة، والمساهمة في تعزيز قيمتها السوقية، والعمل مع الموارد البشرية والإدارة التنفيذية لتوظيف التقنية في تطوير الأنظمة الإدارية.",
      en: "Representing the organisation with government and private entities, supporting its market value, and working with HR and executive management to modernise administrative systems.",
    },
  },
  {
    period: "2007 — 2009",
    title: { ar: "مسؤول علاقات عامة", en: "Public Relations Officer" },
    organization: "Dar Al-Ameer Trading & Contracting Company LLC",
    location: { ar: "مسقط", en: "Muscat" },
    description: {
      ar: "إدارة العلاقات مع العملاء والموردين والتنسيق مع الجهات الحكومية والخاصة لضمان انسيابية العمليات وتحقيق أهداف المؤسسة.",
      en: "Managing relationships with clients and suppliers and coordinating with government and private entities to support smooth operations.",
    },
  },
];

export const education = [
  {
    period: "2018 — Present",
    qualification: { ar: "المحاسبة والمالية", en: "Accounting and Finance" },
    institution: { ar: "كلية الخليج — المعبيلة، السيب", en: "Gulf College — Maabela, Seeb" },
  },
  {
    period: "2014 — 2015",
    qualification: { ar: "الموارد البشرية", en: "Human Resources" },
    institution: { ar: "كلية مجان الجامعية — دارسيت، مطرح", en: "Majan University College — Darsait, Muttrah" },
  },
  {
    period: "2013 — 2014",
    qualification: { ar: "البرنامج التأسيسي في اللغة الإنجليزية", en: "Foundation in English Language" },
    institution: { ar: "كلية مجان الجامعية — دارسيت، مطرح", en: "Majan University College — Darsait, Muttrah" },
  },
  {
    period: "2006 — 2007",
    qualification: { ar: "شهادة التعليم الثانوي", en: "Secondary School Certificate" },
    institution: {
      ar: "مدرسة الإمام سالم بن راشد الخروصي — خضراء بني دفاع، المضيبي",
      en: "Imam Salim bin Rashid Al Kharousi School — Al Mudhaibi",
    },
  },
];

export const courses = [
  { year: "2024", name: { ar: "أساسيات التسويق الرقمي", en: "Fundamentals of Digital Marketing" }, provider: "Yanfaa" },
  { year: "2024", name: { ar: "التسويق للشركات الناشئة", en: "Marketing for Startups" }, provider: "Yanfaa" },
  { year: "2024", name: { ar: "ريادة الأعمال 101", en: "Entrepreneurship 101" }, provider: "Yanfaa" },
  { year: "2024", name: { ar: "كيف تحصل على وظيفة أحلامك", en: "How to Get Your Dream Job" }, provider: "Yanfaa" },
  { year: "2023", name: { ar: "إدارة النزاعات", en: "Conflict Management" }, provider: "Yanfaa" },
  { year: "2023", name: { ar: "مهارات التأثير والإقناع", en: "Influence and Persuasion Skills" }, provider: "Yanfaa" },
  { year: "2007", name: { ar: "دورة في اللغة الإنجليزية", en: "English Course" }, provider: { ar: "كلية نزوى للتقنية", en: "Nizwa College of Technology" } },
];

export const skillGroups = [
  {
    title: { ar: "الإدارة والقيادة", en: "Management & Leadership" },
    items: {
      ar: ["إدارة الفرق", "إدارة الوقت", "تحفيز الموظفين", "العمل تحت الضغط", "العمل الجماعي", "التحدث أمام الجمهور"],
      en: ["Team leadership", "Time management", "Employee motivation", "Working under pressure", "Teamwork", "Public speaking"],
    },
  },
  {
    title: { ar: "التشغيل والموارد", en: "Operations & People" },
    items: {
      ar: ["إدارة الموارد البشرية", "العلاقات العامة", "مراجعة العقود", "المشتريات والمبيعات", "تطوير الإجراءات", "حل المشكلات"],
      en: ["Human resources", "Public relations", "Contract review", "Procurement and sales", "Process improvement", "Problem solving"],
    },
  },
  {
    title: { ar: "الحاسب والتقنية", en: "Technology" },
    items: {
      ar: ["Microsoft Office", "Windows", "صيانة الحاسب وتثبيت البرامج", "Photoshop", "AutoCAD", "تصميم وتطوير المنصات"],
      en: ["Microsoft Office", "Windows", "Computer maintenance and software", "Photoshop", "AutoCAD", "Platform design and development"],
    },
  },
];

export const achievements = [
  {
    number: "01",
    title: { ar: "تأسيس شركة لتطوير منصات التجارة الإلكترونية", en: "Founded an e-commerce platform development company" },
    description: {
      ar: "تحويل الاهتمام بالتقنية والتطوير إلى مسار عملي لبناء منصات وحلول رقمية قابلة للنمو.",
      en: "Turned a passion for technology into a practical path for building scalable platforms and digital solutions.",
    },
  },
  {
    number: "02",
    title: { ar: "تأسيس وإدارة مصنع للملابس الجاهزة", en: "Established and managed a ready-made clothing factory" },
    description: {
      ar: "خوض تجربة تأسيس وإدارة منشأة إنتاجية وتنظيم عملياتها ومواردها وتشغيلها.",
      en: "Established and operated a manufacturing venture, organising its people, resources and workflows.",
    },
  },
  {
    number: "03",
    title: { ar: "تأسيس وإدارة مجموعة الغبيراء الشبابية", en: "Founded and managed Al-Ghubaira Youth Group" },
    description: {
      ar: "مبادرة شبابية لتنظيم الرحلات والتخييم والأنشطة الجماعية وتعزيز التواصل والعمل بروح الفريق.",
      en: "A youth initiative for trips, camping and group activities that strengthened connection and teamwork.",
    },
  },
  {
    number: "04",
    title: { ar: "مبادرات لخدمة المجتمع المحلي", en: "Local community initiatives" },
    description: {
      ar: "المشاركة في متابعة مبادرات تشجير حديقة عامة وتحسين الطرق الداخلية لخدمة سكان المعبيلة الجنوبية.",
      en: "Supported community initiatives for a public park planting project and internal-road improvements in South Maabela.",
    },
  },
];

export const organisations = [
  {
    name: { ar: "بن حمود للتطوير", en: "Bin Hamood Development" },
    englishName: "BHD — Build Higher Dreams",
    role: { ar: "المؤسس والرؤية الاستراتيجية", en: "Founder and strategic vision" },
    description: {
      ar: "مظلة لتطوير الأعمال والمشاريع والمنصات الرقمية، تجمع الإدارة والعقار والمال والتجارة ضمن رؤية واحدة.",
      en: "A venture-development umbrella connecting management, property, finance, commerce and digital products under one vision.",
    },
  },
  {
    name: { ar: "مصنع الملابس الجاهزة", en: "Ready-Made Clothing Factory" },
    englishName: "Manufacturing Venture",
    role: { ar: "المؤسس والمدير", en: "Founder and manager" },
    description: {
      ar: "تجربة عملية في تأسيس منشأة إنتاجية وإدارة مواردها وتشغيلها وتطوير سير العمل فيها.",
      en: "Hands-on experience establishing a production business and managing its resources, operations and workflows.",
    },
  },
  {
    name: { ar: "مجموعة الغبيراء الشبابية", en: "Al-Ghubaira Youth Group" },
    englishName: "Youth, Trips & Camping",
    role: { ar: "المؤسس والمدير", en: "Founder and manager" },
    description: {
      ar: "مجموعة شبابية للرحلات والتخييم والأنشطة الجماعية، تعكس الاهتمام بالقيادة والتواصل والعمل المجتمعي.",
      en: "A youth group for trips, camping and community activities, reflecting leadership, communication and social engagement.",
    },
  },
];

export const projects = [
  {
    title: { ar: "عين عُمان", en: "Ain Oman" },
    type: { ar: "منصة عقارية ذكية", en: "Intelligent real-estate platform" },
    description: {
      ar: "منصة للبيع والإيجار والاستثمار وإدارة الرحلة العقارية من البحث حتى التعاقد والإدارة.",
      en: "A platform for property sale, rent, investment and management—from search to contracting and operations.",
    },
    href: "https://github.com/ainoamn/ainoamn-ain-oman-web",
  },
  {
    title: { ar: "وازن", en: "WAZEN" },
    type: { ar: "إدارة الأموال المشتركة", en: "Shared finance management" },
    description: {
      ar: "منصة لتنظيم الجمعيات والرحلات والمساهمات والمحافظ الشخصية بوضوح وعدالة ومرونة.",
      en: "A platform for organising savings circles, trips, contributions and personal wallets with clarity and fairness.",
    },
    href: "https://github.com/ainoamn/WAZEN",
  },
  {
    title: { ar: "حسابي", en: "Hisaby" },
    type: { ar: "نظام حسابات وإدارة مالية", en: "Accounting and finance system" },
    description: {
      ar: "نظام يبسّط الحسابات ويحوّل البيانات المالية اليومية إلى مؤشرات تساعد على اتخاذ القرار.",
      en: "A system that simplifies accounting and turns daily financial data into decision-ready insight.",
    },
    href: "https://github.com/ainoamn/hisaby",
  },
  {
    title: { ar: "هوية BHD الموحدة", en: "BHD ID" },
    type: { ar: "هوية رقمية موحّدة", en: "Unified digital identity" },
    description: {
      ar: "بوابة دخول واحدة وآمنة تربط المستخدم بمنصات وخدمات منظومة بن حمود للتطوير.",
      en: "One secure identity connecting users to the platforms and services of Bin Hamood Development.",
    },
    href: "https://id.bhd-om.com/login",
  },
];

export const interests = {
  ar: ["القراءة", "الكتابة", "التعلّم", "الابتكار", "التقنية", "التصميم", "التواصل", "التطوير", "التصوير", "السفر والرحلات"],
  en: ["Reading", "Writing", "Learning", "Innovation", "Technology", "Design", "Communication", "Development", "Photography", "Travel & camping"],
};

export const labels = {
  ar: {
    personalProfile: "ملف شخصي وسيرة مهنية",
    skip: "انتقل إلى المحتوى",
    language: "English",
    menu: "القائمة",
    knowMe: "تعرّف عليّ",
    career: "استعرض مسيرتي",
    aboutEyebrow: "من أنا",
    aboutTitle: "خبرة طويلة، وشغف لا يتوقف بالتعلم والتطوير.",
    objective: "هدفي المهني",
    careerEyebrow: "الخبرة المهنية",
    careerTitle: "مسيرة عملية تمتد منذ عام 2007.",
    educationEyebrow: "التعليم والتأهيل",
    educationTitle: "تعلم مستمر يجمع الإدارة بالمال والتقنية.",
    courses: "الدورات المهنية",
    skillsEyebrow: "المهارات",
    skillsTitle: "ما أقدمه في بيئة العمل.",
    achievementsEyebrow: "الإنجازات",
    achievementsTitle: "محطات أفتخر بأنني أسهمت في تأسيسها وإدارتها.",
    organisationsEyebrow: "ما أسسته وأديره",
    organisationsTitle: "مؤسسات ومبادرات تحوّلت من فكرة إلى واقع.",
    workEyebrow: "أعمال ومشاريع",
    workTitle: "التقنية جزء من رحلتي، وليست كل قصتي.",
    workBody: "هذه مجموعة مختارة من المنصات والأنظمة التي أعمل على تصورها وتطويرها بعد سنوات من الخبرة الإدارية والمالية.",
    visit: "زيارة المشروع",
    interests: "الاهتمامات",
    contactEyebrow: "التواصل",
    contactTitle: "يسعدني التواصل وتبادل الخبرات والفرص.",
    contactBody: "للتواصل المهني أو مناقشة فرصة أو مشروع، يمكن مراسلتي مباشرة عبر البريد الإلكتروني أو الهاتف أو LinkedIn.",
    rights: "جميع الحقوق محفوظة",
  },
  en: {
    personalProfile: "Personal Profile & Professional CV",
    skip: "Skip to content",
    language: "العربية",
    menu: "Menu",
    knowMe: "Get to know me",
    career: "View my career",
    aboutEyebrow: "About me",
    aboutTitle: "Deep experience and an enduring drive to learn and improve.",
    objective: "Career objective",
    careerEyebrow: "Professional experience",
    careerTitle: "A career journey spanning from 2007 to today.",
    educationEyebrow: "Education & qualifications",
    educationTitle: "Continuous learning across management, finance and technology.",
    courses: "Professional courses",
    skillsEyebrow: "Skills",
    skillsTitle: "What I bring to the workplace.",
    achievementsEyebrow: "Achievements",
    achievementsTitle: "Milestones I am proud to have founded, built and managed.",
    organisationsEyebrow: "What I founded and manage",
    organisationsTitle: "Organisations and initiatives transformed from ideas into reality.",
    workEyebrow: "Work & projects",
    workTitle: "Technology is part of my journey, not my whole story.",
    workBody: "A selection of platforms and systems I am shaping after years of experience across administration and finance.",
    visit: "Visit project",
    interests: "Interests",
    contactEyebrow: "Contact",
    contactTitle: "I welcome professional conversations, shared learning and meaningful opportunities.",
    contactBody: "For professional contact, an opportunity or a project discussion, reach me directly by email, phone or LinkedIn.",
    rights: "All rights reserved",
  },
};
