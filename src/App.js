import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path='' element={<HomePage />} />
          
          
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer />
    </>
    
  );
}

export default App;
