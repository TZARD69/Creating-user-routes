require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.APP_PORT ?? 3000;
// Si tu vas sur http://localhost:3000
// Si tu vas sur http://localhost:3000/api/users
// Si tu vas sur http://localhost:3000/api/users/1
// Si tu vas sur http://localhost:3000/api/users/3
// Si tu vas sur http://localhost:3000/api/users/6
// Si tu vas sur http://localhost:3000/api/users/10
// Si tu vas sur http://localhost:3000/api/users/11

const welcome = (req, res) => {
  res.send("Welcome");
};

app.get("/", welcome);

const usersHandlers = require("./usersHandlers");

app.get("/api/users", usersHandlers.getUsers);
app.get("/api/users/:id", usersHandlers.getUserById);

app.listen(port, (err) => {
  if (err) {
    console.error("Something bad happened");
  } else {
    console.log(`Server is listening on ${port}`);
  }
});

