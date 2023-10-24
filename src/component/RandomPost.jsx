import React from "react";
import styled from "styled-components";
import UsePost from "../api/UsePost";
import RandomPostList from "./RandomPostList";

export default function RandomPost({ post }) {
    const { postQuery: { data: posts }, } = UsePost();



    return (
        <RandomPostContainer className="container">
            <div className="random-post-wrapper">
                <p className="title">함께 읽어보세요!</p>

                <ul className="random-post-box">
                    {posts &&
                        posts.map(item => (
                            <RandomPostList key={item.index} post={item} />
                        ))
                    }
                </ul>
            </div>
        </RandomPostContainer>
    )
}

const RandomPostContainer = styled.div`
    width: 100%;
    background-color: #ffefbe;

    .random-post-wrapper{
        padding: 80px 360px;
        box-sizing: border-box;

        & > .title{
            font-family: 'NexonGothicMedium';
            font-size: 30px;
            color: #835b17;
            margin-bottom: 35px;
        }

        .random-post-box{
            display: flex;
            justify-content: space-between;
        }
    }
`