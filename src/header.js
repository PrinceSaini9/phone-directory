import React from "react";
import { useLocDetails } from "./customHook";

const Header = (props) => {
   const {city,region,country_name} = useLocDetails();
    return (
        <>
        <div className="header bg-dark text-light text-center fs-3
         text-uppercase p-3 fw-bold">
            {props.heading}
        </div>
        <h4>Welcome User, you are in {city}-{region},{country_name}</h4>
        </>
    )
}

export default Header;