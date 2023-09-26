import React from "react";
import styled from "styled-components";
import slide_item01 from "../images/slide_item01.jpg";
import slide_bg from "../images/slide_bg.png";

//swiper
import Swiper from "swiper";
import 'swiper/css';


export default function Section01() {
    const swiper = new Swiper('.swiper-container', {
        loop: true,
        speed: 3000,
        // autoplay: {
        //     delay: 1000,
        //     disableOnInteraction: false,
        // }
    });

    return (
        <SlideContainer className="inner">
            <div className="swiper-container">
                <div className="text-box">
                    <p>언제나 우리와 함께하는 동반자,</p>
                    <p>아프기 전에 늦지 않게 예방해요!</p>
                </div>

                <img src={slide_bg} className="bg" />

                <div className="swiper-wrapper">
                    <div className="swiper-slide"><img src={slide_item01} alt="견강검진" /></div>
                    <div className="swiper-slide"><img src={slide_item01} alt="견강검진" /></div>
                    <div className="swiper-slide"><img src={slide_item01} alt="견강검진" /></div>
                </div>
            </div>
        </SlideContainer>
    )
}

const SlideContainer = styled.div`
    height: 1000px;
    .swiper-container{
        height: 100%;
        overflow: hidden;
        .text-box{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -70%);
            p{
                color: white;
                font-size: 50px;
                font-family: 'NexonGothicRegular';
                text-align: center;
                &:last-of-type{
                    font-family: 'NexonGothicBold';
                    margin-top: 35px;
                }
            }
        }
        .bg{
            position: absolute;
            bottom: 0px;
        }
        .swiper-wrapper{
            z-index: -1;
        }
    }
`