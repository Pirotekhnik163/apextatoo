document.addEventListener('DOMContentLoaded', () => {
    // Массив изображений для слайдера
    const images = [
        './assets/img/cover1.png',
        './assets/img/cover2.png',
        './assets/img/cover3.png',
        // Добавьте другие изображения по необходимости
    ];

    // Элементы DOM
    const slideImage = document.getElementById('slideImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const slideIndicator = document.getElementById('slideIndicator');

    let currentIndex = 0;

    // Создаем индикаторы
    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('indicator-dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => {
            goToSlide(index);
        });
        slideIndicator.appendChild(dot);
    });

    // Функция перехода к конкретному слайду
    function goToSlide(index) {
        currentIndex = index;
        updateSlide();
    }

    // Обновление слайда
    function updateSlide() {
        // Добавляем класс анимации
        slideImage.classList.remove('slide-enter');
        void slideImage.offsetWidth; // Триггер reflow
        slideImage.classList.add('slide-enter');

        // Меняем изображение
        slideImage.src = images[currentIndex];

        // Обновляем индикаторы
        document.querySelectorAll('.indicator-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Предзагрузка изображений
    function preloadImages() {
        images.forEach(src => {
            const img = new Image();
            img.src = src;
        });
    }

    // Обработчики кнопок
    prevBtn.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        updateSlide();
    });

    nextBtn.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    });

    // Инициализация
    preloadImages();
    updateSlide();
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.addEventListener("click", () => {
    mobileMenu.style.display =
      mobileMenu.style.display === "flex" ? "none" : "flex";
  });
});
document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href && href.startsWith("#")) {
      e.preventDefault();
      const targetID = href.substring(1);
      const targetEl = document.getElementById(targetID);
      if (targetEl) {
        targetEl.scrollIntoView({
          behavior: "smooth",

        });
      }
    }
  });
});
