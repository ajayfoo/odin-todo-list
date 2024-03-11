const getNewTODO = (name, priority, description, dueDate) => {
    const getName = () => name;
    const getPriority = () => priority;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    let completionStatus = false;
    const isComplete = (complete) => completionStatus = complete;
    return { getName, getPriority, getDescription, getDueDate, isComplete };
};

export { getNewTODO };