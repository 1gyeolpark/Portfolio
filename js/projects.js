// 프로젝트 카드 마우스 오버 3D 틸트
(function () {
  document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('mousemove', function (e) {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - rect.left) + 'px');
      card.style.setProperty('--my', (e.clientY - rect.top) + 'px');

      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = 'translateY(-8px) perspective(800px) rotateX(' + (-py * 6) + 'deg) rotateY(' + (px * 6) + 'deg)';
    });
    card.addEventListener('mouseleave', function () {
      card.style.transform = 'translateY(0) perspective(800px) rotateX(0deg) rotateY(0deg)';
    });
  });
})();
