import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VscLinkExternal } from "react-icons/vsc"
import UsePost from "../api/UsePost";
import Section03Content from "./Section03Content";


export default function Section03() {
    const { postQuery: { data: posts }, } = UsePost();

    const postLength = posts?.length;

    const random01 = Math.floor(Math.random() * postLength - 1);
    const random02 = Math.floor(Math.random() * postLength - 1);

    return (
        <Section03Container className="container">
            <div className="title-box">
                <h2 className="title">추천 게시글</h2>

                <Link to='/health'>
                    VIEW MORE <VscLinkExternal />
                </Link>
            </div>

            <div className="content-wrapper">
                <Section03Content key={posts?.[random01].id} post={posts?.[random01]} />
                <Section03Content key={posts?.[random02].id} post={posts?.[random02]} />
            </div>
        </Section03Container>
    )
}

const Section03Container = styled.div`
    padding: 140px 140px;
    box-sizing: border-box;
    position: relative;

    .title-box{
        display: flex;
        justify-content: center;
        align-items: end;
        margin-bottom: 100px;
        
        .title{
            font-family: 'NexonGothicBold';
            font-size: 48px;
            color: #222222;
        }
        
        & > a{
            position: absolute;
            right: 100px;
            font-family: 'NexonGothicLight';
            font-size: 20px;
            color: #222222;
            
            & > svg{
                position: relative;
                bottom: -3px;
                font-size: 18px;
            }
        }
    }

    .content-wrapper{
        display: flex;
        justify-content: center;
        gap: 2%;
    }
`