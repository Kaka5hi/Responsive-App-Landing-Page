import "./Testimonial.css";

const Testimonial = () => {
    const userTestimonials = [
        {
            name: "jon doe",
            img: "./user-2.svg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed, pariatur veniam optio saepe illo nostrum? Aliquam ad aspernatur id expedita suscipit eius ab vero ea perferendis? Non, quae dolorum.",
        },
        {
            name: "greg house",
            img: "./user-3.svg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed, pariatur veniam optio saepe illo nostrum? Aliquam ad aspernatur id expedita suscipit eius ab vero ea perferendis? Non, quae dolorum.",
        },
        {
            name: "wilson",
            img: "./user-4.svg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed, pariatur veniam optio saepe illo nostrum? Aliquam ad aspernatur id expedita suscipit eius ab vero ea perferendis? Non, quae dolorum.",
        },
        {
            name: "chase",
            img: "./user-5.svg",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima sed, pariatur veniam optio saepe illo nostrum? Aliquam ad aspernatur id expedita suscipit eius ab vero ea perferendis? Non, quae dolorum.",
        },
    ];

    return (
        <div className="testimonial-section">
            <span>testimonial</span>
            <h3>what our users say about us?</h3>
            <div className="testimonial-inner-container">
                <div className="testimonial-image-container">
                    <img
                        src="./testimonial-image.svg"
                        alt="testimonial image"
                    />
                </div>
                <div className="testimonial-text-container">
                    <h3>the best financial accounting app ever!</h3>
                    <p>
                        “Arcu at dictum sapien, mollis. Vulputate sit id
                        accumsan, ultricies. In ultrices malesuada elit mauris
                        etiam odio. Duis tristique lacus, et blandit viverra
                        nisl velit. Sed mattis rhoncus, diam suspendisse sit
                        nunc, gravida eu. Lectus eget eget ac dolor neque lorem
                        sapien, suspendisse aliquam.”
                    </p>
                    <div className="user-image-container">
                        <img src="./user-1.svg" alt="user one" />
                        {userTestimonials.map((user) => {
                            return (
                                <img
                                    key={user.name}
                                    src={user.img}
                                    alt={user.name}
                                />
                            );
                        })}
                    </div>
                    <span>Nick jonas</span>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
