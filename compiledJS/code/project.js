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
        AppState.getAppState().getProject().workSessions.push(sessionData);
        ProjectsCollection.getProjects().saveProjects(AppState.getAppState().getProject());
        this.displaySessions();
    };
    Project.prototype.initEventListenersForProject = function () {
        var _this = this;
        var newProjectBtn = document.getElementById('addNewProject');
        var newProjectName = document.getElementById('newProject');
        if (!this.eventListenerSet) {
            newProjectBtn.addEventListener('click', function () {
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
    };
    Project.prototype.displaySessions = function () {
        var _this = this;
        var displaySessions = document.getElementById('displaySessions');
        displaySessions.innerHTML = '';
        var totalTime = 0;
        var sessionsDiv = document.createElement('div');
        sessionsDiv.setAttribute('class', 'sessionsDiv');
        if (ProjectsCollection.getProjects().getProjectsCollection().length != 0) {
            AppState.getAppState().getProject().workSessions.forEach(function (workSession) {
                totalTime += workSession.sessionTime;
                var sessionDiv = document.createElement('div');
                sessionDiv.setAttribute('class', 'singleSession');
                var sessionText = document.createTextNode(formatMili(workSession.sessionTime));
                var deleteBtn = document.createElement('button');
                deleteBtn.addEventListener('click', function () {
                    AppState.getAppState().getProject().workSessions.splice(AppState.getAppState().getProject().workSessions.indexOf(workSession), 1);
                    ProjectsCollection.getProjects().saveProjects(AppState.getAppState().getProject());
                    _this.displaySessions();
                });
                deleteBtn.setAttribute('class', 'deleteBtn');
                deleteBtn.appendChild(document.createTextNode('X'));
                sessionDiv.appendChild(deleteBtn);
                sessionDiv.appendChild(sessionText);
                sessionsDiv.appendChild(sessionDiv);
            });
            displaySessions.appendChild(sessionsDiv);
            displaySessions.appendChild(document.createElement('br'));
            var inputCustomTime_1 = document.createElement('input');
            inputCustomTime_1.setAttribute('type', 'number');
            inputCustomTime_1.setAttribute('id', 'customTime');
            inputCustomTime_1.setAttribute('placeholder', 'Enter custom time in minutes');
            displaySessions.appendChild(inputCustomTime_1);
            var addCustomTimeBtn = document.createElement('button');
            addCustomTimeBtn.setAttribute('id', 'addCustomTimeBtn');
            addCustomTimeBtn.appendChild(document.createTextNode('Add custom time'));
            addCustomTimeBtn.addEventListener('click', function () {
                var customTime = Number(inputCustomTime_1.value) * 60000;
                var sessionData = { sessionTime: customTime };
                _this.setWorkSession(sessionData);
            });
            displaySessions.appendChild(addCustomTimeBtn);
            var totalTimeDiv = document.createElement('div');
            totalTimeDiv.setAttribute('class', 'totalTime');
            var totalTimeText = document.createTextNode('Total time spent: ' + formatMili(totalTime));
            totalTimeDiv.appendChild(totalTimeText);
            displaySessions.appendChild(totalTimeDiv);
        }
    };
    return Project;
}());
export { Project };
//# sourceMappingURL=project.js.map