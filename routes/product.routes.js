const productController =  require("../controllers/product.controller")
const {requestcostValidator,is_admin_or_not,requestnameValidator,requestidValidator,validateCategoryPassedInReqParam,verify_token} = require("../middlewares")
module.exports = function(app){
    app.post("/ecom/api/v1/products",[requestnameValidator],[requestcostValidator],[requestidValidator],[verify_token,is_admin_or_not],productController.create);
    app.get("/ecom/api/v1/products",productController.findAll);
    app.get("/ecom/api/v1/products/:id",productController.findOne);
    app.delete("/ecom/api/v1/products/:id",[verify_token,is_admin_or_not],productController.delete);
    app.put("/ecom/api/v1/products/:id",[requestnameValidator],[requestcostValidator],[requestidValidator],[verify_token,is_admin_or_not],productController.update);
    app.get("/ecom/api/v1/categories/:categoryId/products",[validateCategoryPassedInReqParam],productController.get_product_under_category);
   


}
