// 이미지 클릭 팝업
(function () {
  const imgModal = document.getElementById('img-modal');
  const modalClose = document.getElementById('img-modal-close');
  const trigger = document.getElementById('edu-img-trigger');
  let lastFocused = null;

  function getFocusable() {
    return imgModal.querySelectorAll('button, a[href], [tabindex]:not([tabindex="-1"])');
  }

  function openImgModal() {
    lastFocused = document.activeElement;
    imgModal.classList.add('open');
    imgModal.setAttribute('aria-hidden', 'false');
    modalClose.focus();
  }

  function closeImgModal() {
    imgModal.classList.remove('open');
    imgModal.setAttribute('aria-hidden', 'true');
    if (lastFocused) lastFocused.focus();
  }

  // 트리거 키보드 접근 가능하게 처리
  trigger.setAttribute('tabindex', '0');
  trigger.setAttribute('role', 'button');
  trigger.addEventListener('click', openImgModal);
  trigger.addEventListener('keydown', function (e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openImgModal();
    }
  });

  modalClose.addEventListener('click', function (e) {
    e.stopPropagation();
    closeImgModal();
  });
  imgModal.addEventListener('click', closeImgModal);

  document.addEventListener('keydown', function (e) {
    if (!imgModal.classList.contains('open')) return;

    if (e.key === 'Escape') {
      closeImgModal();
      return;
    }

    if (e.key === 'Tab') {
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
  });
})();
