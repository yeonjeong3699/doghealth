import React from "react";
import styled from "styled-components";
import Content from "../component/Content";
import { Link } from "react-router-dom";

export default function Body() {
    return (
        <BodyContainer className="container">
            <div className="category-wrapper">
                <Link to='/health/head'>머리 자가진단</Link>
                <Link to='/health/body' className="select">몸 자가진단</Link>
                <Link to='/health/leg'>다리 자가진단</Link>
            </div>

            <Content />
        </BodyContainer>
    )
}

const BodyContainer = styled.div`
    padding-top: 110px;
    box-sizing: border-box;

    .category-wrapper{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 40px;
        margin-top: 50px;

        & > a{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 150px;
            height: 40px;
            border: solid 1px #c7d78e;
            border-radius: 50px;
            transition: 0.5s;
            font-family: 'NexonGothicMedium';
            font-size: 18px;
            color: #a0af6a;

            &:hover{
                color: white;
                background-color: #c7d78e;
            }
        }

        .select{
            color: white;
            background-color: #c7d78e;
        }
    }
`