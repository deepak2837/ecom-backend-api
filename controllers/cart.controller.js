
// const { cart } = require("../models");
// const db = require("../models")
// const Cart = db.cart
// const Op = db.sequelize.Op;
// const Product = db.product

// exports.create = (req, res) => {
//     const current_cart = {
//         userId: req.userId
//     };
//     Cart.create(current_cart)
//         .then((cart) => {
//             res.status(201).send(cart)
//         })
//         .catch((err) => {
//             res.status(500).send({ message: "some interal server error happened " })
//         })
// };

// exports.update = (req, res) => {
//     res.send("hello update")
//     const cartId = req.params.id;

//     Cart.findByPk(cartId)
//     .then((cart)=>{
//         Product.findAll({where :{id:req.body.productids}})
//         .then((items)=>{
//             if(!items){
//                 res.status(400).send({message:"the product u ar etrying to add doesn't exist"})
//             }
//             else{
//                 Cart.setProducts(items)
//                 .then(()=>{
//                     console.log("product sucussfully added to cart")
//                 var cost = 0;
//                 const productsSelected = [];
//                 Cart.getProducts()
//                 .then((products)=>{
//                     for(let i = 0;i<products.lenght;i++){
//                         cost = cost + products[i].cost
//                         productsSelected.push(
//                             {
//                                 id:products[i].id,
//                                 name:products[i].name,
//                                 cost:product[i].cost


//                             }
//                         )
//                     }
//                     res.status(200).send({
//                         id : cart.id,
//                         productsSelected:productsSelected,
//                         cost:cost
//                     })
//                 })
                
                
//                 })
//             }
//         })


//     })

   
// };



// exports.getcart= (req, res) => {
//     res.send("hello get cart ")
  
//     Cart.findByPk(req.params.cartId).then(cart => {

//     var cost = 0;
//                 const productsSelected = [];
//                 Cart.getProducts()
//                 .then((products)=>{
//                     for(let i = 0;i<products.lenght;i++){
//                         cost = cost + products[i].cost
//                         productsSelected.push(
//                             {
//                                 id:products[i].id,
//                                 name:products[i].name,
//                                 cost:product[i].cost


//                             }
//                         )
//                     }
//                     res.status(200).send({
//                         id : cart.id,
//                         productsSelected:productsSelected,
//                         cost:cost
//                     })
//                 })

//             }
//     )








    
// };


const { cart } = require("../models");
const db = require("../models");
const Product = db.product;
const Cart = db.cart;
const Op = db.Sequelize.Op;

/**
 * Create and save a new Cart
 */
exports.create = (req, res) => {
  
    const cart = {
        userId: req.userId  // We will get this from the middleware
    };

    Cart.create(cart).then(cart => {
        res.status(201).send(cart);
    }).catch(err => {
        console.log(err.message);
        res.status(500).send({
            message: "Some internal server error happened"
        })
    })
}

/**
 * Update a given cart by adding more item to it
 */
exports.update = (req, res) => {
    const cartId = req.params.id;

    Cart.findByPk(cartId).then(cart => {
        console.log(cart);
        Product.findAll({
            where: {
                id: req.body.productIds
            }
        }).then(items => {
            if (!items) {
                res.status(400).send({
                    message: "item trying to be added doesn't exist"
                })
            }
            cart.setProducts(items).then(() => {

                console.log("Products successfully added in the cart");
                var cost = 0;
                const productsSelected = [];
                cart.getProducts().then(products => {
                    for (i = 0; i < products.length; i++) {
                        cost = cost + products[i].cost;
                        productsSelected.push({
                            id: products[i].id,
                            name: products[i].name,
                            cost: products[i].cost
                        });
                    }

                    res.status(200).send({
                        id: cart.id,
                        productsSelected: productsSelected,
                        cost: cost
                    });
                });
            })



        })

    })
}

/**
 * Controller to get the cart based on the cartId
 */
exports.getcart = (req, res) => {

    Cart.findByPk(req.params.cartId).then(cart => {
        var cost = 0;
        const productsSelected = [];
        cart.getProducts().then(products => {
            for (i = 0; i < products.length; i++) {
                cost = cost + products[i].cost;
                productsSelected.push({
                    id: products[i].id,
                    name: products[i].name,
                    cost: products[i].cost
                });
            }

            res.status(200).send({
                id: cart.id,
                productsSelected: productsSelected,
                cost: cost
            });
        });

    });

}
