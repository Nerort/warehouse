document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger');
    const nav = document.getElementById('nav');
    const navLinks = document.querySelectorAll('.header__nav a'); // Получаем все ссылки в меню

    burger.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    // Добавляем обработчик для каждой ссылки в меню
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Проверяем, открыто ли меню (актуально для мобильной версии)
            if (nav.classList.contains('active')) {
                nav.classList.remove('active'); // Сворачиваем меню
            }
        });
    });
});
