// var config = {
    // USER: 'root',
    // PASSWORD: 'password',
    // SERVER: "127.0.0.1", 
    // DB: 'test' ,
    // HOST:"127.0.0.1",
    // dialect:"mysql"

    
// };

// module.exports =config;
    
module.exports = {
    development: {
        USER: 'root',
    PASSWORD: 'password',
    SERVER: "127.0.0.1", 
    DB: 'test' ,
    HOST:"127.0.0.1",
    dialect:"mysql"
    },
    production: {
        HOST: "sql6.freemysqlhosting.net",
        USER: "sql6508056",
        PASSWORD: "SqLcmBUVHR",
        DB: "sql6508056",
        dialect: "mysql"
    }
}
