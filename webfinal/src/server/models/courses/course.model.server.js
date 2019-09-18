module.exports = function(mongoose){
  var courseSchema = require('./course.schema.server.js')(mongoose);
  var courseModel = mongoose.model('courseModel', courseSchema);

  var api = {
    'findAllCourse': findAllCourse,
    'findCourseByCategory': findCourseByCategory,
    'sortCourseByRating': sortCourseByRating,

    'findCourseById':findCourseById,

    'findCourseById':findCourseById,

    'findCourserateById':findCourserateById,
    'addRatedByCourseId':addRatedByCourseId
  }

  return api;


// define the functions
  function findAllCourse(){
    return courseModel.find();
  }


  function findCourseByCategory(categoryName){
    return courseModel.find({category: categoryName});
  }

  function sortCourseByRating(rating){
    var sum = 0;
    for(var i = 0; i < rating.length; i++){
      sum += rating[i];
    }
    var mean = sum / rating.length;
    this.mean = mean;
    return courseModel.find().sort({ mean: -1});  //sort all course in descending order and output the result
  }

  function findCourseById(courseId){
    return courseModel.findById({_id: courseId});
  }
  function findCourserateById(Id){
    return courseModel.findById({_id:Id});
  }
  function addRatedByCourseId(id,rate){
    return courseModel.findById({_id:id})
    .then(
      function(course){

        course.rating.push(+rate);

        return course.save();
      }
    );
  }
}



