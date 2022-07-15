import { Op } from "sequelize";
import { Employee } from "./model_creation.mjs";
// // Find all users
// const users =await Employee.findAll();
// console.log(users.every(user => user instanceof Employee)); // true
// console.log("All users:", JSON.stringify(users, null, 2));


// const k = await Employee.findAll({
//     where: {
//       id: 2
//     }
//   });

// console.log(k)


const k = await Employee.findAll({
  where: {
    [Op.or]: [
      { id: 12 },
      {id: 3 }
    ]
  }
});
console.log(k)