import React
  from "react";
import Header from "./header.js";

function App() {
  return (
    <div className="body">
      <Header />
      <button className="bg-success fs-5 m-4 px-4 py-2 text-light text-uppercase border-0 ">
        Add
      </button>
      <div className="row">
        <span className="col-4 mx-4 text-uppercase fs-5 fw-bold text-dark text-opacity-50"> Name </span><br />
        <span className="col-4 text-uppercase fs-5 fw-bold text-dark text-opacity-50"> Phone </span>
      </div>
    </div>
  );
}

export default App;
