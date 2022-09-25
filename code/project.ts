import { ProjectOutline, WorkSessionOutline } from './interfaces.js';
import { ProjectsCollection } from './projectsCollection.js';
import { RenderSelect } from './view.js';
import { AppState } from './appState.js';
import { formatMili } from './formatMili.js';

export class Project {
    private eventListenerSet:boolean = false;
    public static projectOptions:Project;
    private constructor() {
        this.initEventListenersForProject();
    }
    public static getProjectOptions() {
        if(!Project.projectOptions) {
            Project.projectOptions = new Project();
        }
        return Project.projectOptions;
    }
    public setWorkSession(sessionData:WorkSessionOutline) {
        AppState.getAppState().getProject().workSessions.push(sessionData);
        ProjectsCollection.getProjects().saveProjects(AppState.getAppState().getProject());
        this.displaySessions();       
    }
    private initEventListenersForProject() {
        let newProjectBtn = document.getElementById('addNewProject');
        let newProjectName:HTMLInputElement = document.getElementById('newProject') as HTMLInputElement;
        if(!this.eventListenerSet) {
            newProjectBtn.addEventListener('click',()=>{
                this.addNewProject(newProjectName.value);
            });
            let options:HTMLSelectElement = document.getElementById("selectProject") as HTMLSelectElement;
            options.addEventListener('change',()=>{
                AppState.getAppState().setProject(ProjectsCollection.getProjects().getProject(Number(options.value)));
                this.displaySessions();
            });

            this.eventListenerSet = true;
        }
    }
    public addNewProject(projectName:string) {
        let newProjectData:ProjectOutline = {projectId:null, projectName:projectName,workSessions: []}
        let projectsData = ProjectsCollection.getProjects().getProjectsCollection();
        if(projectsData[0] != null) {
            newProjectData.projectId = Number(projectsData[projectsData.length-1].projectId+1);
        } else {
            newProjectData.projectId = 0;
        }
        AppState.getAppState().setProject(newProjectData);
        ProjectsCollection.getProjects().saveProjects(AppState.getAppState().getProject());
        RenderSelect.initOptions();
    }
    public displaySessions() {
        let displaySessions = document.getElementById('displaySessions');
        displaySessions.innerHTML = '';
        let totalTime:number = 0;
        let sessionsDiv = document.createElement('div');
        sessionsDiv.setAttribute('class','sessionsDiv');
        if (ProjectsCollection.getProjects().getProjectsCollection().length != 0) {
            AppState.getAppState().getProject().workSessions.forEach((workSession:WorkSessionOutline)=>{
                totalTime += workSession.sessionTime;
                let sessionDiv = document.createElement('div');
                sessionDiv.setAttribute('class','singleSession');
                let sessionText = document.createTextNode(formatMili(workSession.sessionTime));
                sessionDiv.appendChild(sessionText);
                sessionsDiv.appendChild(sessionDiv);
            });
            displaySessions.appendChild(sessionsDiv);
            let totalTimeDiv = document.createElement('div');
            totalTimeDiv.setAttribute('class','totalTime');
            let totalTimeText = document.createTextNode('Total time spent: '+formatMili(totalTime));
            totalTimeDiv.appendChild(totalTimeText);
            displaySessions.appendChild(totalTimeDiv);
        }
    }
}