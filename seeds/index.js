// const seedCategories = require('./category-seeds');
// const seedProducts = require('./product-seeds');
// const seedTags = require('./tag-seeds');
// const seedProductTags = require('./product-tag-seeds');

// const sequelize = require('../config/connection');

// const seedAll = async () => {
//   await sequelize.sync({ force: true });
//   console.log('\n----- DATABASE SYNCED -----\n\n\n\n\n\n\n\n\n\n');
//   await seedCategories();
//   console.log('\n----- CATEGORIES SEEDED -----\n\n\n\n\n\n\n\n\n\n');

//   await seedProducts();
//   console.log('\n----- PRODUCTS SEEDED -----\n\n\n\n\n\n\n\n\n\n');

//   await seedTags();
//   console.log('\n----- TAGS SEEDED -----\n\n\n\n\n\n\n\n\n');

//   await seedProductTags();
//   console.log('\n----- PRODUCT TAGS SEEDED -----\n\n\n\n\n\n\n\n\n');

//   process.exit(0);
// };

// seedAll();