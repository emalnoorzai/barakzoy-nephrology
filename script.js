// Web3Forms Access Key linked to BarakzoyNephrology@gmail.com
const WEB3FORMS_ACCESS_KEY = "93906356-d140-4887-b55a-02d0bb27b6b1";

// Auto copyright year
document.getElementById('yearSpan').textContent = new Date().getFullYear();

// Accessibility Text Size Toggle (A+)
function toggleFontSize() {
  document.documentElement.classList.toggle('large-text');
  const btn = document.getElementById('fontToggleBtn');
  btn.textContent = document.documentElement.classList.contains('large-text') ? 'A-' : 'A+';
}

// ==========================================
// BUILT-IN 4-LANGUAGE TRANSLATOR (EN / ES / FR / PERSIAN)
// ==========================================
const originalEnglishHTML = {};
const siteTranslations = {
  es: {
    banner: "<strong>Idioma Español Activado:</strong> Atención especializada en riñones e hipertensión con el Dr. Ahmad S. Barakzoy en Orange Park, FL. Teléfono: <strong>(904) 579-3578</strong>.",
    announcement: "<strong>Aviso de la Clínica:</strong> Aceptamos nuevos pacientes para consultas de nefrología e hipertensión en Orange Park y el noreste de Florida.",
    top_hours: "<strong>Horario:</strong> Lun–Vie 8:00 AM – 5:00 PM",
    top_call: "Llamar: (904) 579-3578",
    top_portal: "Portal del Paciente eCW",
    nav_home: "Inicio",
    nav_physician: "Médico",
    nav_services: "Servicios y Condiciones",
    nav_patients: "Pacientes Nuevos y Seguros",
    nav_tools: "Calculadora eGFR y Alimentos",
    nav_education: "Educación",
    nav_referring: "Médicos Referentes",
    nav_faq: "Preguntas",
    nav_forms: "Formularios",
    nav_contact: "Contacto",
    btn_book: "Pedir Cita",
    hero_badge: "Especialista en Nefrología e Hipertensión • Orange Park, FL",
    hero_title: "Cuidado Certificado y Preciso para sus Riñones y Presión Arterial.",
    hero_lead: "Bienvenido a <strong>Barakzoy Nephrology</strong>. Dirigida por el <strong>Dr. Ahmad S. Barakzoy, M.D., FASN</strong>, nuestra clínica ofrece evaluación integral y manejo a largo plazo para enfermedad renal crónica, hipertensión resistente, trastornos electrolíticos, diálisis y seguimiento de trasplante.",
    hero_cta_book: "Solicitar Cita",
    hero_cta_tools: "Calcular eGFR y Riesgo Renal",
    hero_cta_vcard: "📲 Guardar Contacto",
    card_ins_title: "Seguros Aceptados",
    card_ins_body: "Medicare, Medicare Advantage, Medicaid, BCBS, Aetna, Cigna, UnitedHealthcare, Tricare y planes comerciales principales.",
    card_cond_title: "Condiciones Tratadas",
    card_cond_body: "Enfermedad Renal Crónica (Etapas 1–5), Hipertensión, Nefropatía Diabética, Lesión Renal Aguda, Diálisis y Trasplante.",
    card_hours_title: "Horario de Clínica",
    card_hours_body: "<strong>Teléfono:</strong> Lun–Vie 8:00 AM – 5:00 PM<br /><strong>Consultas:</strong> Lun–Vie 9:00 AM – 5:00 PM",
    model_badge: "Modelo Renal 3D Interactivo",
    model_title: "Anatomía del Riñón y Flujo Vascular",
    model_drag: "↻ Arrastre para Girar",
    model_btn_full: "Riñón Completo",
    model_btn_medulla: "Médula Interna",
    model_btn_vascular: "Flujo Vascular",
    qt1_title: "Calculadora eGFR 2021",
    qt1_sub: "Conozca su Creatinina y Etapa",
    qt2_title: "Cuestionario de 60 Segundos",
    qt2_sub: "Evalúe su Salud Renal",
    qt3_title: "Buscador de Alimentos",
    qt3_sub: "Control de Sodio y Potasio",
    qt4_title: "9 Formularios en Word",
    qt4_sub: "Descargue Archivos .DOCX",
    sec_doc_eyebrow: "Sobre el Médico",
    sec_doc_sub: "Doble Certificación en Nefrología, Medicina Interna e Hipertensión Compleja.",
    bio_heading: "Biografía y Filosofía de Atención al Paciente",
    bio_text: "El Dr. Ahmad S. Barakzoy es un nefrólogo y médico internista certificado que atiende a pacientes en Orange Park, Fleming Island, Green Cove Springs y Jacksonville. Con más de 20 años de experiencia, se especializa en proteger la función renal y controlar la hipertensión.",
    edu_heading: "Educación Médica, Residencia y Especialidad",
    rounding_heading: "Directorio de Hospitales y Centros de Diálisis",
    sec_srv_eyebrow: "Alcance Clínico",
    sec_srv_title: "Condiciones Tratadas y Servicios Médicos",
    sec_srv_sub: "Atención nefrológica integral en consultorio, hospitales y centros de diálisis.",
    cond_box_title: "Condiciones que Diagnosticamos y Tratamos",
    cond_box_sub: "Seleccione cualquier condición para solicitar una consulta con el Dr. Barakzoy.",
    btn_sched_consult: "Programar Consulta",
    srv_list_title: "Servicios Médicos y Clínicos Integrales",
    sec_np_eyebrow: "Prepare su Visita",
    sec_np_title: "Información para Pacientes Nuevos, Seguros y Facturación",
    sec_np_sub: "Todo lo que necesita saber antes de su primera cita, cobertura de seguros y políticas.",
    tab_np_guide: "Guía para Pacientes Nuevos",
    tab_ins_guide: "Seguros y Facturación",
    sec_tools_eyebrow: "Herramientas Interactivas",
    sec_tools_title: "Calculadora eGFR, Cuestionario y Guía de Alimentos",
    sec_tools_sub: "Comprenda sus resultados de laboratorio y consulte alimentos seguros para los riñones.",
    calc_title: "Calculadora Interactiva de eGFR y Etapa Renal",
    calc_sub: "Ingrese su creatinina sérica de un análisis de sangre reciente para estimar su función renal.",
    calc_btn: "Calcular Mi eGFR y Etapa",
    quiz_title: "¿Debo Consultar a un Nefrólogo? Cuestionario",
    quiz_sub: "Marque las opciones que correspondan para generar una recomendación personalizada:",
    quiz_btn: "Ver Mi Recomendación",
    food_title: "Buscador de Alimentos Seguros y Sodio",
    food_sub: "Busque alimentos comunes para verificar su contenido de sodio, potasio y fósforo.",
    sec_edu_eyebrow: "Biblioteca Educativa",
    sec_edu_title: "Guías de Salud Renal y Hojas de Control",
    sec_edu_sub: "Explore guías revisadas por médicos sobre función renal, nutrición y control de presión arterial.",
    ref_title: "Médicos Referentes",
    portal_title: "Portal del Paciente eCW",
    portal_btn: "Iniciar Sesión en el Portal eCW ↗",
    faq_title: "Preguntas Frecuentes (FAQ)",
    faq_sub: "Respuestas rápidas sobre citas, seguros, análisis de laboratorio y cuidado renal.",
    forms_title: "Formularios Descargables para Pacientes",
    forms_sub: "Descargue y complete sus formularios antes de llegar o use el registro electrónico.",
    contact_title: "Contacte a Barakzoy Nephrology",
    contact_sub: "Ubicado convenientemente en Orange Park con estacionamiento gratuito.",
    inquiry_title: "Enviar una Consulta General"
  },
  fr: {
    banner: "<strong>Langue Française Activée :</strong> Soins spécialisés des reins et de l'hypertension avec le Dr Ahmad S. Barakzoy à Orange Park, FL. Téléphone : <strong>(904) 579-3578</strong>.",
    announcement: "<strong>Annonce du Cabinet :</strong> Nous acceptons de nouveaux patients en néphrologie et hypertension à Orange Park et dans le nord-est de la Floride.",
    top_hours: "<strong>Horaires :</strong> Lun–Ven 8h00 – 17h00",
    top_call: "Appeler : (904) 579-3578",
    top_portal: "Portail Patient eCW",
    nav_home: "Accueil",
    nav_physician: "Médecin",
    nav_services: "Services et Pathologies",
    nav_patients: "Nouveaux Patients et Assurances",
    nav_tools: "Calculateur DFGe et Alimentation",
    nav_education: "Éducation",
    nav_referring: "Médecins Référents",
    nav_faq: "FAQ",
    nav_forms: "Formulaires",
    nav_contact: "Contact",
    btn_book: "Prendre Rendez-vous",
    hero_badge: "Spécialiste en Néphrologie et Hypertension • Orange Park, FL",
    hero_title: "Soins Certifiés et Précis des Reins et de la Tension Artérielle.",
    hero_lead: "Bienvenue chez <strong>Barakzoy Nephrology</strong>. Dirigé par le <strong>Dr Ahmad S. Barakzoy, M.D., FASN</strong>, notre cabinet assure l'évaluation complète et le suivi des maladies rénales, de l'hypertension résistante, des troubles électrolytiques, de la dialyse et des greffes.",
    hero_cta_book: "Demander un Rendez-vous",
    hero_cta_tools: "Calculer le DFGe et le Risque",
    hero_cta_vcard: "📲 Enregistrer le Contact",
    card_ins_title: "Assurances Acceptées",
    card_ins_body: "Medicare, Medicare Advantage, Medicaid, BCBS, Aetna, Cigna, UnitedHealthcare, Tricare et principales mutuelles.",
    card_cond_title: "Pathologies Traitées",
    card_cond_body: "Maladie Rénale Chronique (Stades 1–5), Hypertension, Néphropathie Diabétique, Insuffisance Rénale Aiguë, Dialyse et Greffe.",
    card_hours_title: "Horaires du Cabinet",
    card_hours_body: "<strong>Téléphone :</strong> Lun–Ven 8h00 – 17h00<br /><strong>Consultations :</strong> Lun–Ven 9h00 – 17h00",
    model_badge: "Modèle Rénal 3D Interactif",
    model_title: "Anatomie du Rein et Flux Vasculaire",
    model_drag: "↻ Glisser pour Pivoter",
    model_btn_full: "Rein Complet",
    model_btn_medulla: "Médulla Interne",
    model_btn_vascular: "Flux Vasculaire",
    qt1_title: "Calculateur DFGe 2021",
    qt1_sub: "Évaluer Créatinine et Stade",
    qt2_title: "Quiz Rénal 60 Secondes",
    qt2_sub: "Vérifier Vos Facteurs de Risque",
    qt3_title: "Guide Alimentaire Rénal",
    qt3_sub: "Recherche Sodium et Potassium",
    qt4_title: "9 Formulaires Word",
    qt4_sub: "Télécharger les Fichiers .DOCX",
    sec_doc_eyebrow: "À Propos du Médecin",
    sec_doc_sub: "Double Certification en Néphrologie, Médecine Interne et Hypertension Complexe.",
    bio_heading: "Biographie et Philosophie de Soins",
    bio_text: "Le Dr Ahmad S. Barakzoy est un néphrologue et interniste certifié au service des patients d'Orange Park, Fleming Island, Green Cove Springs et Jacksonville. Avec plus de 20 ans d'expérience, il se spécialise dans la préservation de la fonction rénale et le contrôle de l'hypertension.",
    edu_heading: "Formation Médicale, Internat et Spécialisation",
    rounding_heading: "Répertoire des Hôpitaux et Centres de Dialyse",
    sec_srv_eyebrow: "Domaine Clinique",
    sec_srv_title: "Pathologies Traitées et Services Médicaux",
    sec_srv_sub: "Soins néphrologiques complets en cabinet, à l'hôpital et en centre de dialyse.",
    cond_box_title: "Pathologies Diagnostiquées et Traitées",
    cond_box_sub: "Sélectionnez une pathologie ci-dessous pour demander une consultation avec le Dr Barakzoy.",
    btn_sched_consult: "Planifier une Consultation",
    srv_list_title: "Services Médicaux et Cliniques Complets",
    sec_np_eyebrow: "Préparer Votre Visite",
    sec_np_title: "Nouveaux Patients, Assurances et Facturation",
    sec_np_sub: "Tout ce qu'il faut savoir avant votre premier rendez-vous, la couverture et nos politiques.",
    tab_np_guide: "Guide Nouveaux Patients",
    tab_ins_guide: "Assurances et Facturation",
    sec_tools_eyebrow: "Outils Interactifs",
    sec_tools_title: "Calculateur DFGe, Quiz et Guide Alimentaire",
    sec_tools_sub: "Comprenez vos analyses sanguines et vérifiez les aliments adaptés aux reins.",
    calc_title: "Calculateur Interactif DFGe et Stade Rénal",
    calc_sub: "Entrez votre créatinine sérique pour estimer votre débit de filtration glomérulaire.",
    calc_btn: "Calculer Mon DFGe et Stade",
    quiz_title: "Dois-je Consulter un Néphrologue ? Quiz",
    quiz_sub: "Cochez les éléments qui s'appliquent à vous pour obtenir une recommandation personnalisée :",
    quiz_btn: "Voir Ma Recommandation",
    food_title: "Vérificateur d'Aliments et de Sodium",
    food_sub: "Recherchez des aliments courants pour vérifier leur teneur en sodium, potassium et phosphore.",
    sec_edu_eyebrow: "Bibliothèque Éducative",
    sec_edu_title: "Guides de Santé Rénale et Fiches de Suivi",
    sec_edu_sub: "Consultez nos guides médicaux sur l'anatomie rénale, la nutrition et le suivi tensionnel.",
    ref_title: "Médecins Référents",
    portal_title: "Portail Patient eCW",
    portal_btn: "Connexion au Portail Patient eCW ↗",
    faq_title: "Foire Aux Questions (FAQ)",
    faq_sub: "Réponses rapides concernant les rendez-vous, assurances, analyses et soins rénaux.",
    forms_title: "Formulaires Patients Téléchargeables",
    forms_sub: "Téléchargez et remplissez vos formulaires avant votre arrivée ou utilisez la pré-inscription en ligne.",
    contact_title: "Contacter Barakzoy Nephrology",
    contact_sub: "Idéalement situé à Orange Park avec parking gratuit de plain-pied.",
    inquiry_title: "Envoyer une Demande Générale"
  },
  fa: {
    banner: "<strong>زبان فارسی / دری فعال شد:</strong> تشخیص و تداوی تخصصی امراض گرده و فشار خون بلند توسط داکتر احمد شاه بارکزی (FASN) در اورنج پارک، فلوریدا. شماره تماس: <strong>(904) 579-3578</strong>",
    announcement: "<strong>اطلاعیه کلینیک:</strong> پذیرش بیماران جدید برای مشاوره نفرولوژی و فشار خون بلند در اورنج پارک و شمال شرق فلوریدا جریان دارد.",
    top_hours: "<strong>ساعات کاری:</strong> دوشنبه تا جمعه ۸:۰۰ صبح – ۵:۰۰ عصر",
    top_call: "تماس: (904) 579-3578",
    top_portal: "پورتال بیماران eCW",
    nav_home: "صفحه اصلی",
    nav_physician: "درباره داکتر",
    nav_services: "خدمات و بیماری‌ها",
    nav_patients: "بیماران جدید و بیمه",
    nav_tools: "محاسبه‌گر eGFR و رژیم غذایی",
    nav_education: "آموزش بیماران",
    nav_referring: "داکتران ارجاع‌دهنده",
    nav_faq: "سوالات متداول",
    nav_forms: "فورم‌ها",
    nav_contact: "تماس با ما",
    btn_book: "گرفتن نوبت",
    hero_badge: "متخصص امراض گرده (نفرولوژی) و فشار خون • اورنج پارک، فلوریدا",
    hero_title: "مراقبت تخصصی و دقیق امراض گرده و فشار خون بلند.",
    hero_lead: "به کلینیک <strong>نفرولوژی بارکزی</strong> خوش آمدید. تحت نظر <strong>داکتر احمد شاه بارکزی (M.D., FASN)</strong>، ما خدمات جامع تشخیصی و درمانی برای بیماری‌های مزمن گرده، فشار خون مقاوم، اختلالات الکترولیت، دیالیز و مراقبت‌های پیوند گرده را ارائه می‌دهیم.",
    hero_cta_book: "درخواست نوبت ویزیت",
    hero_cta_tools: "محاسبه eGFR و ارزیابی گرده",
    hero_cta_vcard: "📲 ذخیره شماره کلینیک",
    card_ins_title: "بیمه‌های مورد پذیرش",
    card_ins_body: "Medicare، Medicare Advantage، Medicaid، BCBS، Aetna، Cigna، UnitedHealthcare، Tricare و بیمه‌های معتبر.",
    card_cond_title: "بیماری‌های تحت درمان",
    card_cond_body: "بیماری مزمن گرده (مراحل ۱ تا ۵)، فشار خون بلند، نفروپاتی دیابتی، نارسایی حاد گرده، دیالیز و مراقبت پیوند.",
    card_hours_title: "ساعات کاری کلینیک",
    card_hours_body: "<strong>تلفن:</strong> دوشنبه–جمعه ۸:۰۰ صبح تا ۵:۰۰ عصر<br /><strong>ویزیت:</strong> دوشنبه–جمعه ۹:۰۰ صبح تا ۵:۰۰ عصر",
    model_badge: "مدل سه‌بعدی تعاملی گرده",
    model_title: "آناتومی گرده و جریان خون",
    model_drag: "↻ برای چرخش بکشید",
    model_btn_full: "گرده کامل",
    model_btn_medulla: "بخش داخلی",
    model_btn_vascular: "رگ‌های خونی",
    qt1_title: "محاسبه‌گر eGFR 2021",
    qt1_sub: "بررسی کراتینین و مرحله گرده",
    qt2_title: "آزمون ۶۰ ثانیه‌ای گرده",
    qt2_sub: "ارزیابی عوامل خطر",
    qt3_title: "بررسی غذاهای مفید",
    qt3_sub: "جستجوی سدیم و پتاسیم",
    qt4_title: "۹ فورم مایکروسافت ورد",
    qt4_sub: "دانلود فایل‌های قابل ویرایش",
    sec_doc_eyebrow: "درباره داکتر",
    sec_doc_sub: "دارای بورد تخصصی دوگانه در نفرولوژی، داخله عمومی و فشار خون پیچیده.",
    bio_heading: "زندگی‌نامه و فلسفه مراقبت از بیمار",
    bio_text: "داکتر احمد شاه بارکزی متخصص بورد نفرولوژی و داخله عمومی با بیش از ۲۰ سال تجربه کلینیکی در مناطق اورنج پارک، فلمینگ آیلند و جکسون‌ویل است که در زمینه حفظ عملکرد گرده، کنترل فشار خون و مراقبت دیالیز فعالیت می‌کند.",
    edu_heading: "تحصیلات طبی و دوره تخصصی",
    rounding_heading: "فهرست شفاخانه‌ها و مراکز دیالیز همکار",
    sec_srv_eyebrow: "حوزه خدمات کلینیکی",
    sec_srv_title: "بیماری‌های تحت درمان و خدمات طبی",
    sec_srv_sub: "مراقبت‌های جامع نفرولوژی در کلینیک، شفاخانه و مراکز دیالیز.",
    cond_box_title: "بیماری‌هایی که تشخیص و درمان می‌کنیم",
    cond_box_sub: "برای درخواست مشاوره با داکتر بارکزی روی هر بیماری کلیک کنید.",
    btn_sched_consult: "تنظیم وقت مشاوره",
    srv_list_title: "خدمات جامع طبی و کلینیکی",
    sec_np_eyebrow: "آمادگی برای مراجعه",
    sec_np_title: "اطلاعات بیماران جدید، بیمه و صورت‌حساب",
    sec_np_sub: "هر آنچه قبل از اولین نوبت ویزیت باید درباره بیمه، معرفی‌نامه و مقررات کلینیک بدانید.",
    tab_np_guide: "راهنمای بیماران جدید",
    tab_ins_guide: "بیمه و امور مالی",
    sec_tools_eyebrow: "ابزارهای تعاملی بیماران",
    sec_tools_title: "محاسبه‌گر eGFR، آزمون خطر و بررسی مواد غذایی",
    sec_tools_sub: "نتایج آزمایش خون خود را بررسی کنید و غذاهای مناسب برای سلامت گرده را بیابید.",
    calc_title: "محاسبه‌گر تعاملی eGFR و مرحله بیماری گرده",
    calc_sub: "مقدار کراتینین آزمایش خون خود را وارد کنید تا میزان تصفیه گرده محاسبه شود.",
    calc_btn: "محاسبه eGFR و مرحله گرده",
    quiz_title: "آیا باید به متخصص گرده مراجعه کنم؟",
    quiz_sub: "موارد مرتبط با وضعیت خود را انتخاب کنید تا راهنمای شخصی دریافت نمایید:",
    quiz_btn: "مشاهده توصیه پزشکی",
    food_title: "بررسی‌کننده غذاهای مفید برای گرده و سدیم",
    food_sub: "نام غذاها را جستجو کنید تا میزان سدیم، پتاسیم و فسفر آن‌ها را ببینید.",
    sec_edu_eyebrow: "کتابخانه آموزشی بیماران",
    sec_edu_title: "راهنمای سلامت گرده و جدول‌های پیگیری",
    sec_edu_sub: "مطالب آموزشی تایید شده درباره عملکرد گرده، تغذیه و کنترل فشار خون.",
    ref_title: "داکتران ارجاع‌دهنده (Referring Providers)",
    portal_title: "پورتال آنلاین بیماران eCW",
    portal_btn: "ورود به پورتال بیماران eCW ↗",
    faq_title: "سوالات متداول بیماران (FAQ)",
    faq_sub: "پاسخ‌های سریع درباره نوبت‌دهی، بیمه، آزمایش‌ها و مراقبت‌های گرده.",
    forms_title: "فورم‌های قابل دانلود بیماران",
    forms_sub: "فورم‌های مایکروسافت ورد را قبل از مراجعه دانلود و تکمیل کنید یا از فورم آنلاین استفاده نمایید.",
    contact_title: "تماس با کلینیک نفرولوژی بارکزی",
    contact_sub: "واقع در اورنج پارک با پارکینگ رایگان هم‌سطح برای بیماران.",
    inquiry_title: "ارسال پیام یا سوال عمومی"
  }
};

function changeSiteLanguage(lang, btnEl) {
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');

  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'fa') ? 'rtl' : 'ltr';

  const banner = document.getElementById('langBanner');
  const bannerText = document.getElementById('langBannerText');

  if (lang === 'en') {
    banner.style.display = 'none';
  } else {
    banner.style.display = 'block';
    bannerText.innerHTML = siteTranslations[lang].banner;
  }

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (!originalEnglishHTML[key]) {
      originalEnglishHTML[key] = el.innerHTML;
    }
    if (lang === 'en') {
      el.innerHTML = originalEnglishHTML[key];
    } else if (siteTranslations[lang] && siteTranslations[lang][key]) {
      el.innerHTML = siteTranslations[lang][key];
    }
  });
}

// One-Tap Save Clinic Contact (.vcf vCard Download)
function downloadClinicVCard() {
  const vcard = [
    "BEGIN:VCARD",
    "VERSION:3.0",
    "N:Barakzoy;Ahmad;S.;Dr.;M.D., FASN",
    "FN:Barakzoy Nephrology - Dr. Ahmad S. Barakzoy",
    "ORG:Barakzoy Nephrology",
    "TITLE:Board-Certified Nephrologist & Hypertension Specialist",
    "TEL;TYPE=WORK,VOICE:+19045793578",
    "TEL;TYPE=WORK,FAX:+19043758568",
    "EMAIL;TYPE=PREF,INTERNET:BarakzoyNephrology@gmail.com",
    "ADR;TYPE=WORK:;;2035 Professional Center Drive Suite A;Orange Park;FL;32073;USA",
    "URL:https://barakzoynephrology.com",
    "END:VCARD"
  ].join("\n");

  const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Barakzoy_Nephrology_Contact.vcf";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// Hospital & Dialysis Center Rounding Filter
function filterRounding(type, btnEl) {
  document.querySelectorAll('.rounding-filters .filter-chip').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  document.querySelectorAll('#roundingGrid .round-item').forEach(item => {
    item.style.display = (type === 'all' || item.dataset.type === type) ? 'block' : 'none';
  });
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// Subtle 3D Perspective Tilt on Cards
document.querySelectorAll('.tilt-card').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg) translateY(-2px)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg) translateY(0)';
  });
});

// ==========================================
// INTERACTIVE 3D ANATOMICAL KIDNEY (THREE.JS)
// ==========================================
let kidneyGroup, outerMesh, medullaGroup, vascularGroup, particlesMesh;
let isDragging = false, prevMouse = { x: 0, y: 0 };

function init3DKidney() {
  const container = document.getElementById('kidney3dCanvas');
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth || 440;
  const height = container.clientHeight || 290;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
  camera.position.set(0, 0.15, 5.2);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(width, height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  scene.add(new THREE.AmbientLight(0xdbeafe, 0.9));
  const keyLight = new THREE.DirectionalLight(0x5eead4, 1.8);
  keyLight.position.set(4, 5, 5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x3b82f6, 1.4);
  rimLight.position.set(-4, -3, -4);
  scene.add(rimLight);

  kidneyGroup = new THREE.Group();
  scene.add(kidneyGroup);

  const geo = new THREE.SphereGeometry(1.32, 64, 64);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);
    y *= 1.42;
    z *= 0.62;
    x -= 0.28 * Math.cos((y / 2.0) * Math.PI * 0.85);
    const hilum = Math.exp(-(y * y) * 3.2) * Math.max(0, x + 0.15);
    x -= hilum * 0.68;
    pos.setXYZ(i, x, y, z);
  }
  geo.computeVertexNormals();

  const outerMat = new THREE.MeshPhysicalMaterial({
    color: 0x1d4ed8,
    emissive: 0x0a192f,
    roughness: 0.25,
    metalness: 0.1,
    transparent: true,
    opacity: 0.42,
    clearcoat: 1.0,
    side: THREE.DoubleSide
  });
  outerMesh = new THREE.Mesh(geo, outerMat);
  kidneyGroup.add(outerMesh);

  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x5eead4,
    wireframe: true,
    transparent: true,
    opacity: 0.08
  });
  outerMesh.add(new THREE.Mesh(geo, wireMat));

  medullaGroup = new THREE.Group();
  const pyramidMat = new THREE.MeshStandardMaterial({
    color: 0x0d9488,
    emissive: 0x0f766e,
    emissiveIntensity: 0.35,
    roughness: 0.35
  });
  [-0.95, -0.45, 0, 0.45, 0.95].forEach(ang => {
    const pyrGeo = new THREE.ConeGeometry(0.24, 0.62, 24);
    const pyr = new THREE.Mesh(pyrGeo, pyramidMat);
    pyr.position.set(-Math.cos(ang) * 0.58 - 0.1, Math.sin(ang) * 0.92, 0);
    pyr.rotation.z = ang - Math.PI / 2;
    medullaGroup.add(pyr);
  });
  kidneyGroup.add(medullaGroup);

  vascularGroup = new THREE.Group();
  const arteryCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(1.85, 0.28, 0.12),
    new THREE.Vector3(0.65, 0.18, 0.08),
    new THREE.Vector3(0.15, 0.45, 0.05),
    new THREE.Vector3(-0.35, 0.85, 0)
  ]);
  vascularGroup.add(new THREE.Mesh(
    new THREE.TubeGeometry(arteryCurve, 32, 0.085, 16, false),
    new THREE.MeshStandardMaterial({ color: 0xe11d48, emissive: 0x881337, roughness: 0.3 })
  ));

  const veinCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(1.85, 0.0, -0.1),
    new THREE.Vector3(0.65, -0.02, -0.06),
    new THREE.Vector3(0.1, -0.35, -0.04),
    new THREE.Vector3(-0.35, -0.78, 0)
  ]);
  vascularGroup.add(new THREE.Mesh(
    new THREE.TubeGeometry(veinCurve, 32, 0.09, 16, false),
    new THREE.MeshStandardMaterial({ color: 0x3b82f6, emissive: 0x1e3a8a, roughness: 0.3 })
  ));

  const ureterCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.28, -0.12, 0),
    new THREE.Vector3(0.75, -0.55, 0.05),
    new THREE.Vector3(0.95, -1.35, 0.08),
    new THREE.Vector3(1.02, -2.05, 0.08)
  ]);
  vascularGroup.add(new THREE.Mesh(
    new THREE.TubeGeometry(ureterCurve, 32, 0.075, 16, false),
    new THREE.MeshStandardMaterial({ color: 0x5eead4, emissive: 0x0d9488, roughness: 0.3 })
  ));
  kidneyGroup.add(vascularGroup);

  const pCount = 70;
  const pGeo = new THREE.BufferGeometry();
  const pPositions = new Float32Array(pCount * 3);
  for (let i = 0; i < pCount; i++) {
    pPositions[i * 3] = (Math.random() - 0.5) * 2.2;
    pPositions[i * 3 + 1] = (Math.random() - 0.5) * 3.0;
    pPositions[i * 3 + 2] = (Math.random() - 0.5) * 1.4;
  }
  pGeo.setAttribute('position', new THREE.BufferAttribute(pPositions, 3));
  particlesMesh = new THREE.Points(
    pGeo,
    new THREE.PointsMaterial({ color: 0x5eead4, size: 0.045, transparent: true, opacity: 0.75 })
  );
  kidneyGroup.add(particlesMesh);

  container.addEventListener('pointerdown', e => {
    isDragging = true;
    prevMouse = { x: e.clientX, y: e.clientY };
  });
  window.addEventListener('pointerup', () => { isDragging = false; });
  window.addEventListener('pointermove', e => {
    if (!isDragging) return;
    const dx = e.clientX - prevMouse.x;
    const dy = e.clientY - prevMouse.y;
    kidneyGroup.rotation.y += dx * 0.01;
    kidneyGroup.rotation.x += dy * 0.01;
    prevMouse = { x: e.clientX, y: e.clientY };
  });

  window.addEventListener('resize', () => {
    const w = container.clientWidth;
    const h = container.clientHeight;
    if (w && h) {
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
  });

  function animate() {
    requestAnimationFrame(animate);
    if (!isDragging) kidneyGroup.rotation.y += 0.006;
    particlesMesh.rotation.y -= 0.003;
    renderer.render(scene, camera);
  }
  animate();
}

function setKidneyView(mode, btn) {
  document.querySelectorAll('.stage-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const caption = document.getElementById('kidneyCaption');
  if (!outerMesh) return;

  if (mode === 'full') {
    outerMesh.material.opacity = 0.42;
    caption.innerHTML = '<strong>Renal Cortex &amp; Capsule:</strong> Filters ~150 quarts of blood daily through millions of microscopic nephrons to regulate blood pressure, fluid, and electrolytes.';
  } else if (mode === 'medulla') {
    outerMesh.material.opacity = 0.16;
    caption.innerHTML = '<strong>Internal Renal Medulla:</strong> Cone-shaped pyramids house microscopic tubules that concentrate urine and maintain essential sodium and potassium balance.';
  } else {
    outerMesh.material.opacity = 0.22;
    caption.innerHTML = '<strong>Renal Vascular System &amp; Ureter:</strong> Carries blood into the kidney for filtration and channels purified fluid smoothly toward the bladder.';
  }
}

// ==========================================
// 1. 2021 CKD-EPI eGFR & CKD STAGE CALCULATOR
// ==========================================
function calculateEGFR(e) {
  e.preventDefault();
  const scr = parseFloat(document.getElementById('egfrCreatinine').value);
  const age = parseInt(document.getElementById('egfrAge').value, 10);
  const sex = document.getElementById('egfrSex').value;

  const kappa = sex === 'female' ? 0.7 : 0.9;
  const alpha = sex === 'female' ? -0.241 : -0.302;
  const sexFactor = sex === 'female' ? 1.012 : 1.0;

  const ratio = scr / kappa;
  const egfrRaw = 142 * Math.pow(Math.min(ratio, 1), alpha) * Math.pow(Math.max(ratio, 1), -1.2) * Math.pow(0.9938, age) * sexFactor;
  const egfr = Math.round(egfrRaw);

  let stageNum = 1;
  let stage = "Stage 1 (Normal or High eGFR)";
  let desc = "Kidney filtering rate is 90 or above. If you have urine protein, diabetes, or high blood pressure, proactive protection is recommended.";
  if (egfr < 15) {
    stageNum = 5;
    stage = "Stage 5 (Kidney Failure / ESRD)";
    desc = "Kidney function is below 15 mL/min. Prompt nephrology care is essential to manage symptoms and coordinate dialysis or transplant options.";
  } else if (egfr < 30) {
    stageNum = 4;
    stage = "Stage 4 (Severe Reduction)";
    desc = "Kidney function is between 15 and 29 mL/min. Close nephrology management helps protect remaining function and plan ahead safely.";
  } else if (egfr < 45) {
    stageNum = 3;
    stage = "Stage 3b (Moderate-to-Severe Reduction)";
    desc = "Kidney function is between 30 and 44 mL/min. Regular nephrology visits focus on blood pressure, medication safety, and anemia/bone labs.";
  } else if (egfr < 60) {
    stageNum = 3;
    stage = "Stage 3a (Mild-to-Moderate Reduction)";
    desc = "Kidney function is between 45 and 59 mL/min. Early specialist guidance can significantly slow progression.";
  } else if (egfr < 90) {
    stageNum = 2;
    stage = "Stage 2 (Mild Reduction)";
    desc = "Kidney function is between 60 and 89 mL/min. Evaluated alongside urine protein (UACR) and blood pressure.";
  }

  const out = document.getElementById('egfrOutput');
  out.style.display = 'block';
  out.innerHTML = `
    <div class="egfr-score-row">
      <span class="egfr-big-num">eGFR: ${egfr} <small style="font-size:0.8rem;font-weight:600;">mL/min/1.73m²</small></span>
      <span class="stage-pill-tag">${stage}</span>
    </div>
    <div class="stage-meter">
      <div class="stage-seg ${stageNum === 1 ? 'active' : ''}">Stage 1</div>
      <div class="stage-seg ${stageNum === 2 ? 'active' : ''}">Stage 2</div>
      <div class="stage-seg ${stageNum === 3 ? 'active' : ''}">Stage 3</div>
      <div class="stage-seg ${stageNum === 4 ? 'active' : ''}">Stage 4</div>
      <div class="stage-seg ${stageNum === 5 ? 'active' : ''}">Stage 5</div>
    </div>
    <p style="margin-bottom:10px;">${desc}</p>
    <button class="btn btn-royal btn-sm" onclick="openBookingModal('Lab Review: eGFR ${egfr} (${stage})')">
      Discuss This Result With Dr. Barakzoy →
    </button>
  `;
}

// ==========================================
// 2. 60-SECOND KIDNEY SELF-ASSESSMENT QUIZ
// ==========================================
function evaluateKidneyQuiz(e) {
  e.preventDefault();
  const checked = Array.from(document.querySelectorAll('#quizForm input:checked')).map(cb => cb.value);
  const out = document.getElementById('quizOutput');
  out.style.display = 'block';

  if (checked.length === 0) {
    out.innerHTML = `
      <strong>Low Immediate Risk Indicators Selected</strong>
      <p style="margin:6px 0 10px;">You did not select major kidney risk factors. Continue routine annual blood pressure and metabolic checks with your primary care physician.</p>
      <button class="btn btn-outline-royal btn-sm" onclick="openBookingModal('Preventive Kidney Checkup')">Schedule Preventive Checkup</button>
    `;
  } else {
    const summaryText = checked.join("; ");
    out.innerHTML = `
      <strong>Nephrology Consultation Recommended (${checked.length} Factor${checked.length > 1 ? 's' : ''} Selected)</strong>
      <p style="margin:6px 0 8px;">Because you noted: <em>${summaryText}</em>, an evaluation with Dr. Barakzoy can help protect your kidney function.</p>
      <p style="font-size:0.82rem; margin-bottom:10px;"><strong>What to bring:</strong> Recent CMP/BMP blood test, urinalysis, and your current blood pressure medication list.</p>
      <button class="btn btn-royal btn-sm" onclick="openBookingModal('Self-Assessment: ${summaryText.replace(/'/g, '')}')">
        Request Consultation With My Quiz Summary →
      </button>
    `;
  }
}

// ==========================================
// 3. KIDNEY-SAFE FOOD & SODIUM CHECKER
// ==========================================
const kidneyFoods = [
  { name: "Blueberries & Strawberries", cat: "Produce", status: "Kidney-Friendly", cls: "status-safe", note: "Naturally low in sodium, potassium, and phosphorus; rich in antioxidants." },
  { name: "Red Bell Peppers & Cauliflower", cat: "Produce", status: "Kidney-Friendly", cls: "status-safe", note: "Excellent low-potassium vegetables; roast with garlic and olive oil instead of salt." },
  { name: "Bananas & Oranges", cat: "Produce", status: "Moderate Portion", cls: "status-mod", note: "High in potassium. Safe in early CKD unless Dr. Barakzoy advises a potassium limit." },
  { name: "Potatoes & Tomatoes", cat: "Produce", status: "Moderate Portion", cls: "status-mod", note: "Higher potassium; leaching/boiling potatoes lowers potassium if needed." },
  { name: "Fresh Skinless Chicken Breast", cat: "Proteins", status: "Kidney-Friendly", cls: "status-safe", note: "Clean, low-sodium lean protein. Avoid pre-seasoned or injected poultry." },
  { name: "Egg Whites & Fresh Fish", cat: "Proteins", status: "Kidney-Friendly", cls: "status-safe", note: "High-quality protein with lower phosphorus than egg yolks or processed meats." },
  { name: "Deli Meats, Bacon & Hot Dogs", cat: "Proteins", status: "Limit (High Sodium)", cls: "status-limit", note: "Very high in sodium and phosphate additives that raise blood pressure and strain kidneys." },
  { name: "Water & Unsweetened Herbal Tea", cat: "Pantry & Drinks", status: "Kidney-Friendly", cls: "status-safe", note: "Best daily hydration choices unless your physician has set a fluid restriction." },
  { name: "Dark Colas & Canned Iced Teas", cat: "Pantry & Drinks", status: "Limit (Phosphorus)", cls: "status-limit", note: "Contain phosphoric acid additives that absorb rapidly. Swap for clear sparkling water." },
  { name: "Canned Soups & Instant Noodles", cat: "Pantry & Drinks", status: "Limit (High Sodium)", cls: "status-limit", note: "A single can often exceeds 800–1,200 mg sodium. Choose 'No Salt Added' or homemade." },
  { name: "White Rice, Pasta & Sourdough", cat: "Pantry & Drinks", status: "Kidney-Friendly", cls: "status-safe", note: "Naturally lower in phosphorus and potassium than bran or whole-grain processed mixes." },
  { name: "Garlic, Lemon & Herb Blends", cat: "Pantry & Drinks", status: "Kidney-Friendly", cls: "status-safe", note: "Flavor food without table salt. Avoid potassium-chloride 'salt substitutes' unless approved." }
];

let currentFoodCat = "all";

function setFoodCategory(cat, btnEl) {
  currentFoodCat = cat;
  document.querySelectorAll('.food-cat-pills .filter-chip').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  renderFoodList();
}

function renderFoodList() {
  const grid = document.getElementById('foodGrid');
  if (!grid) return;
  const q = (document.getElementById('foodSearchInput')?.value || "").toLowerCase();

  const filtered = kidneyFoods.filter(item => {
    const matchCat = currentFoodCat === "all" || item.cat === currentFoodCat;
    const matchText = item.name.toLowerCase().includes(q) || item.note.toLowerCase().includes(q);
    return matchCat && matchText;
  });

  grid.innerHTML = filtered.length ? filtered.map(f => `
    <div class="food-card">
      <div class="food-card-top">
        <strong>${f.name}</strong>
        <span class="food-status ${f.cls}">${f.status}</span>
      </div>
      <p>${f.note}</p>
    </div>
  `).join("") : `<p style="color:var(--text-muted);">No matching food found—try searching another ingredient.</p>`;
}

// New Patient vs Insurance Tab Switcher
function switchPatientTab(tabId, btnEl) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btnEl.classList.add('active');
}

// 12 Kidney Health Educational Guides + Audio Read-Aloud
const eduTopics = [
  {
    title: "1. What Do Kidneys Do?",
    html: `<p>Your two bean-shaped kidneys filter roughly 120 to 150 quarts of blood every day to remove waste products, excess fluid, and toxins through urine.</p>
           <p>Beyond filtering waste, healthy kidneys regulate blood pressure, balance electrolytes (sodium, potassium, calcium), produce a hormone (erythropoietin) that tells your body to make red blood cells, and activate Vitamin D to keep your bones strong.</p>`
  },
  {
    title: "2. Understanding Chronic Kidney Disease (CKD)",
    html: `<p>Chronic Kidney Disease (CKD) means the kidneys have sustained gradual damage over months or years and cannot filter blood as effectively as normal.</p>
           <p>The two most common causes of CKD are <strong>high blood pressure (hypertension)</strong> and <strong>diabetes</strong>. Early CKD often has no obvious symptoms, which is why routine blood and urine testing with a nephrologist is vital.</p>`
  },
  {
    title: "3. CKD Stages 1–5 Educational Guide",
    html: `<p>Kidney disease is staged from 1 to 5 based on your estimated Glomerular Filtration Rate (eGFR):</p>
           <table class="edu-table">
             <thead><tr><th>Stage</th><th>eGFR (mL/min)</th><th>Description</th></tr></thead>
             <tbody>
               <tr><td><strong>Stage 1</strong></td><td>90 or higher</td><td>Normal eGFR with early signs of kidney protein or structural changes</td></tr>
               <tr><td><strong>Stage 2</strong></td><td>60 – 89</td><td>Mild decrease in kidney filtering function</td></tr>
               <tr><td><strong>Stage 3a / 3b</strong></td><td>30 – 59</td><td>Moderate decrease in kidney function; proactive nephrology care key</td></tr>
               <tr><td><strong>Stage 4</strong></td><td>15 – 29</td><td>Severe decrease in kidney function; preparation for advanced care</td></tr>
               <tr><td><strong>Stage 5</strong></td><td>Less than 15</td><td>Kidney failure (ESRD); dialysis or kidney transplant evaluation</td></tr>
             </tbody>
           </table>`
  },
  {
    title: "4. Understanding Creatinine & eGFR",
    html: `<p><strong>Creatinine</strong> is a natural waste product produced by normal muscle activity. Healthy kidneys filter creatinine out of your blood into your urine. When kidney filtering slows down, serum creatinine levels rise.</p>
           <p><strong>eGFR (estimated Glomerular Filtration Rate)</strong> uses your blood creatinine level along with your age and sex to estimate your percentage of kidney function.</p>`
  },
  {
    title: "5. Understanding BUN & Urine Protein",
    html: `<p><strong>BUN (Blood Urea Nitrogen)</strong> measures nitrogen waste from protein breakdown in the blood. Dehydration, high-protein diets, or reduced kidney filtration can raise BUN levels.</p>
           <p><strong>Urine Protein (Proteinuria / Albuminuria):</strong> Healthy kidney filters keep protein in the blood. Persistent protein in the urine is one of the earliest warning signs of kidney strain from diabetes or high blood pressure.</p>`
  },
  {
    title: "6. Hypertension & Kidney Health",
    html: `<p>High blood pressure damages the delicate blood vessels inside your kidneys' filtering units (nephrons). At the same time, damaged kidneys struggle to regulate fluid and hormones, causing blood pressure to climb even higher.</p>
           <p>Keeping blood pressure well controlled—often below <strong>130/80 mmHg</strong> as guided by Dr. Barakzoy—is one of the most effective ways to preserve kidney function.</p>`
  },
  {
    title: "7. Diabetes & Kidney Disease",
    html: `<p>Over time, elevated blood sugar damages small blood vessels throughout the body, including the kidneys (diabetic nephropathy).</p>
           <p>Combining steady blood sugar control (A1C), blood pressure management, and modern kidney-protective medications significantly reduces the risk of kidney progression.</p>`
  },
  {
    title: "8. Kidney-Friendly Nutrition Guide",
    html: `<p>A kidney-friendly eating plan helps reduce workload on your kidneys and keeps blood pressure and electrolytes balanced:</p>
           <ul class="styled-list">
             <li><strong>Limit Sodium (Salt):</strong> Aim for less than 2,000 mg of sodium daily by avoiding processed, canned, and fast foods.</li>
             <li><strong>Choose Fresh Foods:</strong> Emphasize fresh vegetables, fruits, whole grains, and lean proteins in portions recommended by your physician.</li>
             <li><strong>Monitor Potassium &amp; Phosphorus:</strong> Depending on your lab results and CKD stage, Dr. Barakzoy will let you know if potassium or phosphorus adjustments are needed.</li>
           </ul>`
  },
  {
    title: "9. Medication Safety & Kidney Function",
    html: `<p>Certain everyday medications can irritate or injure sensitive kidneys:</p>
           <ul class="styled-list">
             <li><strong>Avoid NSAIDs:</strong> Over-the-counter pain relievers like ibuprofen (Advil/Motrin), naproxen (Aleve), and meloxicam can reduce blood flow to the kidneys.</li>
             <li><strong>Check Herbal Supplements:</strong> Many unregulated herbal products and high-dose vitamins can harm kidney tissue.</li>
             <li><strong>Imaging Contrast Dye:</strong> Always inform radiology staff and Dr. Barakzoy before receiving CT scan contrast dye.</li>
           </ul>`
  },
  {
    title: "10. Understanding Dialysis",
    html: `<p>When kidneys can no longer remove enough waste and fluid on their own (Stage 5 CKD), dialysis performs this vital role:</p>
           <ul class="styled-list">
             <li><strong>Hemodialysis:</strong> Filters blood gently through a dialyzer machine, typically three times per week at a Fresenius or DaVita center (or at home).</li>
             <li><strong>Peritoneal Dialysis:</strong> Uses the natural lining of your abdomen and a cleansing fluid to filter waste gently at home, often overnight while you sleep.</li>
           </ul>`
  },
  {
    title: "11. Kidney Transplant Education",
    html: `<p>A kidney transplant places a healthy kidney from a living or deceased donor into a patient with advanced kidney failure, offering greater freedom and energy than long-term dialysis.</p>
           <p>Dr. Barakzoy assists eligible patients with early transplant center referrals and provides ongoing post-transplant medical and blood pressure care.</p>`
  },
  {
    title: "12. Kidney Disease Prevention",
    html: `<p>Protect your kidneys every day with five proven habits: keep blood pressure in your target range, manage blood sugar, limit daily sodium intake, stay physically active with regular walking, avoid smoking, and never overuse NSAID pain medications.</p>`
  }
];

function selectEduTopic(index, btnEl) {
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();
  const listenBtn = document.getElementById('listenGuideBtn');
  if (listenBtn) listenBtn.textContent = "🔊 Listen to Guide";

  document.querySelectorAll('.edu-topic-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  const item = eduTopics[index];
  document.getElementById('eduReaderContent').innerHTML = `<h3>${item.title}</h3>${item.html}`;
}

function toggleReadAloud() {
  if (!('speechSynthesis' in window)) {
    alert("Audio read-aloud is not supported in this browser.");
    return;
  }
  const btn = document.getElementById('listenGuideBtn');
  if (window.speechSynthesis.speaking) {
    window.speechSynthesis.cancel();
    btn.textContent = "🔊 Listen to Guide";
    return;
  }
  const textToRead = document.getElementById('eduReaderContent').innerText;
  const utterance = new SpeechSynthesisUtterance(textToRead);
  utterance.rate = 0.95;
  utterance.onend = () => { btn.textContent = "🔊 Listen to Guide"; };
  btn.textContent = "⏹ Stop Reading";
  window.speechSynthesis.speak(utterance);
}

// Interactive Patient Tools Modal
function openToolModal(toolType) {
  const body = document.getElementById('toolModalBody');
  if (toolType === 'bp') {
    body.innerHTML = `
      <span class="eyebrow">Home Monitoring Sheet</span>
      <h3>Blood Pressure Tracking Sheet</h3>
      <p class="modal-desc">Enter your home blood pressure readings below and click <strong>Print Sheet</strong> to bring to Dr. Barakzoy.</p>
      <table class="edu-table">
        <thead><tr><th>Date &amp; Time</th><th>Systolic / Diastolic (mmHg)</th><th>Pulse (BPM)</th><th>Notes</th></tr></thead>
        <tbody>
          <tr><td><input type="text" placeholder="MM/DD - AM" /></td><td><input type="text" placeholder="124 / 78" /></td><td><input type="text" placeholder="72" /></td><td><input type="text" placeholder="Sitting, rested 5 min" /></td></tr>
          <tr><td><input type="text" placeholder="MM/DD - PM" /></td><td><input type="text" placeholder="128 / 80" /></td><td><input type="text" placeholder="74" /></td><td><input type="text" placeholder="" /></td></tr>
          <tr><td><input type="text" placeholder="MM/DD - AM" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td></tr>
          <tr><td><input type="text" placeholder="MM/DD - PM" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td></tr>
        </tbody>
      </table>
      <div style="margin-top:16px;"><button class="btn btn-royal" onclick="window.print()">Print Blood Pressure Log</button></div>`;
  } else if (toolType === 'meds') {
    body.innerHTML = `
      <span class="eyebrow">Medication Safety</span>
      <h3>Personal Medication List Template</h3>
      <p class="modal-desc">List all prescription medicines, over-the-counter drugs, and vitamins, then click <strong>Print Medication List</strong>.</p>
      <table class="edu-table">
        <thead><tr><th>Medication Name</th><th>Strength / Dose</th><th>How Often Taken</th><th>Prescribing Doctor</th></tr></thead>
        <tbody>
          <tr><td><input type="text" placeholder="e.g., Lisinopril" /></td><td><input type="text" placeholder="10 mg" /></td><td><input type="text" placeholder="Once daily" /></td><td><input type="text" placeholder="Dr. Barakzoy" /></td></tr>
          <tr><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td></tr>
          <tr><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td></tr>
          <tr><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td><td><input type="text" placeholder="" /></td></tr>
        </tbody>
      </table>
      <div style="margin-top:16px;"><button class="btn btn-royal" onclick="window.print()">Print Medication List</button></div>`;
  } else {
    body.innerHTML = `
      <span class="eyebrow">Visit Checklist</span>
      <h3>Questions to Ask Your Nephrologist</h3>
      <ul class="styled-list">
        <li>What is my current eGFR, creatinine, and stage of kidney function?</li>
        <li>Is there protein or blood present in my urine, and what is our goal to reduce it?</li>
        <li>What is my ideal target blood pressure range at home?</li>
        <li>Are any of my current medications or over-the-counter supplements unsafe for my kidneys?</li>
        <li>Should I follow specific daily limits for sodium, potassium, phosphorus, or fluids?</li>
        <li>How often should I have follow-up blood and urine laboratory tests?</li>
        <li>What symptoms should prompt me to call your office right away?</li>
      </ul>
      <div style="margin-top:16px;"><button class="btn btn-royal" onclick="window.print()">Print Questions Checklist</button></div>`;
  }
  document.getElementById('toolModal').classList.add('open');
}

// FAQ Search Filter
function filterFAQs() {
  const q = document.getElementById('faqSearch').value.toLowerCase();
  document.querySelectorAll('.faq-item').forEach(item => {
    item.style.display = item.textContent.toLowerCase().includes(q) ? 'block' : 'none';
  });
}

// Modals Open/Close
function openBookingModal(reason = '') {
  if (reason) document.getElementById('bReason').value = reason;
  document.getElementById('bookingModal').classList.add('open');
}

function openElectronicFormModal() {
  document.getElementById('electronicFormModal').classList.add('open');
}

function openReferralCoverModal() {
  document.getElementById('referralCoverModal').classList.add('open');
}

function closeModal(id, event, force = false) {
  if (force || event.target.id === id) {
    document.getElementById(id).classList.remove('open');
  }
}

// Electronic Pre-Registration Summary Generator
function generateIntakeSummary(e) {
  e.preventDefault();
  const out = document.getElementById('intakeSummaryOutput');
  out.style.display = 'block';
  out.innerHTML = `
    <h4>Barakzoy Nephrology — New Patient Pre-Registration Summary</h4>
    <p><strong>Patient:</strong> ${document.getElementById('efName').value} | <strong>DOB:</strong> ${document.getElementById('efDob').value}</p>
    <p><strong>Phone:</strong> ${document.getElementById('efPhone').value} | <strong>Email:</strong> ${document.getElementById('efEmail').value || 'N/A'}</p>
    <p><strong>Insurance:</strong> ${document.getElementById('efIns').value} | <strong>Referring MD:</strong> ${document.getElementById('efRef').value || 'Self-Referred'}</p>
    <p><strong>Reason for Visit:</strong> ${document.getElementById('efReason').value}</p>
    <button class="btn btn-teal btn-sm" style="margin-top:10px;" onclick="window.print()">Print Summary for Check-In</button>
  `;
}

// Referring Provider Fax Cover Sheet Generator
function generateReferralCover(e) {
  e.preventDefault();
  const out = document.getElementById('refCoverPreview');
  out.style.display = 'block';
  out.innerHTML = `
    <h4>CONFIDENTIAL MEDICAL REFERRAL FAX COVER SHEET</h4>
    <p><strong>TO:</strong> Barakzoy Nephrology — Dr. Ahmad S. Barakzoy, M.D., FASN &nbsp;|&nbsp; <strong>FAX: (904) 375-8568</strong> &nbsp;|&nbsp; Tel: (904) 579-3578</p>
    <hr style="margin:8px 0;border:0;border-top:1px solid #93C5FD;" />
    <p><strong>Patient Name:</strong> ${document.getElementById('refPatientName').value} &nbsp;|&nbsp; <strong>DOB:</strong> ${document.getElementById('refPatientDob').value}</p>
    <p><strong>Patient Phone:</strong> ${document.getElementById('refPatientPhone').value} &nbsp;|&nbsp; <strong>Insurance / Auth #:</strong> ${document.getElementById('refInsurance').value || 'Attached'}</p>
    <p><strong>Referring Provider:</strong> ${document.getElementById('refProviderName').value} (${document.getElementById('refProviderPhone').value})</p>
    <p><strong>Urgency:</strong> ${document.getElementById('refUrgency').value}</p>
    <p><strong>Clinical Reason:</strong> ${document.getElementById('refNotes').value || 'See attached clinical notes'}</p>
    <p style="font-size:0.8rem;margin-top:6px;"><strong>Enclosed Checklist:</strong> [ ] Demographics &amp; Insurance Card &nbsp; [ ] CMP/BMP &amp; CBC &nbsp; [ ] Urinalysis / UACR &nbsp; [ ] Renal Ultrasound &amp; Progress Notes</p>
    <button class="btn btn-royal btn-sm" style="margin-top:10px;" onclick="window.print()">Print Fax Cover Sheet</button>
  `;
}

// Send Appointment Request Directly to BarakzoyNephrology@gmail.com
async function handleBookingSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const submitBtn = form.querySelector('button[type="submit"]');
  const fb = document.getElementById('bookingFeedback');
  const patientName = document.getElementById('bName').value;
  const patientPhone = document.getElementById('bPhone').value;

  submitBtn.disabled = true;
  submitBtn.textContent = "Sending Request...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `New Appointment Request: ${patientName}`,
        from_name: "Barakzoy Nephrology Website",
        Patient_Name: patientName,
        Callback_Phone: patientPhone,
        Visit_Type: document.getElementById('bType').value,
        Reason_or_Condition: document.getElementById('bReason').value || "Not specified",
        Insurance_and_Preferred_Days: document.getElementById('bNotes').value || "Not specified"
      })
    });

    const result = await response.json();
    fb.style.display = 'block';

    if (result.success) {
      fb.innerHTML = `Thank you, <strong>${patientName}</strong>! Your appointment request has been emailed directly to our scheduling desk. We will call <strong>${patientPhone}</strong> shortly to confirm your time.`;
      form.reset();
    } else {
      fb.innerHTML = `Please call our scheduling desk directly at <strong>(904) 579-3578</strong> so we can book your visit right away.`;
    }
  } catch (err) {
    fb.style.display = 'block';
    fb.innerHTML = `Please call our scheduling desk directly at <strong>(904) 579-3578</strong> so we can book your visit right away.`;
  }

  submitBtn.disabled = false;
  submitBtn.textContent = "Submit Appointment Request";
}

// Send General Inquiry Directly to BarakzoyNephrology@gmail.com
async function handleContactSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const btn = document.getElementById('contactSubmitBtn');
  const fb = document.getElementById('contactFeedback');
  const senderEmail = document.getElementById('cEmail').value;

  btn.disabled = true;
  btn.textContent = "Sending Message...";

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Website Inquiry: ${document.getElementById('cSubject').value}`,
        from_name: "Barakzoy Nephrology Contact Form",
        replyto: senderEmail,
        Name: document.getElementById('cName').value,
        Email: senderEmail,
        Phone: document.getElementById('cPhone').value,
        Topic: document.getElementById('cSubject').value,
        Message: document.getElementById('cMessage').value
      })
    });

    const result = await response.json();
    fb.style.display = 'block';

    if (result.success) {
      fb.textContent = "Thank you! Your message has been emailed directly to Barakzoy Nephrology. Our staff will respond promptly.";
      form.reset();
    } else {
      fb.textContent = "Unable to send online right now—please call our office directly at (904) 579-3578.";
    }
  } catch (err) {
    fb.style.display = 'block';
    fb.textContent = "Unable to send online right now—please call our office directly at (904) 579-3578.";
  }

  btn.disabled = false;
  btn.textContent = "Send Message to Office";
}

// Legal, Privacy & Accessibility Modal Content
const legalDocs = {
  privacy: `<h3>Website Privacy Policy</h3><p>Barakzoy Nephrology respects your online privacy. This website uses HTTPS/SSL encryption and collects only the voluntary contact details you submit when requesting an appointment or general inquiry. We do not sell, rent, or share visitor information with third-party marketers.</p>`,
  hipaa: `<h3>HIPAA Notice of Privacy Practices</h3><p>Ahmad S. Barakzoy, M.D., LLC is committed to safeguarding your Protected Health Information (PHI) in full compliance with the Health Insurance Portability and Accountability Act (HIPAA). Full printed copies of our Notice of Privacy Practices are available at our Orange Park clinic and in our Forms section.</p>`,
  terms: `<h3>Website Terms of Use</h3><p>Content on barakzoynephrology.com is provided for general informational and patient convenience purposes only. Use of this website does not establish a physician-patient relationship until an in-person or formal clinical evaluation occurs.</p>`,
  disclaimer: `<h3>Medical Disclaimer</h3><p>The educational materials on this website are not a substitute for professional medical advice, diagnosis, or treatment. Never disregard professional medical advice or delay seeking care because of something you read online. In a medical emergency, call 911 immediately.</p>`,
  accessibility: `<h3>Accessibility Statement</h3><p>Barakzoy Nephrology strives to make our digital experience accessible to all patients, including individuals using screen readers, audio read-aloud, or enlarged text (use the <strong>A+</strong> button in the top bar). If you need assistance accessing any form or information, please call <strong>(904) 579-3578</strong>.</p>`,
  gfe: `<h3>Good Faith Estimate &amp; Non-Discrimination Notice</h3><p>Under the federal No Surprises Act, uninsured and self-pay patients have the right to request a Good Faith Estimate of expected charges prior to scheduled care. Barakzoy Nephrology complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex.</p>`
};

function openLegalModal(type) {
  document.getElementById('legalModalBody').innerHTML = legalDocs[type];
  document.getElementById('legalModal').classList.add('open');
}

// Initialize interactive modules on load
window.addEventListener('DOMContentLoaded', () => {
  init3DKidney();
  renderFoodList();
  selectEduTopic(0, document.querySelector('.edu-topic-btn'));
});
