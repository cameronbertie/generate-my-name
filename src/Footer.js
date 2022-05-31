import React from "react";
import logo from "./logo.svg";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="footer-container">
          <div className="footer-item-1">
            <p>© 10 Controls, 2022</p>
          </div>
          <div className="footer-item-2">
            <div className="footer-nav-container">
              {/* <div className="footer-nav-link">
                <p>
                  <a href="#">Privacy Policy</a>
                </p>
              </div>
              <div className="footer-nav-link">
                <p>
                  <a href="#">Terms of Use</a>
                </p>
              </div> */}
              <div className="footer-nav-link">
              <a href="https://10controls.com/" target="_blank" rel="noreferrer">
            <img src={logo} alt="Logo" className="logo" />
          </a>
              </div>
            </div>
          </div>
          <div className="footer-item-3">
            <div className="footer-message-container">
              <div className="footer-message">
                <p>
                  Made with <span style={{ color: "#C18794" }}>❤️</span> in
                  Slough, England
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
