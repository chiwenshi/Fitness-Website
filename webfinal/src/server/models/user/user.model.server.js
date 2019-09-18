module.exports = function(mongoose){
  var userSchema = require('./user.schema.server.js')(mongoose);
  var userModel = mongoose.model('userModel', userSchema);

  var api = {
    'createUser': createUser,
    'findAllUser': findAllUser,
    //'updateUser': updateUser,
    //'deleteUser': deleteUser,
    'removeCoursesFromUser': removeCoursesFromUser,
    'addCoursesForUser': addCoursesForUser,
    'removeDietFromUser': removeDietFromUser,
    'addDietForUser': addDietForUser
  };

  return api;

  //define the functions

  function createUser(user){
    console.log("Create User!");
    var newUser = {
      _id : new Date().getTime().toString(),
      username: user.username,
      password: user.password,
      email:user.email,
      courses:[],
      diet:[]
    };

    return userModel.create(newUser);
  }

  function findAllUser(){
    return userModel.find().lean();
  }

  // function updateUser(userId, user){
  //   return userModel.update({
  //     _id: userId
  //   }, {
  //     username: user.username,
  //     password:user.password,
  //     email: user.email
  //   });
  // }

  // function deleteUser(userId){
  //   return userModel.remove({_id: userId});
  // }

  function removeCoursesFromUser(username, course){
    return userModel.findOne({username:username})
      .then(
        function(user){
          user.courses.pull(course._id);
          return user.save();
        }
      );
  }

  function addCoursesForUser(username, courseId){
    return userModel.findOne({username: username})
      .then(function(user){
        user.courses.push(courseId);
        return user.save();
    });
  }

  function removeDietFromUser(username, diet){
    return userModel.findOne({username:username})
      .then(
        function(user){
          user.diet.pull(diet._id);
          return user.save();
        }
      );
  }

  function addDietForUser(username, dietId){
    return userModel.findOne({username: username})
      .then(function(user){
        user.diet.push(dietId);
        return user.save();
      });
  }

}
