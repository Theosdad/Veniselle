let sliders = document.querySelectorAll('.slider-wrapper');

sliders.forEach(slider => {
  let slides = slider.querySelectorAll('.slide');
  let slideWidth;

  function scrollRight() {
    if (slides && slides.length > 0) {
      // Пересчитываем slideWidth перед использованием
      slideWidth = slides[0].offsetWidth + 8; // + 8 - расстояние между слайдами

      // Проверяем, активен ли слайдер (отображается ли)
      if (slider.parentElement.style.display !== 'none') {
        slider.style.transition = 'transform 1.5s ease-in-out';
        slider.style.transform = `translateX(${slideWidth}px)`;
      }
    }
    setTimeout(() => {
      let lastSlide = slider.querySelector('.slide:last-child');
      slider.insertBefore(lastSlide, slider.firstChild);
      slider.style.transition = 'none';
      slider.style.transform = 'translateX(0)';
    }, 1600);
  }

  function updateSlideWidth() {
    if (slides && slides.length > 0) {
      slideWidth = slides[0].offsetWidth + 8;
    }
  }

  setInterval(scrollRight, 1700);

  // Обработчик изменения размеров окна
  window.addEventListener('resize', () => {
    updateSlideWidth();
  });
});

const toggleContainer = document.querySelector('.comparison__switch');
const toggler = document.getElementById('toggle');
const sliderWithout = document.querySelector('.comparison__slider--without');
const sliderWith = document.querySelector('.comparison__slider--with');

// Проверяем, есть ли сохраненное состояние в localStorage
const savedToggleState = localStorage.getItem('toggleState');

// Устанавливаем состояние переключателя в соответствии с сохраненным значением
if (savedToggleState === 'true') {
  toggler.checked = true;
  toggleContainer.classList.add('active');
  sliderWithout.style.display = 'none';
  sliderWith.style.display = 'block';
} else {
  toggler.checked = false;
  toggleContainer.classList.remove('active');
  sliderWith.style.display = 'none';
  sliderWithout.style.display = 'block';
}

toggler.addEventListener('change', function () {
  if (this.checked) {
    toggleContainer.classList.add('active');
    sliderWithout.style.display = 'none';
    sliderWith.style.display = 'block';
  } else {
    toggleContainer.classList.remove('active');
    sliderWith.style.display = 'none';
    sliderWithout.style.display = 'block';
  }

  // Сохраняем состояние переключателя в localStorage
  localStorage.setItem('toggleState', this.checked);
});
