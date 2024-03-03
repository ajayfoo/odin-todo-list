
const todoHeaderElements = Array.from(
    document.querySelectorAll("body > .container > .todo > header")
);
const toggleDescription = (todo) => {
    const description = todo.querySelector('.description');
    const computedStyleDisplay = window.getComputedStyle(description).display;
    description.style.display = computedStyleDisplay === 'none' ? 'block' : 'none';
}
const twinElements = todoHeaderElements.map(header => header.querySelector('.twin'));
const dueDateElements = todoHeaderElements.map(header => header.querySelector('.due-date'));
const showMoreElements = todoHeaderElements.map(header => header.parentElement
    .querySelector('.description')
    .querySelector('.show-more')
);
const showLessElements = todoHeaderElements.map(header => header.parentElement
    .querySelector('.description')
    .querySelector('.show-less')
);

const setupEventListeners = () => {
    todoHeaderElements.forEach(header => {
        header.addEventListener('click', (event) => {
            event.stopPropagation();
            toggleDescription(event.target.parentElement);
        });
    });
    twinElements.forEach(twin => {
        twin.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
    dueDateElements.forEach(dueDateEle => {
        dueDateEle.addEventListener('click', (event) => {
            event.stopPropagation();
        });
    });
    console.log(showMoreElements);
    showMoreElements.forEach(showMore => {
        showMore.addEventListener('click', () => {
            const parent = showMore.parentElement;
            const restElem = parent.querySelector('.rest');
            const showLess = parent.querySelector('.show-less');
            restElem.style.display = 'inline';
            showMore.style.display = 'none';
            showLess.style.display = 'inline';
        });
    });
    showLessElements.forEach(showLess => {
        showLess.addEventListener('click', () => {
            const parent = showLess.parentElement;
            const restElem = parent.querySelector('.rest');
            const showMore = parent.querySelector('.show-more');
            restElem.style.display = 'none';
            showLess.style.display = 'none';
            showMore.style.display = 'inline';
        });
    });
};

export { setupEventListeners };