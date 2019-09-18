module.exports = function(mongoose){
  var dietSchema = require('./diet.schema.server.js')(mongoose);
  var dietModel = mongoose.model('dietModel', dietSchema);

  var api = {
    'findAllDiet': findAllDiet
  }

  return api;

  // define the functions
  function findAllDiet(){
    return dietModel.find();
  }
}









