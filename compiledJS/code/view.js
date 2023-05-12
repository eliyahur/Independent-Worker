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
    RenderSelect.deleteProject = function () {
        var resetButton = document.getElementById('resetButton');
        resetButton.addEventListener('click', function () {
            var projectId = AppState.getAppState().getProject().projectId;
            ProjectsCollection.getProjects().deleteProject(projectId);
            RenderSelect.initOptions();
            RenderSelect.setDefaultOption();
        });
    };
    RenderSelect.setMenu = function () {
        var menuBtn = document.getElementById('menu');
        var hiddenMenu = document.getElementById('hiddenMenu');
        menuBtn.addEventListener('mouseover', function () {
            hiddenMenu.style.display = 'block';
        });
        menuBtn.addEventListener('mouseleave', function () {
            hiddenMenu.style.display = 'none';
        });
        hiddenMenu.addEventListener('mouseover', function () {
            hiddenMenu.style.display = 'block';
        });
        hiddenMenu.addEventListener('mouseleave', function () {
            hiddenMenu.style.display = 'none';
        });
        var importBtn = document.getElementById('import');
        importBtn.addEventListener('click', function () {
            alert('s');
        });
        var exportBTN = document.getElementById('export');
        exportBTN.addEventListener('click', function () {
            localStorage.getItem('projectsCollection');
        });
    };
    return RenderSelect;
}());
export { RenderSelect };
//# sourceMappingURL=view.js.map