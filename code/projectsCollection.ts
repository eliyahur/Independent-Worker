import { AppState } from './appState.js';
import { ProjectOutline } from './interfaces.js';
export class ProjectsCollection {
    private static instance:ProjectsCollection;
    public projectsCollection:Array<ProjectOutline> = [];
    private constructor() {
        this.projectsCollection = JSON.parse(localStorage.getItem('projectsCollection'));
    }
    public getProjectsCollectionImport(importedJSON) {
        this.projectsCollection = JSON.parse(importedJSON);
        console.log('foreign object gor injected.');
        
    }
    public getProjectsCollection() {
        if(!this.projectsCollection){
            this.projectsCollection = [];
        }
        return this.projectsCollection;
    }
    public static getProjects() {
        if(!ProjectsCollection.instance) {
            ProjectsCollection.instance = new ProjectsCollection();
            return ProjectsCollection.instance;
        } else {
            return ProjectsCollection.instance;
        }
    }
    public getProject(id:number) {
        return this.findProject(id);
    }
    public deleteProject(id:number) {
        let projectsCollection = this.getProjectsCollection();
        projectsCollection.forEach((project, index)=>{
            if(project.projectId == id) {
                projectsCollection.splice(index,1);
            }
        });
        this.saveProjects();
    }
    private findProject(id:number):ProjectOutline | any {
        let chosenProject:ProjectOutline;
        this.projectsCollection.forEach((project)=>{
            if (project.projectId == id) {
                chosenProject = {
                    projectName: project.projectName,
                    projectId: project.projectId,
                    workSessions: project.workSessions
                };
            }
        });
        return chosenProject;
    }
    public saveProjects(specificProject?:ProjectOutline) {
        if (specificProject != null) {
            if (this.projectsCollection.length != 0 && this.getProjectsCollection().length != 0) {
                let found = false;
                this.projectsCollection.forEach(project=>{
                    if(project.projectId == specificProject.projectId) {
                        project.projectName = specificProject.projectName;
                        project.workSessions = specificProject.workSessions;
                        found = true;
                    }
                });
                if(found == false) {
                    this.getProjectsCollection();
                    this.projectsCollection.push(specificProject);  
                }
            } else {
                this.getProjectsCollection();
                this.projectsCollection.push(specificProject);
            }
        }
        localStorage.setItem('projectsCollection', JSON.stringify(this.projectsCollection));
    }
}