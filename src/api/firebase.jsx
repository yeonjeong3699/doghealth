import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { getDatabase, get, ref } from "firebase/database";


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