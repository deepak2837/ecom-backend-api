const res = require("express/lib/response");
const db = require("../models")
const Catagory = db.category
const requestnameValidator = (req, res, next) => {
    if (!req.body.name) {
        res.send("name should be there ").status(400);
        return;
    }
    next();
}

const requestcostValidator = (req, res, next) => {
    if (!req.body.cost) {
        res.status(400).send({ message: "cost of the product cant be empty" })
        return
    }
    next();
}



//Check if the category exists, if not return the proper error message
const requestidValidator = (req, res, next) => {

    if (req.body.categoryId) {
        Catagory.findByPk(req.body.categoryId)
            .then(category => {
                if (!category) {
                    res.status(400).send({
                        message: `category id passed is not available : ${req.body.categoryId}`
                    });
                    return;
                }
                next();
            })
            .catch(err => {
                res.status(500).send({
                    message: "Some Internal error while storing the product!"
                });
           })
    }
    else {
    res.send( "id needs to be pass in order to update the ctegory " ).status(400)
}


}


const validateCategoryPassedInReqParam = (req, res, next) => {
    const categoryId = parseInt(req.params.categoryId);
    // console.log(categoryId)
    if (categoryId) {
        //Check if the category exists, if not return the proper error message
        Catagory.findByPk(categoryId)
        
        
        .then(category => {
            if (!category) {
                console.log("p=going in this block")
                res.status(400).send({message: `category id passed is not available : ${categoryId}`})
                return;
            }
            next();
        })
        
        
        .catch(err => {
            res.status(500).send({
                message: "Some Internal error while storing the product!"
            });
            return;
        });
    }
    else {
        res.status(400).send({
            message: `category id passed is not available `
        })

        return;

    }
}



module.exports = { requestnameValidator, requestcostValidator, requestidValidator ,validateCategoryPassedInReqParam};