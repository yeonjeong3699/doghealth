import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

export { auth };


//회원가입
export async function joinMember(userName, email, password) {
    const auth = getAuth();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, userName, email, password);
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

//