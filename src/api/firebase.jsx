import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


//회원가입
export async function joinMember(userName, mail, password) {
    const auth = getAuth();

    try {
        const userCredential = await createUserWithEmailAndPassword(auth, userName, mail, password);
        const user = userCredential.user;
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}
