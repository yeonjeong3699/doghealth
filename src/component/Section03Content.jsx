import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { PiPlayFill } from "react-icons/pi"
import * as DOMPurify from "dompurify";


export default function Section03Content({ post }) {
    const navigate = useNavigate();

    const linkClick = () => {
        navigate(`/health/posts/${post.id}`, { state: { post } });
    }

    return (
        <Section03ContentContainer>
            <p className="category">{post.category}</p>

            <div className="img-box">
                <img src={post.image} />
            </div>

            <div className="text-box">
                <p className="title">{post.title}</p>

                {post?.content && (
                    <div
                        className="text"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(String(post.content)),
                        }}
                    />
                )}
            </div>

            <button onClick={linkClick}>더보기<PiPlayFill className="icon" /></button>
        </Section03ContentContainer>
    )
}

const Section03ContentContainer = styled.div`
    width: 330px;
    height: 440px;
    position: relative;

    .category{
        width: 130px;
        height: 30px;
        border-radius: 15px;
        background-color: white;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: 175px;
        left: 25px;
        color: #222222;
        font-family: 'NexonGothicRegular';
        font-size: 18px;
    }

    .img-box{
        width: 100%;
        height: 190px;
        overflow: hidden;
        display: flex;
        align-items: center;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;

        img{
            width: 100%;
        }
    }

    .text-box{
        width: 100%;
        height: 260px;
        background-color: #f1f1f1;
        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        padding: 34px 25px 75px;
        box-sizing: border-box;

        .title{
            font-family: 'NexonGothicBold';
            font-size: 28px;
            color: #333;
            margin-bottom: 15px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }

        .text{
            p, span{
                font-family: 'NexonGothicLight' !important;
                font-weight: 700 !important;
                font-size: 18px !important;
                color: #333 !important;
                line-height: 1.4 !important;
                background-color: transparent !important;
            }

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
        }
    }
    
    button{
        border: none;
        background: transparent;
        font-family: 'NexonGothicRegular';
        font-size: 18px;
        color: #333;
        position: absolute;
        bottom: 10px;
        right: 20px;
        transition: 0.5s;
        cursor: pointer;

        .icon{
            font-size: 12px;
            margin-left: 4px;
        }
    }
`