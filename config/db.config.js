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
        HOST: "sql6.freesqldatabase.com",
        USER: "sql6511524",
        PASSWORD: "h665kCZdYY",
        DB: "sql6511524",
        dialect: "mysql"
    }
}
