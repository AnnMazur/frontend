const scrollToTopBtn = document.getElementById('scrollToTopBtn');

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
scrollToTopBtn.addEventListener('click', scrollToTop);

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 300) {
    scrollToTopBtn.classList.remove('hidden');
  } else {
    scrollToTopBtn.classList.add('hidden');
  }
});