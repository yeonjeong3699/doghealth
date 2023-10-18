import './App.css';
import GlobalStyle from './style/GlobalStyle';
import { Outlet, Route, Routes, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Main from './pages/Main';
import ScrollTop from './component/ScrollTop';
import Nav from './component/Nav';
import NavChange from './component/NavChange';
import Footer from './component/Footer';



const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const url = location.pathname;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ScrollTop />
        <GlobalStyle />
        {url === '/' || url === '/health' ? <Nav /> : <NavChange />}
        {/* <Nav /> */}

        <Routes> {/* index에 연결 후 사용하겠다고 선언 */}
          <Route path='/' element={<Main />} />
        </Routes>

        <Outlet />

        <Footer />
      </QueryClientProvider>
    </>
  );
}

export default App;
