import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { addComment, getComment } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";

export default function CommunityDetailPage() {
    const state = useLocation().state;
    const { id, user, date, title, text } = state;

    const [commentWrite, setCommentWrite] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await addComment(id, commentWrite);
            setCommentWrite('');
        } catch (error) {
            console.error(error);
        }
    }

    const {
        data: comment,
        error
    } = useQuery(['comment'], getComment);

    return (
        <CommunityDetailPageContainer className="container">
            <div className="post-box">
                <p className="title">{title}</p>
                <div className="writer-box">
                    <p className="writer">{user}</p>
                    <p className="date">{date}</p>
                </div>
                <p className="text">{text}</p>
            </div>

            <div className="comment-container">
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        value={commentWrite}
                        onChange={(e) => setCommentWrite(e.target.value)}
                        placeholder="댓글을 작성해 주세요."
                        className="comment-write"
                    />

                    <button type="submit" className="comment-btn">작성하기</button>
                </form>

                <div className="comment-wrapper">
                    <div className="comment-box">
                        <span className="user-name">댓글 작성자</span>
                        <span className="comment">댓글입니다.</span>
                    </div>

                    <div className="comment-box">
                        <span className="user-name">댓글 작성자</span>
                        <span className="comment">댓글입니다.댓글입니다.댓글입니다.댓글입니다.댓글입니다.</span>
                    </div>

                    <div className="comment-box">
                        <span className="user-name">댓글 작성자</span>
                        <span className="comment">
                            장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.장문의 댓글입니다.
                        </span>
                    </div>
                </div>
            </div>
        </CommunityDetailPageContainer>
    )
}

const CommunityDetailPageContainer = styled.div`
    padding: 210px 360px 110px;
    box-sizing: border-box;

    .post-box{
        padding-bottom: 30px;
        box-sizing: border-box;

        .title{
            font-family: 'NexonGothicBold';
            font-size: 46px;
            color: #222222;
            line-height: 1.2;
        }

        .writer-box{
            display: flex;
            margin: 8px 0px 26px;

            .writer{
                font-family: 'NexonGothicLight';
                font-weight: 900;
                font-size: 20px;
                color: #999;
            }

            .date{
                font-family: 'NexonGothicLight';
                font-weight: 900;
                font-size: 20px;
                color: #999;
                position: relative;
                margin-left: 14px;
                padding-left: 14px;
                box-sizing: border-box;

                &:before{
                    content: "";
                    display: block;
                    width: 2px;
                    height: 18px;
                    background-color: #d1d1d1;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                }
            }
        }

        .text{
            font-family: 'NexonGothicLight';
            font-weight: 900;
            font-size: 20px;
            color: #555;
            line-height: 1.4;
        }
    }

    .comment-container{
        background-color: #f3fbd8;
        padding: 20px 14px;
        box-sizing: border-box;
        border-radius: 10px;

        form{
            margin-bottom: 20px;

            .comment-write{
                width: 90%;
                height: 30px;
                margin-right: 1%;
                border: solid 1px #cccccc;
                border-radius: 5px;
                font-family: 'NexonGothicRegular';
                font-size: 16px;
                text-indent: 8px;
            }

            .comment-btn{
                width: 8.4%;
                height: 34px;
                border: none;
                border-radius: 5px;
                background-color: #c7d78e;
                font-family: 'NexonGothicLight';
                font-weight: 900;
                font-size: 16px;
                color: white;
                letter-spacing: 1px;
            }
        }

        .comment-wrapper{
            padding: 0px 10px;
            box-sizing: border-box;
            display: flex;
            flex-direction: column;
            gap: 8px;

            .comment-box{
                .user-name{
                    font-family: 'NexonGothicMedium';
                    font-size: 18px;
                    color: #555;
                    margin-right: 8px;
                }

                .comment{
                    font-family: 'NexonGothicLight';
                    font-size: 18px;
                    color: #222222;
                    line-height: 1.3;
                }
            }

        }
    }
`