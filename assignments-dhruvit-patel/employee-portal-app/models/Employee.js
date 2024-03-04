const mongoose  = require("mongoose");

const EmployeeModel = new mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    age:{type:Number},
    dateOfJoining:{type:Date},
    title:{type:String},
    department:{type:String},
    employeeType:{type:String},
    currentStatus:{type:Number}
});
module.exports = mongoose.model("Employee", EmployeeModel)