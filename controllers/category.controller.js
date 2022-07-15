// const req = require("express/lib/request")	
// const res = require("express/lib/response")
// const { category } = require("../models/")
const db = require("../models/")

const Category = db.category




exports.create = (req, res) => {
    console.log("dfds")
    const category = {
        name: req.body.name, description:
            req.body.description

    }
    Category.create(category)

        .then((data) => {

            console.log({ message: `${category.name} have been added to db` });
            res.status(201).send(data);
        })


        .catch(err => {
            // console.log({ message: `${category.name} have not  been added to db` })
            console.log(`error message :${err.message}`)
            res.status(500).send({
                message: "some internal error while storing the category "
            })
        })



}


// get the list of all category 

exports.findAll = (req, res) => {

    let categoryName = req.query.name;
    let promise;
    if(categoryName) {
        promise = Category.findAll({
            where: {
                name: categoryName
            }
        });
    
    }else{
        promise = Category.findAll();
    }

    promise
    .then(categories => {
        res.status(200).send(categories);
    })
    .catch(err => {
        res.status(500).send({
            message: "Some internal error while fetching the categories"
        })
    })
}


// exports.findAll = (req, res) => {
//     console.log("i am inside find all ")
//     categoryName = req.query.name;
//     let promise;
//     if (categoryName) {
//         promise = Category.findAll({
//             where:
//                 { name: categoryName }
//         })
//     }
//     else {
//         promise = Category.findAll()


//     }
//     promise
//         .then((data) => { res.status(200).send(data) })
//         .catch(err => {
//             res.status(500).send({ message: "some internal error while fetcjing the ctegories " })
//         })
// }



// for finding the category  by primary key 





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

    // updating the category 






exports.update = (req, res) => {
    const categoryId = req.params.id

    const update_category = {
        name: req.body.name, description:
            req.body.description

    }

    Category.update(update_category, {
        where: { id: categoryId }
    })



        .then((data) => {
            Category.findByPk(categoryId)
                .then(data1 => { res.send(data1).status(200) })



                .catch(err => {
                    res.status(500).send({
                        message: "Some internal error while fetching the category based on id"
                    })
                })
        })


        .catch(err => {
            res.status(500).send({
                message: "some internal error while updating the category "
            })
        })
}





// delete a category 




exports.delete = (req, res) => {
    // const key_id = req.params.id;
    const categoryId = req.params.id
    Category.destroy({
        where: {
            id: categoryId
        }
    })
        .then(data => {
            if (!data) {
                res.status(404).send({ message: "id is not here   " })
            }
            else {
                res.status(200).send("successfully deleted that category by id ")
            }
        })

        .catch(err => {
            res.status(500).send({ message: "some internal error while deleting that ctegories by id  " })
        })
}