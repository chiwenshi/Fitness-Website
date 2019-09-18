module.exports = function(mongoose){
  var Schema = mongoose.Schema;

  var dietSchema = new Schema({
    _id: String,
    diet_name: String,
    introduction: String,
    pic: String
  }, {collection: 'diet'});

  return dietSchema;
};
