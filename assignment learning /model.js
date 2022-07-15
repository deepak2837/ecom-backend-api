const sequelize = require("sequelize")

const Sequelize = new sequelize("test","root","password",{
    host: "127.0.0.1",
    dialect:"mysql"
})
const {DataTypes } = require('sequelize');

Sequelize.authenticate()
.then(()=>{
    console.log("connected ")
})
.catch((err)=>{
    console.log(err)
})


// var db = {}
// db.sequelize = sequelize
// db.Sequelize  =db.Sequelize

var user = Sequelize.define('User', {
    // Model attributes are defined here
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING
      // allowNull defaults to true
    }
  }, {
    // Other model options go here
  });
Sequelize.sync();
// console.log(User)
// console.log(user === sequelize.models.User);