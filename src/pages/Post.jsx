import React from "react";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';

import * as DOMPurify from "dompurify";
import RandomPost from "../component/RandomPost";

export default function Post() {
    const { state } = useLocation();
    const post = state ? state.post : null;

    if (!post) {
        return <p>페이지를 찾을 수 없습니다.</p>;
    }

    return (
        <>
            <PostContainer className="container">
                <div className="breadcrumb">
                    <Link to='/health'><HiHome className="home" />자가진단</Link>
                    <IoIosArrowForward className="icon" />
                    <p>{post.category}</p>
                    <IoIosArrowForward className="icon" />
                    <p>{post.keyword}</p>
                    <IoIosArrowForward className="icon" />
                    <p>{post.title}</p>
                </div>

                <div className="title-box">
                    <p className="title">{post.title}</p>
                    <p className="date">{post.date}</p>
                </div>

                <img src={post.image} />

                {post.content && (
                    <div
                        className="content-box"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(String(post.content)),
                        }}
                    />
                )}

                <p className="source">출처: {post.source}</p>
            </PostContainer>

            <RandomPost />
        </>
    )
}

const PostContainer = styled.div`
    padding: 110px 360px 150px;
    box-sizing: border-box;

    .breadcrumb{
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 100px;

        & > a, p{
            font-family: 'NexonGothicLight';
            font-weight: 900;
            font-size: 18px;
            color: #d1d1d1;
            margin-top: 2px;

            .home{
                font-size: 20px;
                vertical-align: middle;
                margin-right: 3px;
            }
        }
        .icon{
            font-size: 18px;
            color: #d1d1d1;
        }

        
    }

    .title-box{
        margin-bottom: 65px;
        .title{
            font-family: 'NexonGothicBold';
            font-size: 50px;
            color: #222222;
            margin: 35px 0px 15px;
        }
        .date{
            font-family: 'NexonGothicLight';
            font-weight: 900;
            font-size: 20px;
            color: #747474;
        }
    }

    img{
        width: 100%;
        margin-bottom: 65px;
    }

    .content-box{
        margin-bottom: 50px;
    }

    .source{
        font-family: 'NexonGothicRegular';
        font-size: 20px;
        color: #9f9f9f;
    }
`