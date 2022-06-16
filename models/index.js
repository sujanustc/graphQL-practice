const sequelize = require('../configs/db');
const {Sequelize, DataTypes} = require('sequelize')


const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

db.sequelize.sync({force:false})
.then(()=>{
    console.log('sync');
})

db.users = require('./users')(sequelize, DataTypes)

module.exports = db;