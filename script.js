const year = document.getElementById('year');
year.textContent = new Date().getFullYear();

const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const closeButton = document.getElementById('lightboxClose');
let lastFocused = null;

function closeLightbox(){
  lightbox.classList.remove('is-open');
  lightbox.setAttribute('aria-hidden','true');
  lightboxImage.src = '';
  if(lastFocused) lastFocused.focus();
}

document.querySelectorAll('[data-lightbox]').forEach(button=>{
  button.addEventListener('click',()=>{
    lastFocused = button;
    lightboxImage.src = button.dataset.lightbox;
    lightboxImage.alt = button.querySelector('img')?.alt || '';
    lightboxCaption.textContent = button.dataset.title || '';
    lightbox.classList.add('is-open');
    lightbox.setAttribute('aria-hidden','false');
    closeButton.focus();
  });
});

closeButton.addEventListener('click',closeLightbox);
lightbox.addEventListener('click',(e)=>{
  if(e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown',(e)=>{
  if(e.key === 'Escape' && lightbox.classList.contains('is-open')) closeLightbox();
});
