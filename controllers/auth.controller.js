
const db = require("../models")
const config = require("../config/auth.config")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = db.user

const role = db.role
const Op = db.Sequelize.Op;





// const db = require("../models");
// const config = require("../config/auth.config");
// const User = db.user;
// const Role = db.role;

// const Op = db.Sequelize.Op;

// var jwt = require("jsonwebtoken");
// var bcrypt = require("bcryptjs");

exports.signup = (req, res) => {
    console.log("In Signup");
    User.create({
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 8),
        
    })
        .then((user) => {
            console.log("user created")
            if (req.body.roles) {
                role.findAll({
                    where: {
                        role_name: {
                            [Op.or]: req.body.roles
                        }
                    }
                })
                    .then((roles) => {
                        user.setRoles(roles)
                        .then(() => { res.send("user registered succussfully") })
                    })
            }
            else {
                user.setRoles([1]).then(() => { res.send("user registered succussfully") })
            }
        })



        .catch((err) => {
            res.status(500).send({ message: err.message })
        })

}



exports.signin = (req, res) => {
    console.log("hi")
    User.findOne({where:{
        username: req.body.username}
    })
        .then((user) => {
            if (!user) {
                res.send({ message: "user not found" }).status(404)
                return;
            }
            var passwordisvalid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordisvalid) {
                res.send({ message: "password is not correct " }).status(404)
            }
            var token = jwt.sign({ id: user.id }, config.secret, { expiresIn: 86400 });

            var authorities = [];
            user.getRoles().then(roles => {
              for (let i = 0; i < roles.length; i++) {
                authorities.push(roles[i].role_name);
              }
              res.status(200).send({
                id: user.id,
                username: user.username,
                email: user.email,
                roles: authorities,
                accessToken: token
              });
            });
          })
          .catch(err => {
            res.status(500).send({ message: err.message });
          });
      };




// exports.signup = (req, res) => {

//     console.log("In Signup");
//     User.create({
//         username: req.body.username,
//         email: req.body.email,
//         password: bcrypt.hashSync(req.body.password, 8)
//     })
//     .then(user => {
//         console.log("User created");
//         if(req.body.roles) { // ["admin", "user"]
//             Role.findAll({
//                 where: {
//                     role_name: {
//                         [Op.or] : req.body.roles
//                     }
//                 }
//             })
//             .then(roles => {
//                 //trying to populate the user roles tables. 
//                 user.setRoles(roles)
//                 .then(() => {
//                     res.send({ message: "User registered successfully !"})
//                 })
//             })
//         }else{
//             user.setRoles([1]).then(() => {
//                 res.send({ message: "User registered successfully !"})
//             })
//         }
//     })
//     .catch(err => {
//         res.status(500).send({message: err.message});
//     })
// }

// exports.signin = (req, res) => {
    
//     User.findOne({
//         where: {
//             username: req.body.username
//         }
//     })
//     .then(user => {
//         //Checking if the username is valid
//         if(!user) {
//             return res.status(404).send({ message: "User not found"});
//         }

//         //Checking if the password entered is valid. 
//         var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
//         if(!passwordIsValid) {
//             return res.status(401).send({
//                 message: "Invalid Password"
//             })
//         }

//         //If both are valid, creating the token. 
//         var token = jwt.sign({id: user.id}, config.secret, {
//             expiresIn: 86400 //24 hours
//         });

//         res.status(200).send({
//             id: user.id,
//             username: user.username,
//             email: user.email,
//             accessToken: token
//         });
//     })
//     .catch(err => {
//         res.status(500).send({ message: err.message });
//     });
// };
