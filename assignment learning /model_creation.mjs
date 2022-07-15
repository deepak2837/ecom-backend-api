// const sequelize = require("sequelize")
import { Sequelize } from 'sequelize';
const sequelize = new Sequelize("test","root","password",{
    host: "127.0.0.1",
    dialect:"mysql"
})
// const {DataTypes } = require('sequelize');
import DataTypes from "sequelize"
sequelize.authenticate()
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




// // another employee table mad eusing sequeluize 
export const Employee = sequelize.define("Employee", {
 
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
    




// for exporting the table and using it somewhere else   
 









// this is how tablle values are inserted 

// async function  insertEmployee(name, position, email, wage) {
 
//   await Employee.create({name, position, email, wage});
 
// }
// insertEmployee("deepak","hr","dummy@gmail.com",30000)  








// //  this is how table is dropped in sequealize but table name nust be defind earlier 
// async function  drop_table() {
 
//     await User.drop()
//     console.log("table have been dropped ")
   
//   }
// drop_table()





 

     
sequelize.sync();
