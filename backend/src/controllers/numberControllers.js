const models = require("../models");

const browse = (req, res) => {
  models.number
    .findAllInOrder()
    .then(([numbers]) => {
      res.send(numbers);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const number = req.body;
  models.number
    .insert(number)
    .then(([oneNumber]) => {
      res.location(`/numbers/${oneNumber.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
};
