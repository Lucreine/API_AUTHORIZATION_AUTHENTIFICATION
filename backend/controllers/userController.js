const userModels = require('../models/userModels.js');
const userService = require('../services/userService.js');

const getUser = async (req, res) => {
    try {
        console.log("Loading");
        const users = await userService.getUser();
        res.status(200).json({message: "List users",users});
    } catch(error) {
        res.status(500).json({message: "I can't read the articles"});
    }
}

const updateUser= async (req, res) => {
    try {
        const { id } = req.params;
        const {username, role} = req.body;
        const updatedUser = await userService.updateUser(id, username, role);
        if(!updatedUser) {
            return res.status(404).json({message: 'User not found'});
        }
        res.json(updatedUser);

    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

const deleteUser = (req, res) => {
    try {
        const { id } = req.params;
        const user = userService.deleteUser(id);
        res.json(user);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getUser,
    updateUser,
    deleteUser
};