import "./Advantages.css";

const Advantages = () => {
    const advantageList = [
        {
            icon: "./notification.svg",
            title: "clever notification",
            desc: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
            image: "./advantages-mobile-image.svg",
        },

        {
            icon: "./customize.svg",
            title: "fully customizable",
            desc: "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
            image: "./customize-mobile-image.svg",
        },
    ];

    return (
        <>
            {advantageList.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="advantage-section"
                        style={
                            index === 1
                                ? {
                                      flexDirection: "row-reverse",
                                  }
                                : {}
                        }
                    >
                        <div className="advantage-section-left">
                            {index === 0 && <span>advantages</span>}
                            {index === 0 && <h1>why choose uifry?</h1>}
                            <div className="single-advantage-container">
                                <h3>
                                    <img
                                        src={item.icon}
                                        alt="notification icon"
                                    />
                                    {item.title}
                                </h3>
                                <p>{item.desc}</p>
                            </div>
                        </div>
                        <div className="advantage-section-right">
                            <img src={item.image} alt={item.title} />
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default Advantages;
