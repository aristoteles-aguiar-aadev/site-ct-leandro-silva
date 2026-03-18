
window.addEventListener('scroll', () => {
    document.getElementById('scrollBtn').classList.toggle('show', window.scrollY > 400);
});

const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.mod-card, .a-card, .day-col, .b-row').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = 'opacity .4s ease, transform .4s ease';
    io.observe(el);
});


const menuToggle = document.getElementById('menuToggle');
const beltNavBar = document.querySelector('.belt-nav-bar');
const mainNav = document.getElementById('mainNav');

menuToggle.addEventListener('click', () => {
    const isOpen = beltNavBar.classList.toggle('menu-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        beltNavBar.classList.remove('menu-open');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.setAttribute('aria-label', 'Abrir menu');
    });
});

