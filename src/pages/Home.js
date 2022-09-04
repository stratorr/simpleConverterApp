import React from "react";
import Converter from "../Components/Converter/Converter";

const Home = ({ data }) => {
    return (
        <div className="home">
            <div>
                <Converter data={data} />
            </div>
        </div>
    );
};

export default Home;
