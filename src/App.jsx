import { Router } from './routes';
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <>
      <ToastContainer theme='dark' />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
