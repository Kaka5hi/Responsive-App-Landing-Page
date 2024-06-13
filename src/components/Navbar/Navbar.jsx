import { useState, useEffect } from "react";
import "./Navbar.css";

const Navbar = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const [linksVisible, setLinksVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    if (width < 768) {
        return (
            <>
                <nav>
                    <div className="nav-logo">
                        <img src="./nav-logo.svg" alt="nav logo" />
                    </div>
                    <div
                        className="hamburger-menu"
                        onClick={() => setLinksVisible((prev) => !prev)}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
                {linksVisible && (
                    <div className="toggled-links">
                        <li>home</li>
                        <li>about us</li>
                        <li>pricing</li>
                        <li>features</li>
                        <li>download</li>
                    </div>
                )}
            </>
        );
    } else {
        return (
            <nav>
                <div className="nav-logo">
                    <img src="./nav-logo.svg" alt="nav logo" />
                </div>
                <ul className="nav-links">
                    <li>home</li>
                    <li>about us</li>
                    <li>pricing</li>
                    <li>features</li>
                </ul>
                <div className="nav-button">
                    <button>download</button>
                </div>
            </nav>
        );
    }
};

export default Navbar;
