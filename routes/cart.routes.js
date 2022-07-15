const cartController = require("../controllers/cart.controller")
// const {authJwt, requestValidator } = require("../middlewares");
const {is_admin_or_not,verify_token} = require("../middlewares");


module.exports = function(app){
   
    app.post("/ecom/api/v1/carts",[verify_token,is_admin_or_not], cartController.create);

    app.put("/ecom/api/v1/carts/:id",[verify_token,is_admin_or_not], cartController.update);

    app.get("/ecom/api/v1/carts/:cartId",[verify_token,is_admin_or_not], cartController.getcart);

}
