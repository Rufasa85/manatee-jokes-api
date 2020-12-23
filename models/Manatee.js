module.exports = function(sequelize, DataTypes) {
    var Manatee = sequelize.define('Manatee', {
       setup: {
           type: DataTypes.STRING,
           required:true
        },
       punchline: {
           type: DataTypes.STRING,
           required:true
        }
    });


    return Manatee;
};