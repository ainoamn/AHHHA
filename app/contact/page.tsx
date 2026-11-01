"use client";

import { profile } from "../site-content";
import { useLanguage } from "../components/language-provider";
import { PageHero, NextPage } from "../components/page-elements";
import { ArrowIcon, ExternalIcon, PinIcon } from "../components/site-chrome";

function MailIcon() {
  return <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="1" /><path d="m4 7 8 6 8-6" /></svg>;
}

function PhoneIcon() {
  return <svg aria-hidden="true" className="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 3h3l1.5 5-2.2 1.6a15 15 0 0 0 5.1 5.1L16 12.5l5 1.5v3c0 2.2-1.8 4-4 4C9.3 21 3 14.7 3 7c0-2.2 1.8-4 4-4Z" /></svg>;
}

export default function ContactPage() {
  const { language, isArabic } = useLanguage();
  const contactItems = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: <MailIcon />, external: false },
    { label: isArabic ? "الهاتف" : "Phone", value: profile.phone, href: "tel:+96895655200", icon: <PhoneIcon />, external: false },
    { label: "LinkedIn", value: "Abdul Hamid Al Rawahi", href: profile.linkedin, icon: <span className="text-icon">in</span>, external: true },
    { label: "GitHub", value: "ainoamn", href: profile.github, icon: <span className="text-icon">GH</span>, external: true },
  ];

  return (
    <main id="main-content">
      <PageHero
        number="08"
        eyebrow={{ ar: "التواصل", en: "Contact" }}
        title={{ ar: "يسعدني التواصل وتبادل الخبرات والأفكار.", en: "I welcome conversations, shared experience and thoughtful ideas." }}
        lead={{ ar: "للتواصل المهني، أو مناقشة فرصة، أو مشروع يجمع الإدارة بالتقنية والتطوير؛ يمكن مراسلتي مباشرة عبر القنوات التالية.", en: "For professional conversations, opportunities or projects where administration meets technology and development, reach me directly through the channels below." }}
        aside={<div className="contact-location"><PinIcon /><span>{profile.location[language]}</span></div>}
      />

      <section className="paper-section contact-detail-section">
        <div className="container contact-grid">
          <div className="contact-intro">
            <p className="eyebrow eyebrow--dark"><span>HELLO</span>{isArabic ? "ابدأ الحوار" : "Start the conversation"}</p>
            <h2>{isArabic ? "التواصل المباشر هو البداية الأبسط لفكرة جيدة." : "A direct conversation is the simplest beginning for a good idea."}</h2>
            <p>{isArabic ? "اختر وسيلة التواصل المناسبة لك، وسأكون سعيدًا بالرد ومشاركة ما يمكن أن يضيف قيمة." : "Choose the channel that works for you. I will be glad to respond and explore where I can add value."}</p>
          </div>
          <div className="contact-list">
            {contactItems.map((item) => (
              <a href={item.href} key={item.label} target={item.external ? "_blank" : undefined} rel={item.external ? "noreferrer" : undefined}>
                <span className="contact-icon">{item.icon}</span>
                <span className="contact-copy"><small>{item.label}</small><strong>{item.value}</strong></span>
                {item.external ? <ExternalIcon /> : <ArrowIcon mirrored={isArabic} />}
              </a>
            ))}
          </div>
        </div>
      </section>

      <NextPage href="/" number="01" label={{ ar: "العودة إلى البداية", en: "Back to the beginning" }} title={{ ar: "الرئيسية", en: "Home" }} />
    </main>
  );
}
