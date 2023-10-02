import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Nav from './component/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Footer from './pages/Footer';
import Health from './pages/Health';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />

      <Routes> {/* index에 연결 후 사용하겠다고 선언 */}
        <Route path='/' element={<Main />} />
        <Route path='/health' element={<Health />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
