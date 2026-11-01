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
  { href: "/contact", label: { ar: "تواصل", en: "Contact" } },
];

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
