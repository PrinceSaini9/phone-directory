import React from "react";
import Header from "./header.js";
import { Link } from "react-router-dom";


function App(props) {

  const dltHandler = (subId) => {
    props.onDelete(subId);
  }

  return (
    <div className="body">
      <Header heading="phone directory" />
      <Link to="/add"><button className="bg-success fs-5 m-4 px-4 py-2 text-light text-uppercase border-0 ">
        Add
      </button></Link>
      <div className="row mb-4">
        <span className="col-4 mx-4 text-uppercase fs-5 fw-bold text-dark text-opacity-50"> Name </span><br />
        <span className="col-4 text-uppercase fs-5 fw-bold text-dark text-opacity-50"> Phone </span>
      </div>
      {
        props.sub.map(sub => {
          return <div className="row" key={sub.id}>
            <span className="col-4 mx-4  fs-5  text-dark"> {sub.name} </span><br />
            <span className="col-4  fs-5  text-dark "> {sub.phone} </span>
            <button onClick={() => dltHandler(sub.id)} className="col-1 px-1 mb-2  bg-danger bg-opacity-50 border-0">DELETE</button>
          </div>
        })
      }
    </div>
  );
}

export default App;
