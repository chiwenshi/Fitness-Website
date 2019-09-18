module.exports = function (app) {
    var models = require("./models/models.server.js")(app);
    require("./services/course.service.server.js")(app,models);
    require("./services/user.service.server.js")(app,models);
    require("./services/diet.service.server.js")(app,models);
    require("./services/blog.service.server")(app,models);
    require("./services/category.service.server")(app,models);
};
