const authModels = require('../models/userModels');

const register = async () => {
    return await authModels.find();
}

const login = async () => {
    return await authModels.find();
}


module.exports = {
    register,
    login
};