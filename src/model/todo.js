const getNewTODO = (name, priority, description, dueDate) => {
    const getName = () => name;
    const getPriority = () => priority;
    const getDescription = () => description;
    const getDueDate = () => dueDate;
    return { getName, getPriority, getDescription, getDueDate };
};

export { getNewTODO };