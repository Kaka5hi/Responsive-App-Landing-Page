import { useState } from "react";
import "./Faq.css";
import SingleFaq from "../SingleFaq/SingleFaq";

const Faq = () => {
    const questionList = [
        {
            ques: "the best financial accounting app ever!",
            ans: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
        },
        {
            ques: "the best financial accounting app ever!",
            ans: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
        },
        {
            ques: "the best financial accounting app ever!",
            ans: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
        },
        {
            ques: "the best financial accounting app ever!",
            ans: "“Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris.",
        },
    ];

    return (
        <div className="faq-section">
            <span>faq</span>
            <h2>
                frequently asked questions
                <img src="./star-11.svg" alt="star icon" />
            </h2>
            <div className="questions-container">
                {questionList.map((question, index) => {
                    return (
                        <SingleFaq
                            question={question}
                            key={index}
                            index={index}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Faq;
