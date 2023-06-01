import db from "../models/index";

let getAllWords = (course_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Content.findAll({
                where: { course_id: course_id },
            });

            resolve(data);

        } catch (e) {
            reject(e);
        }
    })
}

let getWordById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Content.findOne({
                where: { id: id }
            });
            resolve(data);
        } catch (e) {
            reject(e);
        }
    })
}

let getAllCourses = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let data = await db.Course.findAll();
            resolve(data);
        }
        catch (e) {
            reject(e);
        }
    })
}

let getVideoofWord = (content_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let res = {};
            let VideoOfWord = await db.Detail.findAll({
                where: { content_id: content_id }
            }
            );
            res.errorCode = 0;
            res.data = VideoOfWord;
            resolve(res);
        } catch (e) {
            reject(e);
        }
    })
}



module.exports = {
    getAllWords: getAllWords,
    getWordById: getWordById,
    getAllCourses: getAllCourses,
    getVideoofWord: getVideoofWord
}