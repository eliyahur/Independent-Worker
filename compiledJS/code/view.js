import { AppState } from "./appState.js";
import { Project } from "./project.js";
import { ProjectsCollection } from "./projectsCollection.js";
var RenderSelect = /** @class */ (function () {
    function RenderSelect() {
    }
    RenderSelect.initOptions = function () {
        var selectBtn = document.getElementById('selectProject');
        selectBtn.innerHTML = null;
        ProjectsCollection.getProjects().getProjectsCollection().forEach(function (project) {
            var option = document.createElement('option');
            var optionText = document.createTextNode(project.projectName);
            option.appendChild(optionText);
            option.setAttribute('value', (project.projectId).toString());
            selectBtn.appendChild(option);
        });
    };
    RenderSelect.setDefaultOption = function () {
        if (ProjectsCollection.getProjects().getProjectsCollection.length != null) {
            AppState.getAppState().setProject(ProjectsCollection.getProjects().getProject(0));
            Project.getProjectOptions().displaySessions();
        }
    };
    RenderSelect.resetButton = function () {
        var _this = this;
        var resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click', function () {
            localStorage.setItem('projectsCollection', null);
            AppState.getAppState().setProject({ projectId: 0, projectName: '', workSessions: [] });
            ProjectsCollection.getProjects().projectsCollection = [];
            Project.getProjectOptions().displaySessions();
            _this.initOptions();
        });
    };
    return RenderSelect;
}());
export { RenderSelect };
//# sourceMappingURL=view.js.map