import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

//icon
import { PiPlayFill } from "react-icons/pi"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

//img
import health_slide01 from "../images/health_slide01.png";
import health_slide02 from "../images/health_slide02.png";
import health_slide03 from "../images/health_slide03.png";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Content from "../component/Content";


export default function Health() {
    return (
        <HealthContainer className="container">

            {/* 슬라이드 */}
            <Swiper className="swiper-container"
                loop
                modules={[EffectFade, Autoplay, Navigation, Pagination]}
                effect={"fade"}
                autoplay={{ delay: 3000 }}
                navigation={{
                    prevEl: '.button-prev',
                    nextEl: '.button-next'
                }}
            >
                <SwiperSlide className="item head">
                    <div className="text-box">
                        <p className="text">눈, 귀, 치아 등</p>
                        <p className="title">머리 자가진단</p>
                        <Link to='/health/head' className="link-btn">
                            바로가기<PiPlayFill className="icon" />
                        </Link>
                    </div>

                    <img src={health_slide01} alt="머리 자가진단" />
                </SwiperSlide>

                <SwiperSlide className="item body">
                    <div className="text-box">
                        <p className="text">변, 피부, 혹 등</p>
                        <p className="title">몸 자가진단</p>
                        <Link to='/health/body' className="link-btn">
                            바로가기<PiPlayFill className="icon" />
                        </Link>
                    </div>

                    <img src={health_slide02} alt="몸 자가진단" />
                </SwiperSlide>

                <SwiperSlide className="item leg">
                    <div className="text-box">
                        <p className="text">슬개골, 발바닥 등</p>
                        <p className="title">다리 자가진단</p>
                        <Link to='/health/leg' className="link-btn">
                            바로가기<PiPlayFill className="icon" />
                        </Link>
                    </div>

                    <img src={health_slide03} alt="다리 자가진단" />
                </SwiperSlide>

                <IoIosArrowBack className="button-prev" />
                <IoIosArrowForward className="button-next" />

            </Swiper>

            {/* 컨텐츠 */}
            <Content />

        </HealthContainer>
    )
}

const HealthContainer = styled.div`
    padding-top: 110px;
    box-sizing: border-box;
    .swiper-container{
        width: 100%;
        height: 690px;
        position: relative;

        //슬라이드 배경색
        .head{
            background-color: #c8e5b7;
        }
        .body{
            background-color: #bfdef1;
        }
        .leg{
            background-color: #e4d7ec;
        }

        //슬라이드 공통
        .item{
            position: relative;
            padding: 0px 270px;
            box-sizing: border-box;
            .text-box{
                display: flex;
                flex-direction: column;
                gap: 25px;
                position: absolute;
                top: 50%;
                transform: translateY(-50%);

                & > .text{
                    font-family: 'NexonGothicRegular';
                    font-size: 40px;
                    color: white;
                }
                & > .title{
                    font-family: 'NexonGothicBold';
                    font-size: 70px;
                    color: white;
                    margin-bottom: 85px;
                }
                .link-btn{
                    width: 180px;
                    height: 50px;
                    border-radius: 25px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    background-color: white;
                    color: #797979;
                    font-family: 'NexonGothicRegular';
                    font-size: 24px;
                    .icon{
                        font-size: 12px;
                    }
                }
            }
            img{
                position: absolute;
                right: 270px;
                bottom: 0px;
            }
        }

        //슬라이드 버튼
        .button-prev{
            color: rgba(255, 255, 255, 0.8);
            font-size: 50px;
            position: absolute;
            top: 50%;
            left: 90px;
            transform: translateY(-50%);
            z-index: 99;
            cursor: pointer;
        }
        .button-next{
            color: rgba(255, 255, 255, 0.8);
            font-size: 50px;
            position: absolute;
            top: 50%;
            right: 90px;
            transform: translateY(-50%);
            z-index: 99;
            cursor: pointer;
        }
    }
`