let category = require("../models/category.model");
let mongoose = require('mongoose');
exports.getCategories = function (req, res) {
    category.find({},function (err, result) {
        let success = false, message = `Something went wrong ,while fetching categoryData. Please try again.`;
        if (err) {
            console.log("err" + err);
        } else {
            if (result) {
                success = true;
                message = "Data fetch successfully.";
            } else {
                success = true;
             }
        }
        res.json({
            success: success,
            categoryList: result,
            message: message
        });
    });
}

exports.saveMovie = function (req, res) {
    entry = { //if seller
        name: req.body.name,
        hasSeen:req.body.hasSeen
    }
    // var query = { _id: req.body.id };
    var query = { };
    if (!query._id) { //if object id not there then add new id to record
        query._id = new mongoose.mongo.ObjectID();
    }
    let productadded,productupdated,message;
    category.findOneAndUpdate(query, entry, { upsert: true }, function (err, result) {
        if (err) {
            console.log("err" + err);
            message = "Some Problem while performing action.Try again.";
        } else {
            if (result) {
                success = true;
                if (result['nModified']) {
                    productupdated = 1;
                  let  message = "Product updated successfully.";
                } else {
                    productadded = 1;
                    message = "Product has been Added successfully.";
                }
            } else {
                success = true;
                productadded = 0;
                message = "Some Problem while performing action.Try again.";
            }
        }
        res.json({ success: success, productupdated: productupdated, productadded: productadded, message: message });
    });
}