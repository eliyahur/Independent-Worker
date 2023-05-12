import { Project } from './project.js';
import { WorkSession } from './workSession.js';
import {  RenderSelect } from './view.js';



RenderSelect.initOptions();
RenderSelect.setDefaultOption();
// RenderSelect.setMenu();
RenderSelect.deleteProject(); 
let newProject = Project.getProjectOptions();
new WorkSession(newProject);
