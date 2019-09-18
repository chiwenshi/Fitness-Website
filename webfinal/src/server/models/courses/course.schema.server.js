module.exports = function(mongoose){
  var Schema = mongoose.Schema;

  var courseSchema = new Schema({
    _id: String,
    name: String,
    introduction: String,
    category: String,
    attention: String,
    img:String,
    rating: []
  }, {collection: 'courses'});

  return courseSchema;
}


