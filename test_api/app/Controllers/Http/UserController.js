"use strict";

const User = use("App/Models/User");

/*
 Controller for Users

 @store:  
 @login:

*/

class UserController {
  async store({ request }) {
    const { email, password } = request.all();
    const user = await User.create({
      email,
      username: email,
      password,
    });
    return user;
  }

  async login({ request, auth }) {
    const { email, password } = request.all();
    const token = await auth.attempt(email, password);
    return token;
  }
}

module.exports = UserController;
