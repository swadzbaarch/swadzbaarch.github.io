const sliders = document.querySelectorAll('[data-slider]');

sliders.forEach(slider => {
  const slides = Array.from(slider.querySelectorAll('[data-slide]'));
  const prev = slider.querySelector('.slider-prev');
  const next = slider.querySelector('.slider-next');
  const counter = slider.querySelector('.slider-counter');
  let index = 0;

  function showSlide(newIndex) {
    index = (newIndex + slides.length) % slides.length;
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? '1' : '0';
      slide.setAttribute('aria-hidden', i === index ? 'false' : 'true');
    });
    counter.textContent = `${index + 1} / ${slides.length}`;
  }

  prev.addEventListener('click', () => showSlide(index - 1));
  next.addEventListener('click', () => showSlide(index + 1));

  slider.addEventListener('keydown', e => {
    if(e.key === 'ArrowLeft') showSlide(index - 1);
    if(e.key === 'ArrowRight') showSlide(index + 1);
  });

  showSlide(0);
});

const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxCounter = document.getElementById('lightboxCounter');
const closeButton = document.getElementById('lightboxClose');
const prevButton = document.getElementById('lightboxPrev');
const nextButton = document.getElementById('lightboxNext');

let lastFocused = null;
let gallery = [];
let titles = [];
let currentIndex = 0;

function renderGallery(){
  if(!gallery.length) return;
  lightboxImage.src = gallery[currentIndex];
  lightboxImage.alt = titles[currentIndex] || 'Zdjęcie projektu';
  lightboxCaption.textContent = titles[currentIndex] || '';
  lightboxCounter.textContent = `${currentIndex + 1} / ${gallery.length}`;
  const multiple = gallery.length > 1;
  prevButton.hidden = !multiple;
  nextButton.hidden = !multiple;
}

function openLightbox(button){
  lastFocused = button;
  gallery = (button.dataset.gallery || '').split('|').filter(Boolean);
  titles = (button.dataset.titles || '').split('|');
  currentIndex = 0;
  renderGallery();
  lightbox.classList.add('is-open');
  lightbox.setAttribute('aria-hidden','false');
  closeButton.focus();
}

function closeLightbox(){
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImage.src = '';
  gallery = [];
  titles = [];
  if(lastFocused) lastFocused.focus();
}

function showNext(){
  if(gallery.length < 2) return;
  currentIndex = (currentIndex + 1) % gallery.length;
  renderGallery();
}

function showPrev(){
  if(gallery.length < 2) return;
  currentIndex = (currentIndex - 1 + gallery.length) % gallery.length;
  renderGallery();
}

document.querySelectorAll('[data-gallery]').forEach(button=>{
  button.addEventListener('click',()=>openLightbox(button));
});

closeButton.addEventListener('click',closeLightbox);
nextButton.addEventListener('click',showNext);
prevButton.addEventListener('click',showPrev);

lightbox.addEventListener('click',(e)=>{
  if(e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown',(e)=>{
  if(!lightbox.classList.contains('is-open')) return;
  if(e.key === 'Escape') closeLightbox();
  if(e.key === 'ArrowRight') showNext();
  if(e.key === 'ArrowLeft') showPrev();
});
