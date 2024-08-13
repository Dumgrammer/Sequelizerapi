const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sample', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


try {
    sequelize.authenticate();
    sequelize.sync({ force:false })
    console.log('Connection has been established')
} catch (error) {
    console.error(error);
}
//this is an ORM approach so pag hindi pa naka sync yung tables mag o aut create siya by the models

module.exports = sequelize;