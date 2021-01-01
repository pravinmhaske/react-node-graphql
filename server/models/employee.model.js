var mongoose = require('mongoose');

// var specificationsSchema = new mongoose.Schema({
//     name : String,
// // });
const addressSchema = new mongoose.Schema({
  country : String,
  state : String,
  city : String,
  street : String,
});
// // var categoriesSchema = new mongoose.Schema({
// //     catname : String,
// //     subcategories:[subcategoriesSchema]
// // });
// var categorySchema = new mongoose.Schema({
//     groupname:String,
//     categories:[categoriesSchema],
// });


// module.exports = mongoose.model('employees', moviesSchema);
// var employeeSchema = new mongoose.Schema({
 
//   name:{type:String,required: true},
//   // lastName:{type:String,required: true},
//   address:addressSchema,
//   email:{type:String,required: true},
//   // lastName:{type:String,required: true},
//   phone:{type:String,required: true},
//   avatarUrl:{type:String,required: true},
//   country:{type:String,required: true},
//   createdAt:{type:Date,default:Date.now}
// });


var employeeSchema = new mongoose.Schema({
 
  // name:{type:String,required: true},
  firstName:{type:String,required: true},
  lastName:{type:String,required: true},
  // address:addressSchema,
  email:{type:String,required: true},
 
  phone:{type:String,required: true},
  state:{type:String,required: true},
  country:{type:String,required: true},
  createdAt:{type:Date,default:Date.now}
});
module.exports = mongoose.model('employees', employeeSchema);
