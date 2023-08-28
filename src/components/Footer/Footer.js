import React from 'react';
import '../Footer/Footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className="row footer-style">
                {/* Column 1 */}
                <div className="col-3">
                    <h6 style={{ color: 'white', fontFamily: 'sans-serif', marginBottom: '15px' }}>Company</h6><hr />


                    <a href="https://www.hotstar.com/about-us/in">About Us</a><br />

                    <a href="https://careers.hotstar.com/join-us">Careers</a><br />
                </div>

                {/* Column 2 */}
                <div className="col-3">
                    <h6 style={{ color: 'white', fontFamily: 'sans-serif', marginBottom: '15px' }}>View Website in</h6><hr />

                    <a href="https://www.hotstar.com/about-us/in">English</a>
                    <br />
                </div>

                {/* Column 3 */}
                <div className="col-3">
                    <h6 style={{ color: 'white', fontFamily: 'sans-serif', marginBottom: '15px' }}>Need help?</h6><hr />

                    <a href="https://help.hotstar.com/in/en/support/home">Visit help center</a><br />

                    <a href="https://help.hotstar.com/in/en/support/tickets/feedback">Share feedback</a><br />
                </div>

                {/* Column 4 */}
                <div className="col-3">
                    <h6 style={{ color: 'white', fontFamily: 'sans-serif', marginBottom: '15px' }}>Connect with us</h6><hr />
                    <a href="https://www.facebook.com/DisneyPlusHotstar">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                        </svg>
                    </a>
                    <a href="https://twitter.com/DisneyPlusHS">
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16" style={{ marginLeft: '50px' }}>
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>

                    </a>
                    <p className='p_style' style={{ marginTop: '10px' }}>Follow us for more information</p>
                </div>
            </div>

            {/* Copyright */}
            <div className="copyright">
                <div className="row">
                    <div className="col-9">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-c-square" viewBox="0 0 16 16">
                            <path d="..." />
                        </svg>
                        <p style={{ marginBottom: '10px' }}>2023 STAR. All Rights Reserved.</p>
                        <a href="https://www.hotstar.com/tnc/in">Terms of Use</a><br />
                        <a href="https://www.hotstar.com/privacy-policy/in">Privacy Policy</a><br />
                        <a href="https://help.hotstar.com/in/en/support/home">FAQ</a><br />
                    </div>
                    <div className="col-3">
                        <p style={{ color: 'mintcream', marginTop: '18px' }}>Available in</p><hr />
                        <a href="https://play.google.com/store/apps/details?id=in.startv.hotstar"><img src="https://www.rdsdelivery.com/wp-content/uploads/2016/11/get-it-on-google-play-icon-logo-e1486678715107.png" alt="image" height="50px" width="90px" /></a>
                        <a href="https://apps.apple.com/in/app/hotstar/id934459219" style={{ marginLeft: '20%' }}><img src="https://w7.pngwing.com/pngs/314/368/png-transparent-itunes-app-store-apple-logo-apple-text-rectangle-logo.png" alt="image" height="53px" width="90px" /></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
