const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema(
    {
        comment: String,
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    { collection: "comments" }
);

const Comment = mongoose.model("Comment", commentSchema);

module.exports = { Comment };