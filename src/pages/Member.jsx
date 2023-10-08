import React, { useState } from "react";
import styled from "styled-components";
import { joinMember } from "../api/firebase";

export default function Member() {
    const [memberName, setMemberName] = useState('');
    const [memberMail, setMemberMail] = useState('');
    const [memberPw, setMemberPw] = useState('');

    const [idError, setIdError] = useState('');
    const [pwError, setPsError] = useState('');

    const signUpEvent = async (e) => {
        e.preventDefault();

        if (memberPw.length < 8) {
            setPsError('비밀번호는 8글자 이상이어야 합니다.');
        }

        try {
            const user = await joinMember(memberName, memberMail, memberPw);
            console.log(user);
        } catch (error) {
            console.error(error);
        }

    }

    return (
        <MemberContainer className="container">
            <h2>회원가입</h2>

            <form onSubmit={signUpEvent}>
                <div className="input-box">
                    <label for="memberName">이름</label>
                    <input
                        type="text"
                        id="memberName"
                        placeholder="이름을 입력해 주세요."
                        required
                        value={memberName}
                        onChange={(e) => setMemberName(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label for="memberMail">이메일</label>
                    <input
                        type="text"
                        id="memberMail"
                        placeholder="이메일을 입력해 주세요."
                        required
                        value={memberMail}
                        onChange={(e) => setMemberMail(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label for="memberPw">비밀번호</label>
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