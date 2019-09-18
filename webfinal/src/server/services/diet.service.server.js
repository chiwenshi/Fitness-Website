module.exports = function(app, models){
    var model = models.dietModel;

    //GET Calls.
    app.get('/api/diets', findAllDiet);

    /*API implementation*/
  function findAllDiet(req, res){
    var diet = req.query.diet;
    model
      .findAllDiet()
      .then(function(diet){
        res.json(diet);
      }, function (error){
        console.log(error);
      });
  }


}
