import React from 'react';
import Post from './Post/Post'

import makeStyles from './styles';

const Posts = () => {
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