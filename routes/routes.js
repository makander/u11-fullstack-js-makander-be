const UserController = require('../controller/users_controller');

module.exports = (app) => {
  app.post('/login', UserController.login);

  app.post('/logout', UserController.logout);

  app.post('/register', UserController.register);

  app.get('/', UserController.index);

  /*     /login
/logout
/register
/admin/login
/admin/dashboard */
};
