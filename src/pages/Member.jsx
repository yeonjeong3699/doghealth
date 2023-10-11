import React, { useState } from "react";
import styled from "styled-components";
import { joinMember } from "../api/firebase";
import { useNavigate } from "react-router-dom";

export default function Member() {
    const [memberEmail, setMemberEmail] = useState('');
    const [memberPw, setMemberPw] = useState('');

    const [emailError, setEmailError] = useState('');
    const [pwError, setPsError] = useState('');

    const navigate = useNavigate();

    const signUpEvent = async (e) => {
        e.preventDefault();

        try {
            const user = await joinMember(memberEmail, memberPw);
            console.log(user);
            if (memberPw.length < 8) {
                setPsError('비밀번호는 8글자 이상이어야 합니다.');
            } else {
                navigate('/')
            }

        } catch (error) {
            console.error(error);
        }

    }

    return (
        <MemberContainer className="container">
            <h2>회원가입</h2>

            <form onSubmit={signUpEvent}>
                <div className="input-box">
                    <label htmlFor="memberEmail">이메일</label>
                    <input
                        type="email"
                        id="memberEmail"
                        placeholder="이메일을 입력해 주세요."
                        required
                        value={memberEmail}
                        onChange={(e) => setMemberEmail(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="memberPw">비밀번호</label>
                    <input
                        type="password"
                        id="memberPw"
                        placeholder="비밀번호를 입력해 주세요."
                        required
                        value={memberPw}
                        onChange={(e) => setMemberPw(e.target.value)}
                    />
                    {pwError && <p className="error-text">{pwError}</p>}
                </div>

                <button type="submit" className="member-btn">회원가입</button>
            </form>
        </MemberContainer>
    )
}

const MemberContainer = styled.div`
    padding: 200px 0px 100px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 46px;

    h2{
        font-family: 'Cafe24Ssurround';
        font-size: 45px;
        color: #a5a5a5;
        text-align: center;
    }

    form{
        .input-box{
            position: relative;
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 26px;
            margin-bottom: 16px;

            label{
                font-family: 'NexonGothicLight';
                font-weight: 900;
                font-size: 20px;
                color: #708135;
            }

            input{
                width: 420px;
                height: 42px;
                border: solid 1px #dedede;
                font-family: 'NexonGothicRegular';
                font-size: 18px;
                text-indent: 10px;
            }

            .error-text{
                font-family: 'NexonGothicRegular';
                font-size: 18px;
                color: #777777;
                position: absolute;
                right: -280px;
            }
        }

        .member-btn{
            display: block;
            width: 100%;
            height: 60px;
            border: none;
            background-color: #c7d78e;
            font-family: 'NexonGothicMedium';
            font-size: 26px;
            color: white;
            margin-top: 40px;
            cursor: pointer;
        }
    }
`