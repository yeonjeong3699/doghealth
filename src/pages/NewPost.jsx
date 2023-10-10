import React from "react";
import styled from "styled-components";

export default function NewPost() {
    //카테고리, 키워드, 제목, 날짜, 이미지, 내용(원인, 증상, 위험성, 치료 방법, 예방 방법, 관리 방법), 출처

    return (
        <NewPostContainer className="container">
            <form>
                <select name="category">
                    <option>카테고리 선택</option>
                    <option>머리 자가진단</option>
                    <option>몸 자가진단</option>
                    <option>다리 자가진단</option>
                </select>

                <input type="text" name="keyword" placeholder="키워드"/>
                <input type="text" name="title" placeholder="제목"/>
                <input type="date" name="date"/>
                <input type="file" name="img" accept="img/*" />
                

            </form>
        </NewPostContainer>
    )
}

const NewPostContainer = styled.div`
    padding-top: 110px;
    box-sizing: border-box;
`