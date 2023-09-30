import React from "react";
import styled from "styled-components";
import sec04_bg from "../images/sec04_bg.png";
import sec04_item from "../images/sec04_item.jpg";


export default function Section04() {
    return (
        <Section04Container className="container">
            <img className="sec04-bg" src={sec04_bg} />
            <p className="text">
                건강하고 오래오래 우리 곁에 머무를 수 있도록,
                <span>견강검진</span>
            </p>
            <img className="sec04-item" src={sec04_item} />
        </Section04Container>
    )
}

const Section04Container = styled.div`
    height: 500px;
    position: relative;
    .sec04-bg{
        width: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
    }
    .text{
        font-family: 'Cafe24SsurroundAir';
        font-size: 38px;
        color: white;
        position: absolute;
        top: 65%;
        left: 50%;
        transform: translate(-50%, -65%);
        span{
            font-family: 'Cafe24Ssurround';
            margin-left: 10px;
        }
    }
    .sec04-item{
        width: 100%;
        height: 100%;
    }
`