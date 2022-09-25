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
    public static resetButton() {
        let resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click',()=>{
            localStorage.setItem('projectsCollection', null);
            AppState.getAppState().setProject({projectId: 0, projectName: '', workSessions: []});
            ProjectsCollection.getProjects().projectsCollection = [];
            Project.getProjectOptions().displaySessions();
            this.initOptions();
        });
    }
}
