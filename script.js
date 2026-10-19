/**
 * Sovereign Executive Portal & Credential System
 * Principal: Mr. Djamal Amouri (السيد جمال عموري)
 * President of the Central Regional Office - Algiers
 */

(function () {
  'use strict';

  /* ==========================================================================
     1. TRILINGUAL DICTIONARY & LOCALIZATION ENGINE
     ========================================================================== */
  const translations = {
    ar: {
      'top.republic': 'الجمهورية الجزائرية الديمقراطية الشعبية',
      'header.official': 'بوابة قيادية رسمية معتمدة',
      'org.name': 'المنظمة الجزائرية إتصال من أجل التنمية',
      'authority.name': 'الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج',
      'triad.comm': 'إتصال',
      'triad.invest': 'ترقية الإستثمار',
      'triad.dev': 'تنمية',
      'hero.name': 'السيد جمال عموري',
      'hero.latin': 'DJAMAL AMOURI',
      'hero.role': 'رئيس المكتب الجهوي — الوسط',
      'hero.jurisdiction': 'الجزائر العاصمة والولايات المجاورة لها',
      'tier1.saveVcard': 'حفظ جهة الاتصال الرسمية (.vcf)',
      'tier1.viewCard': 'عرض بطاقة القيادة الرسمية',
      'tier2.verified': 'صفة رسمية معتمدة ومسجلة',
      'tier2.interiorLabel': 'إعتماد وزارة الداخلية',
      'tier2.legalStatus': '« حامل هذه البطاقة شخصية إعتبارية له كامل الصلاحيات أمام الجهات الرسمية »',
      'cred.id': 'الرقم التعريفي (ID)',
      'cred.reg': 'رقم التسجيل',
      'cred.accred': 'إعتماد وزارة الداخلية والجماعات المحلية والتهيئة العمرانية رقم',
      'cred.validity': 'تاريخ الإصدار والصلاحية',
      'cred.validityVal': 'أكتوبر 2026 (صالحة لمدة سنة قابلة للتجديد)',
      'cred.jurisdictionLabel': 'النطاق والولاية الإقليمية',
      'cred.jurisdictionVal': 'الوسط (الجزائر العاصمة والولايات المجاورة)',
      'tier2.unRef': 'المرجعية: إعلان الحق في التنمية ونشر بموجب قرار الجمعية العامة للأمم المتحدة رقم 128/14 المؤرخ بـ 04 كانون الأول / ديسمبر 1986',
      'tier3.heading': 'المحاور الاستراتيجية والمهام الجهوية',
      'pillar1.title': 'المكتب الجهوي للوسط',
      'pillar1.scope': 'الجزائر العاصمة والولايات المجاورة لها',
      'pillar1.desc': 'التنسيق المؤسساتي، تمثيل الهيئة أمام السلطات الرسمية والإدارية، ومتابعة البرامج التنموية الجهوية وتفعيل الشراكات الحكومية.',
      'pillar2.title': 'تنمية المهاجرين والتكفل بالجالية بالخارج',
      'pillar2.scope': 'الهيئة الوطنية للتكفل بالجالية',
      'pillar2.desc': 'مد جسور التواصل مع الكفاءات الجزائرية المقيمة بالخارج، التكفل بانشغالاتهم المؤسساتية، وإدماجهم في النسيج التنموي الوطني.',
      'pillar3.title': 'ترقية الإستثمار والاتصال التنموي',
      'pillar3.scope': 'إتصال • ترقية الإستثمار • تنمية',
      'pillar3.desc': 'تشجيع المبادرات الاقتصادية، مرافقة المستثمرين من أبناء الجالية والداخل، وتفعيل الدبلوماسية الاقتصادية والمجتمعية التنموية.',
      'tier4.heading': 'قنوات التواصل والديوان الرسمي',
      'contact.phoneTitle': 'المكتب والاتصال المباشر',
      'contact.phoneSub': 'الديوان الجهوي — خط الاستقبال الرسمي',
      'contact.waTitle': 'المراسلة الرسمية المباشرة (WhatsApp)',
      'contact.waSub': 'ديوان الاتصال المؤسساتي والمتابعة',
      'contact.emailTitle': 'البريد الإلكتروني وطلبات المقابلة',
      'contact.emailSub': 'المراسلات الرسمية والملفات التنموية',
      'footer.rep': 'الجمهورية الجزائرية الديمقراطية الشعبية',
      'footer.org': 'المنظمة الجزائرية إتصال من أجل التنمية — الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج',
      'footer.accred': 'إعتماد وزارة الداخلية رقم: 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21',
      'footer.res': 'قرار الأمم المتحدة 128/14',
      'footer.rights': 'جميع الحقوق محفوظة للمكتب الجهوي',
      'modal.title': 'بطاقة القيادة الرسمية المعتمدة',
      'modal.flip': 'قلب البطاقة',
      'modal.print': 'طباعة',
      'modal.hint': 'انقر على زر "قلب البطاقة" أو اضغط على البطاقة للانتقال بين الوجهين الأمامي والخلفي'
    },
    fr: {
      'top.republic': 'République Algérienne Démocratique et Populaire',
      'header.official': 'Portail Officiel & Carte de Commandement Homologuée',
      'org.name': 'Organisation Algérienne Communication pour le Développement',
      'authority.name': 'Instance Nationale pour le Développement des Migrants et Prise en Charge de la Communauté à l\'Étranger',
      'triad.comm': 'Communication',
      'triad.invest': 'Promotion de l\'Investissement',
      'triad.dev': 'Développement',
      'hero.name': 'M. DJAMAL AMOURI',
      'hero.latin': 'DJAMAL AMOURI',
      'hero.role': 'Président du Bureau Régional du Centre',
      'hero.jurisdiction': 'Alger et les Wilayas Limitrophes',
      'tier1.saveVcard': 'Enregistrer le Contact Officiel (.vcf)',
      'tier1.viewCard': 'Voir la Carte de Commandement',
      'tier2.verified': 'Statut Officiel Agréé et Homologué',
      'tier2.interiorLabel': 'Agrément Ministère de l\'Intérieur',
      'tier2.legalStatus': '« Le titulaire de cette carte est une personne morale dotée de pleins pouvoirs devant les autorités officielles »',
      'cred.id': 'Identifiant (ID)',
      'cred.reg': 'N° d\'Enregistrement',
      'cred.accred': 'Agrément du Ministère de l\'Intérieur et des Collectivités Locales N°',
      'cred.validity': 'Date d\'Émission et Validité',
      'cred.validityVal': 'Octobre 2026 (Valable 1 an renouvelable)',
      'cred.jurisdictionLabel': 'Compétence Territoriale',
      'cred.jurisdictionVal': 'Centre (Alger et wilayas limitrophes)',
      'tier2.unRef': 'Référence : Déclaration sur le droit au développement - Résolution 128/14 de l\'Assemblée Générale de l\'ONU du 04 décembre 1986',
      'tier3.heading': 'Piliers Stratégiques et Mandat Régional',
      'pillar1.title': 'Bureau Régional du Centre',
      'pillar1.scope': 'Alger et les Wilayas Limitrophes',
      'pillar1.desc': 'Coordination institutionnelle, représentation auprès des autorités étatiques et administratives, suivi des programmes de développement régionaux.',
      'pillar2.title': 'Développement des Migrants & Communauté à l\'Étranger',
      'pillar2.scope': 'Instance Nationale pour la Communauté',
      'pillar2.desc': 'Créer des passerelles pérennes avec les compétences algériennes à l\'étranger, répondre à leurs attentes et les associer au renouveau national.',
      'pillar3.title': 'Promotion de l\'Investissement & Communication',
      'pillar3.scope': 'Communication • Investissement • Développement',
      'pillar3.desc': 'Encourager les initiatives économiques, orienter les investisseurs nationaux et expatriés, et valoriser la diplomatie économique.',
      'tier4.heading': 'Canaux Officiels et Cabinet',
      'contact.phoneTitle': 'Ligne Directe du Bureau',
      'contact.phoneSub': 'Cabinet Régional — Accueil Officiel',
      'contact.waTitle': 'Messagerie Officielle (WhatsApp)',
      'contact.waSub': 'Cellule de Communication & Suivi',
      'contact.emailTitle': 'Courriel et Demandes d\'Audience',
      'contact.emailSub': 'Correspondance Officielle et Projets',
      'footer.rep': 'République Algérienne Démocratique et Populaire',
      'footer.org': 'Organisation Algérienne Communication pour le Développement — Instance Nationale pour les Migrants',
      'footer.accred': 'Agrément Ministère de l\'Intérieur N° 017 / M.E.H / M.J.J / 21',
      'footer.res': 'Résolution Assemblée Générale ONU 128/14',
      'footer.rights': 'Tous droits réservés au Bureau Régional',
      'modal.title': 'Carte Officielle de Commandement Homologuée',
      'modal.flip': 'Retourner la Carte',
      'modal.print': 'Imprimer',
      'modal.hint': 'Cliquez sur "Retourner" ou touchez la carte pour basculer entre le recto et le verso'
    },
    en: {
      'top.republic': 'People\'s Democratic Republic of Algeria',
      'header.official': 'Official Leadership Portal & Accredited Credential',
      'org.name': 'Algerian Organization Communication for Development',
      'authority.name': 'The National Authority for the Development of Migrants and Sponsorship of the Community Abroad',
      'triad.comm': 'Communication',
      'triad.invest': 'Investment Promotion',
      'triad.dev': 'Development',
      'hero.name': 'Mr. DJAMAL AMOURI',
      'hero.latin': 'DJAMAL AMOURI',
      'hero.role': 'President of the Central Regional Office',
      'hero.jurisdiction': 'Algiers and Neighboring Wilayas',
      'tier1.saveVcard': 'Save Official Contact (.vcf)',
      'tier1.viewCard': 'View Leadership ID Card',
      'tier2.verified': 'Verified & Accredited Official Status',
      'tier2.interiorLabel': 'Ministry of Interior Approval',
      'tier2.legalStatus': '« The bearer of this card is a legal person with full authority before official authorities »',
      'cred.id': 'Identification (ID)',
      'cred.reg': 'Registration No.',
      'cred.accred': 'Ministry of Interior and Local Authorities Approval No.',
      'cred.validity': 'Issuance Date & Term',
      'cred.validityVal': 'October 2026 (Valid for 1 renewable year)',
      'cred.jurisdictionLabel': 'Territorial Jurisdiction',
      'cred.jurisdictionVal': 'Central Region (Algiers & Neighboring Wilayas)',
      'tier2.unRef': 'Reference: Declaration on the Right to Development - UN General Assembly Resolution 128/14 of December 4, 1986',
      'tier3.heading': 'Strategic Pillars & Regional Mandate',
      'pillar1.title': 'Central Regional Office',
      'pillar1.scope': 'Algiers and Neighboring Wilayas',
      'pillar1.desc': 'Institutional coordination, high-level representation before state authorities, and regional development initiatives monitoring.',
      'pillar2.title': 'Migrant Development & Diaspora Sponsorship',
      'pillar2.scope': 'National Authority for Community Abroad',
      'pillar2.desc': 'Fostering strategic connections with national diaspora talents, addressing community needs, and integrating them into national progress.',
      'pillar3.title': 'Investment Promotion & Development Communication',
      'pillar3.scope': 'Communication • Investment • Development',
      'pillar3.desc': 'Encouraging entrepreneurial ventures, assisting domestic and expatriate investors, and championing economic diplomacy.',
      'tier4.heading': 'Official Channels & Executive Cabinet',
      'contact.phoneTitle': 'Direct Office Telephone',
      'contact.phoneSub': 'Regional Cabinet — Official Inquiries',
      'contact.waTitle': 'Official WhatsApp Messaging',
      'contact.waSub': 'Institutional Follow-up Desk',
      'contact.emailTitle': 'Executive Email & Audience Inquiries',
      'contact.emailSub': 'Diplomatic Correspondence & Development Portfolios',
      'footer.rep': 'People\'s Democratic Republic of Algeria',
      'footer.org': 'Algerian Organization Communication for Development — The National Authority for Diaspora Care',
      'footer.accred': 'Ministry of Interior Accreditation No: 017 / M.E.H / 21',
      'footer.res': 'UN General Assembly Resolution 128/14',
      'footer.rights': 'All Rights Reserved to the Central Regional Office',
      'modal.title': 'Official Accredited Leadership Card',
      'modal.flip': 'Flip Card',
      'modal.print': 'Print',
      'modal.hint': 'Click "Flip Card" or tap the credential card to toggle between front and back'
    }
  };

  function setLanguage(lang) {
    if (!translations[lang]) return;

    const isRtl = lang === 'ar';
    document.documentElement.lang = lang;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';

    // Update active button state
    document.querySelectorAll('.btn-lang').forEach(btn => {
      const match = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('active', match);
      btn.setAttribute('aria-pressed', match ? 'true' : 'false');
    });

    // Replace all text keys
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    try {
      localStorage.setItem('djamal_amouri_lang', lang);
    } catch (e) {
      // Storage unavailable, ignore
    }
  }

  /* ==========================================================================
     2. CLIENT-SIDE OFFICIAL VCARD (.VCF) GENERATOR
     ========================================================================== */
  function downloadOfficialVCard() {
    const vcardContent = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'N;CHARSET=UTF-8:Amouri;Djamal;;;',
      'FN;CHARSET=UTF-8:Djamal Amouri (السيد جمال عموري)',
      'ORG;CHARSET=UTF-8:المنظمة الجزائرية إتصال من أجل التنمية;الهيئة الوطنية لتنمية المهاجرين والتكفل بالجالية بالخارج',
      'TITLE;CHARSET=UTF-8:رئيس المكتب الجهوي - الوسط الجزائر العاصمة والولايات المجاورة لها (President of Central Regional Office - Algiers)',
      'ROLE;CHARSET=UTF-8:Président du Bureau Régional du Centre',
      'TEL;TYPE=WORK,VOICE:+21321000000',
      'EMAIL;TYPE=PREF,INTERNET:contact@djamalamouri.dz',
      'NOTE;CHARSET=UTF-8:إعتماد وزارة الداخلية والجماعات المحلية رقم: 017 / م ع ح ع ش ق / م ج ج / م ف ج / 21 | الرقم التعريفي: 100107 | رقم التسجيل: 2026101601071018 | حامل هذه البطاقة شخصية إعتبارية له كامل الصلاحيات أمام الجهات الرسمية.',
      'URL:https://djamalamouri.dz',
      'REV:' + new Date().toISOString(),
      'END:VCARD'
    ].join('\r\n');

    // Include UTF-8 BOM for Arabic character rendering in Outlook/iOS/Android
    const blob = new Blob(['\uFEFF' + vcardContent], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Djamal_Amouri_Officiel.vcf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 2000);
  }

  /* ==========================================================================
     3. AMBIENT SOVEREIGN GOLD-DUST PARTICLE ENGINE
     ========================================================================== */
  function initParticleEngine() {
    const canvas = document.getElementById('particles-canvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Honor reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let animationFrameId = null;
    let isPaused = false;

    const maxParticles = 24; // Dignified, calm particle density
    const particles = [];

    class GoldParticle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : height + 10;
        this.radius = 0.8 + Math.random() * 1.6;
        // Calm, slow drift speed (-40% speed reduction)
        this.vy = -(0.18 + Math.random() * 0.35);
        this.vx = (Math.random() - 0.5) * 0.25;
        this.baseAlpha = 0.15 + Math.random() * 0.45;
        this.alpha = this.baseAlpha;
        this.pulseSpeed = 0.015 + Math.random() * 0.02;
        this.pulseAngle = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulseAngle += this.pulseSpeed;
        this.alpha = this.baseAlpha + Math.sin(this.pulseAngle) * 0.18;

        if (this.y < -15 || this.x < -15 || this.x > width + 15) {
          this.reset(false);
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 175, 55, ${Math.max(0.05, Math.min(this.alpha, 0.75))})`;
        ctx.shadowColor = 'rgba(247, 229, 169, 0.45)';
        ctx.shadowBlur = 4;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < maxParticles; i++) {
      particles.push(new GoldParticle());
    }

    function render() {
      if (isPaused) return;

      ctx.clearRect(0, 0, width, height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    }

    function handleResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', handleResize, { passive: true });

    // Pause canvas rendering when tab is hidden or minimized
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        isPaused = true;
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      } else {
        isPaused = false;
        render();
      }
    });

    render();
  }

  /* ==========================================================================
     4. OFFICIAL CREDENTIAL MODAL & CARD CONTROLS
     ========================================================================== */
  function initCredentialModal() {
    const modal = document.getElementById('credential-modal');
    const openBtn = document.getElementById('btn-view-credential');
    const closeBtn = document.getElementById('btn-close-modal');
    const flipBtn = document.getElementById('btn-flip-card');
    const printBtn = document.getElementById('btn-print-card');
    const cardFlipper = document.getElementById('id-card-flipper');

    if (!modal) return;

    function openModal() {
      if (typeof modal.showModal === 'function') {
        modal.showModal();
      } else {
        modal.setAttribute('open', '');
      }
      document.body.style.overflow = 'hidden';
    }

    function closeModal() {
      if (typeof modal.close === 'function') {
        modal.close();
      } else {
        modal.removeAttribute('open');
      }
      document.body.style.overflow = '';
      if (cardFlipper) cardFlipper.classList.remove('is-flipped');
    }

    function toggleFlip() {
      if (cardFlipper) {
        cardFlipper.classList.toggle('is-flipped');
      }
    }

    if (openBtn) openBtn.addEventListener('click', openModal);
    if (closeBtn) closeBtn.addEventListener('click', closeModal);
    if (flipBtn) flipBtn.addEventListener('click', toggleFlip);
    if (cardFlipper) cardFlipper.addEventListener('click', toggleFlip);

    if (printBtn) {
      printBtn.addEventListener('click', () => {
        window.print();
      });
    }

    // Close on backdrop click
    modal.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY &&
        e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX &&
        e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeModal();
      }
    });

    // Close on Escape
    modal.addEventListener('cancel', () => {
      document.body.style.overflow = '';
      if (cardFlipper) cardFlipper.classList.remove('is-flipped');
    });
  }

  /* ==========================================================================
     5. INITIALIZATION ON DOM READY
     ========================================================================== */
  document.addEventListener('DOMContentLoaded', () => {
    // Language switcher setup
    const savedLang = (function () {
      try {
        return localStorage.getItem('djamal_amouri_lang');
      } catch (e) {
        return null;
      }
    })();

    if (savedLang && translations[savedLang]) {
      setLanguage(savedLang);
    }

    document.querySelectorAll('.btn-lang').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        setLanguage(lang);
      });
    });

    // vCard CTA
    const vcardBtn = document.getElementById('btn-save-vcard');
    if (vcardBtn) {
      vcardBtn.addEventListener('click', downloadOfficialVCard);
    }

    // Modal and Particles
    initCredentialModal();
    initParticleEngine();
  });
})();
