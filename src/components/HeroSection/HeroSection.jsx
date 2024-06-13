import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="hero-section-left">
                <div className="hero-section-left-content">
                    <h1>make the best financial decisions</h1>
                    <img src="./hero-heading-bg.svg" alt="background noise" />
                    <p>
                        Cum et convallis risus placerat aliquam, nunc.
                        Scelerisque aliquet faucibus tincidunt eu adipiscing
                        sociis arcu lorem porttitor.
                    </p>
                    <div className="cta-section">
                        <button>
                            get started{" "}
                            <img
                                src="./right-arrow-cta.svg"
                                alt="right arrow"
                            />
                        </button>
                        <button>
                            <img src="./watch-btn.svg" alt="watch button" />
                            watch video
                        </button>
                    </div>
                </div>
                <div className="hero-section-left-image">
                    <img
                        src="./hero-section-icon.svg"
                        alt="hero section icon"
                    />
                </div>
            </div>
            <div className="hero-section-right">
                <img src="./hero-section-mobile-image.svg" alt="mobile image" />
            </div>
            <img src="./hero-section-star.svg" alt="star icon" />
        </div>
    );
};

export default HeroSection;
