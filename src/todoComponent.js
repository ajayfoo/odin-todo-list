
const todoHeaderElements = document.querySelectorAll("body > .container > .todo > header");
const toggleDescription = (todo) => {
    const description = todo.querySelector('.description');
    const computedStyleDisplay = window.getComputedStyle(description).display;
    description.style.display = computedStyleDisplay === 'none' ? 'block' : 'none';
}
const twinElements = Array.from(todoHeaderElements)
    .map(header => header.querySelector('.twin'));
const dueDateElements = Array.from(todoHeaderElements)
    .map(header => header.querySelector('.due-date'));

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
        })
    });
    dueDateElements.forEach(dueDateEle => {
        dueDateEle.addEventListener('click', (event) => {
            event.stopPropagation();
        })
    });
};

export { setupEventListeners };