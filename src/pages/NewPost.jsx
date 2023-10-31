import React, { useState } from "react";
import styled from "styled-components";
import { addImg, addPost, getImg, storage } from "../api/firebase";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { useNavigate } from "react-router";

//React-quill
import ReactQuill, { Quill } from "react-quill";
import 'react-quill/dist/quill.snow.css';
import '../style/quillFonts.css';




export default function NewPost() {
    //해야할 것: 이미지

    const [category, setCategory] = useState('');
    const [keyword, setKeyword] = useState('');
    const [source, setSource] = useState('');
    const [title, setTitle] = useState('');
    const [imgPath, setImgPath] = useState('');
    const [imageUpload, setImageUpload] = useState(null);
    const [imageList, setImageList] = useState([]);
    const [content, setContent] = useState('');

    const navigate = useNavigate();

    const today = new Date();
    const date = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;

    //게시글 업로드
    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            let imageUrl = "";

            if (imageUpload) {
                const storageInstance = getStorage();
                const imgRef = ref(storageInstance, `images/${imageUpload.name}`)
                await uploadBytes(imgRef, imageUpload);
                imageUrl = await getDownloadURL(imgRef);
                setImageList(prev => [...prev, imageUrl]);
            }
            await addPost(date, category, keyword, title, source, content, imageUrl);
            navigate('/health');
        } catch (error) {
            console.error('업로드 실패', error);
        }
    }

    //React-quill
    const Font = Quill.import("formats/font")
    Font.whitelist = ['NexonGothicLight', 'NexonGothicRegular', 'NexonGothicMedium', 'NexonGothicBold']
    Quill.register(Font, true)

    const Size = Quill.import('formats/size');
    Size.whitelist = ['20px', '22px', '24px', '26px', '28px', '30px', '32px'];
    Quill.register(Size, true);

    const modules = {
        toolbar: {
            container: [
                [{ 'font': ['', 'NexonGothicLight', 'NexonGothicRegular', 'NexonGothicMedium', 'NexonGothicBold'] }],
                [{ 'size': ['20px', '22px', '24px', '26px', '28px', '30px', '32px'] }],
                ['bold', 'underline'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                [{ 'align': [] }],
                [{ 'color': [] }, { 'background': [] }],
                ['clean']
            ]
        }
    }

    const formats = ["font", "size", "bold", "underline", "list", "align", "color", "background", "clean"]

    return (
        <NewPostContainer className="container">
            <form onSubmit={onSubmit}>
                <div className="input-top">
                    <div className="input-top-left">
                        <div className="input-box">
                            <label htmlFor="category">카테고리</label>
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

                        <div className="input-box">
                            <label htmlFor="source">출처</label>
                            <input
                                type="text"
                                id="source"
                                required
                                value={source}
                                onChange={(e) => setSource(e.target.value)}
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
                    accept="image/*"
                    onChange={(e) => {
                        setImgPath(e.target.files[0]);
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
                formats={formats}
                value={content}
                onChange={setContent}
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

            #category, #keyword, #source{
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