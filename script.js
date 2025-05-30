
const slides = document.querySelectorAll('.slide');
const progress = document.querySelector('.progress');
let current = 0;
let interval = null;

function showSlide(index) {
  slides.forEach((s, i) => {
    s.style.display = i === index ? 'flex' : 'none';
  });
  progress.style.width = ((index + 1) / slides.length) * 100 + '%';
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

document.getElementById('next').addEventListener('click', () => {
  clearInterval(interval);
  nextSlide();
  interval = setInterval(nextSlide, 8000);
});

document.getElementById('prev').addEventListener('click', () => {
  clearInterval(interval);
  prevSlide();
  interval = setInterval(nextSlide, 8000);
});

// Автопрокрутка
interval = setInterval(nextSlide, 8000);
showSlide(current);
