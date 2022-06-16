module.exports = (sequelize, DataTypes)=>{
    const users = sequelize.define('users', {
        name:DataTypes.STRING,
        email:DataTypes.STRING,
        gender:DataTypes.STRING,
        status:DataTypes.STRING,        
    }, {
        createdAt: 'created_at',
        updatedAt: 'modified_at'
    })
}   