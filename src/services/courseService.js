import db from "../models/index";

let getAllWords = (course_id) =>{
    return new Promise(async (resolve, reject) => {
        try {
            if (!course_id) {
                resolve({
                    errorCode: 1,
                    message: 'Missing required parameters'
                })
            } else {
                let res = {};
                let allWords = await db.Content.findAll({
                    where: { course_id: course_id },
                });
                res.errorCode = 0;
                res.data = allWords;

                resolve(res);
            }

        } catch (e) {
            reject(e);
        }
    })
}

let getAllCourses = () => {
    return new Promise(async (resolve, reject) => {
        try {
                let res = {};
                let AllCourses = await db.Course.findAll();
                // console.log(AllCourses);
                res.errorCode = 0;
                res.data = AllCourses;
                resolve(res);
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
                where: {content_id : content_id}
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
    getAllCourses: getAllCourses,
    getVideoofWord: getVideoofWord
}