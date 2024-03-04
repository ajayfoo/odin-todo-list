import * as ContainerComponent from './containerComponent';
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
            console.log('hi again');
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

const setupEventListener = (header, twin, dueDate, showMore, showLess) => {
    header.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDescription(event.target.parentElement);
    });
    twin.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    dueDate.addEventListener('click', (event) => {
        event.stopPropagation();
    });
    console.log(showMoreElements);
    showMore.addEventListener('click', () => {
        const parent = showMore.parentElement;
        const restElem = parent.querySelector('.rest');
        const showLess = parent.querySelector('.show-less');
        restElem.style.display = 'inline';
        showMore.style.display = 'none';
        showLess.style.display = 'inline';
    });
    showLess.addEventListener('click', () => {
        const parent = showLess.parentElement;
        const restElem = parent.querySelector('.rest');
        const showMore = parent.querySelector('.show-more');
        restElem.style.display = 'none';
        showLess.style.display = 'none';
        showMore.style.display = 'inline';
    });
};
const getNewTODOComponent = (todo) => {
    const todoComponent = document.createElement('div');
    todoComponent.classList.add('todo');
    const header = document.createElement('header');
    const twin = document.createElement('span');
    twin.classList.add('twin');
    const priority = document.createElement('span');
    priority.classList.add('priority');
    const title = document.createElement('span');
    title.classList.add('title');
    twin.append(priority, title);
    const dueDate = document.createElement('span');
    dueDate.classList.add('due-date');
    header.append(twin, dueDate);
    const description = document.createElement('p');
    description.classList.add('description');
    const showMore = document.createElement('span');
    showMore.classList.add('show-more');
    const rest = document.createElement('span');
    rest.classList.add('rest');
    const showLess = document.createElement('span');
    showLess.classList.add('show-less');
    description.append('some text content', showMore, rest, showLess);
    todoComponent.append(header, description);
    priority.textContent = todo.getPriority();
    title.textContent = todo.getName();
    dueDate.textContent = todo.getDueDate();
    showMore.textContent = '...show more';
    rest.textContent = todo.getDescription();
    showLess.textContent = '...show less';
    setupEventListener(header, twin, dueDate, showMore, showLess);
    return todoComponent;
};

const createTODOComponent = (projectIndex, todo) => {
    ContainerComponent.addTODOComponent(projectIndex, getNewTODOComponent(todo));
};
/*
        <div class="todo">
            <header>
                <span class="twin">
                    <span class="priority">1</span>
                    <span class="title">Art Work</span>
                </span>
                <span class="due-date">1.2.23</span>
            </header>
            <p class="description">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe possimus a vero ad
                <span class="show-more">...show more</span>
                <span class="rest">
                    c onsequatur
                    accusantium, ea facilis corrupti quos harum quia impedit, suscipit alias eveniet?
                </span>
                <span class="show-less">...show less</span>
            </p>
        </div>
*/
export { setupEventListeners, createTODOComponent };