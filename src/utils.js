const todoModelToPlainObject = (todo) => ({
  id: todo.getId(),
  name: todo.getName(),
  priority: todo.getPriority(),
  description: todo.getDescription(),
  dueDate: todo.getDueDate(),
  complete: todo.getComplete(),
  checklist: todo.getChecklist(),
});

const projectModelToPlainObject = (project) => {
  const todoModels = project.getTODOs();
  const todoPlainObjects = [];
  const todoModelArrays = Object.values(todoModels);
  todoModelArrays.forEach((todoModel) =>
    todoPlainObjects.push(todoModelToPlainObject(todoModel)),
  );
  return {
    name: project.getName(),
    TODOs: todoPlainObjects,
  };
};

export { todoModelToPlainObject, projectModelToPlainObject };
