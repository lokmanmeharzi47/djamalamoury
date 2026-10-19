# Sovereign Institutional & Senior Executive Digital Portal Specification
**Client / Principal:** Mr. Djamal Amouri (السيد جمال عموري)  
**Title:** President of the Central Regional Office — Algiers and Neighboring Wilayas  
**Organization:** Algerian Organization Communication for Development & The National Authority for the Development of Migrants and Sponsorship of the Community Abroad  
**Accreditation:** Ministry of Interior and Local Authorities Approval No: `017 / م ع ح ع ش ق / م ج ج / م ف ج / 21`  
**Date:** October 19, 2026  

---

## 1. Executive Summary & Objective

Transform the project into an authoritative, sovereign-grade digital portal and executive credential link for **Mr. Djamal Amouri**. The portal communicates state-level prestige, institutional legitimacy, and diplomatic elegance, adhering to high-performance zero-dependency web standards (Vanilla HTML5, CSS3, ES6+).

The portal serves as:
1. An official executive biolink for institutional communication and audiences.
2. A digital verification gateway for Mr. Djamal Amouri's official leadership credential card (`بطاقة قيادة`).
3. An instant official vCard contact exchange interface for government officials, diplomats, and investors.
4. An institutional showcase of the Central Regional Office's strategic development pillars.

---

## 2. Visual Identity & Design System

### 2.1 Color Palette ("Sovereign Emerald & State Gold")
- **`--bg-deep`**: `#030A07` (Deepest obsidian-emerald black)
- **`--bg-surface`**: `rgba(8, 28, 20, 0.78)` (Translucent sovereign green glassmorphism)
- **`--bg-card`**: `linear-gradient(180deg, rgba(14, 38, 27, 0.92) 0%, rgba(5, 14, 10, 0.98) 100%)`
- **`--gold-primary`**: `#D4AF37` (Official Algerian State Gold)
- **`--gold-bright`**: `#F7E5A9` (Metallic gold highlight for titles & glow accents)
- **`--gold-muted`**: `#C5A059` (WCAG AA compliant gold for labels, >8:1 contrast)
- **`--crimson-accent`**: `#B81D24` (National crescent crimson for official seal badges)
- **`--text-primary`**: `#FFFFFF` (Pure white text)
- **`--text-secondary`**: `#D1DCD6` (Refined mint-tinted secondary text)
- **`--edge-gold`**: `1px solid rgba(212, 175, 55, 0.38)`

### 2.2 Typography
- **Arabic (`dir="rtl"`, `lang="ar"` - Default):**
  - Headings & Titles: `'Amiri'` / `'Cairo'` (Weight: 700 / 800)
  - UI & Credentials: `'Tajawal'` / `'Readex Pro'` (Weight: 400 / 500 / 600)
- **Latin (`dir="ltr"`, `lang="fr"` / `lang="en"`):**
  - Ceremonial Titles: `'Cormorant Garamond'` (Weight: 600 / 700)
  - Technical & UI Labels: `'Montserrat'` (Weight: 400 / 500 / 600)

---

## 3. Architecture & File Structure

```
c:/Users/mehar/Desktop/hey/
├── hero.jpg             # Original 1024x1536 executive portrait
├── hero-480.webp        # Responsive mobile asset (WebP)
├── hero-900.webp        # Responsive tablet asset (WebP)
├── hero-1400.webp       # Responsive desktop asset (WebP)
├── index.html           # Semantic accessible HTML5 structure
├── style.css            # Sovereign Emerald design system & responsive layout
└── script.js            # Particle engine, trilingual dictionary, vCard generator, modal logic
```

---

## 4. Component Hierarchy & Details

### 4.1 Floating Header & Language Switcher
- Floating top capsule with language pill selectors: `العربية` (default), `Français`, `English`.
- Algerian State Seal / Institutional Insignia badge.
- Instant DOM attribute updates (`html[lang]`, `html[dir]`) and translation replacements without page reload.

### 4.2 Sovereign Header
- State Heading: `الجمهورية الجزائرية الديمقراطية الشعبية`
- Organization: `المنظمة الجزائرية إتصال من أجل التنمية`
- Sub-Authority: `الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج`
- Triad Motto Badge: `إتصال • ترقية الإستثمار • تنمية`

### 4.3 Hero Portrait & Precision Nameplate Overlay
- Portrait container maintaining strict 2:3 aspect ratio (`1024 / 1536`), preventing CLS.
- Positioned `.hero-nameplate-overlay`:
  - Mathematical coordinates targeting the inner black rounded box of `hero.jpg`:
    - `top: 74%`, `bottom: 10%`, `left: 8%`, `right: 8%`.
  - Nested elements:
    - **Line 1 (Name):** `السيد جمال عموري` (embossed gold gradient typography) + `DJAMAL AMOURI` in spaced uppercase.
    - **Line 2 (Position):** `رئيس المكتب الجهوي — الوسط`
    - **Line 3 (Jurisdiction):** `الجزائر العاصمة والولايات المجاورة لها`

### 4.4 Tier 1: Primary Executive Action CTAs
- **CTA 1 (Gold Filled Button):** `حفظ جهة الاتصال الرسمية (Save Official vCard)`
  - Generates RFC-compliant UTF-8 `.vcf` file dynamically:
    - Name: Djamal Amouri
    - Title: President of Central Regional Office - Algiers
    - Org: Algerian Organization Communication for Development
    - Accreditation note in remarks
- **CTA 2 (Emerald & Gold Bordered Button):** `عرض بطاقة القيادة الرسمية (View Leadership ID)`
  - Opens the accessible credential modal.

### 4.5 Tier 2: Official Credential & Accreditation Card
- Verified badge with gold seal icon.
- Legal capacity clause: `حامل هذه البطاقة شخصية إعتبارية له كامل الصلاحيات أمام الجهات الرسمية`.
- Key credential metrics grid:
  - ID No: `100107`
  - Registration: `2026101601071018`
  - Ministry Accreditation: `017 / م ع ح ع ش ق / م ج ج / م ف ج / 21`
  - Validity: October 2026 (Renewable 1-year term)
  - International reference: UN General Assembly Resolution 128/14 (Right to Development, Dec 4, 1986).

### 4.6 Tier 3: Core Strategic Pillars (3 Interactive Cards)
1. **المكتب الجهوي للوسط (الجزائر العاصمة والولايات المجاورة):** Institutional coordination and government representation.
2. **تنمية المهاجرين والتكفل بالجالية بالخارج:** Bridges with national competencies abroad and diaspora support.
3. **ترقية الإستثمار والاتصال من أجل التنمية:** Economic diplomacy, investor sponsorship, and development projects.

### 4.7 Tier 4: Direct Executive Communication Channels
- Direct Regional Office Phone.
- Official WhatsApp Business channel.
- Official Audience Request & Secretariat Email (`mailto:`).
- Institutional web & social links.

### 4.8 Official Leadership ID Modal (`<dialog id="credential-modal">`)
- Recreates the two sides of the official ID (`بطاقة قيادة`) from the primary state documents:
  - **Front Face:** Official Algerian header, National Coat of Arms, portrait with red official leadership stamp (`القيادة العامة`), ID `100107`, registration `2026101601071018`, birthdate & place `1984/12/11 بالوادي`, title, Ministry accreditation, legal authority declaration.
  - **Back Face:** Latin inscription (`NOM: AMOURI, PRENOM: DJAMAL`, title in English), leadership authorization by Commander Cheriet Abdelkrim (`القائد شريط عبد الكريم`), validity rules, UN 128/14 resolution citation, and security verification QR code.
- Flip toggle or dual-card side-by-side view with zoom and print/save actions.

### 4.9 Ambient Gold-Dust Particle Canvas
- Hardware-accelerated 2D canvas with max 25 particles, calm velocity (-40% speed), visibility pause guard, and `prefers-reduced-motion` override.

---

## 5. Performance & Accessibility Verification Plan
- 100/100 Lighthouse target for Performance, Accessibility, Best Practices, and SEO.
- Zero external CSS/JS libraries (pure native browser capabilities).
- Semantic HTML tags (`<header>`, `<main>`, `<section>`, `<article>`, `<dialog>`, `<footer>`).
- Contrast ratios strictly exceeding WCAG AA / AAA standards (>7:1 for text, >4.5:1 for UI controls).
