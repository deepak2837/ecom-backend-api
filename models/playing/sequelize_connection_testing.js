const sequelize = require("sequelize")

const Sequelize = new sequelize("test","root","password",{
    host: "127.0.0.1",
    dialect:"mysql"
})

Sequelize.authenticate()
.then(()=>{
    console.log("connected ")
})
.catch((err)=>{
    console.log(err)
})



