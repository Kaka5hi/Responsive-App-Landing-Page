import "./Features.css";

const Features = () => {
    const featuresList = [
        {
            icon: "./star-05.svg",
            title: "budgeting intervals",
            desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
        },
        {
            icon: "./cube-02.svg",
            title: "budgeting intervals",
            desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
        },
        {
            icon: "./cube-04.svg",
            title: "budgeting intervals",
            desc: "Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.",
        },
    ];

    return (
        <div className="features-section">
            <div className="features-section-left">
                <img src="./features-mobile-image.svg" alt="features" />
            </div>
            <div className="features-section-right">
                <span className="heading">features</span>
                <h1>uifry premium</h1>
                <div className="features-container">
                    {featuresList?.map((item, index) => {
                        return (
                            <div key={index} className="single-feature">
                                <h3>
                                    <img src={item.icon} alt={item.title} />{" "}
                                    {item.title}
                                </h3>
                                <p>{item.desc}</p>
                            </div>
                        );
                    })}
                </div>
                <img src="./hero-heading-bg.svg" alt="gradient" />
            </div>
        </div>
    );
};

export default Features;
