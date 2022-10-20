const drugSeeds = require("./drug_seeds");
const sideEffects = require("./side_effects_seed");
const userSeeds = require("./user_seeds");

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n\n");
  await drugSeeds();
  console.log("\n----- DRUGS SEEDED -----\n\n");

  await sideEffects();
  console.log("\n----- SIDEEFFECTS SEEDED -----\n\n");

  await userSeeds();
  console.log("\n----- USERS SEEDED -----\n\n");

  process.exit(0);
};

seedAll();
