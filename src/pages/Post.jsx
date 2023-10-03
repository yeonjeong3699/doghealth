import React from "react";
import styled from "styled-components";

export default function Post(){
    return(
        <PostContainer className="container">
            게시글
        </PostContainer>
    )
}

const PostContainer = styled.div`
    height: 1000px;
    padding-top: 110px;
    box-sizing: border-box;
`