// const Employee = require("./creating_test_models.js")

// // // this is how tablle values are inserted 

// async function  insertEmployee(name, position, email, wage) {
 
//   await Employee.create({name, position, email, wage});
 
// }
// insertEmployee("deepak","hr","dummy@gmail.com",30000)  


// // this is the way to drop a table 
// async function  drop_table() {
 
//     await Employee.drop()
//     console.log("table have been dropped ")
   
//   }
// drop_table()

   


// // another way of adding the data name to the table without usung a functuion4
// Employee.create({name:"albajds",position: "hrr",email:"dwadfsas",wage: 244243});
// Employee.create({name:"albdsajds",position: "hsdfsdrr",email:"ddsfdswadfsas",wage: 2444324243});
// Employee.create({name:"aldssfbajds",position: "hrsfdsfr",email:"dwadsdfdsfsas",wage: 2444324243});
// Employee.create({name:"alsfddsdfsbajds",position: "hrsfdsfr",email:"dwsfdsfadfsas",wage: 244243});
// Employee.create({name:"alfsdfdsbajds",position: "hsfsfsfrr",email:"fddsfds",wage: 24433243});
// Employee.create({name:"albdsdfdsajds",position: "hrdsfsdfr",email:"dwadsfsdfsas",wage: 24422243});




// // // this is the function to update the table 
// function updateEmployee (name, position, email, wage, id){
   
//     Employee.update({name, position, email, wage}, { where: {id: id}});
   
//  }
 
// updateEmployee("deepak","hrah","dummy@gmail.com",30000,2)



// console.log("hi")

// // // // this ifor finding out thw values of row 
// async function getOneEmployee() {
 
//   const employee1 = await Employee.findAll();
//   console.log(employee1)
//   return employee1;

//  }
// getOneEmployee()


// // this also works for deleting tables 
// Employee.category.drop()

// .then((data)=>{
//     console.log("table have been deleted")
//     console.log(data)
// })





// const sequelize = require("sequelize")



// const user = await User.create({
//     username: 'alice123',
//     isAdmin: true
//   }, { fields: ['username'] });
//   // let's assume the default of isAdmin is false
//   console.log(user.username); // 'alice123'
//   console.log(user.isAdmin); // false


 
