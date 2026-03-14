(function () {
  var header = document.querySelector('.top-bar');
  var btn = document.querySelector('.hamburger-btn');
  var nav = document.getElementById('nav-menu');
  var overlay = document.getElementById('nav-overlay');
  var media = window.matchMedia('(max-width: 900px)');

  function openMenu() {
    header.classList.add('menu-open');
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-label', 'Cerrar menú');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    header.classList.remove('menu-open');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-label', 'Abrir menú');
    document.body.style.overflow = '';
  }

  function toggleMenu() {
    if (header.classList.contains('menu-open')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  function onResize() {
    if (!media.matches) {
      closeMenu();
    }
  }

  if (btn && nav) {
    btn.addEventListener('click', toggleMenu);
    if (overlay) {
      overlay.addEventListener('click', closeMenu);
    }
    nav.querySelectorAll('.nav-button').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    window.addEventListener('resize', onResize);
  }
})();
