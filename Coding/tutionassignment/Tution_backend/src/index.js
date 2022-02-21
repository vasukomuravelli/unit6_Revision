const express = require("express");

const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const { register, login } = require("./controllers/Auth.controller");

const StudentController = require("./controllers/Student.controller");

const TestController = require("./controllers/Test.controller");

app.post("/register", register);

app.post("/login", login);

app.use("/students", StudentController);

app.use("/test", TestController);

module.exports = app;
