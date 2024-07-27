import { useState } from "react";
import { Link } from "react-router-dom";
import "./components.css";
import menuIcon from "../resources/Hamburger_icon.png";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="menu-icon" onClick={toggleMenu}>
                <img src={menuIcon} alt="Menu Icon" />
            </div>
            <div className={`menu ${isOpen ? "open" : "closed"}`}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                    <li>
                        <a
                            href="http://resume.coolingbird.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Menu;
