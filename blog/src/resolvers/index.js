const Article = require("../models/article")
const Comment = require("../models/comment")

module.exports = {
    articles: async () => {
        try {
            const articlesFetched = await Article.find()
            return articlesFetched.map(article => {
                return {
                    ...article._doc,
                    _id: article.id,
                    createdAt: new Date(article._doc.createdAt).toISOString(),
                }
            })
        } catch (error) {
            throw error
        }
    },

    article: async (_id) => {
        try {
            const articleFetched = await Article.findById(_id);
            return {
                ...articleFetched._doc,
                _id: articleFetched.id,
                createdAt: new Date(articleFetched._doc.createdAt).toISOString(),
            }
        } catch (error) {
            throw error
        }
    },

    createArticle: async args => {
        try {
            const { title, body } = args.article
            const article = new Article({
                title,
                body
            })
            const newArticle = await article.save()
            return { ...newArticle._doc, _id: newArticle.id }
        } catch (error) {
            throw error
        }
    },

    deleteArticle: async (id) => {
        try {
            const deletedArticle = await Article.findByIdAndDelete(id);
            return {
                ...deletedArticle._doc,
                _id: deletedArticle.id,
                createdAt: new Date(deletedArticle._doc.createdAt).toISOString(),
            }
        } catch (error) {
            throw error
        }
    },

    updateArticle: async args => {
        try {
            const { _id, title, body } = args
            const updatedArticle = await Article.findByIdAndUpdate(_id, { body: body }, {title: title});
            return `Article ${updatedArticle.title} updated Successfully!!!`
        } catch (error) {
            throw error
        }
    },

    comments: async () => {
        try {
            const commentsFetched = await Comment.find()
            return commentsFetched.map(comment => {
                return {
                    ...comment._doc,
                    _id: comment.id,
                    createdAt: new Date(comment._doc.createdAt).toISOString(),
                }
            })
        } catch (error) {
            throw error
        }
    },

    comment: async (_id) => {
        try {
            const commentFetched = await comment.findById(_id);
            return {
                ...commentFetched._doc,
                _id: commentFetched.id,
                createdAt: new Date(commentFetched._doc.createdAt).toISOString(),
            }
        } catch (error) {
            throw error
        }
    },

    createComment: async args => {
        try {
            const { article_id, body } = args.article
            const comment = new Article({
                article_id,
                body
            })
            const newComment = await comment.save()
            return { ...newComment._doc, _id: newComment.id }
        } catch (error) {
            throw error
        }
    },

    deleteComment: async (id) => {
        try {
            const deletedComment = await Comment.findByIdAndDelete(id);
            return {
                ...deletedComment._doc,
                _id: deletedComment.id,
                createdAt: new Date(deletedComment._doc.createdAt).toISOString(),
            }
        } catch (error) {
            throw error
        }
    },

    updateComment: async args => {
        try {
            const { _id, article_id, body } = args
            const updatedComment = await Comment.findByIdAndUpdate(_id, { body: body }, { article_id: article_id });
            return `Comment updated Successfully!!!`
        } catch (error) {
            throw error
        }
    },
}