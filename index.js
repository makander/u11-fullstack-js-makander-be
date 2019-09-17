const app = require('./app');
const chalk = require('chalk');

app.listen(5000, () => {
  console.log(chalk.red.bold('Welcome to CoffeePot BE'));
});
