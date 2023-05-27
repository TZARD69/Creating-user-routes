const database = require("./database");

const getUsers = (req, res) => {
  database
    .query("select * from users_informations")
    .then(([users_informations]) => {
      res.status(200).json(users_informations);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);

  database
    .query("select * from users_informations where id = ?", [id])
    .then(([users_informations]) => {
      if (users_informations[0] != null) {
        res.status(200).json(users_informations[0]);
      } else {
        res.status(404).send("Not Found");
      }
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("Error retrieving data from database");
    });
};
module.exports = { getUserById, getUsers };
