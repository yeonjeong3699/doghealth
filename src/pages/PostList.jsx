import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function PostList({ post }) {
    const navigate = useNavigate();

    const linkClick = () => {
        navigate(`/health/posts/${post.id}`, { state: { post } });
    }

    return (
        <PostListContainer onClick={linkClick}>
            <div className="img-box">
                <img src={post.image} />
            </div>

            <div className="text-box">
                <div className="category-box">
                    <p>{post.category}</p>
                    <p className="keyword">{post.keyword}</p>
                </div>

                <p className="title">{post.title}</p>
            </div>
        </PostListContainer>
    )
}

const PostListContainer = styled.li`
    display: block;
    width: 30%;
    height: 380px;
    cursor: pointer;

    &:hover .img-box img{
        transform: scale(1.1);
    }

    .img-box{
        width: 100%;
        height: 300px;
        border-radius: 8px;
        overflow: hidden;
        margin-bottom: 16px;

        & > img{
            width: 100%;
            transition: 0.5s;
        }
    }

    .text-box{
        .category-box{
            display: flex;
            align-items: center;
            margin-bottom: 10px;

            & > p{
                font-family: 'NexonGothicMedium';
                font-size: 18px;
                color: #555555;
            }

            .keyword{
                color: #b2b2b2;
                margin-left: 16px;
                position: relative;

                &:before{
                    content: "";
                    display: block;
                    width: 1px;
                    height: 14px;
                    background-color: #b2b2b2;
                    position: absolute;
                    top: 1px;
                    left: -8px;
                }
            }
        }

        & > .title{
            font-family: 'NexonGothicBold';
            font-size: 26px;
            line-height: 1.15;
            color: #111111;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }
    }

`