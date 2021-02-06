const express = require('express');

const router = express.Router();

const Post = require('../models/Post');
//Get all the post.
router.get('/',async (req,res)=>{  // /post : tính từ đườn dẫn bên ngoài.......
    // res.send('we are on post.');
    try {
        const posts = await Post.find().limit(10);
        res.json(posts);
    } catch (error) {
        res.json({message:error})
    }
})
//create a post
router.post('/',async (req,res)=>{
    // console.log(req.body)
    const post = new Post ({
        title:req.body.title,
        description:req.body.description,
    });
    try {
        const savePost = await post.save();
        res.json(savePost);
    } catch (error) {
        res.json({message:error})
    }
   

})
/// Specific post (show(postId) )
router.get('/:postId', async (req,res)=>{
    try {
        // console.log(req.params.postId); // get oarams from route
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({message:error})
    }
    
})

///delete Post

router.delete('/:postId', async (req,res)=>{
    try {
        const removePost = await Post.remove({_id:req.params.postId});
        res.json(removePost);
    } catch (error) {
        res.json({message:error})
    }
  
})
// Update post

router.patch('/:postId', async (req,res)=>{
    try {
        const updaePost = await Post.updateOne(
                {_id:req.params.postId},
                    { $set: 
                        {
                            title:req.body.title,
                            description:req.body.description
                        } 
                    });

        res.json(updaePost);
    } catch (error) {
        
    }
   
})


module.exports = router