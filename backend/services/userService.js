const userModels = require('../models/userModels');

const getUser= async () => {
    return await userModels.find();
}

const updateUser = async (id, username, role) => {
    const user = await userModels.findById(id)
    console.log(user);
    if (!user) {
        return("User not found");
    }
    user.username = username;
    user.role = role;

    await user.save();
    return user;
}


const deleteUser= async (id) => {

    try{
        const user = await userModels.findById(id);
        if (!user) {
            throw new Error({message: 'User not found'});
        }
        // if (article.author.toString() !== userId){
        //     throw new Error({message: 'User not authorized to delete this article'});
        // }
        console.log(user);

        await user.deleteOne();
        return { message: 'User deleted successfully' };

    }catch(err){
        console.error(err.message);
    };

}

module.exports = {
    getUser,
    updateUser,
    deleteUser
};
