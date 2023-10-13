import React from "react";
import styled from "styled-components";

//React-quill
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';

//font
// import NexonGothicLight from "../font"


export default function NewPost() {
    //인덱스 자동 생성, 카테고리, 키워드, 제목, 날짜
    //이미지, 내용
    //출처

    // const Font = Quill.import("src/font")
    // Font.whitelist = ['NexonGothicLight', 'NexonGothicRegular', 'NexonGothicMedium', 'NexonGothicBold']
    // Quill.register(Font, true)

    const modules = {
        toolbar: {
            container: [
                ["image"],
                [{ 'font': ['NexonGothicLight', 'NexonGothicRegular', 'NexonGothicMedium', 'NexonGothicBold'] }],
                // [{ 'font': Font }],
                [{ 'size': ['small', false, 'large', 'huge'] }],
                [{ 'header': 1 }, { 'header': 2 }],
                ['bold', 'underline'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'align': [] }],
                [{ 'color': [] }, { 'background': [] }],
                ['clean']
            ]
        }
    }

    return (
        <NewPostContainer className="container">

            <ReactQuill
                modules={modules}
                theme="snow"
            />
        </NewPostContainer>
    )
}

const NewPostContainer = styled.div`
    padding-top: 110px;
    box-sizing: border-box;
`