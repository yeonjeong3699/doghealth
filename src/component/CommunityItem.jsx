import React from "react";
import CommunityDetail from "./CommunityDetail";


export default function CommunityItem({ post: { id, title, text } }) {
    return (
        <CommunityDetail post={{id, title, text}} />
    )
}