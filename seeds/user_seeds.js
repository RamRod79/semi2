const { User } = require('../models');

const userdata =
[
  {
    "first_name": "Armando",
    "last_name": "Rodriguez",
    "email": "armando.Rod@gmail.com",
    "password": "password"
    "DEA_num": "12-12345"
  },
  {
    "first_name": "Steve",
    "last_name": "Tang",
    "email": "steve.tang@gmail.com",
    "password": "password"
    "DEA_num": "12-23456"
  },
  {
    "first_name": "Julian",
    "last_name": "Longmire",
    "email": "julian.long@gmail.com",
    "password": "password"
    "DEA_num": "12-34567"
  },
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;