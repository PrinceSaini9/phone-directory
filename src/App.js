import React
  from "react";
import Header from "./header.js";

function App() {
  let subs=[
    {
      id:1,
      name:"Prince" ,
      num: 98769876
    },
    {
      id:2,
      name:"Shrishti Bhatt" ,
      num: 987098778
    }
  ];
  return (
    <div className="body">
      <Header />
      <button className="bg-success fs-5 m-4 px-4 py-2 text-light text-uppercase border-0 ">
        Add
      </button>
      <div className="row mb-4">
        <span className="col-4 mx-4 text-uppercase fs-5 fw-bold text-dark text-opacity-50"> Name </span><br />
        <span className="col-4 text-uppercase fs-5 fw-bold text-dark text-opacity-50"> Phone </span>
      </div>
      {
        subs.map(sub=>{
          return <div className="row" key={sub.id}>
          <span className="col-4 mx-4  fs-5  text-dark"> {sub.name} </span><br />
          <span className="col-4  fs-5  text-dark "> {sub.num} </span>
          <button className="col-1 px-1 mb-2  bg-danger bg-opacity-50 border-0">DELETE</button>
        </div>
        })
      }
    </div>
  );
}

export default App;
