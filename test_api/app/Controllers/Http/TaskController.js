"use strict";

const Project = use("App/Models/Project");
const Tasks = use("App/Models/Task");
const AutorizationService = use("App/Service/AutorizationService");

class TaskController {
  async index({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const project = await Project.find(id);
    AutorizationService.verification(project, user);
    return await project.tasks().fetch();
  }

  async create({ auth, request, params }) {
    const user = await auth.getUser();
    const { description } = request.all();
    const { id } = params;
    const project = await Project.find(id);
    AutorizationService.verification(project, user);
    const tasks = new Tasks();
    tasks.fill({ description });
    await project.tasks().save(tasks);
    return tasks;
  }

  async destroy({ auth, params }) {
    const user = await auth.getUser();
    const { id } = params;
    const tasks = await Tasks.find(id);
    const project = await tasks.project().fetch();
    AutorizationService.verification(project, user);
    await tasks.delete();
    return tasks;
  }

  async update({ auth, params, request }) {
    const user = await auth.getUser();
    const { id } = params;
    const task = await Tasks.find(id);
    const project = await task.project().fetch();
    const { description, completed } = request.all();
    AutorizationService.verification(project, user);
    await task.merge(request.only(["description", "completed"]));
    await task.save();
    return task;
  }
}

module.exports = TaskController;
