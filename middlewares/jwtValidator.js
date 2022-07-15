const jwt = require("jsonwebtoken");
const config = require("../config/auth.config");

const db = require("../models");
const User = db.user;


verify_token = (req, res, next) => {
    let token = req.headers["x-access-token"]
    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });

    }
    jwt.verify(token, config.secret, (err, decoded_id) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized token !"
            });
        }
        
        console.log(decoded_id)
        
        req.userId = decoded_id.id;
        console.log(req.userId)
        

        next();
    })
}

is_admin_or_not = (req, res, next) => {
    User.findByPk(req.userId)
        .then((data1) => {
            console.log(data1)
            data1.getRoles()
                .then((data) => {
                    console.log(data)
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].role_name === "admin") {
                            next();
                            return;
                        }
                    }
                    res.status(403).send({
                        message: "Require Admin Role!"
                    });
                    return;
                })
        })



}


module.exports = { is_admin_or_not, verify_token } 