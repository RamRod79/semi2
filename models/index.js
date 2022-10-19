const Drug = require('./Drug');
const SideEffect = require('./SideEffect');
const User = require('./User');
const UserQuery = require('./UserQuery');

Drug.hasOne(SideEffect, {
    foreignKey: 'side_effects_id',
    onDelete: 'CASCADE'
});

// Drug.hasMany(SideEffect, {
//     foreignKey: 'side_effects_id',
//     onDelete: 'CASCADE'
// });

SideEffect.hasOne(Drug, {
    foreignKey: 'drug_id',
    onDelete: 'CASCADE'
})

UserQuery.hasOne(Drug, {
    foreignKey: 'drug_id',
    onDelete: 'CASCADE'
})

UserQuery.hasOne(User, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
})


module.exports = {
    Drug, 
    SideEffect, 
    User, 
    UserQuery
}