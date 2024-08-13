const User = require('../models/User');


exports.getUser = async (req, res, next) => {
    try {
        const user = await User.findAll();
        if (user) {
            res.status(200).json({
                users: user
            }); 
        } else {
            res.status(404).json*({
                message: "No users found"
            });
        }
    } catch (error) {
        res.status(500).json({
            message: "Internal Server Error"
        });
    }
}


exports.createUser = async (req, res, next) => {
    try {
        const { first_name, last_name, email, password } = req.body;
         
        const newUser = await User.create({first_name, last_name, email, password});
        res.status(201).json({
            message: "User added successfully!"
        });

    } catch (error) {
        console.log(error);
        res.status(500).json({
            err: error
        })
    }
}