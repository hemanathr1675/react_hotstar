import React from 'react';
import "../LoginPage/LoginPage.css";

const LoginPage = () => {
  return (

    <div className="login_overall">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="wrapper">
            <div className="logo">
              <img
                src="https://e1.pxfuel.com/desktop-wallpaper/453/445/desktop-wallpaper-disney-plus-hotstar-now-official-in-india-with-new-subscription-plans-disney-hotstar.jpg"
                alt="image"
              />
            </div>
            <div className="text-center mt-4 name">
              Login or Signup to continue
            </div>
            <form className="p-3 mt-3">
              <div className="form-field d-flex align-items-center">
                <span className="far fa-user"></span>
                <input
                  type="text"
                  name="userName"
                  id="userName"
                  placeholder="Enter mobile number"
                />
              </div>
              <div className="form-field d-flex align-items-center">
                <span className="fas fa-key"></span>
                <input
                  type="password"
                  name="password"
                  id="pwd"
                  placeholder="Password"
                />
              </div>
              <button className="btn mt-3">Login</button>
            </form>
            <div className="text-center fs-6">
              <a href="#">Forgot password?</a> or <a href="#">Sign up</a><br />
              <p style={{ color: 'black', marginTop: '20px' }}>
                Having trouble logging in?{' '}
                <a href="" style={{ color: 'blue' }}>
                  Get help
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default LoginPage;
