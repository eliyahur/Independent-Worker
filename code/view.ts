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
    public static deleteProject() {
        let resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click',()=>{
            let projectId = AppState.getAppState().getProject().projectId;
            ProjectsCollection.getProjects().deleteProject(projectId);
            RenderSelect.initOptions();
            RenderSelect.setDefaultOption();
        });
    }
    public static setMenu() {
        let menuBtn = document.getElementById('menu');
        let hiddenMenu = document.getElementById('hiddenMenu');
        menuBtn.addEventListener('mouseover', ()=>{
            hiddenMenu.style.display = 'block';
        });
        menuBtn.addEventListener('mouseleave',()=>{
            hiddenMenu.style.display = 'none';
        });
        hiddenMenu.addEventListener('mouseover',()=>{
            hiddenMenu.style.display = 'block';
        });
        hiddenMenu.addEventListener('mouseleave', ()=>{
            hiddenMenu.style.display = 'none';
        });
        let importBtn = document.getElementById('import');
        importBtn.addEventListener('click',()=> {
            alert('s');
        });
        let exportBTN = document.getElementById('export');
        exportBTN.addEventListener('click',()=> {
            localStorage.getItem('projectsCollection');
        });
    }
}
