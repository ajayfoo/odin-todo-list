import { changeContainerTo } from "./containerComponent";
import { switchToAllProjects } from "./projectComponent";

const projectSelectEle = document.querySelector("#select-project");
const allProjectsEle = document.querySelector("#all-projects");

const setupEventListeners = () => {
    projectSelectEle.addEventListener('change',
        () => changeContainerTo(projectSelectEle.value)
    );
    allProjectsEle.addEventListener('click', () => {
        switchToAllProjects();
    });
};

const unsetProjectSelection = () => {
    projectSelectEle.selectedIndex = -1;
};

export { setupEventListeners, unsetProjectSelection };