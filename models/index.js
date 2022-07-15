// // this file will be used for making the connwction with datnase using sequelize and along with it we will bond all files model here 
// // so that we can import  from her 


// // importing the module here 
// const { Sequelize, DataTypes, Model } = require('sequelize');
// const config = require("../config/db.config.js") 


// // making a connection of database using sequelize 
// const sequelize_connection = new Sequelize(config.config.database,config.config.user,config.config.password,{host:"localhost",dialect:"mysql"});





// // // this is for checking that sequelize is working or not 
// try {
//     sequelize_connection.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }





// // making objects of all models here
// db  = {}
// db.sequelize = sequelize_connection
// db.Sequelize = Sequelize

// db.category =  require("./category.model.js")(db.sequelize, Sequelize);


// module.exports = db;



const env = process.env.NODE_ENV || 'development';
const config = require("../config/db.config")[env];

 
const Sequelize = require("sequelize");

/**
 * Creating the db connection
 */

const seq = new Sequelize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: "mysql"
    }
);


// try {
//     sequelize_connection.authenticate();
//     console.log('Connection has been established successfully.');
//   } catch (error) {
//     console.error('Unable to connect to the database:', error);
//   }


const db = {};
db.Sequelize = Sequelize;
db.sequelize = seq;
db.category = require('./category.model.js')(db.sequelize, Sequelize);
db.product = require('./product.model.js')(db.sequelize, Sequelize);
db.user = require('./user.model.js')(db.sequelize, Sequelize);
db.role = require('./role.model.js')(db.sequelize, Sequelize);
db.cart = require('./cart.model.js')(db.sequelize, Sequelize);



db.role.belongsToMany(db.user,{
    through:"user_roles",
    foriegnKey:"roleId"
})


db.user.belongsToMany(db.role,{
    through:"user_roles",
    foriegnKey:"userId"
})







db.product.belongsToMany(db.cart, {
    through: "cart_products",
    foreignKey: "productId",
    otherKey: "cartId"
});
db.cart.belongsToMany(db.product, {
    through: "cart_products",
    foreignKey: "cartId",
    otherKey: "productId"
});

db.set_roles = ["user", "admin"]
module.exports = db;