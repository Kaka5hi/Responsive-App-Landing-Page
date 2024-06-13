import "./Footer.css";

const Footer = () => {
    const footerLinks = [
        {
            links: "home",
            subLinks: ["home", "about us", "booking", "blog"],
        },
        {
            links: "legal",
            subLinks: ["terms of use", "privacy policy", "cookies policy"],
        },
        {
            links: "product",
            subLinks: ["take tour", "live chat", "review"],
        },
    ];

    return (
        <div className="footer">
            <div className="footer-links">
                <div className="container">
                    <img src="./nav-logo.svg" alt="nav logo" />
                    <p>
                        <img src="./mail.svg" alt="mail icon" />
                        help@frybix.com
                    </p>
                    <p>
                        <img src="./phone.svg" alt="mail icon" />
                        +1 234 456 678 89
                    </p>
                </div>
                {footerLinks.map((item) => {
                    return (
                        <div className="container" key={item.links}>
                            <h2>{item.links}</h2>
                            {item.subLinks.map((link) => {
                                return <li key={link}>{link}</li>;
                            })}
                        </div>
                    );
                })}
                <div className="container">
                    <h2>newsletter</h2>
                    <li>stay up to date</li>
                    <form>
                        <input type="text" placeholder="your email" />
                        <button>subscribe</button>
                    </form>
                </div>
            </div>
            <div className="footer-copyright-container">
                <p>Copyright 2022 uifry.com all rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;
