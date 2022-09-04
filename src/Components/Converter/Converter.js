//NPM PACKAGE
import React, { useEffect, useState } from "react";

//UI
import SwapVertOutlinedIcon from "@mui/icons-material/SwapVertRounded";
import "./converter.scss";

const Converter = ({ data: { rates, lastupdate } }) => {
    const [amountFrom, setAmountFrom] = useState(0);
    const [amountTo, setAmountTo] = useState(1);
    const [optionFrom, setOptionFrom] = useState("UAH");
    const [optionTo, setOptionTo] = useState("USD");

    const ratesKey = Object.keys(rates);

    const option = ratesKey.map((currency, i) => {
        if (currency === "ALL") return;
        return (
            <option value={currency} key={i}>
                {currency}
            </option>
        );
    });

    useEffect(() => {
        onConvertTo();
    }, [amountTo, optionTo, onSwap]);

    useEffect(() => {
        onConvertFrom();
    }, [optionFrom]);

    const handleAmountTo = ({ target }) => {
        setAmountTo(target.value);
    };

    const handleOptionTo = ({ target }) => {
        setAmountFrom("");
        setOptionTo(target.value);
        onConvertTo();
    };

    const handleAmountFrom = ({ target }) => {
        setAmountFrom(target.value);
    };

    const handleOptionFrom = ({ target }) => {
        setOptionFrom(target.value);
        onConvertFrom();
    };

    const onConvertTo = () => {
        const convertToUSD = amountTo * rates["USD"];
        const convertResult = (convertToUSD * rates[optionFrom]) / rates[optionTo];
        setAmountFrom(convertResult.toFixed(2));
    };

    const onConvertFrom = () => {
        const convertToUSD = amountFrom * rates["USD"];
        const convertResult = (convertToUSD * rates[optionTo]) / rates[optionFrom];
        setAmountFrom(convertResult.toFixed(2));
    };

    function onSwap() {
        setOptionTo(optionFrom);
        setOptionFrom(optionTo);
        // setAmountTo(amountFrom);
        // setAmountFrom(amountTo);
    }

    const convertToOneCurrency = (
        (rates["USD"] * rates[optionFrom]) /
        rates[optionTo]
    ).toFixed(2);

    const lastUpdateDate = lastupdate.slice(0, 19);

    return (
        <div className="converter">
            <div className="title">
                1 {optionTo} равно {convertToOneCurrency} {optionFrom}
            </div>
            <div className="subtitle">Last update: {lastUpdateDate}</div>
            <div className="converter__content">
                <div className="converter__item">
                    <input
                        type="number"
                        onChange={handleAmountTo}
                        value={amountTo}
                        className="converter__input"
                        min={0}
                        maxLength={10}
                    />
                    <select
                        onChange={handleOptionTo}
                        value={optionTo}
                        className="converter__select">
                        {option}
                    </select>
                </div>
                <SwapVertOutlinedIcon onClick={onSwap} className="swap-icon" />
                <div className="converter__item">
                    <input
                        type="number"
                        onChange={handleAmountFrom}
                        value={amountFrom}
                        className="converter__input"
                        disabled
                    />
                    <select
                        onChange={handleOptionFrom}
                        value={optionFrom}
                        className="converter__select">
                        {option}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Converter;
