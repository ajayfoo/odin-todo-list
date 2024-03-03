import { changeContainerTo } from "./containerComponent";

const projectSelectEle = document.querySelector("#select-project");

const setupEventListeners = () => {
    projectSelectEle.addEventListener('change',
        () => changeContainerTo(projectSelectEle.value)
    );
}

export { setupEventListeners };