import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import sec03_01 from "../images/sec03_01.jpg"

export default function Content() {
    return (
        <ContentContainer>
            <Link to='/health/post' className="content-box">
                <div className="img-box">
                    <img src={sec03_01} />
                </div>

                <div className="text-box">
                    <div className="category-box">
                        <p>카테고리</p>
                        <p className="keyword">키워드</p>
                    </div>

                    <p className="title">나는야 제목이다 제목제목제목제목제목</p>
                </div>
            </Link>

            <Link to='/health/post' className="content-box">
                <div className="img-box">
                    <img src={sec03_01} />
                </div>

                <div className="text-box">
                    <div className="category-box">
                        <p>카테고리</p>
                        <p className="keyword">키워드</p>
                    </div>

                    <p className="title">나는야 제목이다 제목제목제목제목제목</p>
                </div>
            </Link>

            <Link to='/health/post' className="content-box">
                <div className="img-box">
                    <img src={sec03_01} />
                </div>

                <div className="text-box">
                    <div className="category-box">
                        <p>카테고리</p>
                        <p className="keyword">키워드</p>
                    </div>

                    <p className="title">나는야 제목이다 제목제목제목제목제목</p>
                </div>
            </Link>

            <Link to='/health/post' className="content-box">
                <div className="img-box">
                    <img src={sec03_01} />
                </div>

                <div className="text-box">
                    <div className="category-box">
                        <p>카테고리</p>
                        <p className="keyword">키워드</p>
                    </div>

                    <p className="title">나는야 제목이다 제목제목제목제목제목</p>
                </div>
            </Link>

            <Link to='/health/post' className="content-box">
                <div className="img-box">
                    <img src={sec03_01} />
                </div>

                <div className="text-box">
                    <div className="category-box">
                        <p>카테고리</p>
                        <p className="keyword">키워드</p>
                    </div>

                    <p className="title">나는야 제목이다 제목제목제목제목제목</p>
                </div>
            </Link>

            <Link to='/health/post' className="content-box">
                <div className="img-box">
                    <img src={sec03_01} />
                </div>

                <div className="text-box">
                    <div className="category-box">
                        <p>카테고리</p>
                        <p className="keyword">키워드</p>
                    </div>

                    <p className="title">나는야 제목이다 제목제목제목제목제목</p>
                </div>
            </Link>

            <Link to='/health/post' className="content-box">
                <div className="img-box">
                    <img src={sec03_01} />
                </div>

                <div className="text-box">
                    <div className="category-box">
                        <p>카테고리</p>
                        <p className="keyword">키워드</p>
                    </div>

                    <p className="title">나는야 제목이다 제목제목제목제목제목</p>
                </div>
            </Link>

            <Link to='/health/post' className="content-box">
                <div className="img-box">
                    <img src={sec03_01} />
                </div>

                <div className="text-box">
                    <div className="category-box">
                        <p>카테고리</p>
                        <p className="keyword">키워드</p>
                    </div>

                    <p className="title">나는야 제목이다 제목제목제목제목제목</p>
                </div>
            </Link>
        </ContentContainer>
    )
}

const ContentContainer = styled.div`
    padding: 50px 180px 150px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    gap: 60px 5%;

    .content-box{
        display: block;
        width: 30%;
        height: 380px;

        &:hover .img-box img{
            transform: scale(1.1);
        }

        .img-box{
            width: 100%;
            height: 300px;
            border-radius: 8px;
            overflow: hidden;
            margin-bottom: 16px;

            & > img{
                width: 100%;
                transition: 0.5s;
            }
        }

        .text-box{
            .category-box{
                display: flex;
                align-items: center;
                margin-bottom: 10px;

                & > p{
                    font-family: 'NexonGothicMedium';
                    font-size: 18px;
                    color: #555555;
                }

                .keyword{
                    color: #b2b2b2;
                    margin-left: 16px;
                    position: relative;
                    &:before{
                        content: "";
                        display: block;
                        width: 1px;
                        height: 14px;
                        background-color: #b2b2b2;
                        position: absolute;
                        top: 1px;
                        left: -8px;
                    }
                }
            }

            & > .title{
                font-family: 'NexonGothicBold';
                font-size: 26px;
                line-height: 1.15;
                color: #111111;
            }
        }
    }
`