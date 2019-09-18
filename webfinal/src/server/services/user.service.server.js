module.exports = function(app, models){
    var model = models.userModel;

    // GET Calls.
    app.get('/api/authenticate/email=:email&password=:password',Login);
    app.get('/api/allusers', findAllUser);
    app.get('/api/:username/myCourses',findCoursesByUser);
    app.get('/api/:username/myDiets',findDietsByUser);
    //POST Calls.
    app.post('/api/users', createUser);
    app.put('/api/:username/addCourse', addCoursesForUser);
    app.put('/api/:username/deleteCourse', removeCoursesFromUser);
    app.put('/api/:username/addDiet', addDietForUser);
    app.put('/api/:username/deleteDiet', removeDietFromUser);

  function findAllUser(req, res){
    var user = req.query.user;
    model
      .findAllUser()
      .then(function(user){
        res.send(user);
      }, function (error){
        console.log(error);
      });
  }

  function createUser(req, res){
    var user = req.body;
    model.createUser(user)
      .then(
        function(newUser){
          res.json(newUser);
        },
        function(error){
          res.sendStatus(500).send(error);
        }
      );
  }

  // function addCoursesForUser(req, res){
  //   var userId = req.params.userId;
  //   var courseId = req.params.courseId;
  //   model
  //     .addCoursesForUser(userId, courseId)
  //     .then(function(user){
  //       res.send(user);
  //     }, function(error){
  //       console.log(error);
  //     });
  // }

  function addCoursesForUser(req, res){
    var username = req.params.username;
    var courseId = req.body._id;
    model.addCoursesForUser(username, courseId).then(function(data){
      res.json(data);
    });
  }

  function findCoursesByUser(req,res){
    var username = req.params.username;
    model.findAllUser().then(function(userlist){
      for(var i=0; i<userlist.length;i++) {
        if (username === userlist[i].username) {
          res.json(userlist[i].courses);
        }
      }
    })
  }

  function findDietsByUser(req,res){
    var username = req.params.username;
    model.findAllUser().then(function(userlist){
      for(var i=0; i<userlist.length;i++) {
        if (username === userlist[i].username) {
          res.json(userlist[i].diet);
        }
      }
    })
  }
  // function addDietForUser(req, res){
  //   var userId = req.params.userId;
  //   var dietId = req.params.dietId;
  //   console.log(userId);
  //   console.log(dietId);
  //   model
  //     .addCoursesForUser(userId, dietId)
  //     .then(function(user){
  //       res.json(user);
  //     }, function(error){
  //       console.log(error);
  //     });
  // }

  // function addDietForUser(req,res){
  //   console.log(req);
  //   var username = req.params.username;
  //   var dietId = req.body._id;
  //   console.log(username);
  //   console.log(dietId);
  //   model.findAllUser().then(function(userlist){
  //     for(var i =0; i < userlist.length; i++){
  //       if(username === userlist[i].username){
  //         userlist[i].diet.push(dietId);
  //         res.json(userlist[i].diet);
  //       }
  //     }
  //   });
  //
  // }

    function addDietForUser(req, res){
      var username = req.params.username;
      var dietId = req.body._id;
      console.log(username);

      model.addDietForUser(username, dietId).then(function(data){
        res.json(data);
      });
    }

  function removeDietFromUser(req, res){
    var username = req.params.username;
    var diet = req.body;
    model
      .removeDietFromUser(username, diet)
      .then(function(user){
        res.send(user);
      }, function(error){
        console.log(error);
      });
  }

  function removeCoursesFromUser(req, res){
    var username = req.params.username;
    var course = req.body;
    model
      .removeCoursesFromUser(username, course)
      .then(function(user){
        res.send(user);
      }, function(error){
        console.log(error);
      });
  }

    function Login(req,res){
        //
        var email = req.params.email;
        var password = req.params.password;
        //var arr = model.findAllUser();
        model.findAllUser().then(function(userlist){
          var judge={};
          for(var i = 0; i < userlist.length; i++){
            if (email === userlist[i].email){
              judge = userlist[i];
              // res.send(userlist[i]);

            }
          }
          if(password === judge.password){
            res.json(judge);
            //res.render('index');
          }
        })
        // res.send(email);
    }
}
