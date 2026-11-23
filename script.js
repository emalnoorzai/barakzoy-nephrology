// Web3Forms Access Key linked to BarakzoyNephrology@gmail.com
const WEB3FORMS_ACCESS_KEY = "93906356-d140-4887-b55a-02d0bb27b6b1";

// Auto copyright year
document.getElementById('yearSpan').textContent = new Date().getFullYear();

// Senior-Friendly Larger Text Toggle
function toggleFontSize() {
  document.documentElement.classList.toggle('large-text');
  const btn = document.getElementById('fontToggleBtn');
  btn.textContent = document.documentElement.classList.contains('large-text') ? 'A- Standard Text' : 'A+ Larger Text';
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');
mobileMenuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// 4-Language Switcher (English, Spanish, French, Persian)
const originalEnglishHTML = {};
const siteTranslations = {
  es: {
    banner: "<strong>Idioma Español:</strong> Atención cálida y certificada para los riñones y la presión arterial con el Dr. Ahmad S. Barakzoy. Teléfono: <strong>(904) 579-3578</strong>.",
    top_hours: "<strong>Horario:</strong> Lun–Jue 8:00 AM – 5:00 PM (Vie–Dom Cerrado)",
    top_call: "Llamar: (904) 579-3578",
    top_portal: "Portal del Paciente",
    nav_home: "Inicio",
    nav_physician: "Dr. Barakzoy",
    nav_services: "Cuidado y Servicios",
    nav_patients: "Pacientes y Seguros",
    nav_forms: "Formularios",
    nav_contact: "Contacto",
    btn_book: "Pedir Cita",
    hero_badge: "Aceptando Nuevos Pacientes • Orange Park y Noreste de Florida",
    hero_title: "Cuidado Cálido y Sin Prisas para sus Riñones y Presión Arterial.",
    hero_lead: "Dirigida por el <strong>Dr. Ahmad S. Barakzoy, M.D., FASN</strong>, nuestra clínica brinda atención certificada y personalizada para la salud renal, hipertensión y diabetes, con tiempo y explicaciones claras para cada paciente y familia.",
    hero_cta_book: "Solicitar una Cita",
    hero_cta_call: "Llamar (904) 579-3578",
    card_hours_title: "Horario de Clínica",
    card_hours_body: "Lunes – Jueves: 8:00 AM – 5:00 PM<br />Viernes – Domingo: Cerrado",
    card_ins_title: "Seguros Aceptados",
    card_ins_body: "Medicare, Medicare Advantage, Medicaid, Florida Blue, Aetna, Cigna, UnitedHealthcare y Tricare.",
    card_loc_title: "Acceso a Nivel del Suelo",
    card_loc_body: "2035 Professional Center Dr., Suite A<br />Orange Park, FL 32073",
    sec_doc_eyebrow: "Conozca a su Médico",
    sec_doc_sub: "Doble Certificación en Nefrología y Medicina Interna • Más de 20 Años de Experiencia",
    bio_heading: "Atención Compasiva Adaptada a Usted",
    bio_text: "El Dr. Ahmad S. Barakzoy atiende a adultos y residentes mayores en Orange Park, Fleming Island, Green Cove Springs y Jacksonville, ayudando a proteger la función renal y controlar la presión arterial.",
    sec_srv_eyebrow: "Cómo Ayudamos",
    sec_srv_title: "Condiciones Renales y de Presión Arterial que Tratamos",
    sec_srv_sub: "Haga clic en cualquier condición para solicitar una consulta.",
    sec_np_eyebrow: "Guía para Pacientes y Familias",
    sec_np_title: "Preparación para su Visita y Seguros",
    sec_np_sub: "Detalles sencillos para que su visita sea cómoda de principio a fin.",
    sec_forms_eyebrow: "Formularios y Portal",
    forms_title: "Formularios Descargables y Portal del Paciente",
    forms_sub: "Descargue sus formularios en Word antes de su visita o ingrese al portal en línea.",
    sec_contact_eyebrow: "Visítenos o Llámenos",
    contact_title: "Contacte a Barakzoy Nephrology",
    contact_sub: "Entrada accesible para sillas de ruedas a nivel del suelo con estacionamiento frente a la puerta.",
    inquiry_title: "Envíe un Mensaje a Nuestra Oficina"
  },
  fr: {
    banner: "<strong>Langue Française :</strong> Soins attentionnés et certifiés des reins et de la tension artérielle avec le Dr Ahmad S. Barakzoy. Téléphone : <strong>(904) 579-3578</strong>.",
    top_hours: "<strong>Horaires :</strong> Lun–Jeu 8h00 – 17h00 (Ven–Dim Fermé)",
    top_call: "Appeler : (904) 579-3578",
    top_portal: "Portail Patient",
    nav_home: "Accueil",
    nav_physician: "Dr Barakzoy",
    nav_services: "Soins et Services",
    nav_patients: "Patients et Assurances",
    nav_forms: "Formulaires",
    nav_contact: "Contact",
    btn_book: "Prendre Rendez-vous",
    hero_badge: "Nouveaux Patients Acceptés • Orange Park et Nord-Est de la Floride",
    hero_title: "Soins Chaleureux et Attentifs des Reins et de la Tension Artérielle.",
    hero_lead: "Dirigé par le <strong>Dr Ahmad S. Barakzoy, M.D., FASN</strong>, notre cabinet offre des soins certifiés et personnalisés pour la santé rénale, l'hypertension et le diabète, en prenant le temps d'écouter chaque patient et sa famille.",
    hero_cta_book: "Demander un Rendez-vous",
    hero_cta_call: "Appeler (904) 579-3578",
    card_hours_title: "Horaires du Cabinet",
    card_hours_body: "Lundi – Jeudi : 8h00 – 17h00<br />Vendredi – Dimanche : Fermé",
    card_ins_title: "Assurances Acceptées",
    card_ins_body: "Medicare, Medicare Advantage, Medicaid, Florida Blue, Aetna, Cigna, UnitedHealthcare et Tricare.",
    card_loc_title: "Accès de Plain-Pied",
    card_loc_body: "2035 Professional Center Dr., Suite A<br />Orange Park, FL 32073",
    sec_doc_eyebrow: "Votre Médecin",
    sec_doc_sub: "Double Certification en Néphrologie et Médecine Interne • Plus de 20 Ans d'Expérience",
    bio_heading: "Des Soins Bienveillants Adaptés à Vous",
    bio_text: "Le Dr Ahmad S. Barakzoy accompagne les adultes et les résidents seniors d'Orange Park, Fleming Island, Green Cove Springs et Jacksonville pour préserver leur fonction rénale et équilibrer leur tension.",
    sec_srv_eyebrow: "Nos Soins",
    sec_srv_title: "Pathologies Rénales et Hypertension Traitées",
    sec_srv_sub: "Cliquez sur une pathologie ci-dessous pour demander une consultation.",
    sec_np_eyebrow: "Guide Patient et Famille",
    sec_np_title: "Préparer Votre Visite et Assurances",
    sec_np_sub: "Des informations claires pour une visite sereine.",
    sec_forms_eyebrow: "Documents et Portail",
    forms_title: "Formulaires Patients et Portail en Ligne",
    forms_sub: "Téléchargez vos formulaires Word à domicile ou accédez à votre portail patient.",
    sec_contact_eyebrow: "Nous Rendre Visite",
    contact_title: "Contacter Barakzoy Nephrology",
    contact_sub: "Entrée de plain-pied accessible en fauteuil roulant avec parking devant la porte.",
    inquiry_title: "Envoyer un Message au Cabinet"
  },
  fa: {
    banner: "<strong>زبان فارسی / دری:</strong> مراقبت صمیمی و تخصصی امراض گرده و فشار خون بلند توسط داکتر احمد شاه بارکزی. شماره تماس: <strong>(904) 579-3578</strong>",
    top_hours: "<strong>ساعات کاری:</strong> دوشنبه–پنج‌شنبه ۸:۰۰ صبح – ۵:۰۰ عصر (جمعه تا یکشنبه تعطیل)",
    top_call: "تماس: (904) 579-3578",
    top_portal: "پورتال بیماران",
    nav_home: "صفحه اصلی",
    nav_physician: "داکتر بارکزی",
    nav_services: "خدمات درمانی",
    nav_patients: "بیماران و بیمه",
    nav_forms: "فورم‌ها",
    nav_contact: "تماس و آدرس",
    btn_book: "گرفتن نوبت",
    hero_badge: "پذیرش بیماران جدید • اورنج پارک و شمال شرق فلوریدا",
    hero_title: "مراقبت صمیمی، آرام و تخصصی امراض گرده و فشار خون بلند.",
    hero_lead: "کلینیک <strong>نفرولوژی بارکزی</strong> به سرپرستی <strong>داکتر احمد شاه بارکزی (M.D., FASN)</strong> مراقبت‌های تخصصی و دلسوزانه برای سلامت گرده‌ها، فشار خون بلند، دیابت و دیالیز را با وقت کافی و توضیح روشن برای بیماران و خانواده‌ها ارائه می‌دهد.",
    hero_cta_book: "درخواست نوبت ویزیت",
    hero_cta_call: "تماس: (904) 579-3578",
    card_hours_title: "ساعات کاری کلینیک",
    card_hours_body: "دوشنبه تا پنج‌شنبه: ۸:۰۰ صبح – ۵:۰۰ عصر<br />جمعه تا یکشنبه: تعطیل",
    card_ins_title: "بیمه‌های مورد پذیرش",
    card_ins_body: "Medicare، Medicare Advantage، Medicaid، Florida Blue، Aetna، Cigna، UnitedHealthcare و Tricare.",
    card_loc_title: "دسترسی آسان هم‌سطح",
    card_loc_body: "2035 Professional Center Dr., Suite A<br />Orange Park, FL 32073",
    sec_doc_eyebrow: "آشنایی با داکتر",
    sec_doc_sub: "دارای بورد تخصصی دوگانه در نفرولوژی و داخله عمومی • بیش از ۲۰ سال تجربه",
    bio_heading: "مراقبت دلسوزانه متناسب با شرایط شما",
    bio_text: "داکتر احمد شاه بارکزی به بزرگسالان و سالمندان عزیز در مناطق اورنج پارک، فلمینگ آیلند، گرین کوو اسپرینگز و جکسون‌ویل خدمات تخصصی ارائه می‌دهد.",
    sec_srv_eyebrow: "خدمات ما",
    sec_srv_title: "بیماری‌های گرده و فشار خون تحت درمان",
    sec_srv_sub: "برای درخواست نوبت ویزیت روی هر مورد کلیک کنید.",
    sec_np_eyebrow: "راهنمای بیماران و خانواده‌ها",
    sec_np_title: "آمادگی برای مراجعه و بیمه",
    sec_np_sub: "اطلاعات ساده و روشن برای یک مراجعه راحت.",
    sec_forms_eyebrow: "فورم‌ها و پورتال",
    forms_title: "فورم‌های قابل دانلود و پورتال بیماران",
    forms_sub: "فورم‌های ورد را در منزل دانلود کنید یا وارد پورتال آنلاین شوید.",
    sec_contact_eyebrow: "تماس یا مراجعه حضوری",
    contact_title: "تماس با کلینیک نفرولوژی بارکزی",
    contact_sub: "ورودی هم‌سطح و مناسب ویلچر با پارکینگ اختصاصی مقابل درب کلینیک.",
    inquiry_title: "ارسال پیام به دفتر کلینیک"
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

// Patient & Insurance Tabs
function switchPatientTab(tabId, btnEl) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btnEl.classList.add('active');
}

// Modals Open/Close
function openBookingModal(reason = '') {
  if (reason) document.getElementById('bReason').value = reason;
  document.getElementById('bookingModal').classList.add('open');
}

function openElectronicFormModal() {
  document.getElementById('electronicFormModal').classList.add('open');
}

function closeModal(id, event, force = false) {
  if (force || event.target.id === id) {
    document.getElementById(id).classList.remove('open');
  }
}

// Electronic Pre-Registration Summary
function generateIntakeSummary(e) {
  e.preventDefault();
  const out = document.getElementById('intakeSummaryOutput');
  out.style.display = 'block';
  out.innerHTML = `
    <h4>Barakzoy Nephrology — Patient Pre-Registration Summary</h4>
    <p><strong>Patient:</strong> ${document.getElementById('efName').value} | <strong>DOB:</strong> ${document.getElementById('efDob').value}</p>
    <p><strong>Phone:</strong> ${document.getElementById('efPhone').value} | <strong>Email:</strong> ${document.getElementById('efEmail').value || 'N/A'}</p>
    <p><strong>Insurance:</strong> ${document.getElementById('efIns').value} | <strong>Primary Doctor:</strong> ${document.getElementById('efRef').value || 'N/A'}</p>
    <p><strong>Reason for Visit:</strong> ${document.getElementById('efReason').value}</p>
    <button class="btn btn-sage" style="margin-top:10px;" onclick="window.print()">Print Summary</button>
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
        Reason_for_Visit: document.getElementById('bReason').value || "Not specified",
        Insurance_and_Preferred_Day: document.getElementById('bNotes').value || "Not specified"
      })
    });

    const result = await response.json();
    fb.style.display = 'block';

    if (result.success) {
      fb.innerHTML = `Thank you, <strong>${patientName}</strong>! Your appointment request has been sent to our scheduling desk. We will call <strong>${patientPhone}</strong> shortly to confirm your visit.`;
      form.reset();
    } else {
      fb.innerHTML = `Please call our office directly at <strong>(904) 579-3578</strong> (Mon–Thu, 8 AM – 5 PM) to schedule your visit.`;
    }
  } catch (err) {
    fb.style.display = 'block';
    fb.innerHTML = `Please call our office directly at <strong>(904) 579-3578</strong> (Mon–Thu, 8 AM – 5 PM) to schedule your visit.`;
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
        subject: `Website Message: ${document.getElementById('cSubject').value}`,
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
      fb.textContent = "Thank you! Your message has been sent to Barakzoy Nephrology. Our staff will reply promptly.";
      form.reset();
    } else {
      fb.textContent = "Unable to send online right now—please call our office at (904) 579-3578.";
    }
  } catch (err) {
    fb.style.display = 'block';
    fb.textContent = "Unable to send online right now—please call our office at (904) 579-3578.";
  }

  btn.disabled = false;
  btn.textContent = "Send Message";
}

// Legal & Privacy Modal Content
const legalDocs = {
  privacy: `<h3>Website Privacy Policy</h3><p>Barakzoy Nephrology respects your privacy and collects only the contact details you voluntarily submit to schedule an appointment or ask a general question. We never sell or share visitor details with marketers.</p>`,
  hipaa: `<h3>HIPAA Notice of Privacy Practices</h3><p>Ahmad S. Barakzoy, M.D., LLC protects your medical information in compliance with HIPAA and Florida law. Full printed copies are available at our Orange Park office and in the Patient Forms section.</p>`,
  terms: `<h3>Website Terms of Use</h3><p>Information on this website is for general patient convenience and educational purposes only and does not establish a physician-patient relationship prior to an office evaluation.</p>`,
  disclaimer: `<h3>Medical Disclaimer</h3><p>Content on this website is not a substitute for professional medical advice, diagnosis, or treatment. In a medical emergency, call 911 immediately.</p>`,
  gfe: `<h3>Good Faith Estimate Notice</h3><p>Under the federal No Surprises Act, uninsured and self-pay patients have the right to receive a written Good Faith Estimate of expected charges prior to scheduled care.</p>`
};

function openLegalModal(type) {
  document.getElementById('legalModalBody').innerHTML = legalDocs[type];
  document.getElementById('legalModal').classList.add('open');
}
