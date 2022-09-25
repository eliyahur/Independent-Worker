import { ProjectOutline, WorkSessionOutline } from "./interfaces";

export class AppState {
    private static appStateInstance: AppState;
    private project: ProjectOutline;
    private workSession: WorkSessionOutline;
    private projectsCollection: [];
    public static getAppState() {
        if(!AppState.appStateInstance) {
            AppState.appStateInstance = new AppState;
        }
        return AppState.appStateInstance;
    }
    public setProject(project: ProjectOutline) {
        this.project = project;
    }
    public getProject() {
        return this.project;
    }
    public getWorkSession() {
        return this.workSession;
    }
}