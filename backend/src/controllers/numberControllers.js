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
    .then(([result]) => {
      res.location(`/numbers/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.number
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  add,
  destroy,
};
