import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getCommunityPost, userState } from "../api/firebase";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs"
import CommunityItem from "../component/CommunityItem";


export default function Community() {
    const [user, setUser] = useState();

    useEffect(() => {
        userState((user) => {
            setUser(user);
        })
    }, [])

    const navigate = useNavigate()
    const userData = () => {
        navigate(`/community/write`, { state: { email: user.email } })
    }

    const {
        isLoading,
        isError,
        data: community,
        error
    } = useQuery(['community'], getCommunityPost);

    if (isLoading) {
        return <p className="alert">게시글을 받아오고 있습니다.</p>
    }
    if (isError) {
        return <p className="alert">게시글을 받아오지 못했습니다.</p>
    }

    return (
        <CommunityContainer className="container">
            <div className="title-wrapper">
                <p className="title">커뮤니티</p>
                {user &&
                    // <Link to='/community/write' className="write" onClick={userData}>
                    <button className="write" onClick={userData}>
                        <BsFillPencilFill className="icon" />
                    </button>
                }
            </div>

            <ul className="community-list">
                {community.map((post) => (
                    <CommunityItem key={post.id} post={post} />
                ))}
            </ul>
        </CommunityContainer>
    )
}

const CommunityContainer = styled.div`
    padding: 210px 360px 110px;
    box-sizing: border-box;

    .title-wrapper{
        position: relative;
        margin-bottom: 50px;

        .title{
            font-family: 'Cafe24Ssurround';
            font-size: 45px;
            color: #a5a5a5;
            text-align: center;
        }
        
        .write{
            position: absolute;
            bottom: 0px;
            right: 0px;
            border: none;
            background: transparent;
            cursor: pointer;

            .icon{
                color: #708135;
                font-size: 22px;
            }
        }
    }

    .community-list{
        display: flex;
        flex-wrap: wrap;
        gap: 35px 5%;
    }
`