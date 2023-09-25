import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import GlobalStyle from './style/GlobalStyle';
import Nav from './component/Nav';

const queryclient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryclient}>
        <GlobalStyle />
        <Nav />
      </QueryClientProvider>
    </>
  );
}

export default App;
