module.exports = function(app, models){
  var model = models.categoryModel;

  //GET Calls.
  app.get('/api/categories', findAllCategory);

  /*API implementation*/

  function findAllCategory(req, res){
    //var category = req.query.category;
    model
      .findAllCategory()
      .then(function(category){
        res.json(category);
      }, function(error){
        console.log(error);
      });
  }


}
