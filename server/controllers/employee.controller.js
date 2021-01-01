let employeeModel = require("../models/employee.model");
let mongoose = require('mongoose');

exports.getAllEmployess = (req, res)=> {
    employeeModel.find({}, function (err, result) {
        let success = false, message = `Something went wrong ,while fetching employees. Please try again.`;
        if (err) {
            console.log("err" + err);
        } else {
            success = true;
            if (result)
                message = "Employees fetch successfully.";
        }
        res.json({
            success: success,
            employeeList: result,
            message: message
        });
    });
}

exports.saveEmployee = (req, res) => {
    entry = req.body;
    // entry.avatarUrl= 'ekaterina.tankova@devias.io'
    // var query = { _id: req.body.id };
    var query = {};
    if (!query._id) { //if object id not there then add new id to record
        query._id = new mongoose.mongo.ObjectID();
    }
    let employeeadded, employeeupdated, message;
    employeeModel.findOneAndUpdate(query, entry, { upsert: true }, function (err, result) {
        if (err) {
            console.log("err" + err);
            message = "Some Problem while performing action.Try again.";
        } else {
            if (result) {
                success = true;
                if (result['nModified']) {
                    employeeupdated = 1;
                    message = "employee updated successfully.";
                } else {
                    employeeadded = 1;
                    message = "employee has been Added successfully.";
                }
            } else {
                success = true;
                employeeadded = 0;
                message = "Some Problem while performing action.Try again.";
            }
        }
        res.json({ success: success, employeeupdated: employeeupdated, employeeadded: employeeadded, message: message });
    });
}