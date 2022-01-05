const mongoose = require("mongoose")

const Schema = mongoose.Schema

const commentSchema = new Schema(
    {
        article_id: {
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

module.exports = mongoose.model("Comment", commentSchema)