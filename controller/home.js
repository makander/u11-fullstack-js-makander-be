const path = require('path');

const index = (req, res) => {
  res.sendFile(path.resolve('./views/home/index.html'));
};

module.exports = {
  index,
};
