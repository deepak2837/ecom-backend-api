// importing all the modules 



const server = require("express")
const bodyParser = require("body-parser")
const serverconfig = require("./config/server.config.js")
const db = require("./models")
const { role } = require("./models")
const cors = require("cors")




// app instance 
const app = server()


// declarations
const Category = db.category
const Product = db.product
const Role = db.role
// const user = db.user


Category.hasMany(Product);



// middle wares 
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());







app.get('/', function (req, res) {

   

        res.send("please refer readme of this project for the list of apis");

    });




db.sequelize.sync({force:true})
.then((data)=>{console.log("table have been dropped"); initt();})







function initt() {
    const category = [{
        name: "Electronics",
        description: "This category will contain all the electronic products"
    },
    {
        name: "KitchenItems",
        description: "This category will contain all the kitchen products"
    }];
    const product = [{
        name: "ipone",
        description: " this iphone is made f gold2",
        cost : 30000,
        categoryId:2,
    },
    {
        name: "tv",
        description: "thi is one of the best ffremi mobile ",
        cost:58400,categoryId:1
    },
    {
        name: "tv",
        description: "thi is one of tffhe best remi mobile ",
        cost:38400,categoryId:1
    },
    {
        name: "tv",
        description: "thi is one of tfhe best remi mobile ",
        cost:68400,categoryId:1
    },
    {
        name: "tv",
        description: "thi is one off the best remi mobile ",
        cost:48400,categoryId:1
    },
    {
        name: "red mi",
        description: "thi is onde of the best remi mobile ",
        cost:38400,categoryId:2
    }];
    Category.bulkCreate(category)
        .then(() => {
            console.log("Category table initialised");
        })
        .catch(err => {
            console.log("Error while initialising categories table");
        });


    Product.bulkCreate(product)
        .then(() => {
            console.log("producttable initialised");
        })
        .catch(err => {
            console.log("Error while initialising categories  ptoduct table");
        });


        const role = [{
            id: 1,
            role_name :"user"},
            { id: 2,
                role_name :"admin"}


        ]






        Role.bulkCreate(role)
        .then(() => {
            console.log("role table initialised");
        })
        .catch(err => {
            console.log("Error while initialising role table");
        })

        // user1 =[ {
        //     "username":"deepak",
        //     "password":"deepu",
        //     "email":"deepgfaufegfh@gmrail.com",
        //     "roles":["user","admin"]
        // },
        // {
        //     "username":"deepak1",
        //     "password":"deepu1",
        //     "email":"deepgfaufegfh1@gmrail.com",
        //     "roles":["user"]
        // }]


        // user.bulkCreate(user1)
        // .then(() => {
        //     console.log("role table initialised");
        // })
        // .catch(err => {
        //     console.log("Error while initialising role table");
        // })

}










require("./routes/category.routes")(app)

require("./routes/product.routes")(app)

require("./routes/auth.routes")(app)

require("./routes/cart.routes")(app)






app.listen(serverconfig.PORT,()=>{
    console.log(`port is running at :${serverconfig.PORT}`)
})

