
const todoHeaderElements = document.querySelectorAll("body > .container > .todo > header");
const toggleDescription = (todo) => {
    const description = todo.querySelector('.description');
    const computedStyleDisplay = window.getComputedStyle(description).display;
    description.style.display = computedStyleDisplay === 'none' ? 'block' : 'none';
}
const setupEventListeners = () => {
    todoHeaderElements.forEach(header => {
        header.addEventListener('click', (event) => {
            toggleDescription(event.target.parentElement);
        });
    });
}

export { setupEventListeners };