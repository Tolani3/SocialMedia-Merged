const router = require("express").Router();
const { findById } = require("../models/Post");
const Post = require("../models/Post");
const User = require("../models/User"); 

//Create a post
router.post("/", async (req,res) => {
    const newPost = new Post(req.body);
    try{
        const savedPost = await newPost.save();
        res.status(200).json(savedPost);
    }catch (err) {
        res.status(500).json(err);
    }
});
//Update a post

router.put("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.updateOne({$set:req.body});
            res.status(200).json("Post has been updated");
        }else{
        res.status(403).json("you can update only your post");
    }
}catch(err){
    res.status(500).json(err);
}
});

//Delete a post
router.delete("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(post.userId === req.body.userId){
            await post.deleteOne();
            res.status(200).json("Post has been deleted");
        }else{
        res.status(403).json("you can delete only your post");
    }
}catch(err){
    res.status(500).json(err);
}
});
//Like/dislike (react) a post

router.put("/:id/like", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
        if(!post.likes.includes(req.body.userId)){
            await post.updateOne({$push: {likes: req.body.userId}});
            res.status(200).json("Post has been liked");
        }else{
            await post.updateOne({$pull: {likes: req.body.userId}});
            res.status(200).json("Post has been diliked");
    }
}catch(err){
    res.status(500).json(err);
}
});
//Get a post

router.get("/:id", async (req,res) => {
    try{
        const post = await Post.findById(req.params.id);
            res.status(200).json(post);
        }catch(err){
            res.status(500).json(err);
        }
    });

    
//Get timeline posts (Of the users followers)
/* Finding all the posts of the current user and all the posts of the current user's friends. */
router.get("/timeline/all", async (req,res) => {
    try{
        const currentUser = await User.findById(req.body.userId);
        const userPosts = await Post.find({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) =>{
               return Post.find({userId: friendId});
            })
        );
        res.json(userPosts.concat(...friendPosts))
    }catch(err){
        res.status(500).json(err);
    }
 });

module.exports = router;