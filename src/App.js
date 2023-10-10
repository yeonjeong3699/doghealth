import './App.css';
import GlobalStyle from './style/GlobalStyle';
import { Route, Routes, useLocation } from 'react-router-dom';

//component
import ScrollTop from './component/ScrollTop';
import Nav from './component/Nav';
import NavChange from './component/NavChange';
import Footer from './component/Footer';

//page
import Main from './pages/Main';
import Health from './pages/Health';
import Head from './pages/Head';
import Body from './pages/Body';
import Leg from './pages/Leg';
import Post from './pages/Post';
import NewPost from './pages/NewPost';
import FindHospital from './pages/FindHospital';
import Community from './pages/Community';
import Login from './pages/Login';
import Member from './pages/Member';


function App() {
  const location = useLocation();
  const url = location.pathname;

  return (
    <>
      <ScrollTop />
      <GlobalStyle />
      {url === '/' || url === '/health' ? <Nav /> : <NavChange />}

      <Routes> {/* index에 연결 후 사용하겠다고 선언 */}
        <Route path='/' element={<Main />} />

        <Route path='/health' element={<Health />} />
        <Route path='/health/head' element={<Head />} />
        <Route path='/health/body' element={<Body />} />
        <Route path='/health/leg' element={<Leg />} />
        <Route path='/health/post' element={<Post />} />
        <Route path='/health/newPost' element={<NewPost />} />

        <Route path='/find-hospital' element={<FindHospital />} />
        <Route path='/community' element={<Community />} />
        <Route path='/login' element={<Login />} />
        <Route path='/member' element={<Member />} />

      </Routes>

      <Footer />
    </>
  );
}

export default App;
