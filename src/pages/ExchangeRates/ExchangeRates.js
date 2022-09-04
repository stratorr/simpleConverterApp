import "./ExchangeRates.scss";

const ExchangeRates = ({ data: { rates } }) => {
    const ratesUI = Object.entries(rates).map(([key, value]) => {
        if (key === "ALL") return;
        return (
            <div key={key} className="rates">
                <p className="rates__key">{key}</p>
                <p className="rates__value">{value.toFixed(4)}</p>
            </div>
        );
    });

    return <div className="exchangeRates">{ratesUI}</div>;
};

export default ExchangeRates;
