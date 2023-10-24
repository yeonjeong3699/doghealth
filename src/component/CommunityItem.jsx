import React from "react";
import CommunityDetail from "./CommunityDetail";


export default function CommunityItem({ post: { id, user, date, title, text } }) {
    return (
        <CommunityDetail post={{id, user, date, title, text}} />
    )
}