import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="row">
        <label htmlFor="name">Jméno</label>
        <input
          type="text"
          name="name"
        />

        <label htmlFor="surname">Příjmení</label>
        <input
          type="text"
          name="surname"
        />
        <button
          className="waves-effect waves-light btn"
        >
          Odeslat
        </button>
      </div>
      <div className="row card">
        <div className="card-content">
          <div className="row">
            <div className="col s4">Jméno:</div>
            <div className="col s8"></div>
          </div>
          <div className="row">
            <div className="col s4">Příjmení:</div>
            <div className="col s8"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
