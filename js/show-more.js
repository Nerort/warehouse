const showMore = document.querySelector('.show-more');
const productsLength = document.querySelectorAll('.objects__item').length;
let items = 3;

showMore.addEventListener('click', () => {
    items += 3;
    const array = Array.from(document.querySelector('.objects__grid').children);
    const visableItems = array.slice(0, items);

    visableItems.forEach(el => el.classList.add('is-visible'));

    if (visableItems.length === array.length) {
        showMore.style.display = 'none';
    };
});
