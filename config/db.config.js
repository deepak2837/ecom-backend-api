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
        USER: "sql6506651",
        PASSWORD: "blSiZTb4q4",
        DB: "sql6506651",
        dialect: "mysql"
    }
}
