import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { VscLinkExternal } from "react-icons/vsc"
import { PiPlayFill } from "react-icons/pi"
import { IoIosArrowBack } from "react-icons/io"
import { IoIosArrowForward } from "react-icons/io"

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';

//img
import sec03_01 from "../images/sec03_01.jpg"

export default function Section03() {
    // const swiper = new Swiper('.swiper02', {
    //     slidesPerView: 4,
    //     spaceBetween: 20,

    // });

    return (
        <Section03Container className="container">
            <div className="inner">
                <div className="title-box">
                    <h2 className="title">제목을 뭐라고 지어야 할까</h2>

                    <Link to='/health'>
                        VIEW MORE <VscLinkExternal />
                    </Link>
                </div>

                <Swiper className="swiper-container"
                    slidesPerView={4}
                    slidesPerGroup={1}
                    spaceBetween={20}
                    modules={[Navigation]}
                    // navigation
                    navigation={{
                        prevEl: '.button-prev',
                        nextEl: '.button-next'
                    }}
                    allowTouchMove={false}
                >
                    <SwiperSlide className="item">
                        <p className="category">카테고리</p>

                        <div className="img-box">
                            <img src={sec03_01} />
                        </div>

                        <div className="text-box">
                            <p className="title">제목제목제목제목</p>
                            <p className="text">
                                이것을 글이다 어쩌구 저쩌구 머래 두둥 얄리얄리 얄랑셩 얄라리 얄라 두둥 탁탁 쫑이는 귀엽다 세상에서 제일 기업은행 짱귀여운 쫑이
                            </p>
                        </div>

                        <Link to='/'>더보기<PiPlayFill className="icon" /></Link>
                    </SwiperSlide>

                    <SwiperSlide className="item">
                        <p className="category">카테고리</p>

                        <div className="img-box">
                            <img src={sec03_01} />
                        </div>

                        <div className="text-box">
                            <p className="title">제목제목제목제목</p>
                            <p className="text">
                                이것을 글이다 어쩌구 저쩌구 머래 두둥 얄리얄리 얄랑셩 얄라리 얄라 두둥 탁탁 쫑이는 귀엽다 세상에서 제일 기업은행 짱귀여운 쫑이
                            </p>
                        </div>

                        <Link to='/'>더보기<PiPlayFill className="icon" /></Link>
                    </SwiperSlide>

                    <SwiperSlide className="item">
                        <p className="category">카테고리</p>

                        <div className="img-box">
                            <img src={sec03_01} />
                        </div>

                        <div className="text-box">
                            <p className="title">제목제목제목제목</p>
                            <p className="text">
                                이것을 글이다 어쩌구 저쩌구 머래 두둥 얄리얄리 얄랑셩 얄라리 얄라 두둥 탁탁 쫑이는 귀엽다 세상에서 제일 기업은행 짱귀여운 쫑이
                            </p>
                        </div>

                        <Link to='/'>더보기<PiPlayFill className="icon" /></Link>
                    </SwiperSlide>

                    <SwiperSlide className="item">
                        <p className="category">카테고리</p>

                        <div className="img-box">
                            <img src={sec03_01} />
                        </div>

                        <div className="text-box">
                            <p className="title">제목제목제목제목</p>
                            <p className="text">
                                이것을 글이다 어쩌구 저쩌구 머래 두둥 얄리얄리 얄랑셩 얄라리 얄라 두둥 탁탁 쫑이는 귀엽다 세상에서 제일 기업은행 짱귀여운 쫑이
                            </p>
                        </div>

                        <Link to='/'>더보기<PiPlayFill className="icon" /></Link>
                    </SwiperSlide>

                    <SwiperSlide className="item">
                        <p className="category">카테고리</p>

                        <div className="img-box">
                            <img src={sec03_01} />
                        </div>

                        <div className="text-box">
                            <p className="title">제목제목제목제목</p>
                            <p className="text">
                                이것을 글이다 어쩌구 저쩌구 머래 두둥 얄리얄리 얄랑셩 얄라리 얄라 두둥 탁탁 쫑이는 귀엽다 세상에서 제일 기업은행 짱귀여운 쫑이
                            </p>
                        </div>

                        <Link to='/'>더보기<PiPlayFill className="icon" /></Link>
                    </SwiperSlide>

                    <SwiperSlide className="item">
                        <p className="category">카테고리</p>

                        <div className="img-box">
                            <img src={sec03_01} />
                        </div>

                        <div className="text-box">
                            <p className="title">제목제목제목제목</p>
                            <p className="text">
                                이것을 글이다 어쩌구 저쩌구 머래 두둥 얄리얄리 얄랑셩 얄라리 얄라 두둥 탁탁 쫑이는 귀엽다 세상에서 제일 기업은행 짱귀여운 쫑이
                            </p>
                        </div>

                        <Link to='/'>더보기<PiPlayFill className="icon" /></Link>
                    </SwiperSlide>
                </Swiper>

                <IoIosArrowBack className="button-prev" />
                <IoIosArrowForward className="button-next" />

            </div>
        </Section03Container>
    )
}

const Section03Container = styled.div`
    height: 840px;
    padding-top: 140px;
    box-sizing: border-box;
    .inner{
        width: 1380px;
        height: 100%;
        margin: 0px auto;
        position: relative;
        .title-box{
            display: flex;
            justify-content: center;
            align-items: end;
            .title{
                font-family: 'NexonGothicBold';
                font-size: 48px;
                color: #222222;
            }
            & > a{
                position: absolute;
                right: 0px;
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

        .swiper-container{
            height: 440px;
            margin-top: 70px;
            .item{
                width: 330px;
                height: 440px;
                position: relative;
                .category{
                    width: 110px;
                    height: 30px;
                    border-radius: 15px;
                    background-color: white;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    position: absolute;
                    top: 175px;
                    left: 25px;
                    color: #222222;
                    font-family: 'NexonGothicRegular';
                    font-size: 18px;
                }
                .img-box{
                    width: 100%;
                    height: 190px;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    border-top-left-radius: 15px;
                    border-top-right-radius: 15px;
                    img{
                        width: 100%;
                    }
                }
                .text-box{
                    width: 100%;
                    height: 250px;
                    background-color: #dfdfdf;
                    border-bottom-left-radius: 15px;
                    border-bottom-right-radius: 15px;
                    padding: 40px 25px 75px;
                    box-sizing: border-box;
                    .title{
                        font-family: 'NexonGothicMedium';
                        font-size: 28px;
                        color: #222222;
                        margin-bottom: 15px;
                    }
                    .text{
                        font-family: 'NexonGothicRegular';
                        font-size: 18px;
                        color: #222222;
                        line-height: 1.5;
                    }
                }
                a{
                    font-family: 'NexonGothicRegular';
                    font-size: 18px;
                    color: #222222;
                    position: absolute;
                    bottom: 30px;
                    right: 25px;
                    .icon{
                        font-size: 12px;
                        margin-left: 4px;
                    }
                }
            }
        }

        .button-prev{
            color: #c8c8c8;
            font-size: 50px;
            position: absolute;
            top: 45%;
            left: -130px;
            cursor: pointer;
        }

        .button-next{
            color: #c8c8c8;
            font-size: 50px;
            position: absolute;
            top: 45%;
            right: -130px;
            cursor: pointer;
        }
    }

`