document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const rightGroup = document.querySelector('.right-group');

  menuToggle.addEventListener('click', () => {
    rightGroup.classList.toggle('active');
    
    if (menuToggle.classList.contains('open')) {
      menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      menuToggle.classList.remove('open');
    } else {
      menuToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
      menuToggle.classList.add('open');
    }
  });
});