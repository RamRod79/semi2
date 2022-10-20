const drugSeeds = require('./drug_seeds');
const sideEffects = require('./side_effects-Seeds');
const userSeeds = require('./users_seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n\n');
  await drugSeeds();
  console.log('\n----- CATEGORIES SEEDED -----\n\n');

  await sideEffects();
  console.log('\n----- PRODUCTS SEEDED -----\n\n');

  await userSeeds();
  console.log('\n----- TAGS SEEDED -----\n\n');

  process.exit(0);
};

seedAll();