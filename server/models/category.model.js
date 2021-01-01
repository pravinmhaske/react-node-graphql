var mongoose = require('mongoose');

// var specificationsSchema = new mongoose.Schema({
//     name : String,
// });
const moviesSchema = new mongoose.Schema({
    name : String,
    hasSeen:Boolean
    // specifications:Object
});
// var categoriesSchema = new mongoose.Schema({
//     catname : String,
//     subcategories:[subcategoriesSchema]
// });
// var categorySchema = new mongoose.Schema({
//     groupname:String,
//     categories:[categoriesSchema],
// });

module.exports = mongoose.model('movies', moviesSchema);
