// 마우스를 살짝 딜레이 두고 따라다니는 커스텀 커서
(function () {
  const cursorDot = document.getElementById('cursor-dot');
  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;

  document.addEventListener('mousemove', function (e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDot.classList.add('active');
  });

  document.addEventListener('mouseleave', function () {
    cursorDot.classList.remove('active');
  });

  function trackCursor() {
    dotX += (mouseX - dotX) * 0.2;
    dotY += (mouseY - dotY) * 0.2;
    cursorDot.style.left = dotX + 'px';
    cursorDot.style.top = dotY + 'px';
    requestAnimationFrame(trackCursor);
  }
  requestAnimationFrame(trackCursor);

  document.querySelectorAll('a, button').forEach(function (el) {
    el.addEventListener('mouseenter', function () { cursorDot.classList.add('cursor-hover'); });
    el.addEventListener('mouseleave', function () { cursorDot.classList.remove('cursor-hover'); });
  });
})();
