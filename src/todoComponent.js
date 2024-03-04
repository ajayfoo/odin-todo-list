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

const getNewHeaderComponent = (todo) => {
    const priority = document.createElement('span');
    priority.classList.add('priority');
    priority.textContent = todo.getPriority();

    const title = document.createElement('span');
    title.classList.add('title');
    title.textContent = todo.getName();

    const twin = document.createElement('span');
    twin.classList.add('twin');
    twin.append(priority, title);
    twin.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    const dueDate = document.createElement('span');
    dueDate.classList.add('due-date');
    dueDate.textContent = todo.getDueDate();
    dueDate.addEventListener('click', (event) => {
        event.stopPropagation();
    });

    const header = document.createElement('header');
    header.append(twin, dueDate);
    header.addEventListener('click', (event) => {
        event.stopPropagation();
        toggleDescription(event.target.parentElement);
    });

    return header;
};

const getNewDescriptionComponent = (descriptionTxt) => {
    const description = document.createElement('p');
    description.classList.add('description');
    if (descriptionTxt.length <= 25) {
        description.textContent = descriptionTxt;
        return description;
    }
    const introTxt = descriptionTxt.slice(0, 26);

    const rest = document.createElement('span');
    rest.classList.add('rest');
    rest.textContent = descriptionTxt.slice(26, descriptionTxt.length);

    const showMore = document.createElement('span');
    showMore.classList.add('show-more');
    showMore.textContent = '...show more';
    showMore.addEventListener('click', () => {
        const parent = showMore.parentElement;
        const restElem = parent.querySelector('.rest');
        const showLess = parent.querySelector('.show-less');
        restElem.style.display = 'inline';
        showMore.style.display = 'none';
        showLess.style.display = 'inline';
    });

    const showLess = document.createElement('span');
    showLess.classList.add('show-less');
    showLess.textContent = '...show less';
    showLess.addEventListener('click', () => {
        const parent = showLess.parentElement;
        const restElem = parent.querySelector('.rest');
        const showMore = parent.querySelector('.show-more');
        restElem.style.display = 'none';
        showLess.style.display = 'none';
        showMore.style.display = 'inline';
    });

    description.append(introTxt, showMore, rest, showLess);
    return description;
};

const getNewTODOComponent = (todo) => {
    const todoComponent = document.createElement('div');
    todoComponent.classList.add('todo');
    const header = getNewHeaderComponent(todo);
    const description = getNewDescriptionComponent(todo.getDescription());
    todoComponent.append(header, description);
    return todoComponent;
};

const createTODOComponent = (projectIndex, todo) => {
    ContainerComponent.addTODOComponent(projectIndex, getNewTODOComponent(todo));
};

export { setupEventListeners, createTODOComponent };