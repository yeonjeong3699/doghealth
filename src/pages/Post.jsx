import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HiHome } from "react-icons/hi";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from 'react-router-dom';
import { getCategory } from "../api/firebase";
import SlidePostList from "../component/SlidePostList";
import * as DOMPurify from "dompurify";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function Post() {
    const { state } = useLocation();
    const post = state ? state.post : null;

    const [categoryPost, setCategoryPost] = useState([]);

    useEffect(() => {
        getCategory(post.category)
            .then((post) => {
                setCategoryPost(post);
            })
            .catch((error) => {
                console.error(error)
            })
    }, [])

    if (!post) {
        return <p>페이지를 찾을 수 없습니다.</p>;
    }

    return (
        <>
            <PostContainer className="container">
                <div className="breadcrumb">
                    <Link to='/health'><HiHome className="home" />자가진단</Link>
                    <IoIosArrowForward className="icon" />
                    <p>{post.category}</p>
                    <IoIosArrowForward className="icon" />
                    <p>{post.keyword}</p>
                    <IoIosArrowForward className="icon" />
                    <p>{post.title}</p>
                </div>

                <div className="title-box">
                    <p className="title">{post.title}</p>
                    <p className="date">{post.date}</p>
                </div>

                <img src={post.image} />

                {post.content && (
                    <div
                        className="content-box"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(String(post.content)),
                        }}
                    />
                )}

                <p className="source">출처: {post.source}</p>
            </PostContainer>

            <SlidePostContainer className="container">
                <div className="random-post-wrapper">
                    <p className="title">함께 읽어보세요!</p>

                    <Swiper className="swiper-container"
                        slidesPerView={4}
                        slidesPerGroup={1}
                        spaceBetween={26}
                        modules={[Navigation]}
                        navigation={{
                            prevEl: '.button-prev',
                            nextEl: '.button-next'
                        }}
                        allowTouchMove={false}
                    >
                        {categoryPost &&
                            categoryPost.map(item => (
                                post.id === item.id ? '' : <SwiperSlide><SlidePostList key={item.id} post={item} /></SwiperSlide>
                            ))
                        }
                    </Swiper>

                    <IoIosArrowBack className="button-prev" />
                    <IoIosArrowForward className="button-next" />
                </div>
            </SlidePostContainer>


        </>
    )
}

const PostContainer = styled.div`
    padding: 110px 360px 150px;
    box-sizing: border-box;

    .breadcrumb{
        display: flex;
        align-items: center;
        gap: 4px;
        margin-top: 100px;

        & > a, p{
            font-family: 'NexonGothicLight';
            font-weight: 900;
            font-size: 18px;
            color: #d1d1d1;
            margin-top: 2px;

            .home{
                font-size: 20px;
                vertical-align: middle;
                margin-right: 3px;
            }
        }
        .icon{
            font-size: 18px;
            color: #d1d1d1;
        }

        
    }

    .title-box{
        margin-bottom: 65px;
        .title{
            font-family: 'NexonGothicBold';
            font-size: 50px;
            color: #222222;
            margin: 35px 0px 15px;
        }
        .date{
            font-family: 'NexonGothicLight';
            font-weight: 900;
            font-size: 20px;
            color: #747474;
        }
    }

    img{
        width: 100%;
        margin-bottom: 65px;
    }

    .content-box{
        margin-bottom: 50px;
    }

    .source{
        font-family: 'NexonGothicRegular';
        font-size: 20px;
        color: #9f9f9f;
    }
`

const SlidePostContainer = styled.div`
    width: 100%;
    background-color: #ffefbe;

    .random-post-wrapper{
        padding: 80px 360px;
        box-sizing: border-box;
        position: relative;

        & > .title{
            font-family: 'NexonGothicMedium';
            font-size: 30px;
            color: #835b17;
            margin-bottom: 35px;
        }

        .button-prev{
            color: #cda053;
            font-size: 50px;
            position: absolute;
            top: 47%;
            left: 200px;
            cursor: pointer;
        }

        .button-next{
            color: #cda053;
            font-size: 50px;
            position: absolute;
            top: 47%;
            right: 200px;
            cursor: pointer;
        }
    }
`