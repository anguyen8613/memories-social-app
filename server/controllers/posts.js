import mongoose from 'mongoose';
import PostMessage from '../models/postMessage.js';

export const getPosts = async(req, res) => {
    try{
        const postMessage = await PostMessage.find();
        
        res.status(200).json(postMessage);
    }catch(e){
        res.status(404).json({message: e.message});
    }
}

export const createPost = async(req, res) => {
    const { title, message, selectedFile, creator, tags } = req.body;
    const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })
    try{
       await newPostMessage.save();
       res.status(201).json(newPostMessage);
    }catch(e){
        res.status(409).json({message: e.message})
    }
}

export const updatePost = async (req, res) => {
    const { id : _id } = req.params;
    const post = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send(`No post with id: ${_id}`);
    const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post, _id }, { new: true });
    res.json(updatedPost);
}

export const deletePost = async(req, res) => {
    const {id: _id} = req.params;
    console.log(_id);
    try{
        await PostMessage.findByIdAndDelete(_id);
        res.json({message: 'post deleted'});
    }catch(e){
        console.log(e);
    }
}

export const likePost = async(req, res) => {
    try{
        const {id: _id} = req.params;
        const post = await PostMessage.findById(_id);
        post.likeCount ++;
        const updatedPost = await post.save();
        res.json(updatedPost);       
    }catch(e){
        console.log(e);
    }
}