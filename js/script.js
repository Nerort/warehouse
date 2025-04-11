// document.addEventListener('DOMContentLoaded', function() {
//     // Модальное окно
//     const modal = document.getElementById('requestModal');
//     const btn = document.getElementById('requestBtn');
//     const span = document.getElementsByClassName('modal__close')[0];

//     btn.onclick = function() {
//         modal.style.display = 'block';
//     }

//     span.onclick = function() {
//         modal.style.display = 'none';
//     }

//     window.onclick = function(event) {
//         if (event.target == modal) {
//             modal.style.display = 'none';
//         }
//     }

//     // Обработка формы
//     const contactForm = document.getElementById('contactForm');
//     if (contactForm) {
//         contactForm.addEventListener('submit', function(e) {
//             e.preventDefault();
//             alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
//             this.reset();
//             if (modal) modal.style.display = 'none';
//         });
//     }
// });