import React from "react";

const Header = (props) => {
    return (
        <div className="header bg-dark text-light text-center fs-3
         text-uppercase p-3 fw-bold">
            {props.heading}
        </div>
    )
}

export default Header;