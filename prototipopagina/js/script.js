const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
const mainNav = document.querySelector('.main-nav');

if (mobileNavToggle && mainNav) {
    mobileNavToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');

        // Optional: Change hamburger icon to 'X' when open
        if (mainNav.classList.contains('active')) {
            mobileNavToggle.innerHTML = '✕'; // Or use an icon library class
             mobileNavToggle.setAttribute('aria-expanded', 'true');
        } else {
            mobileNavToggle.innerHTML = '☰';
             mobileNavToggle.setAttribute('aria-expanded', 'false');
        }
    });

    // Optional: Close menu when a link is clicked
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
             if (mainNav.classList.contains('active')) {
                 mainNav.classList.remove('active');
                 mobileNavToggle.innerHTML = '☰';
                 mobileNavToggle.setAttribute('aria-expanded', 'false');
             }
        });
    });
}