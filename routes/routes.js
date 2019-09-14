const UserController = require('../controller/users_controller');

module.exports = (app) => {
  app.get('/login', UserController.login);

  //app.post('logout', UserController.logout);

  //app.post('/register', UserController.logout);

  //app.get('/dashboard', UserController.dashboard);

  //app.get('/admin', UserController.admin);

  app.get('/', UserController.index);

  /*     /login
/logout
/register
/admin/login
/admin/dashboard */
};
