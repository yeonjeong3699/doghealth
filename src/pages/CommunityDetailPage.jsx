import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { addComment, getComment } from "../api/firebase";
import { useQuery } from "@tanstack/react-query";

export default function CommunityDetailPage() {
    const state = useLocation().state;
    const { id, title, text } = state;

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
                <p className="text">{text}</p>
            </div>

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
        </CommunityDetailPageContainer>
    )
}

const CommunityDetailPageContainer = styled.div`
    padding: 210px 360px 110px;
    box-sizing: border-box;

    .post-box{
        padding-bottom: 30px;
        box-sizing: border-box;
        border-bottom: solid 1px #dedede;

        .title{
            font-family: 'NexonGothicBold';
            font-size: 40px;
            color: #222222;
            line-height: 1.2;
            margin-bottom: 15px;
        }

        .text{
            font-family: 'NexonGothicLight';
            font-weight: 900;
            font-size: 22px;
            color: #333333;
            line-height: 1.4;
        }
    }

    form{
        margin-top: 30px;

        .comment-write{
            width: 90%;
            height: 30px;
            margin-right: 1%;
            border: solid 1px #cccccc;
            font-family: 'NexonGothicRegular';
            font-size: 16px;
            text-indent: 8px;
        }

        .comment-btn{
            width: 8.5%;
            height: 34px;
            border: none;
            background-color: #999;
            font-family: 'NexonGothicRegular';
            font-size: 18px;
            color: white;
        }
    }

    .comment-wrapper{
        margin-top: 15px;
        padding: 0px 10px;
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        gap: 6px;

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

`