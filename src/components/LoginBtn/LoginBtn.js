import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";
const LoginBtn = () => {
  return (

    <div>
      
      
        <div className="login">
          <div className="row">
            <div className="col">
              <button type="button" className="btn btn-outline-dark" style={{ margin: '20px 5px 0 80%' }}>
                <h6 style={{ color: 'white' }}>Help & Support</h6>
              </button><br />
              <div className="log-style">
                <h3 style={{ color: 'whitesmoke' }}>Login to Disney + Hotstar</h3><br />
                <p style={{ color: 'azure', textAlign: 'center' }}>Start watching from where you left off, personalise for kids and more</p>
                <a href="login_page/login_page.html">
                 <Link to='/LoginPage'><button type="button" className="btn btn-primary btn-lg" style={{ color: 'whitesmoke' }}>Log in</button></Link> 
                </a>
              </div>
            </div>
          </div>
        </div>
      
      
    </div>

  );
};

export default LoginBtn;
