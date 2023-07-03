const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors');
const port = "3000";

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false }));
app.use(cors());

const emmployee_routes = require("./routes/employee.routes")

app.get("/", (req,res) =>{
  res.send("<h1>Welcome To Employee Management System (Crud API)</h1>");
});

app.use("/", emmployee_routes);

// Connect to MongoDB and start the server
mongoose
  .connect("mongodb://127.0.0.1:27017/TESTDB")
  .then(() => {
    console.log("connected to MongoDb");
    app.listen(port, () => {
      console.log(`App is running on port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

