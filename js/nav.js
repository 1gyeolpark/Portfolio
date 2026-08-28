// 헤더 네비게이션: 모바일 토글, 링크 클릭, 화면 밖 클릭 시 닫기
(function () {
  const navEl = document.querySelector('.nav');
  const navToggle = document.querySelector('.nav-toggle');

  function closeNav() {
    navEl.classList.remove('open');
    navToggle.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  }

  const navBreakpoint = window.matchMedia('(max-width: 640px)');
  navBreakpoint.addEventListener('change', function () {
    closeNav();
    navEl.classList.add('no-transition');
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        navEl.classList.remove('no-transition');
      });
    });
  });

  navToggle.addEventListener('click', function (e) {
    e.stopPropagation();
    const open = navEl.classList.toggle('open');
    navToggle.classList.toggle('open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });

  navEl.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (!navEl.classList.contains('open')) return;
      e.preventDefault();
      const targetId = link.getAttribute('href');
      closeNav();
      setTimeout(function () {
        const target = document.querySelector(targetId);
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        history.replaceState(null, '', targetId);
      }, 300);
    });
  });

  document.addEventListener('click', function (e) {
    if (navEl.classList.contains('open') && !navEl.contains(e.target)) {
      closeNav();
    }
  });
})();
