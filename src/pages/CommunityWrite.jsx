import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addCommunityPost, userState } from "../api/firebase";
import user from "./Community"


export default function CommunityWrite() {
    const [communityTitle, setCommunityTitle] = useState('');
    const [communityText, setCommunityText] = useState('');
    // const [user, setUser] = useState();

    const navigate = useNavigate();

    const today = new Date();
    const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await addCommunityPost(user, date, communityTitle, communityText);
            navigate('/community');
        } catch (error) {
            console.error(error);
        }
    }

    // useEffect(() => {
    //     userState((user) => {
    //         setUser(user);
    //     })
    // }, [])

    console.log(user)

    return (
        <CommunityWriteContainer className="container">
            <p className="title">게시글 작성</p>

            <form onSubmit={onSubmit}>
                <div className="writer">
                    <p>작성자</p>
                    {user && <p>{user.displayName}</p>}
                </div>

                <div className="write-box">
                    <label htmlFor="communityTitle">제목</label>
                    <input
                        type="text"
                        id="communityTitle"
                        required
                        value={communityTitle}
                        onChange={(e) => setCommunityTitle(e.target.value)}
                    />
                </div>

                <div className="write-box">
                    <label htmlFor="communityText">내용</label>
                    <textarea
                        type="text"
                        id="communityText"
                        required
                        value={communityText}
                        onChange={(e) => setCommunityText(e.target.value)}
                    />
                </div>

                <button type="submit" className="submit-btn">작성하기</button>
            </form>
        </CommunityWriteContainer>
    )
}

const CommunityWriteContainer = styled.div`
    padding: 210px 360px 110px;
    box-sizing: border-box;

    .title{
        font-family: 'Cafe24Ssurround';
        font-size: 45px;
        color: #a5a5a5;
        text-align: center;
        margin-bottom: 30px;
    }

    .writer{
        display: flex;
    }

    .write-box{
        label{
            font-family: 'NexonGothicMedium';
            font-size: 18px;
            color: #333333;
            text-indent: 4px;
            display: block;
            margin-bottom: 6px;
        }

        #communityTitle{
            width: 100%;
            height: 30px;
            border: solid 1px #cccccc;
            font-family: 'NexonGothicRegular';
            font-size: 16px;
            text-indent: 4px;
            margin-bottom: 20px;
        }

        #communityText{
            resize: none;
            width: 100%;
            height: 300px;
            border: solid 1px #cccccc;
            font-family: 'NexonGothicRegular';
            font-size: 16px;
            margin-bottom: 20px;
        }


    }

    .submit-btn{
        width: 100.5%;
        height: 60px;
        border: none;
        background-color: #c7d78e;
        font-family: 'NexonGothicMedium';
        font-size: 26px;
        color: white;
        margin-bottom: 10px;
        cursor: pointer;
    }

`