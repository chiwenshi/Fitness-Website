module.exports = function(mongoose){
  var Schema = mongoose.Schema;

  var categorySchema = new Schema({
    _id: String,
    name: String,
    courses:[{type: Number, ref: "courseModel"}],
    pic: String
  }, {collection: 'category'});

  return categorySchema;
}
