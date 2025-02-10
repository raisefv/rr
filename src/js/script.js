// Получаем элементы слайдера
const images = document.querySelectorAll('.slider_img');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Устанавливаем начальный индекс
let currentIndex = 0;

// Функция для обновления активного изображения
function updateSlider(index) {
    // Проверяем, находится ли индекс в допустимом диапазоне
    if (index < 0) {
        currentIndex = images.length - 1; // Если меньше 0, переключаемся на последний слайд
    } else if (index >= images.length) {
        currentIndex = 0; // Если больше количества изображений, переключаемся на первый
    } else {
        currentIndex = index; // Если индекс валиден, обновляем текущий
    }

    // Применяем класс "active" к текущему изображению и убираем с остальных
    images.forEach((img, i) => {
        img.classList.toggle('active', i === currentIndex);
    });
}

// Инициализация первого изображения (если не задано)
updateSlider(currentIndex);

// Событие для кнопки "Предыдущий"
prevButton.addEventListener('click', () => {
    updateSlider(currentIndex - 1);
});

// Событие для кнопки "Следующий"
nextButton.addEventListener('click', () => {
    updateSlider(currentIndex + 1);
});
