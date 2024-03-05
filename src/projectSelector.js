import * as ContainerComponent from "./components/container";
import * as ProjectComponent from "./components/project";

const projectSelectEle = document.querySelector("#select-project");
const allProjectsEle = document.querySelector("#all-projects");

const setupEventListeners = () => {
    projectSelectEle.addEventListener('change',
        () => ContainerComponent.changeContainerTo(projectSelectEle.value)
    );
    allProjectsEle.addEventListener('click', () => {
        ProjectComponent.switchToAllProjects();
    });
};

const unsetProjectSelection = () => {
    projectSelectEle.selectedIndex = -1;
};

export { setupEventListeners, unsetProjectSelection };