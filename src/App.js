import React from "react";
import Form from "./Form";

import "./App.css";

import Header from "./Header";
import Footer from "./Footer";

class App extends React.Component {

  render() {
    return (
      <div className = "container">
        <Header />
        <Form />
        <Footer />
      </div>
    );
  }
}

export default App;
