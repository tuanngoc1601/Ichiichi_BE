import { Op } from "sequelize";
import db, { Sequelize } from "../models/index";

let getQuestion = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Test.findOne({
                where: { id: id }
            });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllQuestions = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Test.findAll({
                where: { course_id: id }
            });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}

let updateTestScore = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.user_id || !data.course_id || !data.score) {
                resolve({
                    errorCode: 1,
                    message: 'Missing required parameter'
                })
            }
            let test = await db.Passed_Course.findOne({
                where: {
                    user_id: data.user_id,
                    course_id: data.course_id
                }
            })
            if (test) {
                test.score = data.score;
                await test.save();

                resolve({
                    errorCode: 0,
                    message: 'Ok! Update test score successfully!'
                })
            } else {
                resolve({
                    errorCode: 2,
                    message: 'Course is not found!'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let checkResultQuestion = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let result = await db.Users_Tests.findOne({
                where: {
                    user_id: data.user_id,
                    test_id: data.test_id
                }
            })
            if (result) {
                resolve({
                    is_exists: true,
                    result: result
                });
            } else {
                resolve({
                    is_exists: false
                });
            }
        } catch (e) {
            reject(e);
        }
    })
}

let createResultQuestion = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            if (!data.user_id || !data.test_id || !data.is_correct || !data.answer) {
                resolve({
                    errorCode: 1,
                    message: 'Missing required parameter'
                })
            }
            let check = await checkResultQuestion(data);
            if (check.is_exists) {
                if ((check.result.is_correct && data.is_correct) || (!check.result.is_correct && !data.is_correct)) {
                    if (check.result.answer === data.answer) {
                        resolve({
                            errorCode: 0,
                            message: 'Result question existed!'
                        })
                    } else {
                        check.result.answer = data.answer;
                        await check.result.save();

                        resolve({
                            errorCode: 0,
                            message: 'Ok! Update answer successfully!'
                        })
                    }
                } else {
                    check.result.is_correct = data.is_correct;
                    await check.result.save();

                    resolve({
                        errorCode: 0,
                        message: 'Ok! Update result question successfully!'
                    })
                }
            } else {
                await db.Users_Tests.create({
                    user_id: data.user_id,
                    test_id: data.test_id,
                    is_correct: data.is_correct,
                    answer: data.answer
                })
                resolve({
                    errorCode: 0,
                    message: 'Ok'
                })
            }
        } catch (e) {
            reject(e);
        }
    })
}

let getInCorrectQuestionSerivce = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Users_Tests.findAll({
                limit: limit,
                where: {
                    user_id: 1,
                    is_correct: false
                },
                include: [
                    { model: db.Test, attributes: { exclude: ['id'] } }
                ],
                raw: true,
                nest: true
            })
            resolve({
                errorCode: 0,
                message: 'Ok',
                data: data
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getRandomQuestionService = (limit) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Test.findAll({
                order: Sequelize.literal('rand()'),
                limit: limit,
            })
            resolve({
                errorCode: 0,
                message: 'Ok',
                data: data
            })
        } catch (e) {
            reject(e);
        }
    })
}

let getResultTestPreviewService = (user_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Users_Tests.findAll({
                where: {
                    user_id: user_id
                },
                include: [{ 
                    model: db.Test, 
                    attributes: { exclude: ['id'] }, 
                    include: [{ 
                        model: db.Course, 
                        attributes: ['title']
                    }]
                }],
                raw: true,
                nest: true
            });
            resolve({
                errorCode: 0,
                message: 'Ok',
                data: data
            })
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    getQuestion: getQuestion,
    getAllQuestions: getAllQuestions,
    updateTestScore: updateTestScore,
    createResultQuestion: createResultQuestion,
    getInCorrectQuestionSerivce: getInCorrectQuestionSerivce,
    getRandomQuestionService: getRandomQuestionService,
    getResultTestPreviewService: getResultTestPreviewService
}