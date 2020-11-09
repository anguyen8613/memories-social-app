import * as api from '../api';

export const getPosts = () => async(dispatch) => {
    try{
        const {data} = await api.fetchPosts();
        dispatch({type: 'FETCH_ALL', payload: data});
    }catch(e){
        console.log(e.message);
    }
}

export const createPost = (post) => {
    return async(dispatch) => {
        try{
            const{data} = await api.createPost(post);
            dispatch({type: 'CREATE', payload: data});
            console.log(data);
        }catch(e){
            console.log(e.message);
        }
    }
}

export const updatePost = (id, post) => async(dispatch) => {
    try{
        console.log(post);
        const {data} = await api.updatePost(id, post);
        console.log(data);
        dispatch({type:"UPDATE", payload: data});
    }catch(e){
        console.log(e);
    }
}

export const deletePost = (id) => async(dispatch) => {
    try{
        console.log("before deletePost");
        await api.deletePost(id);
        console.log("before dispatch");
        dispatch({type: 'DELETE', payload: id});
        console.log("after dispatch");
    }catch(e){
        console.log(e);
    }
}

export const likePost = (id) => async(dispatch) => {
    try{
        const {data} = await api.likePost(id);
        dispatch({type: 'LIKE', payload: data});
    }catch(e){
        console.log(e);
    }
}