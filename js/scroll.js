// 스크롤 위치 반응: 리빌 애니메이션, active nav, 진행바/헤더/맨위로 버튼

(function () {
  document.querySelectorAll('.stagger').forEach(function (list) {
    Array.from(list.children).forEach(function (child, i) {
      child.style.transitionDelay = (i * 0.07) + 's';
    });
  });

  // 스크롤해서 화면에 들어오면 나타나는 요소들
  const revealEls = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .hero-in-left, .hero-in-right, .stagger, .htl');

  function checkReveal() {
    revealEls.forEach(function (el) {
      if (el.classList.contains('visible')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.85) {
        el.classList.add('visible');
      }
    });
  }

  // 스크롤 위치에 맞춰 현재 섹션의 nav 메뉴 강조
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.nav a');

  function updateActiveNav() {
    const y = window.scrollY + window.innerHeight / 2;
    let current = sections[0];
    sections.forEach(function (section) {
      if (section.offsetTop <= y) current = section;
    });
    navLinks.forEach(function (link) {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current.id);
    });
  }

  // 스크롤 진행률 바, 헤더 축소, 맨 위로 버튼 표시
  const progressBar = document.getElementById('scroll-progress');
  const header = document.querySelector('.header');
  const toTop = document.getElementById('to-top');

  function updateScrollUI() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    progressBar.style.width = (docHeight > 0 ? (scrollTop / docHeight) * 100 : 0) + '%';
    header.classList.toggle('scrolled', scrollTop > 20);

    const shouldShowToTop = scrollTop > window.innerHeight * 0.6;
    // 처음 나타날 때만 통통 튀는 팝 효과
    if (shouldShowToTop && !toTop.classList.contains('visible')) {
      toTop.classList.add('pop');
      setTimeout(function () { toTop.classList.remove('pop'); }, 500);
    }
    toTop.classList.toggle('visible', shouldShowToTop);
  }

  // 스크롤 이벤트 스로틀링
  let scrollTicking = false;

  function onScrollFrame() {
    updateScrollUI();
    checkReveal();
    updateActiveNav();
    scrollTicking = false;
  }

  window.addEventListener('scroll', function () {
    if (!scrollTicking) {
      setTimeout(onScrollFrame, 16);
      scrollTicking = true;
    }
  }, { passive: true });

  // 리사이즈 시 리빌/active nav 재계산
  let resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function () {
      checkReveal();
      updateActiveNav();
    }, 150);
  });

  checkReveal();
  updateActiveNav();
  updateScrollUI();

  toTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
