module.exports = function (sequelize, DataTypes) {
    const product = sequelize.define('product', {
        product_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        department_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT(6,2),
            allowNull: false
        },
        stock_quantity: {
            type: DataTypes.INT
        }
    });

    return product;
}