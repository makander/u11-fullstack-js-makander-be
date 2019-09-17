const UserController = require('../controller/users_controller');
const utils = require('../utils/utils');
module.exports = (app) => {
  app.post('/login', UserController.login);

  app.post('/logout', UserController.logout);

  app.post('/register', UserController.register);

  app.get('/', UserController.index);

  app.get('/dashboard', utils.validateToken, UserController.dashboard);

  app.post('/admin/login');

  app.get('/admin/dashboard');
};
