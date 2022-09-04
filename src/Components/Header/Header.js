//NPM PACKAGE
import { NavLink, Link } from "react-router-dom";

//UI
import "./header.scss";

//HEADER
const Header = () => {
    return (
        <div className="header">
            <h1>
                <Link to="/" className="title">
                    Converter
                </Link>
            </h1>
            <nav>
                <ul className="header__menu">
                    <li>
                        <NavLink
                            to="/"
                            className="header__link"
                            style={({ isActive }) => {
                                return {
                                    textDecoration: isActive ? "underline" : "",
                                };
                            }}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/exchange-rates"
                            className="header__link"
                            style={({ isActive }) => {
                                return {
                                    textDecoration: isActive ? "underline" : "",
                                };
                            }}>
                            Exchange Rates
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Header;
