import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../config/database";

const Products = sequelize.define('Products', {
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    product_image: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Products;