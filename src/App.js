import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Wrapper from './components/Wrapper/Wrapper';
import HomePage from './components/Homepage/HomePage';
import Footer from './components/Footer/Footer';
import LoginBtn from './components/LoginBtn/LoginBtn';
import LoginPage from './components/LoginPage/LoginPage';
import SearchPage from './components/SearchPage/SearchPage';
import ViewPage from './components/ViewPage/ViewPage';
import SubscriptionPage from './components/SubscriptionPage/SubscriptionPage';
import MoviePage from './components/MoviePage/MoviePage';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route path='' element={<HomePage />} />
            <Route path='/LoginBtn' element={<LoginBtn />} />
            <Route path='/Search' element={<SearchPage />} />
            <Route path='/View' element={<ViewPage />} />
            <Route path='/Subscribe' element={<SubscriptionPage />} />
            <Route path='/Movie' element={<MoviePage />} />
          </Route>
          <Route path='/LoginPage' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

  );
}

export default App;