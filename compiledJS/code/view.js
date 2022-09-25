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
    return RenderSelect;
}());
export { RenderSelect };
//# sourceMappingURL=view.js.map