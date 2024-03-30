import * as ProjectHandler from './project';
import * as Utils from '../utils'

const saveAllProjects = () => {
    const projectModels = ProjectHandler.getAllProjectModels();
    const projectPlainObjects = projectModels.map(projectModel => Utils.projectModelToPlainObject(projectModel));
    localStorage.setItem("projects", JSON.stringify(projectPlainObjects));
};

const getSavedProjects = () => JSON.parse(
        localStorage.getItem("projects")
    );

const savedProjectsExist=()=>localStorage.getItem("projects")!==null && getSavedProjects().length!==0;

export { saveAllProjects, getSavedProjects,savedProjectsExist };