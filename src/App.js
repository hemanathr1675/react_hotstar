import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';
import LoginBtn from './components/LoginBtn/LoginBtn';
import LoginPage from './components/LoginPage/LoginPage';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path='' element={<HomePage />} />
          <Route path='/LoginBtn' element={<LoginBtn />} />
         </Route>
         <Route path='/LoginPage' element={<LoginPage />}/>
        
       
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
    
  );
}

export default App;