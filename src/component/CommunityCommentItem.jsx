import React from "react";
import CommunityCommentDetail from "./CommunityCommentDetail";


export default function CommunityCommentItem({ comment: { id, user, text } }) {
    return (
        <CommunityCommentDetail comment={{ id, user, text }} />
    )
}