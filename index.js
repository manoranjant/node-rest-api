const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json()); // parse JSON bodies
app.use(cors());

// Fake database
let users = [];
let idCounter = 1;

// CREATE
app.post("/users", (req, res) => {
  const user = {
    id: idCounter++,
    name: req.body.name,
    email: req.body.email,
  };

  users.push(user);
  res.status(201).json(user);
});

// READ (all)
app.get("/users", (req, res) => {
  res.json(users);
});

// READ (one)
app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// UPDATE
app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === Number(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });

  user.name = req.body.name ?? user.name;
  user.email = req.body.email ?? user.email;

  res.json(user);
});

// DELETE
app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id !== Number(req.params.id));
  res.json({ message: "User deleted" });
});

// Start server
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
