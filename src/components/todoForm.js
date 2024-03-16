const getNewChecklistItem = (todoId, index) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = todoId + '-checkbox-' + index;

    const textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.id = todoId + '-textbox-' + index;

    item.append(checkbox, textbox);
    return item;
};

export { getNewChecklistItem };