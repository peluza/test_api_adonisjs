# first create new project

copy in the terminal

```
adonis new test_api --api-only
```

# Create controlers

copy in the terminal

```
adonis make:controller User --type http
```

# Add controlers for API

in the file app/controllers/{name_file}

example for Users

```
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

```

# Create ruotes for API

in the file start/routes.js add routes for you api.

example

```
/*
 routes for users

 return get all users our create users
*/
Route.group(function () {
  Route.post("register", "UserController.store");
  Route.post("login", "UserController.login");
  // Route.get("register", "UsersController.index");
}).prefix("api/v1/users");

```

# Create a model for project

copy in the terminal

```
adonis make:model {name_project} -m
```

# Migrate the data base

copy in the terminal

```
adonis migration:run
```
