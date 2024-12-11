const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Функция для прокрутки страницы вверх
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

// Слушаем событие клика по кнопке
scrollToTopBtn.addEventListener('click', scrollToTop);

// Показывать/скрывать кнопку в зависимости от прокрутки
window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
});