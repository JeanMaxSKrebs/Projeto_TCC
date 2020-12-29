const index = require("../models/index.js");

exports.getIndexController = (req, res, next) => {
    const saloes = index.getSaloes();

    res.json(saloes);
  };
