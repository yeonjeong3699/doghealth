import React from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

export default function RandomPostList({ post }) {
    const navigate = useNavigate();

    const linkClick = () => {
        navigate(`/health/posts/${post.id}`, { state: { post } });
    }

    return (
        <RandomPostListContainer onClick={linkClick}>
            <div className="img-box">
                <img src={post.image} />
            </div>

            <p className="post-title">
                {post.title}
            </p>
        </RandomPostListContainer>
    )
}

const RandomPostListContainer = styled.li`
    width: 280px;

    .img-box{
        width: 100%;
        height: 180px;
        border-radius: 10px;
        overflow: hidden;
        box-sizing: border-box;

        &:hover img{
            transform: scale(1.1);
        }

        & > img{
            width: 100%;
            transition: 0.5s;
        }
    }

    .post-title{
        font-family: 'NexonGothicMedium';
        font-size: 22px;
        color: #cda053;
        margin-top: 14px;
        line-height: 1.2;
    }
`