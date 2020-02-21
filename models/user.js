module.exports=function(sequelize, DataTypes){
    var User = sequelize.define("User", {
        // Giving the User model a name of type STRING
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        email: DataTypes.STRING,
    });

    return User;
}