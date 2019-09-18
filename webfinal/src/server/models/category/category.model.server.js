module.exports = function(mongoose){
  var categorySchema = require('./category.schema.server.js')(mongoose);
  var categoryModel = mongoose.model('categoryModel', categorySchema);

  var api = {
    'findAllCategory': findAllCategory
  }

  return api;

  // define the functions
  function findAllCategory(){
    return categoryModel.find();
  }
}
