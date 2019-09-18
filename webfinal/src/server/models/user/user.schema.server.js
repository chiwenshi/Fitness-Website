module.exports = function(mongoose){
  var Schema = mongoose.Schema;

  var userSchema = new Schema({
    _id: String,
    username:{type: String, required: true},
    password:{type: String, required: true},
    email: String,
    address: String,
    city: String,
    state: String,
    zipcode: Number,
    gender: String,
    courses:[{type: String, ref: 'courseModel'}],
    diet:[{type: String, ref: 'dietModel'}]
  }, {collection: 'userinfo'});

  return userSchema;
};
