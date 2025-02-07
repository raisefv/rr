// Получаем все элементы с классом 'menu_item'
const menuItems = document.querySelectorAll('.menu_item');

// Добавляем обработчик событий на наведение и уход курсора
menuItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Когда наводим на элемент меню, меняем opacity у всех остальных элементов меню
        menuItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('not-hovered'); // Устанавливаем opacity 0.7
            }
        });
    });

    item.addEventListener('mouseout', () => {
        // Когда уводим курсор, восстанавливаем opacity всех элементов меню
        menuItems.forEach(otherItem => {
            otherItem.classList.remove('not-hovered'); // Убираем эффект 0.7
        });
    });
});

// Получаем все элементы с классом 'faq_item'
const faqItems = document.querySelectorAll('.faq_item');

// Добавляем обработчик событий на наведение и уход курсора
faqItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Когда наводим на элемент faq, меняем opacity у всех остальных элементов faq
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('not-hovered'); // Устанавливаем opacity 0.7
            }
        });
    });

    item.addEventListener('mouseout', () => {
        // Когда уводим курсор, восстанавливаем opacity всех элементов faq
        faqItems.forEach(otherItem => {
            otherItem.classList.remove('not-hovered'); // Убираем эффект 0.7
        });
    });
});



// Получаем все элементы с классом 'faq_item'
const userItems = document.querySelectorAll('.user_actions_item');

// Добавляем обработчик событий на наведение и уход курсора
userItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Когда наводим на элемент faq, меняем opacity у всех остальных элементов faq
        userItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.add('not-hovered'); // Устанавливаем opacity 0.7
            }
        });
    });

    item.addEventListener('mouseout', () => {
        // Когда уводим курсор, восстанавливаем opacity всех элементов faq
        userItems.forEach(otherItem => {
            otherItem.classList.remove('not-hovered'); // Убираем эффект 0.7
        });
    });
});
