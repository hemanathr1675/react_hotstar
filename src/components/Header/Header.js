import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <aside className="sidebar">
      <div className="logo1">
        <img
          src="https://o.remove.bg/downloads/f2143276-87d7-4d85-a88b-72162827b0b6/download-removebg-preview.png"
          alt="logo"
          style={{ height: '85px', width: '140px' }}
        />
        <a href="/Subscribe" style={{ textDecoration: 'none' }}>
          <h7 style={{ color: 'goldenrod', marginTop: '30px', marginLeft: '20px', fontWeight: 650 }}>
            Subscribe {'>'}
          </h7>
        </a>
      </div>
      <ul className="links">
        <li>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person-circle"
            viewBox="0 0 16 16"
            style={{ color: 'white' }}
          >
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
            <path
              fillRule="evenodd"
              d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
            />
          </svg>
          <span className="material-symbols-outlined"></span>
          <Link to="/LoginBtn"><div style={{ color: 'white' }}>
            My space
          </div></Link>
        </li> <br/>
        <li>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-search"
    viewBox="0 0 16 16"
    style={{ color: 'white' }}
  >
    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
  </svg>
  <span className="material-symbols-outlined"></span>
  <a href="/Search" style={{ color: 'white' }}>
    Search
  </a>
</li> <br/>
<li>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-house-door-fill"
    viewBox="0 0 16 16"
    style={{ color: 'white' }}
  >
    <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z"/>
  </svg>
  <span className="material-symbols-outlined"></span>
  <a href="/" style={{ color: 'white' }}>
    Home
  </a>
</li><br/>
<li>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-tv"
    viewBox="0 0 16 16"
    style={{ color: 'white' }}
  >
    <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
  </svg>
  <span className="material-symbols-outlined"></span>
  <a href="/" style={{ color: 'white' }}>
    Tv
  </a>
</li><br/>
<li>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="currentColor"
    className="bi bi-camera-reels"
    viewBox="0 0 16 16"
    style={{ color: 'white' }}
  >
    <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0z"/>
    <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h7zm6 8.73V7.27l-3.5 1.555v4.35l3.5 1.556zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1z"/>
    <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
  </svg>
  <span className="material-symbols-outlined"></span>
  <a href="/" style={{ color: 'white' }}>
    Movies
  </a>
</li><br/>


        

        {/* Add the rest of the list items similarly */}
      </ul>
    </aside>
  );
};


export default Header;
