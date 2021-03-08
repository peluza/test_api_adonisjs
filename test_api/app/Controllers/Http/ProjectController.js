"use strict";

const Project = use("App/Models/Project");
const AutorizationService = use("App/Service/AutorizationService");

class ProjectController {
  async index({ auth }) {
    const user = await auth.getUser();

    return await user.projects().fetch();
  }

  async create({ auth, request }) {
    const user = await auth.getUser();
    const { name_project, address } = request.all();
    const project = new Project();
    project.fill({
      name_project,
      address,
    });
    await user.projects().save(project);
    return project;
  }

  async destroy({ auth, params, response }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AutorizationService.verification(project, user);
    await project.delete();
    return project;
  }
}

module.exports = ProjectController;
