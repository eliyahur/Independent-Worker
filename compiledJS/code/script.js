import { Project } from './project.js';
import { WorkSession } from './workSession.js';
import { RenderSelect } from './view.js';
// localStorage.setItem('projectsCollection', null);
// console.log('show:'); 
// console.log(localStorage.getItem('projectsCollection'));
RenderSelect.initOptions();
RenderSelect.setDefaultOption();
var newProject = Project.getProjectOptions();
new WorkSession(newProject);
//# sourceMappingURL=script.js.map