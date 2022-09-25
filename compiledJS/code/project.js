import { ProjectsCollection } from './projectsCollection.js';
import { RenderSelect } from './view.js';
import { AppState } from './appState.js';
import { formatMili } from './formatMili.js';
var Project = /** @class */ (function () {
    function Project() {
        this.eventListenerSet = false;
        this.initEventListenersForProject();
    }
    Project.getProjectOptions = function () {
        if (!Project.projectOptions) {
            Project.projectOptions = new Project();
        }
        return Project.projectOptions;
    };
    Project.prototype.setWorkSession = function (sessionData) {
        console.log(AppState.getAppState().getProject());
        AppState.getAppState().getProject().workSessions.push(sessionData);
        ProjectsCollection.getProjects().saveProjects(AppState.getAppState().getProject());
        console.log('wwww');
        this.displaySessions();
        console.log('aaaa');
    };
    Project.prototype.initEventListenersForProject = function () {
        var _this = this;
        var newProjectBtn = document.getElementById('addNewProject');
        var newProjectName = document.getElementById('newProject');
        if (!this.eventListenerSet) {
            newProjectBtn.addEventListener('click', function () {
                console.log('Button clicked to add new project: ' + newProjectName.value);
                _this.addNewProject(newProjectName.value);
            });
            var options_1 = document.getElementById("selectProject");
            options_1.addEventListener('change', function () {
                AppState.getAppState().setProject(ProjectsCollection.getProjects().getProject(Number(options_1.value)));
                _this.displaySessions();
            });
            this.eventListenerSet = true;
        }
    };
    Project.prototype.addNewProject = function (projectName) {
        var newProjectData = { projectId: null, projectName: projectName, workSessions: [] };
        var projectsData = ProjectsCollection.getProjects().getProjectsCollection();
        if (projectsData[0] != null) {
            newProjectData.projectId = Number(projectsData[projectsData.length - 1].projectId + 1);
        }
        else {
            newProjectData.projectId = 0;
        }
        AppState.getAppState().setProject(newProjectData);
        ProjectsCollection.getProjects().saveProjects(AppState.getAppState().getProject());
        RenderSelect.initOptions();
        console.log(ProjectsCollection.getProjects());
    };
    Project.prototype.displaySessions = function () {
        var displaySessions = document.getElementById('displaySessions');
        displaySessions.innerHTML = '';
        var totalTime = 0;
        var sessionsDiv = document.createElement('div');
        sessionsDiv.setAttribute('class', 'sessionsDiv');
        AppState.getAppState().getProject().workSessions.forEach(function (workSession) {
            totalTime += workSession.sessionTime;
            var sessionDiv = document.createElement('div');
            sessionDiv.setAttribute('class', 'singleSession');
            var sessionText = document.createTextNode(formatMili(workSession.sessionTime));
            sessionDiv.appendChild(sessionText);
            sessionsDiv.appendChild(sessionDiv);
        });
        displaySessions.appendChild(sessionsDiv);
        var totalTimeDiv = document.createElement('div');
        totalTimeDiv.setAttribute('class', 'totalTime');
        var totalTimeText = document.createTextNode('Total time spent: ' + formatMili(totalTime));
        totalTimeDiv.appendChild(totalTimeText);
        displaySessions.appendChild(totalTimeDiv);
    };
    return Project;
}());
export { Project };
//# sourceMappingURL=project.js.map