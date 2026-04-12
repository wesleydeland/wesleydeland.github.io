(() => {
  'use strict';

  document.getElementById('currentYear').textContent = new Date().getFullYear();

  document.querySelectorAll('a.js-scroll-trigger[href*="#"]:not([href="#"])').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId.startsWith('#') && targetId.length > 1) {
        const target = document.querySelector(targetId) || document.querySelector(`[name="${targetId.slice(1)}"]`);
        if (target) {
          e.preventDefault();
          const headerOffset = 71;
          const elementPosition = target.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  const scrollDistance = () => window.scrollY;
  const scrollToTop = document.querySelector('.scroll-to-top');
  if (scrollToTop) {
    const toggleScrollButton = () => {
      if (scrollDistance() > 100) {
        scrollToTop.style.display = 'block';
      } else {
        scrollToTop.style.display = 'none';
      }
    };
    toggleScrollButton();
    window.addEventListener('scroll', toggleScrollButton);
  }

  document.querySelectorAll('.js-scroll-trigger').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const navbarCollapse = document.querySelector('.navbar-collapse');
      if (navbarCollapse) {
        const bsCollapse = bootstrap.Collapse.getOrCreateInstance(navbarCollapse);
        bsCollapse.hide();
      }
    });
  });

  const mainNav = document.getElementById('mainNav');
  if (mainNav) {
    const navbarShrink = () => {
      if (scrollDistance() > 100) {
        mainNav.classList.add('navbar-shrink');
      } else {
        mainNav.classList.remove('navbar-shrink');
      }
    };
    navbarShrink();
    window.addEventListener('scroll', navbarShrink);
  }
})();