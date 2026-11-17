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

  // Lighting
  scene.add(new THREE.AmbientLight(0xdbeafe, 0.9));
  const keyLight = new THREE.DirectionalLight(0x5eead4, 1.8);
  keyLight.position.set(4, 5, 5);
  scene.add(keyLight);

  const rimLight = new THREE.DirectionalLight(0x3b82f6, 1.4);
  rimLight.position.set(-4, -3, -4);
  scene.add(rimLight);

  kidneyGroup = new THREE.Group();
  scene.add(kidneyGroup);

  // 1. Sculpted Anatomical Bean-Shaped Kidney Shell
  const geo = new THREE.SphereGeometry(1.32, 64, 64);
  const pos = geo.attributes.position;
  for (let i = 0; i < pos.count; i++) {
    let x = pos.getX(i);
    let y = pos.getY(i);
    let z = pos.getZ(i);

    // Elongate vertically & flatten anterior-posteriorly
    y *= 1.42;
    z *= 0.62;

    // C-curve bean silhouette
    x -= 0.28 * Math.cos((y / 2.0) * Math.PI * 0.85);

    // Medial hilum indentation on +X inner side
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

  // Subtle anatomical wireframe overlay
  const wireMat = new THREE.MeshBasicMaterial({
    color: 0x5eead4,
    wireframe: true,
    transparent: true,
    opacity: 0.08
  });
  outerMesh.add(new THREE.Mesh(geo, wireMat));

  // 2. Internal Renal Medullary Pyramids
  medullaGroup = new THREE.Group();
  const pyramidMat = new THREE.MeshStandardMaterial({
    color: 0x0d9488,
    emissive: 0x0f766e,
    emissiveIntensity: 0.35,
    roughness: 0.35
  });
  const angles = [-0.95, -0.45, 0, 0.45, 0.95];
  angles.forEach(ang => {
    const pyrGeo = new THREE.ConeGeometry(0.24, 0.62, 24);
    const pyr = new THREE.Mesh(pyrGeo, pyramidMat);
    pyr.position.set(-Math.cos(ang) * 0.58 - 0.1, Math.sin(ang) * 0.92, 0);
    pyr.rotation.z = ang - Math.PI / 2;
    medullaGroup.add(pyr);
  });
  kidneyGroup.add(medullaGroup);

  // 3. Renal Artery, Vein & Ureter Tubes
  vascularGroup = new THREE.Group();
  const arteryCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(1.85, 0.28, 0.12),
    new THREE.Vector3(0.65, 0.18, 0.08),
    new THREE.Vector3(0.15, 0.45, 0.05),
    new THREE.Vector3(-0.35, 0.85, 0)
  ]);
  const arteryMesh = new THREE.Mesh(
    new THREE.TubeGeometry(arteryCurve, 32, 0.085, 16, false),
    new THREE.MeshStandardMaterial({ color: 0xe11d48, emissive: 0x881337, roughness: 0.3 })
  );
  vascularGroup.add(arteryMesh);

  const veinCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(1.85, 0.0, -0.1),
    new THREE.Vector3(0.65, -0.02, -0.06),
    new THREE.Vector3(0.1, -0.35, -0.04),
    new THREE.Vector3(-0.35, -0.78, 0)
  ]);
  const veinMesh = new THREE.Mesh(
    new THREE.TubeGeometry(veinCurve, 32, 0.09, 16, false),
    new THREE.MeshStandardMaterial({ color: 0x3b82f6, emissive: 0x1e3a8a, roughness: 0.3 })
  );
  vascularGroup.add(veinMesh);

  const ureterCurve = new THREE.CatmullRomCurve3([
    new THREE.Vector3(0.28, -0.12, 0),
    new THREE.Vector3(0.75, -0.55, 0.05),
    new THREE.Vector3(0.95, -1.35, 0.08),
    new THREE.Vector3(1.02, -2.05, 0.08)
  ]);
  const ureterMesh = new THREE.Mesh(
    new THREE.TubeGeometry(ureterCurve, 32, 0.075, 16, false),
    new THREE.MeshStandardMaterial({ color: 0x5eead4, emissive: 0x0d9488, roughness: 0.3 })
  );
  vascularGroup.add(ureterMesh);
  kidneyGroup.add(vascularGroup);

  // 4. Floating Micro-Filtration Particles
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

  // Mouse & Touch Drag Controls
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
    if (!isDragging) {
      kidneyGroup.rotation.y += 0.006;
    }
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

window.addEventListener('DOMContentLoaded', init3DKidney);

// New Patient vs Insurance Tab Switcher
function switchPatientTab(tabId, btnEl) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.getElementById(tabId).classList.add('active');
  btnEl.classList.add('active');
}

// 12 Kidney Health Educational Guides
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
  document.querySelectorAll('.edu-topic-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) btnEl.classList.add('active');
  const item = eduTopics[index];
  document.getElementById('eduReaderContent').innerHTML = `<h3>${item.title}</h3>${item.html}`;
}
selectEduTopic(0, document.querySelector('.edu-topic-btn'));

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
  accessibility: `<h3>Accessibility Statement</h3><p>Barakzoy Nephrology strives to make our digital experience accessible to all patients, including individuals using screen readers or enlarged text (use the <strong>A+</strong> button in the top bar). If you need assistance accessing any form or information, please call <strong>(904) 579-3578</strong>.</p>`,
  gfe: `<h3>Good Faith Estimate &amp; Non-Discrimination Notice</h3><p>Under the federal No Surprises Act, uninsured and self-pay patients have the right to request a Good Faith Estimate of expected charges prior to scheduled care. Barakzoy Nephrology complies with applicable federal civil rights laws and does not discriminate on the basis of race, color, national origin, age, disability, or sex.</p>`
};

function openLegalModal(type) {
  document.getElementById('legalModalBody').innerHTML = legalDocs[type];
  document.getElementById('legalModal').classList.add('open');
}
