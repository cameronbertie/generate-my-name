import React, { useState } from "react";
import Names from "./Names";

export default function Form() {
  const [inputValues, setInputValues] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setInputValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    
  };

  return (
    <div>
    
    {!isSubmitted ? (
      <div className="page-container">
      <h2 className="form-heading">DISCOVER YOUR PERFECT GAMING NAME</h2>
    <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group white-placeholder">
          <input
          className="white-placeholder"
            value={inputValues.nickname || ""}
            onChange={handleChange}
            type="text"
            name="nickname"
            placeholder="Nickname"
            
          />
          </div>
          <div className="input-group">
          <p className="input-label">Choose 3 adjectives</p>
          <input
            type="text"
            value={inputValues.adjective1 || ""}
            onChange={handleChange}
            name="adjective1"
            placeholder="Adjective 1"
            
          />
          <input
            type="text"
            value={inputValues.adjective2 || ""}
            onChange={handleChange}
            name="adjective2"
            placeholder="Adjective 2"
            
          />
          <input
            type="text"
            value={inputValues.adjective3 || ""}
            onChange={handleChange}
            name="adjective3"
            placeholder="Adjective 3"
            
          />
          </div>
          <div className="input-group">
          <input
          className="white-placeholder"
            type="text"
            value={inputValues.nationality || ""}
            onChange={handleChange}
            name="nationality"
            placeholder="Nationality"
            
          />
          </div>
          <div className="input-group">
          <p className="input-label">Choose 2 everyday objects</p>
          <input
            type="text"
            value={inputValues.object1 || ""}
            onChange={handleChange}
            name="object1"
            placeholder="Object 1"
            
          />
          <input
            type="text"
            value={inputValues.object2 || ""}
            onChange={handleChange}
            name="object2"
            placeholder="Object 2"
          />
          </div>
          <div className="input-group">
          <input
            type="text"
            value={inputValues.animal || ""}
            onChange={handleChange}
            name="animal"
            placeholder=" Favourite animal"
            className="white-placeholder"
          />
          </div>
          <button type="submit" className="submit-button">GENERATE MY GAMING NAME</button>
        </form>
        </div>
    </div>
      ) : (
        <Names
        nickname={inputValues.nickname || ""}
        adjective1={inputValues.adjective1 || ""}
        adjective2={inputValues.adjective2 || ""}
        adjective3={inputValues.adjective3 || ""}
        nationality={inputValues.nationality || ""}
        object1={inputValues.object1 || ""}
        object2={inputValues.object2 || ""}
        animal={inputValues.animal || ""}
      />
      )}
    </div>
  );
}
