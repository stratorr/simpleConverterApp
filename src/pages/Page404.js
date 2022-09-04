import React from "react";
import { Link } from "react-router-dom";

const Page404 = () => {
    return (
        <div className="page404" style={{ textAlign: "center" }}>
            <div className="big-title">THIS PAGE NOT FOUND...</div>
            <Link to="/" className="link">
                Return back to home page {"->"}
            </Link>
        </div>
    );
};

export default Page404;
