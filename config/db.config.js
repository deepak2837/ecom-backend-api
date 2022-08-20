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
        USER: "sql6513999",
        PASSWORD: "8rIQalrDD4",
        DB: "sql6513999",
        dialect: "mysql"
    }
}
