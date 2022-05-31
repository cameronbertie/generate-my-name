import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header>
        <div className="header-container">
          <h1 className="main-heading">
            GENERATE<span style={{ color: "white" }}>MY</span>NAME.COM
          </h1>
          <p className="secondary-heading">Created By 10 Controls</p>
        </div>
      </header>
    );
  }
}

export default Header;
