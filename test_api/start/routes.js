"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

/*
 routes for users

 return get all users our create users
*/
Route.group(function () {
  Route.post("register", "UserController.store");
  Route.post("login", "UserController.login");
  // Route.get("register", "UsersController.index");
}).prefix("api/v1/users");

/*
 routes for projects

 return get all projects for users our create projects for users
*/

Route.group(function () {
  Route.get("consult", "ProjectController.index");
  Route.post("create", "ProjectController.create");
  Route.delete("delete/:id", "ProjectController.destroy");
  Route.patch("update/:id", "ProjectController.update");
})
  .prefix("api/v1/projects")
  .middleware("auth");

/*
 routes for tasks

 return get all tasks for project our create task for project
*/

Route.group(function () {
  Route.get("consult/:id", "TaskController.index");
  Route.post("create/:id", "TaskController.create");
  Route.delete("delete/:id", "TaskController.destroy");
  Route.patch("update/:id", "TaskController.update");
})
  .prefix("api/v1/tasks")
  .middleware("auth");

/*
 routes for test

 return Hello world in JSON
*/

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
