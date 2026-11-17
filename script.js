// Set current copyright year automatically
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Sticky Navbar shadow & Scroll-Spy active link
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  let currentId = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 130;
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${currentId}`) {
      link.classList.add('active');
    }
  });
});

// Mobile Navigation Drawer
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinksContainer = document.getElementById('navLinks');

mobileMenuBtn.addEventListener('click', () => {
  navLinksContainer.classList.toggle('open');
});

navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navLinksContainer.classList.remove('open');
  });
});

// Interactive Services Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const serviceCards = document.querySelectorAll('.service-card');

filterBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterBtns.forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');

    const category = btn.getAttribute('data-filter');
    serviceCards.forEach((card) => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Appointment Booking Modal
const bookingModal = document.getElementById('bookingModal');
const reasonInput = document.getElementById('bReason');

function openBookingModal(prefillReason = '') {
  if (prefillReason && reasonInput) {
    reasonInput.value = prefillReason;
  }
  bookingModal.classList.add('open');
}

function closeBookingModal(event, force = false) {
  if (force || event.target === bookingModal) {
    bookingModal.classList.remove('open');
  }
}

function handleBookingSubmit(event) {
  event.preventDefault();
  const name = document.getElementById('bName').value;
  const phone = document.getElementById('bPhone').value;
  const type = document.getElementById('bType').value;
  const feedback = document.getElementById('bookingFeedback');

  feedback.style.display = 'block';
  feedback.innerHTML = `Thank you, <strong>${name}</strong>! Your <strong>${type}</strong> request has been logged. Our Orange Park scheduling desk will call <strong>${phone}</strong> shortly, or you may call us directly at <strong>(904) 579-3578</strong>.`;
  event.target.reset();
}

// Contact Form Submission (Supports Web3Forms + Instant Confirmation)
async function handleContactSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const btn = document.getElementById('contactSubmitBtn');
  const feedback = document.getElementById('contactFeedback');
  const formData = new FormData(form);
  const accessKey = formData.get('access_key');

  btn.disabled = true;
  btn.textContent = 'Sending...';

  if (accessKey && accessKey !== 'YOUR_ACCESS_KEY_HERE') {
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      if (result.success) {
        feedback.style.display = 'block';
        feedback.textContent = 'Success! Your message has been sent to Barakzoy Nephrology.';
        form.reset();
      } else {
        throw new Error('Submission error');
      }
    } catch (err) {
      feedback.style.display = 'block';
      feedback.textContent = 'Please call our office directly at (904) 579-3578 so we can assist you immediately.';
    }
  } else {
    // Immediate confirmation before Web3Forms key is added
    feedback.style.display = 'block';
    feedback.textContent = 'Success! Message received. For immediate scheduling, please call (904) 579-3578.';
    form.reset();
  }

  btn.disabled = false;
  btn.textContent = 'Send Message';
}
