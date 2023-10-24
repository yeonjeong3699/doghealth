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
                user: post.user,
                date: post.date,
                title: post.title,
                text: post.text
            }
        })
    }

    return (
        <CommunityDetailContainer>
            <div className="detail-top">
                <p className="title">{post.title}</p>
                <p className="text">{post.text}</p>
            </div>

            <div className="detail-bottom">
                <div className="writer-box">
                    <p>{post.user}</p>
                    <p className="date">{post.date}</p>
                </div>
                <p className="detail-btn" onClick={detail}>더보기<PiPlayFill className="icon" /></p>
            </div>
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
    justify-content: space-between;
    align-items: center;

    .detail-top{
        margin: auto 0px;
        text-align: center;

        .title{
            font-family: 'NexonGothicMedium';
            font-size: 20px;
            color: #333333;
            margin-bottom: 6px;

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
    }

    .detail-bottom{
        width: 100%;
        display: flex;
        justify-content: space-between;

        .writer-box{
            display: flex;

            & > p{
                font-family: 'NexonGothicRegular';
                color: #999;
            }

            .date{
                position: relative;
                margin-left: 10px;
                padding-left: 10px;
                box-sizing: border-box;

                &:before{
                    content: "";
                    display: block;
                    width: 1px;
                    height: 15px;
                    background-color: #d1d1d1;
                    position: absolute;
                    top: 50%;
                    left: 0px;
                    transform: translateY(-50%);
                }
            }
        }

        .detail-btn{
            cursor: pointer;
            font-family: 'NexonGothicRegular';
            color: #999;
            transition: 0.5s;

            .icon{
                font-size: 10px;
                color: #999;
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
    }
`