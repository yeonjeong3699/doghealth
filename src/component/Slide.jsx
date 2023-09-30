import React from "react";
import styled from "styled-components";

//img
import slide_bg from "../images/slide_bg.png";
import slide_item01 from "../images/slide_item01.jpg";
import slide_item02 from "../images/slide_item02.jpg";
import slide_item03 from "../images/slide_item03.jpg";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/effect-fade';


export default function Slide() {
    return (
        <SlideContainer className="container">
            <div className="text-box">
                <p>언제나 우리와 함께하는 동반자,</p>
                <p>아프지 전에 늦지 않게 예방해요!</p>
            </div>

            <img src={slide_bg} className="slide_bg" />

            <Swiper className="swiper-container"
                loop
                effect={"fade"}
                modules={[Autoplay, EffectFade]}
                autoplay={{ delay: 3000 }}
                allowTouchMove={false}
            >
                <SwiperSlide>
                    <img src={slide_item01} alt="견강검진" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide_item02} alt="견강검진" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src={slide_item03} alt="견강검진" />
                </SwiperSlide>
            </Swiper>
        </SlideContainer >
    )
}

const SlideContainer = styled.div`
    height: 1000px;
    position: relative;
    
    .text-box{
        position: absolute;
        top: 50%;
        left: 170px;
        z-index: 99;
        transform: translateY(-70%);
        & > p{
            font-family: 'NexonGothicRegular';
            font-size: 50px;
            color: white;

            &:last-of-type{
                font-family: 'NexonGothicBold';
                margin-top: 30px;
            }
        }
    }

    .slide_bg{
        width: 100%;
        position: absolute;
        bottom: -1px;
        z-index: 99;
    }

    .swiper-container{
        height: 100%;
    }

`