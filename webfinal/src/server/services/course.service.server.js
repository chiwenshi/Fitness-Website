module.exports = function(app, models){

    var model = models.courseModel;

    // GET Calls.
    app.get('/api/courses', findAllCourse);

    app.get('/api/category=:category/courses', findCourseByCategory);

    app.get('/api/course/:id',findCourseById);

    app.get('/api/courserate/:id',findCourserateById);


    app.get('/api/:id/addRate/:rate',addRatedByCourseId);
    //app.get('/api/course/:rating',sortCourseByRating);

    /*API implementation*/

    function findAllCourse(req, res){
      model
        .findAllCourse()
        .then(function(course){
        res.json(course);
      }, function (error){
        console.log(error);
      });
    }



    function findCourseByCategory(req, res){
      var category = req.params.category;
      model
        .findCourseByCategory(category)
        .then(function(courses){
          res.json(courses);
      }, function(error){
        console.log(error);
        res.sendStatus(404).send(error);
      });
    }

    function findCourseById(req,res){
      var id = req.params.id;
      model
        .findCourseById(id)
        .then(function(course){
          res.json(course);
        },function(error){
          console.log(error);
          res.sendStatus(404).send(error);
        });
    }

    function findCourserateById(req,res){
      var id=req.params.id;
      model
       .findCourserateById(id)
       .then(function(course){
         var sum = 0;
         var average = 0;

         for(var i = 0; i<course.rating.length;i++) {
           sum = sum + course.rating[i];
         }
         average = (sum/course.rating.length).toFixed(1);

         res.json(average);
       })
    }

    function addRatedByCourseId(req,res){
      var id = req.params.id;
      var rate = req.params.rate;
      model
      .addRatedByCourseId(id,rate)
      .then(function(rate){
        res.json(rate);
      })
    }
};
