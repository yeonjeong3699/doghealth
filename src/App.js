import './App.css';
import GlobalStyle from './style/GlobalStyle';
import Nav from './component/Nav';
import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <GlobalStyle />
      <Nav />

      <Routes>
        <Route path='/' element={<Main />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
