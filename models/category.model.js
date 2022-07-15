// // in this file we will make the model of category of out product 





// const { Sequelize, DataTypes, Model } = require("sequelize")

// const db = require("./index.js")

// module.exports = (sequelize, Sequelize) => {
// const category  = sequelize.define(
//     'category',{
//         id:{
//             type: Sequelize.INTEGER,
//             autoIncrement: true,
//             primaryKey: true

//         },
//         name:{
//             type:Sequelize.STRING,
//             allowNull: false
            

//         },
//         description:{
//             type:Sequelize.STRING,

//         }
// })

// return category;
// };




// module.exports = (sequelize, Sequelize) => {
//     const Category = sequelize.define("category", {
//         id: {
//             type: Sequelize.INTEGER,
//             primaryKey: true,
//             autoIncrement: true
//         }, 
//         name: {
//             type: Sequelize.STRING,
//             allowNull: false,
//         },
//         description: {
//             type: Sequelize.STRING
//         }
//     }, 
//     {
//         tableName: 'categories'
//     });
//     return Category;
// }




module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING
        }
    }, 
    {
        tableName: 'categories'
    });
    return Category;
}