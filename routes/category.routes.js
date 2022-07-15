const categoryController =  require("../controllers/category.controller");
const { requestnameValidator,verify_token, is_admin_or_not } = require("../middlewares");

module.exports = function(app){
    app.post("/ecom/api/v1/categories",[requestnameValidator],[verify_token],[is_admin_or_not],categoryController.create);
    app.get("/ecom/api/v1/categories",categoryController.findAll);
    app.get("/ecom/api/v1/categories/:id",categoryController.findOne);
    app.delete("/ecom/api/v1/categories/:id",[verify_token],[is_admin_or_not],categoryController.delete);
    app.put("/ecom/api/v1/categories/:id",[requestnameValidator],[verify_token],[is_admin_or_not],categoryController.update);


}