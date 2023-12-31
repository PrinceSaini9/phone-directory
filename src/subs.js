import React from "react";
import { Component } from "react";
import Header from "./header";
import { Link } from "react-router-dom";
import { TextValidator, ValidatorForm } from "react-material-ui-form-validator";

class Subs extends Component {

    constructor() {
        super();
        this.state = {
            id: 0,
            name: "",
            phone: ""
        }
    }

    inputHandler = (e) => {
        const state = this.state;
        state[e.target.id] = e.target.value;
        this.setState(state);
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addSubsHandler(this.state);
        this.setState({ id: 0, name: "", phone: "" });
        this.props.navigate("/");
    }
    render() {
        return (
            <>
                <Header heading="Add subscriber" />
                <Link to="/"><button className="bg-secondary bg-opacity-50 fs-5 m-4 px-4 py-2 text-dark text-uppercase border-0 ">
                    back
                </button></Link>
                <ValidatorForm onSubmit={this.handleSubmit} >
                    <TextValidator
                        id="name"
                        label="Enter Name"
                        type="text"
                        value={this.state.name}
                        validators={["required"]}
                        onChange={this.inputHandler}
                        errorMessages={["Name cannot be empty"]}
                        className="mx-4 mt-4 text-dark text-opacity-50"
                    ></TextValidator>
                    <TextValidator
                        id="phone"
                        label="Enter PhoneNumber"
                        type="text"
                        value={this.state.phone}
                        onChange={this.inputHandler}
                        validators={["required", "isNumber"]}
                        errorMessages={["PhoneNumber cannot be empty", "can only be number"]}
                        className="m-4 text-dark text-opacity-50"
                    ></TextValidator>
                    {/* <div className="row mt-4">
                        <label htmlFor="name" className="col-1 mx-4  fs-6  text-dark text-opacity-50"> Name: </label>
                        <input id="name" type="text" placeholder="Prince Saini" className="col-6 border-1 rounded-1 border-secondary" onChange={this.inputHandler}  ></input>
                    </div> */}
                    {/* <div className="row my-4">
                        <label htmlFor="phone" className="col-1 mx-4  fs-6  text-dark text-opacity-50"> Phone: </label>
                        <input id="phone" type="text" placeholder="9888888888" className="col-6 border-1 rounded-1 border-secondary" onChange={this.inputHandler}></input>
                    </div> */}
                    <span className="mx-4  fw-bold text-primary">Subscriber to be added:</span><br />
                    <span className="ms-4 text-dark text-opacity-50">Name: {this.state.name}</span><br />
                    <span className="ms-4 text-dark text-opacity-50">Phone:  {this.state.phone}</span><br />
                    <button type="submit" className="bg-success fs-5 m-4 px-4 py-2 text-light text-uppercase border-0 ">
                        Add
                    </button>
                </ValidatorForm>
            </>
        );
    }
}

export default Subs;