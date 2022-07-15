const authController =  require("../controllers/auth.controller");

const {checkUsername,checkEmail,check_roles} = require("../middlewares");
module.exports = function(app){
    app.post("/ecom/api/v1/auth/signup",[checkUsername],[checkEmail],[check_roles],authController.signup);
    app.get("/ecom/api/v1/auth/signin",authController.signin);
    

}