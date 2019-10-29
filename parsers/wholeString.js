const target = require("./singleLine");

const wholeEnchilada = text => {
  return text
    .split("\n")
    .filter(item => {
      return item && item;
    })
    .map(item => target(item));
};

module.exports = wholeEnchilada;
