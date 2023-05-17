const mongoose = require('mongoose')

const employeeSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter a employee name"]
        },
        designation: {
            type: String,
            required: [true, "Please enter employee designation"]
        },
        emp_id: {
            type: String,
            required: true,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const Employees = mongoose.model('Employees', employeeSchema);

module.exports = Employees;