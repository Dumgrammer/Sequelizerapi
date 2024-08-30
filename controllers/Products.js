const Products = require('../models/Products')

exports.getProducts = async(req, res, nesssssssxt) => {

    try {

        const products = await Products.findAll();

        if(products){
            res.status(200).json({
                products: products
            });
        } else {
            res.status(404).json({
                message: 'Product not found'
            })
        }
    } catch (error) {
        res.status(500).json({
            error: error
        });
    }

}