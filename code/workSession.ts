import { WorkSessionOutline } from "./interfaces.js";
import { Project } from './project.js';
export class WorkSession implements WorkSessionOutline {
    private startTime: number;
    private endTime: number;
    public sessionTime: number;
    private uiBtn: HTMLInputElement;
    public projectObject: Project;
    constructor(projectObject:Project) {
        this.projectObject = projectObject;
        this.initSessionBtn();
    }
    public sessionSwitch() {
        if(this.startTime == null) {
            this.setStartTime();
            this.uiBtn.setAttribute('class', 'sessionOn');
            this.uiBtn.innerText = 'Finish Session';
        } else {
            this.setEndTime();   
            this.sessionTime = this.endTime-this.startTime;
            this.setStartTime();
            this.uiBtn.innerText = 'Start Session';
            this.uiBtn.setAttribute('class', '');
            this.updateProjectObject();
        }
    }
    private setStartTime() {
        if(this.startTime == null) {
            this.startTime = new Date().getTime();
        } else {
            this.startTime = null;
        }
    }
    private setEndTime() {
        this.endTime = new Date().getTime();
    }
    private initSessionBtn() {
        this.uiBtn = document.getElementById('sessionBtn') as HTMLInputElement;
        this.uiBtn.addEventListener('click',()=>{
            this.sessionSwitch();
        });
    }
    private updateProjectObject() {
        let sessionData: WorkSessionOutline = {
            sessionTime: this.sessionTime
        }
        console.log(this.projectObject);
        this.projectObject.setWorkSession(sessionData);
    }
}