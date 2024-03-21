import * as ProjectHandler from './project';
import * as Utils from '../utils'

const saveAllProjects = () => {
    const projectModels = ProjectHandler.getAllProjectModels();
    const projectPlainObjects = projectModels.map(projectModel => Utils.projectModelToPlainObject(projectModel));
    localStorage.setItem("projects", JSON.stringify(projectPlainObjects));
    console.log(projectPlainObjects)
};

const getSavedProjects = () => {
    return JSON.parse(
        localStorage.getItem("projects")
    );
};

export { saveAllProjects, getSavedProjects };