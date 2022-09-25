var ProjectsCollection = /** @class */ (function () {
    function ProjectsCollection() {
        this.projectsCollection = [];
        this.projectsCollection = JSON.parse(localStorage.getItem('projectsCollection'));
    }
    ProjectsCollection.prototype.getProjectsCollection = function () {
        if (!this.projectsCollection) {
            this.projectsCollection = [];
        }
        return this.projectsCollection;
    };
    ProjectsCollection.getProjects = function () {
        if (!ProjectsCollection.instance) {
            ProjectsCollection.instance = new ProjectsCollection();
            return ProjectsCollection.instance;
        }
        else {
            return ProjectsCollection.instance;
        }
    };
    ProjectsCollection.prototype.getProject = function (id) {
        return this.findProject(id);
    };
    ProjectsCollection.prototype.findProject = function (id) {
        var chosenProject;
        this.projectsCollection.forEach(function (project) {
            if (project.projectId == id) {
                chosenProject = {
                    projectName: project.projectName,
                    projectId: project.projectId,
                    workSessions: project.workSessions
                };
            }
        });
        return chosenProject;
    };
    ProjectsCollection.prototype.saveProjects = function (specificProject) {
        if (specificProject != null) {
            if (this.projectsCollection.length != 0 && this.getProjectsCollection().length != 0) {
                var found_1 = false;
                this.projectsCollection.forEach(function (project) {
                    if (project.projectId == specificProject.projectId) {
                        project.projectName = specificProject.projectName;
                        project.workSessions = specificProject.workSessions;
                        found_1 = true;
                    }
                });
                if (found_1 == false) {
                    this.getProjectsCollection();
                    this.projectsCollection.push(specificProject);
                }
            }
            else {
                this.getProjectsCollection();
                this.projectsCollection.push(specificProject);
            }
        }
        console.log(this.projectsCollection);
        localStorage.setItem('projectsCollection', JSON.stringify(this.projectsCollection));
    };
    return ProjectsCollection;
}());
export { ProjectsCollection };
//# sourceMappingURL=projectsCollection.js.map