// 상단 기술 스택 마퀴
(function () {
  const skills = [
    'JAVA', 'SPRING BOOT', 'SPRING SECURITY', 'JPA', 'MYSQL', 'REDIS',
    'REACT', 'REACT ROUTER', 'AXIOS', 'SASS', 'DOCKER', 'EC2', 'RDS', 'GITHUB ACTIONS',
  ];

  const track = document.getElementById('marquee-track');
  const fragment = document.createDocumentFragment();

  for (let set = 0; set < 4; set++) {
    skills.forEach(function (skill) {
      const span = document.createElement('span');
      span.textContent = skill;
      fragment.appendChild(span);
    });
  }

  track.appendChild(fragment);
})();
