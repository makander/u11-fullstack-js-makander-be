const app = require('./app');
const chalk = require('chalk');

app.listen(process.env.PORT || 5000, () => {
  console.log(
    chalk.red.bold(`Welcome to CoffeePot BE runnong on ${process.env.PORT}`)
  );
});
