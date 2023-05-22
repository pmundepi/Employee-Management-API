const express = require("express");
const mongoose = require("mongoose");
const Employee = require("./models/employeeModel");
const app = express();
const cors = require('cors');

// Middleware for parsing JSON data
app.use(express.json());

// Middleware for parsing URL-encoded data
app.use(express.urlencoded({ extended: false }));

app.use(cors());

// Find all employees
app.get("/employees", async (req, res) => {
  try {
    const employees = await Employee.find({});
    res.status(200).json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Find employee by ID
app.get("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findById(id);
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add new employee
app.post("/employees", async (req, res) => {
  try {
    const employees = await Employee.create(req.body);
    res.status(200).json(employees);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
});

// Update employee details
app.put("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndUpdate(id, req.body);
    // We cannot find any employee in database
    if (!employee) {
      return res
        .status(404)
        .json({ message: `cannot find any employee with ID ${id}` });
    }
    const updatedEmployee = await Employee.findById(id);
    res.status(200).json(updatedEmployee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Delete an employee
app.delete("/employees/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findByIdAndDelete(id);
    if (!employee) {
      return res
        .status(404)
        .json({ message: `cannot find any employee with ID ${id}` });
    }
    res.status(200).json(employee);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Connect to MongoDB and start the server
mongoose
  .connect("mongodb://127.0.0.1:27017/TESTDB")
  .then(() => {
    console.log("connected to MongoDb");
    app.listen(3000, () => {
      console.log(`App is running on port 3000`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
