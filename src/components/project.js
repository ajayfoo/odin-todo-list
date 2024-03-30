const projectComponents = [];
const projectComponentContainer = document.createElement("div");
projectComponentContainer.classList.add("container");

const getNewProjectOptionElement = (name, projectIndex) => {
  const projectOption = document.createElement("option");
  projectOption.textContent = name;
  projectOption.value = projectIndex;
  return projectOption;
};

const getNewProjectComponent = (project, clickHandler) => {
  const projectComponent = document.createElement("div");
  projectComponent.classList.add("project");
  projectComponent.addEventListener("click", clickHandler);

  const name = document.createElement("span");
  name.classList.add("name");
  name.textContent = project.getName();

  const numOfTODOs = document.createElement("span");
  numOfTODOs.classList.add("num-of-todos");
  numOfTODOs.textContent = `${project.getNumOfTODOs()} TO-DO(s)`;
  projectComponent.append(name, numOfTODOs);
  return projectComponent;
};

const addProjectComponent = (projectComponent) => {
  projectComponents.push(projectComponent);
  projectComponentContainer.appendChild(projectComponent);
};

const updateProjectComponentTODOCount = (projectIndex, newTODOCount) => {
  projectComponents[projectIndex].querySelector(".num-of-todos").textContent =
    `${newTODOCount} TO-DO(s)`;
};

const getProjectComponentContainer = () => projectComponentContainer;

export {
  getNewProjectComponent,
  addProjectComponent,
  getProjectComponentContainer,
  updateProjectComponentTODOCount,
  getNewProjectOptionElement,
};
