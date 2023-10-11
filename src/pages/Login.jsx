import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { emailLogin, googleLogin } from "../api/firebase";

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const [emailError, setEmailError] = useState('');
    const [pwError, setPsError] = useState('');

    const navigate = useNavigate();

    const login = async () => {
        const user = await googleLogin();
        navigate('/')
    }

    const loginEvent = async (e) => {
        e.preventDefault();

        if (password.length < 8) {
            setPsError('비밀번호는 8글자 이상이어야 합니다.');
        }else{
            setPsError('');
        }

        try {
            const user = await emailLogin(email, password);
            if (user) {
                navigate('/')
            } else {
                setLoginError('로그인에 실패하였습니다.');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <LoginContainer className="container">
            <h2>로그인</h2>

            <form onSubmit={loginEvent}>
                <div className="input-box">
                    <label htmlFor="userId">아이디</label>
                    <input
                        type="text"
                        id="userId"
                        placeholder="아이디를 입력해 주세요."
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-box">
                    <label htmlFor="userPw">비밀번호</label>
                    <input
                        type="password"
                        id="userPw"
                        placeholder="비밀번호를 입력해 주세요."
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {pwError && <p className="pw-error-text">{pwError}</p>}
                </div>

                {loginError && <p className="login-error-text">{loginError}</p>}
                <button className="login-btn">로그인</button>
                <button onClick={login} className="google-btn">구글 로그인</button>
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

            .pw-error-text{
                font-family: 'NexonGothicMedium';
                font-size: 15px;
                color: #979797;
                margin-top: 6px;
            }
        }

        .login-error-text{
            font-family: 'NexonGothicMedium';
            font-size: 20px;
            color: #979797;
            margin-bottom: 6px;
            text-align: center;
        }

        .login-btn{
            display: block;
            width: 422px;
            height: 60px;
            border: none;
            background-color: #9EB651;
            font-family: 'NexonGothicMedium';
            font-size: 26px;
            color: white;
            margin-bottom: 10px;
            cursor: pointer;
        }

        .google-btn{
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