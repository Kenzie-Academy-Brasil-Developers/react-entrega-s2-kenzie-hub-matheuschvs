import { Router } from './routes';
import { GlobalStyle } from './styles/global'
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className='App'>
      <ToastContainer theme='dark' />
      <GlobalStyle />
      <Router />
    </div>
  );
}

export default App;
