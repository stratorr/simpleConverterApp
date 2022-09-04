import React from "react";
import Spinner from "../resources/spinner.gif";

const Preloader = () => {
    return <img src={Spinner} alt="preloader" className="preloader" />;
};

export default Preloader;
