import React from "react";
import styled from "styled-components";
import sec01_01 from "../images/sec01_01.png"
import sec01_02 from "../images/sec01_02.png"
import sec01_03 from "../images/sec01_03.png"
import { Link } from "react-router-dom";

export default function Section01() {
    return (
        <Section01Container className="inner">
            <Link to='/health/head' className="item">
                <p className="category">눈, 귀, 치아 등</p>
                <p className="title">머리 자가진단</p>
                <img src={sec01_01} />
            </Link>

            <Link to='/health/head' className="item">
                <p className="category">변, 피부, 혹 등</p>
                <p className="title">몸 자가진단</p>
                <img src={sec01_02} />
            </Link>

            <Link to='/health/head' className="item">
                <p className="category">슬개골, 발바닥 등</p>
                <p className="title">다리 자가진단</p>
                <img src={sec01_03} />
            </Link>
        </Section01Container>
    )
}

const Section01Container = styled.div`
    height: 555px;
    padding: 0px 270px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 90px;
    .item{
        width: 400px;
        height: 300px;
        padding: 60px 0px 0px 40px;
        box-sizing: border-box;
        background-color: #afafaf;
        border-radius: 25px;
        position: relative;
        .category{
            color: white;
            font-family: 'NexonGothicLight';
            font-size: 20px;
        }
        .title{
            color: white;
            font-family: 'NexonGothicMedium';
            font-size: 35px;
            margin-top: 14px;
        }
        img{
            position: absolute;
            right: 0px;
            bottom: 0px;
        }
    }
`