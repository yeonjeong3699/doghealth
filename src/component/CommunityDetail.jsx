import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PiPlayFill } from "react-icons/pi"

export default function CommunityDetail({ post }) {
    const navigate = useNavigate()
    const detail = () => {
        navigate(`/community/${post.id}`, {
            state: {
                id: post.id,
                title: post.title,
                text: post.text
            }
        })
    }

    return (
        <CommunityDetailContainer>
            <p className="title">{post.title}</p>
            <p className="text">{post.text}</p>
            <p className="detail-btn" onClick={detail}>더보기<PiPlayFill className="icon" /></p>
        </CommunityDetailContainer>
    )
}

const CommunityDetailContainer = styled.li`
    width: 29.834%;
    height: 160px;
    border: solid 1px #dedede;
    border-radius: 25px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.05);
    padding: 18px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;

    .title{
        font-family: 'NexonGothicMedium';
        font-size: 20px;
        color: #333333;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
    }

    .text{
        font-family: 'NexonGothicLight';
        font-size: 18px;
        color: #555555;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
    }

    .detail-btn{
        cursor: pointer;
        display: inline-block;
        position: absolute;
        right: 14px;
        bottom: 14px;
        font-family: 'NexonGothicRegular';
        color: #222222;
        transition: 0.5s;

        .icon{
            font-size: 10px;
            color: #222222;
            transition: 0.5s;
            margin-left: 3px;
        }

        &:hover{
            color: #708135;
        }

        &:hover .icon{
            color: #708135;
        }
    }
`