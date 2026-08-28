// 히어로 배경 마우스 따라 움직이는 패럴랙스
(function () {
  const heroBg = document.getElementById('hero-bg');
  const heroSection = document.getElementById('visual');

  heroSection.addEventListener('mousemove', function (e) {
    const rect = heroSection.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 40;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 40;
    heroBg.style.transform = 'translate(' + x + 'px, ' + y + 'px)';
  });

  heroSection.addEventListener('mouseleave', function () {
    heroBg.style.transform = 'translate(0, 0)';
  });
})();
