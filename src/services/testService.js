import { Op } from "sequelize";
import db from "../models/index";

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
                where: { course_id : id }
            });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    getQuestion: getQuestion,
    getAllQuestions: getAllQuestions
}