import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post'

import makeStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    console.log(posts);
    const classes = makeStyles();
    return(
        <>
        <h1>POSTS</h1>
        <Post />
        <Post/>
        </>
    )
}

export default Posts;