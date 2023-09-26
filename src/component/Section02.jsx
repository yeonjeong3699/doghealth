import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import sec02_map from "../images/sec02_map.png"
import { PiPlayFill } from "react-icons/pi"

export default function Section02() {
    return (
        <Section02Container className="inner">
            <p className="text">우리 집에서 가까운 동물병원 어디에 있을까?</p>
            <p className="title">집 근처 동물병원을 쉽게 찾아보세요!</p>

            <Link to='/find-hospital'>
                바로가기<PiPlayFill className="icon" />
            </Link>

            <img src={sec02_map} />
        </Section02Container>
    )
}

const Section02Container = styled.div`
    height: 450px;
    background-color: #ffefbe;
    padding: 105px 0px 0px 134px;
    box-sizing: border-box;
    .text{
        font-family: 'NexonGothicRegular';
        font-size: 30px;
        color: #222222;
    }
    .title{
        font-family: 'NexonGothicBold';
        font-size: 50px;
        color: #222222;
        margin-top: 25px;
        margin-bottom: 90px;
    }
    & > a{
        width: 180px;
        height: 50px;
        border-radius: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        background-color: #222222;
        color: white;
        font-family: 'NexonGothicRegular';
        font-size: 24px;
        .icon{
            font-size: 12px;
        }
    }
    & > img{
        position: absolute;
        right: 0px;
        bottom: 0px;
    }
`