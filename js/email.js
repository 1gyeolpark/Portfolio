// About 섹션의 이메일 복사 버튼
(function () {
  const EMAIL = 'hangyeol0019@gmail.com';

  const emailCopyBtn = document.getElementById('email-copy-btn');
  const copyHint = document.getElementById('copy-hint');
  const copyHintDefaultText = copyHint.textContent;
  let copyHintTimer = null;

  emailCopyBtn.addEventListener('click', function () {
    navigator.clipboard.writeText(EMAIL).then(function () {
      copyHint.textContent = '복사되었습니다!';
      copyHint.classList.add('copied');
      clearTimeout(copyHintTimer);
      copyHintTimer = setTimeout(function () {
        copyHint.classList.remove('copied');
        copyHint.textContent = copyHintDefaultText;
      }, 1500);
    }).catch(function () {
      window.location.href = 'mailto:' + EMAIL;
    });
  });
})();
