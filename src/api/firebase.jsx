import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, get, ref, set } from "firebase/database";
import { getDownloadURL, getStorage, ref as storageRef, uploadBytes } from "firebase/storage";
import { v4 as uuid } from 'uuid'


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_STORAGE_MESSAGINGSENDERID
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);
const storage = getStorage(app);

export { auth, storage };


//회원가입
export async function joinMember(email, password) {
    const auth = getAuth();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}

//구글 로그인
export async function googleLogin() {
    return signInWithPopup(auth, provider)
        .then((result) => {
            const user = result.user;
            console.log(user);
            return user;
        }).catch(console.error);
}

//이메일 로그인
export async function emailLogin(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password); //signInWithEmailAndPassword: 회원 정보 확인
        return userCredential.user;
    } catch (error) {
        console.error(error);
    }
}

//로그아웃
export async function logout() {
    signOut(auth).then(() => {

    }).catch((error) => {

    });
}

//자동 로그인 방지
provider.setCustomParameters({
    prompt: 'select_account'
})

//사용자의 정보를 받아올 함수
export function userState(callback) {
    onAuthStateChanged(auth, async (user) => {
        const userUpdate = user ? await adminUser(user) : user;
        callback(userUpdate)
    })
}

async function adminUser(user) {
    try {
        const adminState = await get(ref(database, 'admin'));

        if (adminState.exists()) {
            const admins = adminState.val();
            const isAdmin = admins.includes(user.email)
            return { ...user, isAdmin };
        }
        return user;
    } catch (error) {
        console.error(error)
        throw error
    }
}

//데이터베이스에 게시글 업로드
export async function addPost(date, category, keyword, title, source, content, image, storage) {
    const id = uuid();
    return set(ref(database, `posts/${id}`), {
        id,
        date,
        category,
        keyword,
        title,
        source,
        content,
        image
    })
}

//데이터베이스에 있는 게시글 가져오기
export async function getPost() {
    return get(ref(database, 'posts')).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val())
        }
        return []
    })
}

//스토리지에 이미지 업로드
export async function addImg(imageUpload, setImageList) {
    const storage = getStorage();

    try {
        if (imageUpload) {
            const imgRef = storageRef(storage, `images/${imageUpload}`);

            uploadBytes(imgRef, imageUpload).then((snapshot) => {
                getDownloadURL(snapshot.ref).then((url) => {
                    setImageList((prev) => [...prev, url]);
                });
            });
        } else {
            console.error('업로드 실패');
        }
    } catch (error) {
        console.error(error);
    }
}

//스토리지에 있는 이미지 가져오기
export async function getImg(imgPath) {
    const storage = getStorage();

    try {
        console.log(imgPath);

        const imgRef = storageRef(storage, `images/${imgPath}`);
        const downloadURL = await getDownloadURL(imgRef);

        return downloadURL;
    } catch (error) {
        console.error(error);
        throw error;
    }
}

//데이터베이스에 커뮤니티 게시글 업로드
export async function addCommunityPost(user, date, title, text, images) {
    const id = uuid();
    const postData = {
        id,
        user,
        date,
        title,
        text
    };
    if (images !== undefined) {
        postData.images = images;
    }
    return set(ref(database, `/community/${id}`), postData);
}

//데이터베이스에 있는 커뮤니티 게시글 가져오기
export async function getCommunityPost() {
    return get(ref(database, 'community')).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val())
        }
        return []
    })
}

//데이터베이스에 커뮤니티 댓글 업로드
export async function addComment(postId, user, text) {
    const id = uuid();
    return set(ref(database, `/community/${postId}/comments/${id}`), {
        id,
        user,
        text
    })
}

//데이터베이스에 있는 커뮤니티 댓글 가져오기
export async function getComment(postId) {
    return get(ref(database, `/community/${postId}/comments`)).then((snapshot) => {
        if (snapshot.exists()) {
            return Object.values(snapshot.val())
        }
        return []
    })
}

//카테고리 필터
export async function getCategory(category) {
    return get(ref(database, 'posts')).then((snapshot) => {
        if (snapshot.exists()) {
            const allPost = Object.values(snapshot.val());
            const filterPost = allPost.filter((post) => (post.category === category))
            return filterPost
        }
        return [];
    })
}