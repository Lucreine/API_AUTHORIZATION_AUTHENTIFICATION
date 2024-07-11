//const {mongoose} = require("../db.js");

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const UserService = require('../services/userService.js');
const userModels = require('../models/userModels.js');


const register = async(req,res) => {
    const username = req.body.username;
    const password = req.body.password;

    try{
        const user = new userModels({
            username,
            password: await bcrypt.hash(password, 10),
        });

        await user.save();
        res.status(201).json({ message: 'User registered' });

        
    }catch(err){
        res.status(500).json({ error: err.message });
    };
    
}

const login = async(req,res) => {
    const{username, password} = req.body;
    try{
        const user = await userModels.findOne({ username });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'Invalid credentials' });
          }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        res.json(token);
        
    }catch(err){
        res.status(500).json({ error: err.message });
    };   
}

module.exports = {
    register,
    login
};

