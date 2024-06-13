import "./DownloadBanner.css";

const DownloadBanner = () => {
    return (
        <div className="download-banner-section">
            <div className="download-banner-content">
                <h1>ready to get started?</h1>
                <p>
                    Risus habitant leo egestas mauris diam eget morbi tempus
                    vulputate.
                </p>
                <button>
                    download app <img src="./apple-icon.svg" alt="icon" />
                </button>
            </div>
            <div className="download-banner-image">
                <img src="./download-mobile-image.svg" alt="image" />
            </div>
            <img src="./download-gradient.svg" alt="gradient" />
        </div>
    );
};

export default DownloadBanner;
