const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/personal", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "index.html"));
});

app.get("/education", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "education.html"));
});

app.get("/project", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "project.html"));
});

app.get("/experience", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "experience.html"));
});

app.get("/hobbies", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "hobbies.html"));
});

app.get("/others", (req, res) => {
  res.sendFile(path.join(__dirname, "views", "others.html"));
});
app.listen(PORT, () => {
  console.log("Server running at http://localhost:3000");

});
