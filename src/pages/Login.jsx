import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
    return (
        <LoginContainer className="container">
            <h2>로그인</h2>

            <form action="" method="">
                <div className="input-box">
                    <label for="userId">아이디</label>
                    <input type="text" id="userId" placeholder="아이디를 입력해 주세요." required />
                </div>

                <div className="input-box">
                    <label for="userPw">비밀번호</label>
                    <input type="password" id="userPw" placeholder="비밀번호를 입력해 주세요." required />
                </div>

                <button className="login-btn">로그인</button>
                <Link to='/member' className="member-btn">회원가입</Link>
            </form>
        </LoginContainer>
    )
}

const LoginContainer = styled.div`
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
    }

    form{
        .input-box{
            display: flex;
            flex-direction: column;
            margin-bottom: 30px;

            label{
                font-family: 'NexonGothicMedium';
                font-size: 24px;
                color: #708135;
                margin-bottom: 10px;
            }

            input{
                width: 420px;
                height: 42px;
                border: solid 1px #dedede;
                font-family: 'NexonGothicRegular';
                font-size: 18px;
                text-indent: 10px;
            }
        }

        .login-btn{
            display: block;
            width: 422px;
            height: 60px;
            border: none;
            background-color: #c7d78e;
            font-family: 'NexonGothicMedium';
            font-size: 26px;
            color: white;
            margin-bottom: 10px;
            cursor: pointer;
        }

        .member-btn{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 420px;
            height: 58px;
            border: solid 1px #c7d78e;
            background-color: white;
            font-family: 'NexonGothicMedium';
            font-size: 26px;
            color: #c7d78e;
            cursor: pointer;
        }
    }
`