import { useState } from "react";

const SingleFaq = ({ index, question }) => {
    const [questionVisible, setQuestionVisible] = useState(false);

    return (
        <div key={index} className="question">
            <h4>
                {question.ques}{" "}
                <button onClick={() => setQuestionVisible((prev) => !prev)}>
                    {questionVisible ? "-" : "+"}
                </button>{" "}
            </h4>
            {questionVisible && <p>{question.ans}</p>}
        </div>
    );
};

export default SingleFaq;
