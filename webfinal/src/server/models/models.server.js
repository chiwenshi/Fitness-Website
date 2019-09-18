module.exports = function(app){
  var connectionString = 'mongodb://127.0.0.1:27017/moveonDB'; //for local

  var mongoose = require("mongoose");
  mongoose.connect(connectionString);

  var userModel = require("./user/user.model.server.js")(mongoose);
  var courseModel = require("./courses/course.model.server.js")(mongoose);
  var dietModel = require("./diet/diet.model.server.js")(mongoose);
  var categoryModel = require("./category/category.model.server.js")(mongoose);

  var models = {
    'userModel': userModel,
    'courseModel': courseModel,
    'dietModel': dietModel,
    'categoryModel': categoryModel
  };

  return models;
};
