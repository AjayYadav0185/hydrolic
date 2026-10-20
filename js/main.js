// Mobile menu
const burger = document.querySelector('.burger');
const menu = document.querySelector('nav ul');
burger.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));

// Missing shop photos: hide the broken image so the styled placeholder shows
document.querySelectorAll('.frame img').forEach(img => {
  const hide = () => img.remove();
  img.addEventListener('error', hide);
  if (img.complete && img.naturalWidth === 0) hide();
});

// Scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// Inquiry form -> WhatsApp (no backend needed)
const form = document.getElementById('inquiry');
const toast = document.getElementById('toast');
form.addEventListener('submit', e => {
  e.preventDefault();
  const d = new FormData(form);
  const msg = `Hello Yadav Hydraulic,%0A` +
    `Name: ${encodeURIComponent(d.get('name'))}%0A` +
    `Phone: ${encodeURIComponent(d.get('phone'))}%0A` +
    `Vehicle/Equipment: ${encodeURIComponent(d.get('vehicle'))}%0A` +
    `Problem: ${encodeURIComponent(d.get('problem') || '-')}`;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
  window.open(`https://wa.me/919891140185?text=${msg}`, '_blank', 'noopener');
  form.reset();
});
