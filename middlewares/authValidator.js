const { readdirSync } = require("fs")
const db = require("../models")
const roles = db.role
const user = db.user
const set_roles = db.set_roles


checkUsername = (req, res, next) => {
    console.log("checking that user name and email exixts or not in validato ")

    user.findOne({
        where: {
            username: req.body.username
        }
    })
        .then(user => {
            if (user) {
                res.status(400).send({
                    message: "Failed! Username is already in use!"
                });
                return;
            }
            next();
        })
}
    //email
checkEmail = (req, res, next)  =>  {
    user.findOne({
        where: {
            email: req.body.email
        }
    }).then(user => {
        if (user) {
            res.status(400).send({
                message: "Failed! Email is already in use!"
            });
            return;
        }
        next();
    });
}


check_roles = (req, res, next) => {
    console.log("check roles")

    if (req.body.roles) {
        for (let i = 0; i < req.body.roles.length; i++) {
            console.log("hi")
            if (!set_roles.includes(req.body.roles[i])) {
                res.status(400).send({
                    message: "Failed! Roles does not exist inside validator  =" + req.body.roles[i]
                });
                return;
            }
        }
    }
    next();
}




module.exports = {check_roles,checkEmail,checkUsername };