import { AppState } from "./appState.js";
import { Project } from "./project.js";
import { ProjectsCollection } from "./projectsCollection.js";

export class RenderSelect {
    public static initOptions() {
        let selectBtn = document.getElementById('selectProject');
        selectBtn.innerHTML = null;
        ProjectsCollection.getProjects().getProjectsCollection().forEach((project)=>{
            let option = document.createElement('option');
            let optionText = document.createTextNode(project.projectName);
            option.appendChild(optionText);
            option.setAttribute('value',(project.projectId).toString());
            selectBtn.appendChild(option);
        });
    }
    public static setDefaultOption() {
        if(ProjectsCollection.getProjects().getProjectsCollection.length != null) {
            AppState.getAppState().setProject(ProjectsCollection.getProjects().getProject(0));
            Project.getProjectOptions().displaySessions();
        }
    }
}
