import React from 'react';
import Post from './Post';
import { useNavigate } from 'react-router-dom';

function PostList({post}) {
    const navigate = useNavigate();
    const linkClick = ()=>{
        navigate(`/health/posts/${post.id}`, { state: { post } });
    }
    return (
        <li onClick={linkClick}>
            <h2>{post.title}</h2>
            <p>{post.category}</p>
        </li>
    );
}

export default PostList;