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
 routes for test

 return Hello world in JSON
*/

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});
