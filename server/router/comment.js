const express = require("express");
const router = express.Router();

const { Comment } = require("../model/Comment.js");
const { User } = require("../model/User.js");

router.post("/submit", async (req, res) => {
    let temp = req.body;
    try {
        const userInfo = await User.findOne({ uid: req.body.uid }).exec();
        temp.author = userInfo._id;
        const NewComment = new Comment(temp);
        await NewComment.save();

        return res.status(200).json({ success: true });
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false });
    }
});

router.post("/getComment", (req, res) => {
    Comment
        .find()
        .populate("author")
        .exec()
        .then((commentInfo) => {
            console.log(commentInfo);

            return res.status(200).json({ success: true, commentList: commentInfo })
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json({ success: false })
        })
})

router.post("/edit", (req, res) => {
    let temp = {
        comment: req.body.comment,
        uid: req.body.uid,
    }
    Comment.findOneAndUpdate({ _id: req.body.commentId }, { $set: temp })
        .exec()
        .then(() => {
            return res.status(200).json({ success: true })
        })
        .catch((err) => {
            return res.status(400).json({ success: false })
        })
})

router.post("/delete", (req, res) => {
    Comment.deleteOne({ _id: req.body.commentId })
        .exec()
        .then(() => {
            return res.status(200).json({ success: true })
        })
        .catch((err) => {
            return res.status(400).json({ success: false })
        })
})




module.exports = router;