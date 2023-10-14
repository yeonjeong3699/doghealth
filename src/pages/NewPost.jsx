import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { addImg, addPost } from "../api/firebase";

//React-quill
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import '../style/quillFonts.css';



export default function NewPost() {
    //해야할 것: 인덱스 자동 생성, 날짜 자동, 이미지, 출처

    const navigate = useNavigate();

    const [category, setCategory] = useState('');
    const [keyword, setKeyword] = useState('');
    const [title, setTitle] = useState('');

    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);



    //게시글 업로드
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            await addImg(imageUpload, setImageList)
            await addPost(category, keyword, title);
            navigate('/health');
        } catch (error) {
            console.error(error);
        }
    }

    //React-quill
    const Font = Quill.import("formats/font")
    Font.whitelist = ['NexonGothicLight', 'NexonGothicRegular', 'NexonGothicMedium', 'NexonGothicBold']
    Quill.register(Font, true)

    const modules = {
        toolbar: {
            container: [
                ["image"],
                [{ 'font': ['', 'NexonGothicLight', 'NexonGothicRegular', 'NexonGothicMedium', 'NexonGothicBold'] }],
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
            <form onSubmit={onSubmit}>
                <div className="input-top">
                    <div className="input-top-left">
                        <div className="input-box">
                            <label htmlFor="cataegory">카테고리</label>
                            <input
                                type="text"
                                id="category"
                                required
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            />
                        </div>

                        <div className="input-box">
                            <label htmlFor="keyword">키워드</label>
                            <input
                                type="text"
                                id="keyword"
                                required
                                value={keyword}
                                onChange={(e) => setKeyword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button type="submit" className="submit-btn">작성하기</button>
                </div>

                <div className="input-box">
                    <label htmlFor="title">제목</label>
                    <input
                        type="text"
                        id="title"
                        required
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}

                    />
                </div>

                <input
                    className="img-upload"
                    type='file'
                    name='file'
                    accept="img/*"
                    onChange={(e) => {
                        setImageUpload(e.target.files[0]);
                    }}
                />
                {imageList.map((el) => {
                    return <img key={el} src={el} />;
                })}
            </form>

            <ReactQuill
                className="react-quill"
                modules={modules}
            />
        </NewPostContainer>
    )
}

const NewPostContainer = styled.div`
    padding: 160px 360px 110px;
    box-sizing: border-box;

    form{
        margin-bottom: 16px;

        .input-top{
            display: flex;
            justify-content: space-between;

            .input-top-left{
                display: flex;
                gap: 30px;
                margin-bottom: 12px;
            }

            .submit-btn{
                display: block;
                width: 100px;
                height: 30px;
                border: none;
                background-color: #9EB651;
                font-family: 'NexonGothicMedium';
                font-size: 18px;
                color: white;
                cursor: pointer;
            }
        }

        .input-box{
            label{
                font-family: 'NexonGothicMedium';
                font-size: 18px;
                color: #333333;
                margin-right: 10px;
            }

            #category{
                width: 150px;
                height: 30px;
                border: solid 1px #cccccc;
                font-family: 'NexonGothicRegular';
                font-size: 16px;
                text-indent: 4px;
            }

            #keyword{
                width: 170px;
                height: 26px;
                border: solid 1px #cccccc;
                font-family: 'NexonGothicRegular';
                font-size: 16px;
                text-indent: 4px;
            }

            #title{
                width: 95.99%;
                height: 26px;
                border: solid 1px #cccccc;
                font-family: 'NexonGothicRegular';
                font-size: 16px;
                text-indent: 4px;
            }
        }

        .img-upload{
            font-family: 'NexonGothicRegular';
            font-size: 16px;
            color: #333333;
            margin-top: 12px;
        }
    }

    .react-quill{
        height: 550px;
    }
`