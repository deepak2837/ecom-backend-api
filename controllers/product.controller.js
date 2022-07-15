
const db = require("../models/")

const Product = db.product

const Op = db.Sequelize.Op


exports.create = (req, res) => {
    console.log("inside v=creation of product ")


    const product = {
        name: req.body.name, description:
            req.body.description,
        cost: req.body.cost,
        categoryId:req.body.categoryId

    }

    Product.create(product)


        .then((data) => {

            console.log({ message: `${product.name} have been added to db` })
            res.status(201).send(data)
        })


        .catch(err => {
            console.log({ message: `${product.name} have not  been added to db` })
            console.log(`error message :${err.message}`)
            res.status(500).send({
                message: "some internal error while storing the product "
            })
        })



}


// code written by riya 

// exports.findAll = (req, res) => {
//     console.log("i am inside find all ")
//     let productName = req.query.name;
//     let minCost = req.query.minCost; //null
//     let maxCost = req.query.maxCost; //null
//     let promise;
//     if(productName) {
//         promise = Product.findAll({
//             where: {
//                 name: productName
//             }
//         })
//     }else if(minCost && maxCost) {
//         promise = Product.findAll({
//             where: {
//                 cost: {
//                     [Op.gte] : minCost,
//                     [Op.lte]: maxCost
//                 }
//             }
//         })
//     }else if(minCost) {
//         promise = Product.findAll({
//             where: {
//                 cost: {
//                     [Op.gte] : minCost
//                 }
//             }
//         })
//     }else if(maxCost) {
//         promise = Product.findAll({
//             where: {
//                 cost: {
//                     [Op.lte] : maxCost
//                 }
//             }
//         })
//     }
//     else{
//         promise = Product.findAll();
//     }
    
//     promise
//         .then((data) => { res.status(200).send(data) })
//         .catch(err => {
//             res.status(500).send({ message: "some internal error while fetcjing the ctegories " })
//         })
// }



exports.findAll = (req, res) => {
let productName = req.query.name;
let minCost = req.query.minCost; 
let maxCost = req.query.maxCost; 
console.log(minCost)
let promise;
if(productName && minCost && maxCost) {
    promise = Product.findAll({
        where: {name:productName,
            cost: {
                [Op.gte] : minCost,
                [Op.lte]: maxCost
            }
        }
    })
}

else if(minCost && maxCost) {
    promise = Product.findAll({
        where: {
            cost: {
                [Op.gte] : minCost,
                [Op.lte]: maxCost
            }
        }
    })
}
else if(productName && minCost) {
    promise = Product.findAll({
        where: {name:productName,
            cost: {
                [Op.gte] : minCost
            }
        }
    })}

else if(minCost) {
    promise = Product.findAll({
        where: {
            cost: {
                [Op.gte] : minCost
            }
        }
    })
}
else if(productName && maxCost) {
    promise = Product.findAll({
        where: {name:productName,
            cost: {
                [Op.lte] : maxCost
            }
        }
    })
}

else if(maxCost) {
    promise = Product.findAll({
        where: {
            cost: {
                [Op.lte] : maxCost
            }
        }
    })
}

else if(productName) {
    promise = Product.findAll({
        where: {
            name: productName
        }
    })}
else{
    promise = Product.findAll();
}
promise
.then(products => {
    res.status(200).send(products);
})
.catch(err => {
    res.status(500).send({
        message: "Some internal error while fetching all the products"
    })
})
}





exports.findOne = (req, res) => {
const key_name = req.params.id;
Category.findByPk(key_name)
    .then(data => {
        if (!data) {
            res.status(404).json({ message: "category not found " })
        }
        else {
            res.status(200).send(data)
        }
    })

    .catch(err => {
        res.status(500).send({ message: "some internal error while fetcjing the ctegories by id  " })
    })

}
// get the list of all products



// for finding the product by primary key 





exports.findOne = (req, res) => {
    const key_name = req.params.id;
    Product.findByPk(key_name)
        .then(data => {
            if (!data) {
                res.status(404).json({ message: "product not found " })
            }
            else {
                res.status(200).send(data)
            }
        })

        .catch(err => {
            res.status(500).send({ message: "some internal error while fetcjing the ctegories by id  " })
        })

}

// updating the product 



// exports.update = (req, res) => {

//     const product = {
//         name: req.body.name,
//         description: req.body.description,
//         cost: req.body.cost,
//         categoryId: req.body.categoryId
//     }

//     const productId = req.params.id;

//     Product.update(product, {
//         where: {id: productId}
//     })
//     .then(updatedProduct => {
//         Product.findByPk(productId)
//         .then(product => {
//             res.status(200).send(product);
//         })
//         .catch(err => {
//             res.status(500).send({
//                 message: "Updation happened successfully, but some internal error in fetching the details"
//             })
//         })
//     })
//     .catch(err => {
//         res.status(500).send({
//             message: "Some internal error while updating details"
//         })
//     })
// }




exports.update = (req, res) => {
    const productId = req.params.id
    const update_product = {
        name: req.body.name, description:
            req.body.description,
        cost: req.body.cost,
        categoryId:req.body.categoryId

    }
    Product.update(update_product, {
        where: { id: productId }
    })



        .then((data) => {
            Product.findByPk(productId)
                .then(data1 => { res.send(data1).status(200) })



                .catch(err => {
                    res.status(500).send({
                        message: "Some internal error while fetching the product  based on id"
                    })
                })
        })


        .catch(err => {
            res.status(500).send({
                message: "some internal error while updating the product  "
            })
        })}
      






// delete a product  




exports.delete = (req, res) => {
    // const key_id = req.params.id;
    const productId = req.params.id
    Product.destroy({
        where: {
            id: productId
        }
    })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "id is not here   " })
            }
            else {
                res.status(200).send("successfully deleted that product  by id ")
            }
        })

        .catch(err => {
            res.status(500).send({ message: "some internal error while deleting that ctegories by id  " })
        })
}



exports.get_product_under_category = (req, res) => {
  const categoryId = parseInt(req.params.categoryId);
  console.log(categoryId)
  Product.findAll({where :{
    categoryId:categoryId}
  })
  .then(data=>{
    res.status(200).send(data);
  })
  .catch(err=>{
    res.status(500).send({message:"some internal error while fetching the product base on categotu "})
  })
}












