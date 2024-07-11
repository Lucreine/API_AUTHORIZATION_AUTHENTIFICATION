const Article = require('../models/articlesModels')

const getArticle = async () => {
    return await Article.find();
}


const createArticle = async (title, content, author) => {
    try{

        const result = new Article({
            title,
            content,
            author
        });
        await result.save();
        return result;

    }catch (err) {
        console.error(err.message);
    };
};


const updateArticle = async (id, title, content) => {
    try{
        const article = await Article.findById(id);

        if (!article) {
            return ( 'Article not found');
        }
        article.title = title;
        article.content = content;

        await article.save();
        return article;

    }catch (err) {
        console.error(err.message);
    };
}


const deleteArticle = async (id, userId) => {

    try{
        const article = await Article.findById(id);
        if (!article) {
            throw new Error({message: 'Article not found'});
        }
        if (article.author.toString() !== userId){
            throw new Error({message: 'User not authorized to delete this article'});
        }
        console.log(article);

        await article.deleteOne();
        return { message: 'Article deleted successfully' };

    }catch(err){
        console.error(err.message);
    };

}

module.exports = {
    getArticle,
    createArticle, 
    updateArticle, 
    deleteArticle
};