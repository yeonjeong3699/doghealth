import React from "react";
import { styled } from "styled-components";

export default function UserData({user: {displayName}}){
    return(
        <UserItem>
            <span className="hidden">{displayName}</span>
        </UserItem>
    )
}

const UserItem = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
    span{
        font-family: 'GmarketSansLight';
        font-weight: 900;
        font-size: 18px;
        color: #555;        
    }
`