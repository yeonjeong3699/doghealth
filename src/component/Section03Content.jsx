import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import * as DOMPurify from "dompurify";
import sec03_01 from "../images/sec03_01.jpg"


export default function Section03Content({ post }) {
    const navigate = useNavigate();

    const linkClick = () => {
        navigate(`/health/posts/${post.id}`, { state: { post } });
    }

    return (
        <Section03ContentContainer onClick={linkClick}>
            <div className="img-box">
                <img src={post?.image} />
                {/* <img src={sec03_01} /> */}
            </div>

            <div className="text-box">
                <div className="category-box">
                    <p className="content-category">{post?.category}</p>
                    <p className="content-keyword">{post?.keyword}</p>
                </div>
                <p className="content-title">{post?.title}</p>
                {post?.content && (
                    <div
                        className="content-text"
                        dangerouslySetInnerHTML={{
                            __html: DOMPurify.sanitize(String(post.content)),
                        }}
                    />
                )}
            </div>
        </Section03ContentContainer>
    )
}

const Section03ContentContainer = styled.div`
    width: 49%;
    display: flex;
    gap: 20px;

    .img-box{
        width: 60%;
        height: 180px;
        border-radius: 10px;
        overflow: hidden;

        & > img{
            width: 100%;
            height: 100%;
            transition: 0.5s;

            &:hover{
                transform: scale(1.1);
            }
        }
    }

    .text-box{
        .category-box{
            display: flex;

            & > p{
                font-family: 'NexonGothicMedium';
                font-size: 18px;
                color: #888888;
            }

            .content-keyword{
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

        .content-title{
            font-family: 'NexonGothicBold';
            font-size: 26px;
            line-height: 1.15;
            color: #222222;
            margin: 5px 0px 10px;

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
        }

        .content-text{
            p, span{
                font-family: 'NexonGothicLight' !important;
                font-size: 18px !important;
                font-weight: 700 !important;
                line-height: 1.3 !important;
                color: #555555 !important;
                background-color: transparent !important;
            }

            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 5;
        }
    }
`