const getNewChecklistItem = (todoId, index) => {
    const item = document.createElement('div');
    item.classList.add('item');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = todoId + '-checkbox-' + index;

    const textbox = document.createElement('input');
    textbox.type = 'text';
    textbox.id = todoId + '-textbox-' + index;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.ariaLabel = 'Delete item';
    deleteBtn.addEventListener('click', () => item.remove());

    item.append(checkbox, textbox, deleteBtn);
    return item;
};

export { getNewChecklistItem };