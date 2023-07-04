import { 
    getQuestion, 
    getAllQuestions, 
    updateTestScore, 
    createResultQuestion, 
    getInCorrectQuestionSerivce, 
    getRandomQuestionService,
    getResultTestPreviewService
} from '../services/testService';

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
        wrong_answer_second: wrong_answer_second,
        wrong_answer_third: wrong_answer_third
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
    const { right_answer, explanation } = question;
    res.status(200).send({
        errorCode: 0,
        message: "OK",
        right_answer: right_answer,
        explanation: explanation
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

let handleUpdateTestScore = async (req, res) => {
    let data = req.body;
    let message = await updateTestScore(data);
    return res.status(200).json(message);
}

let handleCreateResultQuestion = async (req, res) => {
    let data = req.body;
    let message = await createResultQuestion(data);
    return res.status(200).json(message);
}

let handleGetIncorrectQuestion = async (req, res) => {
    let limit = parseInt(req.query.limit);
    if(!limit) limit = 5;
    try {
        let data = await getInCorrectQuestionSerivce(limit);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
        return res.status(200).json({ 
            errorCode: -1,
            message: 'Error from server...'
        })
    }
}

let handleGetRandomQuestion = async (req, res) => {
    let limit = parseInt(req.query.limit);
    if(!limit) limit = 5;
    try {
        let data = await getRandomQuestionService(limit);
        return res.status(200).json(data);
    } catch (e) {
        console.log(e);
        return res.status(200).json({ 
            errorCode: -1, 
            message: 'Error from server...'
        })
    }
}

let handleGetResultTestPreview = async (req, res) => {
    let user_id = req.query.user_id;
    if(!user_id) {
        return res.status(500).json({
            errorCode: 1,
            message: 'Missing required parameter'
        })
    }
    let data = await getResultTestPreviewService(user_id);
    return res.status(200).json(data);
}


module.exports = {
    handleGetRightAnswer: handleGetRightAnswer,
    handleQuestion: handleQuestion,
    handleAnswer: handleAnswer,
    handleGetAllQuestions: handleGetAllQuestions,
    handleUpdateTestScore: handleUpdateTestScore,
    handleCreateResultQuestion: handleCreateResultQuestion,
    handleGetIncorrectQuestion: handleGetIncorrectQuestion,
    handleGetRandomQuestion: handleGetRandomQuestion,
    handleGetResultTestPreview: handleGetResultTestPreview
}