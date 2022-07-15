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



// this is thwe way to make the model in sequelize  ,here we have defined a table 
// const category = Sequelize.define("category",{
//     "product_name":{
//         type:sequelize.INTEGER,
//         primaryKey : true,
//         autoIncrement:true
//     },
//     "type":{
//         type:sequelize.STRING,
//         allowNull: false 
//     }
// ,

// "catagories":{
//     type:sequelize.STRING,
//     allowNull: false 
// }
// }
// )

// another table 

// Sequelize.define('User13', {

//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false
//     },
//     lastName: {
//       type: DataTypes.STRING
      
//     }
//   });


// adding the values to the table 


 
const Employee = sequelize.define("Employee", {
 
 id: {
 
   type: DataTypes.INTEGER,
   autoIncrement: true,
   allowNull: false,
   primaryKey: true,
 
 },
 
 name: {
 
   type: DataTypes.STRING,
   allowNull: false,
 
 },
position: {
 
   type: DataTypes.STRING,
   allowNull: false,
 
 },
 
 email: {
 
   type: DataTypes.STRING,
   allowNull: false,
 
 },
wage: {
 
   type: DataTypes.INTEGER,
   allowNull: false,
 
 },
 
});
 
 
 
 
module.exports = Employee;

Sequelize.sync();
