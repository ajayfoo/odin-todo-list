const getNewTODOModel = (plainTodo) => {
  let { id, name, priority, description, dueDate, checklist, complete } =
    plainTodo;
  const getId = () => id;
  const setId = (newId) => {
    id = newId;
  };

  const getName = () => name;
  const setName = (newName) => {
    name = newName;
  };

  const getPriority = () => priority;
  const setPriority = (newPriority) => {
    priority = newPriority;
  };

  const getDescription = () => description;
  const setDescription = (newDescription) => {
    description = newDescription;
  };

  const getDueDate = () => dueDate;
  const setDueDate = (newDueDate) => {
    dueDate = newDueDate;
  };

  const getComplete = () => complete;
  const setComplete = (newComplete) => {
    complete = newComplete;
  };

  const getChecklist = () => checklist;
  const setChecklist = (newChecklist) => {
    checklist = newChecklist;
  };
  const addChecklistItem = (done, title) => checklist.add({ done, title });
  const updateChecklistItem = (index, updatedChecklistItem) => {
    checklist[index] = updatedChecklistItem;
  };

  return {
    getId,
    getName,
    getPriority,
    getDescription,
    getDueDate,
    getChecklist,
    addChecklistItem,
    updateChecklistItem,
    setId,
    setName,
    setPriority,
    setDescription,
    setDueDate,
    setChecklist,
    getComplete,
    setComplete,
  };
};

export default getNewTODOModel;
