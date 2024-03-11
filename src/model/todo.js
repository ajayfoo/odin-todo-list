const getNewTODO = (id, name, priority, description, dueDate) => {
    const getId = () => id;
    const getName = () => name;
    const getPriority = () => priority;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    let completionStatus = false;
    const isComplete = (complete) => completionStatus = complete;
    return { getId, getName, getPriority, getDescription, getDueDate, isComplete };
};

export { getNewTODO };