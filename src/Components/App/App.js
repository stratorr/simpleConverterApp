//NPM PACKAGE
import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//COMPONENTS
import ExchangeRates from "../../pages/ExchangeRates/ExchangeRates";
import Header from "../Header/Header";
import Home from "../../pages/Home";
import Page404 from "../../pages/Page404";

//UI
import "./App.scss";
import Preloader from "../../pages/Preloader";

//APP
const App = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const response = axios
            .get("https://cdn.cur.su/api/latest.json")
            .then((res) => res.data)
            .then((json) => setData(json));
    }, []);

    return (
        <div className="app">
            {data ? (
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home data={data} />} />
                        <Route
                            path="/exchange-rates"
                            element={<ExchangeRates data={data} />}
                        />
                        <Route path="*" element={<Page404 />} />
                    </Routes>
                </BrowserRouter>
            ) : (
                <Preloader />
            )}
        </div>
    );
};

export default App;
