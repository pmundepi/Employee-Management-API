const express = require("express");
const router = express.Router();

const {getAllEmployees, getEmployeebyid, addEmployee, editEmployee, deleteEmployee} = require("../controllers/employee.controllers")

router.route(`/employees`).get(getAllEmployees);
router.route(`/employees/:id`).get(getEmployeebyid);
router.route(`/addemployees`).post(addEmployee);
router.route(`/editEmployees/:id`).put(editEmployee);
router.route(`/deleteEmployees/:id`).delete(deleteEmployee);

module.exports = router;