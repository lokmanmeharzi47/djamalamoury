# Sovereign Institutional Portal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the workspace into a sovereign institutional executive biolink portal and digital credential verification gateway for Mr. Djamal Amouri (President of the Central Regional Office - Algiers and Neighboring Wilayas).

**Architecture:** Pure zero-dependency modern web architecture using semantic HTML5, high-contrast institutional CSS3 ("Sovereign Emerald & State Gold"), and modular vanilla JavaScript ES6+. The solution includes a dynamic trilingual translation engine (AR RTL, FR LTR, EN LTR), a client-side vCard `.vcf` generator, an accessible photorealistic 2-sided Leadership Credential modal (`<dialog>`), a ceremonial gold-dust particle canvas, and a precision `.hero-nameplate-overlay` mapped directly into the gold frame of `hero.jpg`.

**Tech Stack:** HTML5, Vanilla CSS3, Modern ES6+ JavaScript, Pillow (Python CLI for generating responsive WebP images), no external framework or runtime dependencies.

## Global Constraints

- **Color Tokens:** `--bg-deep: #030A07`, `--bg-surface: rgba(8, 28, 20, 0.78)`, `--bg-card: linear-gradient(180deg, rgba(14, 38, 27, 0.92) 0%, rgba(5, 14, 10, 0.98) 100%)`, `--gold-primary: #D4AF37`, `--gold-bright: #F7E5A9`, `--gold-muted: #C5A059`, `--crimson-accent: #B81D24`, `--text-primary: #FFFFFF`, `--text-secondary: #D1DCD6`.
- **Typography:** Arabic default (`dir="rtl"`, `lang="ar"`) using Google Fonts `'Cairo'` / `'Amiri'` / `'Tajawal'`. Latin (`fr`, `en`) using `'Cormorant Garamond'` and `'Montserrat'`.
- **Portrait Aspect Ratio:** Strictly 2:3 locked (`aspect-ratio: 2 / 3`).
- **Nameplate Overlay Coordinates:** Inside the black rounded rectangle on `hero.jpg`: `top: 73.8%`, `bottom: 9.8%`, `left: 7.5%`, `right: 7.5%`.
- **Zero External JS/CSS CDN Dependencies:** Inline SVGs, system/Google webfonts, native browser `<dialog>`.

---

### Task 1: Generate Optimized Responsive WebP Assets from `hero.jpg`

**Files:**
- Create: `hero-480.webp`
- Create: `hero-900.webp`
- Create: `hero-1400.webp`
- Read: `hero.jpg`

**Interfaces:**
- Consumes: `hero.jpg` (1024x1536, 2:3 ratio)
- Produces: WebP image assets maintaining exact 2:3 aspect ratio at 480w, 900w, and 1024w/1400w.

- [ ] **Step 1: Write Python script to generate WebP responsive images**

Create temporary script `scratch/convert_images.py`:
```python
from PIL import Image
import os

source_path = 'hero.jpg'
img = Image.open(source_path)
width, height = img.size
ratio = height / width

sizes = [
    (480, int(480 * ratio), 'hero-480.webp'),
    (900, int(900 * ratio), 'hero-900.webp'),
    (width, height, 'hero-1400.webp')  # original 1024w at high quality
]

for w, h, name in sizes:
    resized = img.resize((w, h), Image.Resampling.LANCZOS)
    resized.save(name, 'WEBP', quality=88, method=6)
    size_kb = os.path.getsize(name) / 1024
    print(f"Generated {name}: {w}x{h} ({size_kb:.1f} KB)")
```

- [ ] **Step 2: Run conversion script**

Run: `python scratch/convert_images.py`
Expected: Outputs `hero-480.webp`, `hero-900.webp`, and `hero-1400.webp` with verified dimensions and reduced file sizes.

- [ ] **Step 3: Verify created WebP images exist and maintain 2:3 aspect ratio**

Run: `python -c "from PIL import Image; [print(f, Image.open(f).size) for f in ['hero-480.webp', 'hero-900.webp', 'hero-1400.webp']]"`
Expected: Each file reports valid width and height matching 2:3 aspect ratio.

- [ ] **Step 4: Commit assets**

```bash
git add hero-*.webp
git commit -m "feat(assets): generate responsive WebP hero images"
```

---

### Task 2: Construct Semantic HTML Structure (`index.html`)

**Files:**
- Create: `index.html`

**Interfaces:**
- Consumes: `hero.jpg`, `hero-480.webp`, `hero-900.webp`, `hero-1400.webp`
- Produces: Accessible HTML5 markup with trilingual data attributes (`data-i18n`), inline SVG symbol defs, 4-tier hierarchy, and `<dialog id="credential-modal">`.

- [ ] **Step 1: Write complete semantic `index.html`**

Write `index.html` containing:
1. Document header with `dir="rtl" lang="ar"`, viewport, SEO meta tags, OpenGraph tags, Google Fonts preconnect (`Cairo`, `Amiri`, `Tajawal`, `Montserrat`, `Cormorant Garamond`).
2. Inline SVG `<svg style="display:none">` containing icons:
   - Algerian Star & Crescent Emblem
   - Official Seal / Badge
   - Download vCard Icon
   - Shield / Credential ID Icon
   - External Link Icon
   - Phone, WhatsApp, Email Icons
   - Close modal icon, Flip card icon, Print icon
3. Canvas: `<canvas id="particles-canvas" aria-hidden="true"></canvas>`
4. Floating Top Navigation Bar:
   - Official coat of arms / emblem badge
   - Trilingual Switcher buttons (`btn-lang[data-lang="ar"]`, `[data-lang="fr"]`, `[data-lang="en"]`)
5. Sovereign Institutional Header:
   - Republic Name: `الجمهورية الجزائرية الديمقراطية الشعبية`
   - Organization: `المنظمة الجزائرية إتصال من أجل التنمية`
   - Authority: `الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج`
   - Strategic Triad Badge: `إتصال • ترقية الإستثمار • تنمية`
6. Hero Portrait Section:
   - Responsive `<picture>` with `srcset="hero-480.webp 480w, hero-900.webp 900w, hero-1400.webp 1400w"`, `sizes="(max-width: 600px) 100vw, 460px"`, `fetchpriority="high"`.
   - `.hero-nameplate-overlay` container with:
     - Line 1: `<h1 class="nameplate-title" data-i18n="hero.name">السيد جمال عموري</h1><span class="nameplate-latin">DJAMAL AMOURI</span>`
     - Line 2: `<p class="nameplate-role" data-i18n="hero.role">رئيس المكتب الجهوي — الوسط</p>`
     - Line 3: `<p class="nameplate-wilayas" data-i18n="hero.jurisdiction">الجزائر العاصمة والولايات المجاورة لها</p>`
7. Tier 1: Primary Executive Action Buttons:
   - `#btn-save-vcard`: `حفظ جهة الاتصال الرسمية (Save Official vCard)`
   - `#btn-view-credential`: `عرض بطاقة القيادة الرسمية (View Official Leadership ID)`
8. Tier 2: Official Accreditation & Legal Status Card:
   - Verified Badge with gold checkmark
   - Legal status banner: `حامل هذه البطاقة شخصية إعتبارية له كامل الصلاحيات أمام الجهات الرسمية`
   - Key attributes: ID `100107`, Reg `2026101601071018`, Ministry Accreditation `017 / م ع ح ع ش ق / م ج ج / م ف ج / 21`, Validity `أكتوبر 2026 (صالحة لمدة سنة قابلة للتجديد)`
   - UN Resolution 128/14 note
9. Tier 3: Core Strategic Pillars (3 interactive cards):
   - Pillar 1: Regional Office Central (Coordination & Representation)
   - Pillar 2: Community Abroad & Migrants Care
   - Pillar 3: Investment Promotion & Development
10. Tier 4: Direct Official Contact Channels:
    - Telephone hotline pill
    - Official WhatsApp Business channel pill
    - Official Audience & Secretariat Email pill
11. Official Footer:
    - State Emblem, Accreditation citation, UN Resolution 128/14, copyright.
12. Official Credential Modal (`<dialog id="credential-modal">`):
    - Reversible/flippable 3D card replicating the official Leadership ID (`بطاقة قيادة`) front and back:
      - **Front side:** Republic header, emblem, photo with red circular leadership stamp (`القيادة العامة - المنظمة الجزائرية إتصال من أجل التنمية`), ID `100107`, Registration `2026101601071018`, DOB: `1984/12/11 بالوادي`, accreditation, legal mandate.
      - **Back side:** Latin details (`NOM: AMOURI`, `PRENOM: DJAMAL`, `President of the central Regional Office Algiers and the Neighboring Wilayas`), leadership signature authorization (`رئيس الهيئة الوطنية: القائد شريط عبد الكريم`), validity rules, UN 128/14 citation, and QR verification code SVG.
    - Modal control bar with Close button, Flip Card button, and Print/Save button.

- [ ] **Step 2: Validate HTML syntax and structure**

Run: `python -c "import html.parser; p = html.parser.HTMLParser(); p.feed(open('index.html', encoding='utf-8').read()); print('HTML Syntax: Valid')"`
Expected: Outputs `HTML Syntax: Valid`.

- [ ] **Step 3: Commit HTML**

```bash
git add index.html
git commit -m "feat(html): build semantic institutional portal structure"
```

---

### Task 3: Implement Sovereign Emerald & State Gold Design System (`style.css`)

**Files:**
- Create: `style.css`

**Interfaces:**
- Consumes: `index.html` elements and classes
- Produces: CSS custom properties, RTL/LTR layout transitions, `.hero-nameplate-overlay` geometry, responsive typography, glassmorphism, 3D flip card, and print styles.

- [ ] **Step 1: Write `style.css`**

Implement complete stylesheet with:
1. CSS custom property variables:
   - `--bg-deep: #030A07`
   - `--bg-surface: rgba(8, 28, 20, 0.78)`
   - `--bg-card: linear-gradient(180deg, rgba(14, 38, 27, 0.92) 0%, rgba(5, 14, 10, 0.98) 100%)`
   - `--gold-primary: #D4AF37`
   - `--gold-bright: #F7E5A9`
   - `--gold-muted: #C5A059`
   - `--crimson-accent: #B81D24`
   - `--text-primary: #FFFFFF`
   - `--text-secondary: #D1DCD6`
   - `--font-ar-head: 'Cairo', 'Amiri', serif`
   - `--font-ar-body: 'Tajawal', system-ui, sans-serif`
   - `--font-en-head: 'Cormorant Garamond', Georgia, serif`
   - `--font-en-body: 'Montserrat', system-ui, sans-serif`
2. Base & Reset rules:
   - Smooth scrolling, box-sizing border-box, dark background `#030A07`.
   - Font family switching based on `:root[dir="rtl"]` vs `:root[dir="ltr"]`.
3. Particle canvas styling:
   - Fixed, pointer-events none, z-index 0.
4. Header and Top bar:
   - Glassmorphic floating nav with language selector pills.
   - Sovereign header typography with gold leaf underline accents and emerald badge.
5. Hero Portrait & Overlay Geometry:
   - `.hero-portrait-card`: Relative, overflow hidden, border-radius 24px, gold border `1px solid rgba(212, 175, 55, 0.45)`, ambient box-shadow `0 12px 40px rgba(0, 0, 0, 0.6)`.
   - `.hero-img`: Display block, width 100%, aspect-ratio `2 / 3`, object-fit cover.
   - `.hero-nameplate-overlay`:
     - `position: absolute;`
     - `top: 73.8%;`
     - `bottom: 9.8%;`
     - `left: 7.5%;`
     - `right: 7.5%;`
     - `display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;`
     - `z-index: 5; pointer-events: none;`
   - `.nameplate-title`: Golden gradient typography `linear-gradient(135deg, #FFF7D6 0%, #D4AF37 50%, #F5DE88 100%)`, text-shadow `0 2px 8px rgba(0,0,0,0.9)`.
   - `.nameplate-latin`: Letter-spaced `0.18em`, font-size 0.72rem, gold-muted tone.
   - `.nameplate-role`: Pure white crisp text, font-weight 600, font-size 0.88rem.
   - `.nameplate-wilayas`: Mint-secondary `#D1DCD6`, font-size 0.78rem.
6. Tier 1 Buttons:
   - `.btn-gold`: Solid metallic gold gradient, deep emerald dark text `#04150D`, bold, high-contrast, glowing hover effect.
   - `.btn-outline-gold`: Emerald glass surface, 1.5px gold border, white text, subtle hover lift.
7. Tier 2 Accreditation Card:
   - Glassmorphism, gold seal icon, legal statement banner with crimson left/right accent border.
   - Grid of credential metrics (`ID`, `Registration`, `Ministry Approval`, `Term`).
8. Tier 3 Pillar Cards:
   - 3-card responsive grid (`repeat(auto-fit, minmax(280px, 1fr))`).
   - Hairline gold border, hover translateY(-4px) and subtle golden radial sheen.
9. Tier 4 Contact Buttons & Footer:
   - Rounded pill buttons with hover micro-animations.
   - Institutional footer with state seal and legal notices.
10. Official Credential Modal (`#credential-modal`):
    - Backdrop blur `rgba(0, 5, 2, 0.85)`.
    - 3D perspective flip container (`perspective: 1200px`).
    - Flawless representation of the ID card with green header, red star/crescent, official red stamp, barcode/QR code, signatures, and legal typography.
    - Mobile-responsive scaling.

- [ ] **Step 2: Verify CSS parsing and rules integrity**

Run: `python -c "import re; css = open('style.css', encoding='utf-8').read(); print('CSS length:', len(css), 'Total rules:', len(re.findall(r'\{', css)))"`
Expected: Confirms valid CSS rules.

- [ ] **Step 3: Commit CSS**

```bash
git add style.css
git commit -m "feat(css): implement sovereign emerald and gold design system"
```

---

### Task 4: Implement Dynamic Logic, Particles, vCard & Trilingual Engine (`script.js`)

**Files:**
- Create: `script.js`

**Interfaces:**
- Consumes: DOM elements in `index.html`
- Produces: 
  - Dynamic Trilingual engine (`translations` dictionary for AR, FR, EN with persistent language choice in `localStorage`)
  - Ceremonial gold-dust particle engine on `#particles-canvas`
  - Dynamic client-side `.vcf` vCard download generator
  - Modal open/close, flip, and print handlers

- [ ] **Step 1: Write `script.js`**

Implement:
1. `translations` dictionary containing full strings for `ar`, `fr`, `en`:
   - Republic, Organization, Authority names
   - Motto triad
   - Executive Name, Title, Jurisdiction
   - Primary & Secondary Action CTAs
   - Legal capacity clause, accreditation numbers, dates
   - 3 Strategic Pillars (titles & descriptions)
   - Contact channels labels
   - Modal labels (flip card, close, print)
2. `setLanguage(lang)` function:
   - Sets `document.documentElement.lang = lang`
   - Sets `document.documentElement.dir = (lang === 'ar' ? 'rtl' : 'ltr')`
   - Updates active state on `.btn-lang` buttons
   - Updates text content of all `[data-i18n]` elements
   - Saves preference in `localStorage.setItem('djamal_amouri_lang', lang)`
3. Client-side vCard `.vcf` generator:
   - Function `downloadVCard()`:
     - Constructs standard vCard 3.0 / 4.0 format:
       ```
       BEGIN:VCARD
       VERSION:3.0
       N:Amouri;Djamal;;;
       FN:Djamal Amouri (جمال عموري)
       ORG:المنظمة الجزائرية إتصال من أجل التنمية
       TITLE:رئيس المكتب الجهوي - الوسط الجزائر العاصمة والولايات المجاورة لها (President of Central Regional Office - Algiers)
       TEL;TYPE=WORK,VOICE:+21321000000
       NOTE:إعتماد وزارة الداخلية رقم 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21 - الرقم التعريفي 100107
       URL:https://djamalamouri.dz
       END:VCARD
       ```
     - Encodes into `Blob(['...'], { type: 'text/vcard;charset=utf-8' })`
     - Triggers automated link click to download `Djamal_Amouri.vcf`.
4. Ceremonial Gold Dust Particle Engine:
   - Slow velocity (`speed * 0.6`), max 25 particles, radius 1-2.5px.
   - Golden hue with shimmering alpha (`0.2` to `0.75`).
   - `window.addEventListener('visibilitychange')` to halt rendering when page is hidden.
   - `window.matchMedia('(prefers-reduced-motion: reduce)')` check to disable animation if requested.
5. Modal Controls (`#credential-modal`):
   - Open dialog via `modal.showModal()` on `#btn-view-credential` click.
   - Close dialog on `#btn-close-modal` or backdrop click.
   - Flip card toggle `#btn-flip-card` adding `.is-flipped` class to `.id-card-inner`.
   - Print card button `#btn-print-card` triggering print dialog with custom `@media print`.

- [ ] **Step 2: Verify JavaScript syntax with Node or Python parser**

Run: `python -c "import subprocess; res = subprocess.run(['node', '-c', 'script.js'], capture_output=True, text=True); print('Node syntax check:', 'PASS' if res.returncode==0 else res.stderr)"`
(Fallback if node not in path: check file with basic JS token inspection).

- [ ] **Step 3: Commit JavaScript**

```bash
git add script.js
git commit -m "feat(js): implement particles, trilingual engine, vcard and modal controls"
```

---

### Task 5: End-to-End Verification & Visual Polish

**Files:**
- Read/Test: `index.html`, `style.css`, `script.js`, `hero.jpg`, `hero-*.webp`

**Interfaces:**
- Consumes: All project files
- Produces: Complete verification of responsive layout, visual alignment of the `.hero-nameplate-overlay`, interactive modal operations, language switcher, and vCard download.

- [ ] **Step 1: Test local HTTP server and file loading**

Start a temporary local server or test script to confirm no 404s, all assets load properly, and MIME types are standard.

- [ ] **Step 2: Verify `.hero-nameplate-overlay` alignment on viewport widths (mobile 375px, tablet 768px, desktop 1200px)**

Inspect DOM bounding boxes to ensure the text fits perfectly inside the black/gold rectangle without spilling or misalignment.

- [ ] **Step 3: Verify Trilingual Switcher operates without errors**

Test switching between AR, FR, and EN, confirming RTL/LTR direction switch, font changes, and all text elements update correctly.

- [ ] **Step 4: Verify vCard generation**

Simulate vCard generation and verify the output contains all expected fields, UTF-8 encoding, and valid RFC format.

- [ ] **Step 5: Verify modal and 3D card flip**

Confirm modal opens, flips between front and back smoothly, closes on Escape/backdrop, and renders both sides of the official ID card with all badges and stamps.

- [ ] **Step 6: Final commit and cleanup**

Remove scratch files and commit final verified state:
```bash
git add .
git commit -m "chore: complete sovereign executive portal implementation"
```
