import { getQuestion, getAllQuestions } from '../services/testService';

let handleQuestion = async (req, res) => {
    let testId = req.query.id;
    //console.log(id);
    if (!testId) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let question = await getQuestion(testId);
    // console.log(question);
    res.status(200).json({
        errorCode: 0,
        message: "OK",
        question: question
    })
};

let handleAnswer = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let question = await getQuestion(id);
    const { right_answer, wrong_answer_first, wrong_answer_second, wrong_answer_third } = question;
    res.status(200).send({
        errorCode: 0,
        message: "OK",
        right_answer: right_answer,
        wrong_answer_first: wrong_answer_first,
        wrong_answer_second:wrong_answer_second,
        wrong_answer_third:wrong_answer_third
    });
};


let handleGetRightAnswer = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let question = await getQuestion(id);
    const { right_answer } = question;
    res.status(200).send({
        errorCode: 0,
        message: "OK",
        right_answer: right_answer
    });
};

let handleGetAllQuestions = async (req, res) => {
    let id = req.query.id;
    if (!id) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let question = await getAllQuestions(id);
    res.status(200).send({
        errorCode: 0,
        message: "OK",
        question: question
    });
}

module.exports = {
    handleAnswer: handleGetRightAnswer,
    handleQuestion: handleQuestion,
    handleAnswer: handleAnswer,
    handleGetAllQuestions: handleGetAllQuestions
}