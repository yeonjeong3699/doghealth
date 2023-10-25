import React from "react";
import styled from "styled-components";

export default function CommunityCommentDetail({ comment }) {
    return (
        <CommunityCommentDetailContaiiner>
            <span className="user-name">{comment.user}</span>
            <span className="comment">{comment.text}</span>
        </CommunityCommentDetailContaiiner>
    )
}

const CommunityCommentDetailContaiiner = styled.li`
    .user-name{
        font-family: 'NexonGothicMedium';
        font-size: 18px;
        color: #555;
        margin-right: 8px;
    }

    .comment{
        font-family: 'NexonGothicLight';
        font-size: 18px;
        color: #222222;
        line-height: 1.3;
    }
`