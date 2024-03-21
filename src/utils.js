const todoModelToPlainObject = (todo) => {
    return {
        id: todo.getId(),
        name: todo.getName(),
        priority: todo.getPriority(),
        description: todo.getDescription(),
        dueDate: todo.getDueDate(),
        complete: todo.getComplete(),
        checklist: todo.getChecklist(),
    };
};

const projectModelToPlainObject = (project) => {
    const todoModels = project.getTODOs();
    const todoPlainObjects = []
    for (const key in todoModels) {
        todoPlainObjects.push(
            todoModelToPlainObject(todoModels[key])
        );
    }
    return {
        name: project.getName(),
        TODOs: todoPlainObjects,
    };
};

export { todoModelToPlainObject, projectModelToPlainObject };