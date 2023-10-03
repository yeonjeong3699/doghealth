import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Nav from './component/Nav';
import { Route, Routes } from 'react-router-dom';

//page
import Main from './pages/Main';
import Health from './pages/Health';
import Head from './pages/Head';
import Body from './pages/Body';
import Leg from './pages/Leg';
import Post from './pages/Post';
import FindHospital from './pages/FindHospital';
import Footer from './pages/Footer';


function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />

      <Routes> {/* index에 연결 후 사용하겠다고 선언 */}
        <Route path='/' element={<Main />} />

        <Route path='/health' element={<Health />} />
        <Route path='/health/head' element={<Head />} />
        <Route path='/health/body' element={<Body />} />
        <Route path='/health/leg' element={<Leg />} />
        <Route path='/health/post' element={<Post />} />

        <Route path='/find-hospital' element={<FindHospital />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
