const Sequelize = require("sequelize");
const path = "mysql://root:password@localhost:3306/catsdb";

const sequelize = new Sequelize(path, {
  logging: false
});

//Create model
const Cat = sequelize.define('cat',{
  name: Sequelize.STRING,
  type: Sequelize.STRING
});

//Create a table for cats
// Cat.sync({force: true}).then(() => console.log('Cat Table has been created'));

// Create a record
// async function createRecord(){
//     let cat = await Cat.create({name: 'Donnie', type: 'Calico'});
//     console.log(cat);

//     sequelize.close();
// }

// createRecord();

//find one

// async function findOneCat() {
//   let cat = await Cat.findOne();
//   console.log(cat.dataValues.name);

//   sequelize.close();
// }

// findOneCat();

//find all

// async function findAllCats() {
//   let cats = await Cat.findAll();
//   console.log(cats);

//   sequelize.close();
// }

// findAllCats();

//Update a cat

// async function updateACat() {
//   let cat = await Cat.update({name: 'Buddy'}, { where: { id: 1}});
//   console.log(cat);

//   sequelize.close();
// }

// updateACat();

//Update a cat

// async function deleteACat() {
//   let cat = await Cat.destroy({ where: { id: 1}});
//   console.log(cat);

//   sequelize.close();
// }

// deleteACat();