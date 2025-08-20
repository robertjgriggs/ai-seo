// Simple enhancements: mobile nav toggle, active link, year in footer
(function () {
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.site-nav');
if (btn && nav) {
btn.addEventListener('click', () => {
const open = nav.classList.toggle('open');
btn.setAttribute('aria-expanded', String(open));
});
}


// Highlight the current page in the nav
const page = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
document.querySelectorAll('.site-nav a').forEach(a => {
const href = (a.getAttribute('href') || '').toLowerCase();
if ((page === '' && href.endsWith('index.html')) || (href && page === href)) {
a.classList.add('active');
}
});


// Year in footer
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
})();
