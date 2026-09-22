// ---- i18n ----
const translations = {
  pt: {
    meta_title: 'The Icing Art | Bolos e Doces Artesanais',
    meta_description: 'Bolos personalizados e doces artesanais feitos à mão com carinho, por The Icing Art.',
    nav_about: 'Sobre',
    nav_gallery: 'Galeria',
    nav_testimonials: 'Depoimentos',
    nav_contact: 'Contato',
    hero_eyebrow: 'Feito à mão, com amor',
    hero_title: 'Bolos e doces que viram <span>obra de arte</span>',
    hero_sub: 'Criações artesanais personalizadas para tornar sua celebração ainda mais doce e especial.',
    hero_cta_primary: 'Fazer um pedido',
    hero_cta_outline: 'Ver galeria',
    about_placeholder: 'Foto da confeiteira<br>ou de um bolo destaque',
    about_eyebrow: 'Sobre',
    about_title: 'A arte por trás de cada detalhe',
    about_text1: 'Cada bolo é pensado e decorado à mão, com atenção especial a cores, texturas e ao tema da sua celebração. O objetivo é simples: transformar um momento especial em uma lembrança ainda mais doce.',
    about_text2: 'Do primeiro esboço ao último toque de glacê, cada encomenda é única — feita sob medida para você.',
    gallery_eyebrow: 'Galeria',
    gallery_title: 'Trabalhos recentes',
    gallery_sub: 'Uma amostra das criações mais recentes. Confira mais no Instagram.',
    gallery_photo_1: 'Foto 1',
    gallery_photo_2: 'Foto 2',
    gallery_photo_3: 'Foto 3',
    gallery_photo_4: 'Foto 4',
    gallery_photo_5: 'Foto 5',
    gallery_photo_6: 'Foto 6',
    gallery_cta: 'Seguir no Instagram',
    testimonials_eyebrow: 'Depoimentos',
    testimonials_title: 'O que as clientes dizem',
    testimonial1: '"Amoooo! Os doces mais encantadores que eu já vi!" 😍💞',
    testimonial2: '"Linda... e muito talentosa." ❤️',
    testimonial3: '"A melhoooor!" 🤍',
    testimonial_source: '· Instagram',
    contact_eyebrow: 'Contato',
    contact_title: 'Vamos criar seu bolo dos sonhos?',
    contact_text: 'Chame no WhatsApp contando um pouco sobre sua ideia, data do evento e número de convidados.',
    contact_whatsapp: 'Falar no WhatsApp',
    form_name: 'Nome',
    form_date: 'Data do evento',
    form_message: 'Conte sobre o pedido',
    form_submit: 'Enviar no WhatsApp',
    form_note: 'Mensagem pronta! Envie pelo WhatsApp para finalizar.',
    footer_rights_prefix: '©',
    footer_rights: 'Todos os direitos reservados.',
    whatsapp_aria: 'Falar no WhatsApp',
    nav_toggle_aria: 'Abrir menu',
    whatsapp_message: 'Olá! Meu nome é {name}. {message}',
  },
  en: {
    meta_title: 'The Icing Art | Handmade Cakes & Treats',
    meta_description: 'Personalised handmade cakes and treats, crafted with love by The Icing Art.',
    nav_about: 'About',
    nav_gallery: 'Gallery',
    nav_testimonials: 'Testimonials',
    nav_contact: 'Contact',
    hero_eyebrow: 'Handmade, with love',
    hero_title: 'Cakes and treats that become <span>works of art</span>',
    hero_sub: 'Personalised handmade creations to make your celebration even sweeter.',
    hero_cta_primary: 'Place an order',
    hero_cta_outline: 'View gallery',
    about_placeholder: 'Photo of the baker<br>or a featured cake',
    about_eyebrow: 'About',
    about_title: 'The art behind every detail',
    about_text1: 'Every cake is thoughtfully designed and hand-decorated, with special attention to colours, textures and the theme of your celebration. The goal is simple: to turn a special moment into an even sweeter memory.',
    about_text2: 'From the first sketch to the final touch of icing, every order is unique — made just for you.',
    gallery_eyebrow: 'Gallery',
    gallery_title: 'Recent creations',
    gallery_sub: 'A glimpse of the latest creations. See more on Instagram.',
    gallery_photo_1: 'Photo 1',
    gallery_photo_2: 'Photo 2',
    gallery_photo_3: 'Photo 3',
    gallery_photo_4: 'Photo 4',
    gallery_photo_5: 'Photo 5',
    gallery_photo_6: 'Photo 6',
    gallery_cta: 'Follow on Instagram',
    testimonials_eyebrow: 'Testimonials',
    testimonials_title: 'What clients say',
    testimonial1: '"I looove it! The most charming treats I\'ve ever seen!" 😍💞',
    testimonial2: '"Beautiful... and so talented." ❤️',
    testimonial3: '"The best!" 🤍',
    testimonial_source: '· Instagram',
    contact_eyebrow: 'Contact',
    contact_title: "Let's create your dream cake?",
    contact_text: 'Message us on WhatsApp with a bit about your idea, event date and number of guests.',
    contact_whatsapp: 'Message on WhatsApp',
    form_name: 'Name',
    form_date: 'Event date',
    form_message: 'Tell us about your order',
    form_submit: 'Send via WhatsApp',
    form_note: 'Message ready! Send it via WhatsApp to finish.',
    footer_rights_prefix: '©',
    footer_rights: 'All rights reserved.',
    whatsapp_aria: 'Message on WhatsApp',
    nav_toggle_aria: 'Open menu',
    whatsapp_message: "Hi! My name is {name}. {message}",
  },
};

const DEFAULT_LANG = 'pt';
let currentLang = DEFAULT_LANG;

function getStoredLang() {
  try {
    return localStorage.getItem('icingart-lang');
  } catch (e) {
    return null;
  }
}

function storeLang(lang) {
  try {
    localStorage.setItem('icingart-lang', lang);
  } catch (e) {
    // ignore — per-viewer convenience only
  }
}

function applyLanguage(lang) {
  const dict = translations[lang] || translations[DEFAULT_LANG];
  currentLang = lang;

  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });

  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const key = el.getAttribute('data-i18n-html');
    if (dict[key]) el.innerHTML = dict[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
    if (dict[key]) el.setAttribute(attr, dict[key]);
  });

  document.querySelectorAll('.lang-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  document.getElementById('navToggle').setAttribute('aria-label', dict.nav_toggle_aria);

  storeLang(lang);
}

document.querySelectorAll('.lang-btn').forEach((btn) => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

const initialLang = getStoredLang() || (navigator.language && navigator.language.startsWith('en') ? 'en' : DEFAULT_LANG);
applyLanguage(translations[initialLang] ? initialLang : DEFAULT_LANG);

// ---- Mobile nav toggle ----
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---- Footer year ----
document.getElementById('year').textContent = new Date().getFullYear();

// ---- Contact form (no backend — hands off to WhatsApp) ----
const WHATSAPP_NUMBER = '447840180469';
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const dict = translations[currentLang];
  formNote.textContent = dict.form_note;

  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  const text = encodeURIComponent(
    dict.whatsapp_message.replace('{name}', name).replace('{message}', message)
  );
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
});
