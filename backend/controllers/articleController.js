const articleService = require('../services/articleService');


const getArticle = async (req, res) => {
    try {
        const articles = await articleService.getArticle();
        console.log(articles);
        res.status(200).json({message: "List Article",articles});
    } catch(error) {
        res.status(500).json({message: "I can't read the articles"});
    }
}

const createArticle = (req, res) => {
    try {
        const {title, content, author} = req.body;

        if(!title || !content) {
            return res.status(400).json({message: 'Title and content are required'});
        }
        
        const result = articleService.createArticle(title, content, author);

        return res.status(200).json({message: "Article created successfully", result});
    } catch(error) {

        res.status(500).json({error: error.message});
    }
}

  
const updateArticle= (req, res) => {
    try {
        const { id } = req.params;
        const {title, content} = req.body;
        const updatedArticle = articleService.updateArticle(id, title, content);

        if(!updatedArticle) {
            return res.status(404).json({message: 'Article not found'});
        }
        res.json(updatedArticle);

    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

const deleteArticle = (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user.id;
        const article = articleService.deleteArticle(id, userId);
        res.json(article);
    } catch(error) {
        res.status(500).json({error: error.message});
    }
}

module.exports = {
    getArticle,
    createArticle, 
    updateArticle, 
    deleteArticle
};